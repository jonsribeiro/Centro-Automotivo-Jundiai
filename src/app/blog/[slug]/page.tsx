import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  blogCategories,
  generateBlogPostSchema,
  generateBlogFAQSchema,
} from "@/lib/blog";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog | ${businessConfig.name}`,
    description: post.excerpt,
    keywords: [...post.tags, "Jundiaí", "mecânica", "oficina"],
    alternates: {
      canonical: `${businessConfig.website}/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${businessConfig.website}/blog/${post.slug}/`,
      siteName: businessConfig.name,
      locale: "pt_BR",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.relatedPosts);
  const postSchema = generateBlogPostSchema(post);
  const faqSchema = generateBlogFAQSchema(post.faq);

  // Buscar serviços relacionados
  const relatedServicesData = services.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <Link
              href={`/blog/categoria/${post.category}/`}
              className={`${blogCategories[post.category].color} px-3 py-1 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity`}
            >
              {post.categoryLabel}
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{post.readTime} de leitura</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      {/* Imagem Destaque */}
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

      {/* Conteúdo do Artigo */}
      <article className="bg-white pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
                <CTAButton message={post.ctaMessage}>
                  Falar agora e resolver hoje
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
            <span className="text-gray-500 text-sm">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {post.faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Relacionados */}
      {relatedServicesData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Serviços Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedServicesData.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/`}
                  className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {service.shortDescription}
                  </p>
                  <span className="text-red-600 text-sm font-semibold">
                    Saiba mais →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Continue Lendo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}/`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <span
                      className={`${
                        blogCategories[relatedPost.category].color
                      } px-2 py-0.5 rounded-full text-xs font-semibold`}
                    >
                      {relatedPost.categoryLabel}
                    </span>

                    <h3 className="font-bold text-gray-900 mt-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
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
              message={post.ctaMessage}
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
