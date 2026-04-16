import { client } from "./client";

// Mapeamento de slugs para imagens
const postImages: Record<string, string> = {
  "troca-de-oleo-jundiai":
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
  "sinais-desgaste-freios":
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
  "suspensao-barulhenta-causas":
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80",
  "alinhamento-balanceamento-quando-fazer":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "revisao-preventiva-evitar-gastos":
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
};

async function updatePostImages() {
  console.log("🔄 Atualizando imagens dos posts...\n");

  for (const [slug, imageUrl] of Object.entries(postImages)) {
    try {
      // Buscar post pelo slug
      const post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug }
      );

      if (!post) {
        console.log(`⚠️ Post "${slug}" não encontrado`);
        continue;
      }

      // Atualizar imagem
      await client
        .patch(post._id)
        .set({ image: imageUrl })
        .commit();

      console.log(`✅ Imagem atualizada: ${slug}`);
    } catch (error) {
      console.error(`❌ Erro ao atualizar "${slug}":`, error);
    }
  }

  console.log("\n🎉 Atualização concluída!");
}

updatePostImages();
