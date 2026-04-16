import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client, postQuery } from "@/lib/sanity";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPost(slug: string) {
  return client.fetch(postQuery, { slug });
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog | ${businessConfig.name}`,
    description: post.excerpt,
    keywords: [...(post.tags || []), "Jundiaí", "mecânica", "oficina"],
    alternates: {
      canonical: `${businessConfig.website}/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${businessConfig.website}/blog/${slug}/`,
      siteName: businessConfig.name,
      locale: "pt_BR",
      type: "article",
      publishedTime: post.publishedAt,
      images: post.image
        ? [
            {
              url: post.image,
              width: 800,
              height: 600,
              alt: post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-red-600 transition-colors">
                Início
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/blog/"
                className="hover:text-red-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 truncate max-w-[200px] md:max-w-md">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Header do Artigo */}
      <header className="bg-white pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <>
                <Link
                  href={`/blog/categoria/${post.category.slug.current}/`}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  {post.category.title}
                </Link>
                <span className="text-gray-400">•</span>
              </>
            )}
            <span className="text-gray-500 text-sm">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "Data não disponível"}
            </span>
            {post.readTime && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm">{post.readTime} de leitura</span>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      {/* Imagem Destaque */}
      {post.image && (
        <section className="bg-white pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo do Artigo */}
      <article className="bg-white pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Renderização do conteúdo Rich Text */}
          {post.content && <PortableTextRenderer value={post.content} />}

          {/* CTA no meio do artigo */}
          <div className="my-12 bg-red-50 border border-red-100 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔧</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Precisa de ajuda com isso?
                </h3>
                <p className="text-gray-600 mb-4">
                  Nossos mecânicos em Jundiaí estão prontos para resolver o problema do seu carro. 
                  Atendimento imediato, sem agendamento.
                </p>
                <CTAButton
                  message={
                    post.ctaMessage ||
                    "Olá! Vi o blog e gostaria de tirar uma dúvida."
                  }
                >
                  Falar agora e resolver hoje
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
              <span className="text-gray-500 text-sm">Tags:</span>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {post.faq.map(
                (
                  item: { question: string; answer: string },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-100"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Fale diretamente com nossos especialistas em Jundiaí. 
            Estamos prontos para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="secondary"
              size="lg"
              message={
                post.ctaMessage ||
                "Olá! Vi o blog e gostaria de tirar uma dúvida."
              }
            >
              Falar no WhatsApp
            </CTAButton>
            <Link
              href="/blog/"
              className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Ver mais artigos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
