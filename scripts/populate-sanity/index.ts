import { client, validateConnection } from "./client";
import { posts, categories } from "./posts-data";
import { PostContent, CategoryContent } from "./types";

// Criar categoria se não existir
async function createCategoryIfNotExists(category: CategoryContent) {
  try {
    // Verificar se já existe
    const existing = await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]`,
      { slug: category.slug }
    );

    if (existing) {
      console.log(`✅ Categoria "${category.title}" já existe`);
      return existing._id;
    }

    // Criar nova categoria
    const doc = {
      _type: "category",
      title: category.title,
      slug: {
        _type: "slug",
        current: category.slug,
      },
      description: category.description || "",
    };

    const result = await client.create(doc);
    console.log(`✅ Categoria "${category.title}" criada: ${result._id}`);
    return result._id;
  } catch (error) {
    console.error(`❌ Erro ao criar categoria "${category.title}":`, error);
    throw error;
  }
}

// Criar post
async function createPost(post: PostContent, categoryId: string) {
  try {
    // Verificar se já existe
    const existing = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug: post.slug }
    );

    if (existing) {
      console.log(`⚠️ Post "${post.title}" já existe. Pulando...`);
      return existing._id;
    }

    // Criar novo post
    const doc = {
      _type: "post",
      title: post.title,
      slug: {
        _type: "slug",
        current: post.slug,
      },
      excerpt: post.excerpt,
      content: post.body,
      category: {
        _type: "reference",
        _ref: categoryId,
      },
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      image: post.mainImage || null,
      tags: post.tags || [],
      faq: post.faq.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
      ctaMessage: post.excerpt || "Olá! Gostaria de mais informações.",
    };

    const result = await client.create(doc);
    console.log(`✅ Post "${post.title}" criado: ${result._id}`);
    return result._id;
  } catch (error) {
    console.error(`❌ Erro ao criar post "${post.title}":`, error);
    throw error;
  }
}

// Função principal
async function main() {
  console.log("🚀 Iniciando população do Sanity...\n");

  // Validar conexão
  validateConnection();
  console.log("");

  try {
    // Criar categorias
    console.log("📁 Criando categorias...");
    const categoryMap = new Map<string, string>();

    for (const category of categories) {
      const id = await createCategoryIfNotExists(category);
      categoryMap.set(category.slug, id);
    }

    console.log(`✅ ${categories.length} categorias processadas\n`);

    // Criar posts
    console.log("📝 Criando posts...");
    let createdCount = 0;
    let skippedCount = 0;

    for (const post of posts) {
      const categoryId = categoryMap.get(post.category);

      if (!categoryId) {
        console.error(
          `❌ Categoria "${post.category}" não encontrada para o post "${post.title}"`
        );
        continue;
      }

      const existing = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug: post.slug }
      );

      if (existing) {
        console.log(`⚠️ Post "${post.title}" já existe. Pulando...`);
        skippedCount++;
        continue;
      }

      await createPost(post, categoryId);
      createdCount++;
    }

    console.log(`\n✅ Resumo:`);
    console.log(`   Posts criados: ${createdCount}`);
    console.log(`   Posts pulados (já existiam): ${skippedCount}`);
    console.log(`   Total: ${posts.length}`);
    console.log("\n🎉 População concluída com sucesso!");
  } catch (error) {
    console.error("\n❌ Erro durante a população:", error);
    process.exit(1);
  }
}

// Executar
main();
