import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPostsByCategory,
  blogCategories,
  type BlogCategory,
} from "@/lib/blog";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const validCategories: BlogCategory[] = [
  "problemas-comuns",
  "manutencao",
  "custos",
  "dicas-rapidas",
];

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!validCategories.includes(category as BlogCategory)) {
    return {
      title: "Categoria não encontrada",
    };
  }

  const categoryData = blogCategories[category as BlogCategory];

  return {
    title: `${categoryData.label} | Blog | ${businessConfig.name}`,
    description: categoryData.description,
    keywords: [
      categoryData.label,
      "blog automotivo",
      "Jundiaí",
      "mecânica",
      "carro",
    ],
    alternates: {
      canonical: `${businessConfig.website}/blog/categoria/${category}/`,
    },
    openGraph: {
      title: `${categoryData.label} | Blog | ${businessConfig.name}`,
      description: categoryData.description,
      url: `${businessConfig.website}/blog/categoria/${category}/`,
      siteName: businessConfig.name,
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!validCategories.includes(category as BlogCategory)) {
    notFound();
  }

  const categoryData = blogCategories[category as BlogCategory];
  const posts = getPostsByCategory(category as BlogCategory);

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
            <li className="text-gray-900">{categoryData.label}</li>
          </ol>
        </div>
      </nav>

      {/* Header da Categoria */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <span
            className={`inline-block ${categoryData.color} px-4 py-1.5 rounded-full text-sm font-semibold mb-4`}
          >
            {categoryData.label}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            {categoryData.label}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog/"
              className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Todos
            </Link>
            {Object.entries(blogCategories).map(([key, cat]) => (
              <Link
                key={key}
                href={`/blog/categoria/${key}/`}
                className={`${
                  key === category
                    ? cat.color + " ring-2 ring-offset-2 ring-gray-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } px-5 py-2.5 rounded-full text-sm font-medium transition-all`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Nenhum artigo ainda
              </h2>
              <p className="text-gray-500">
                Em breve teremos conteúdo sobre {categoryData.label.toLowerCase()}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
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

                    <h2 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 text-sm line-clamp-2 flex-1">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Precisa de ajuda com seu carro?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Nossos especialistas em Jundiaí estão prontos para atender você. 
            Atendimento imediato, sem agendamento.
          </p>
          <CTAButton
            variant="secondary"
            size="lg"
            message="Olá! Vi o blog e gostaria de tirar uma dúvida."
          >
            Falar com um Especialista
          </CTAButton>
        </div>
      </section>
    </>
  );
}
