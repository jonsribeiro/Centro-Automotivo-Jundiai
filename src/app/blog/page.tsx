import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  blogPosts,
  blogCategories,
  type BlogCategory,
} from "@/lib/blog";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Blog | Dicas e Informações Automotivas | ${businessConfig.name}`,
  description:
    "Dicas de manutenção, problemas comuns, custos e soluções para seu carro em Jundiaí. Conteúdo especializado do Centro Automotivo Jundiaí.",
  keywords: [
    "blog automotivo Jundiaí",
    "dicas carro Jundiaí",
    "manutenção automotiva",
    "problemas carro",
    "oficina mecânica blog",
  ],
  alternates: {
    canonical: `${businessConfig.website}/blog/`,
  },
  openGraph: {
    title: `Blog Automotivo | ${businessConfig.name}`,
    description:
      "Dicas, problemas comuns, custos e soluções para seu veículo em Jundiaí.",
    url: `${businessConfig.website}/blog/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function BlogPage() {
  // Ordenar posts por data (mais recentes primeiro)
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Posts em destaque (os 3 mais recentes)
  const featuredPosts = sortedPosts.slice(0, 3);

  // Posts restantes
  const remainingPosts = sortedPosts.slice(3);

  return (
    <>
      {/* Hero do Blog */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Conteúdo especializado
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Blog Automotivo
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dicas práticas, soluções para problemas comuns e informações sobre manutenção 
              do seu veículo em Jundiaí. Conteúdo criado pelos especialistas do 
              {businessConfig.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog/"
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Todos
            </Link>
            {Object.entries(blogCategories).map(([key, category]) => (
              <Link
                key={key}
                href={`/blog/categoria/${key}/`}
                className={`${category.color} px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts em Destaque */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Artigos em Destaque
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "h-64 md:h-80" : "h-48"
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${
                          blogCategories[post.category].color
                        } px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {post.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime} de leitura</span>
                    </div>

                    <h3
                      className={`font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors ${
                        index === 0 ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-red-600 font-semibold text-sm">
                      Ler artigo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lista de Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Todos os Artigos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${
                        blogCategories[post.category].color
                      } px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {post.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Precisa de ajuda com seu carro?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Nossos especialistas estão prontos para atender você em Jundiaí. 
            Atendimento imediato, sem agendamento.
          </p>
          <CTAButton
            variant="secondary"
            size="lg"
            message="Olá! Vi o blog e gostaria de tirar uma dúvida sobre meu carro."
          >
            Falar com um Especialista
          </CTAButton>
        </div>
      </section>
    </>
  );
}
