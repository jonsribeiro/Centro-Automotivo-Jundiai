export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Data de Publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "readTime",
      title: "Tempo de Leitura",
      type: "string",
      description: "Ex: 5 min",
    },
    {
      name: "image",
      title: "Imagem de Capa",
      type: "url",
      description: "URL da imagem (Unsplash ou similar)",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Pergunta", type: "string" },
            { name: "answer", title: "Resposta", type: "text", rows: 3 },
          ],
        },
      ],
    },
    {
      name: "ctaMessage",
      title: "Mensagem do CTA",
      type: "string",
      description: "Mensagem pré-definida para WhatsApp",
    },
  ],

  preview: {
    select: {
      title: "title",
      category: "category.title",
      publishedAt: "publishedAt",
    },
    prepare({ title, category, publishedAt }: any) {
      return {
        title,
        subtitle: `${category || "Sem categoria"} • ${publishedAt ? new Date(publishedAt).toLocaleDateString("pt-BR") : "Sem data"}`,
      };
    },
  },
};
