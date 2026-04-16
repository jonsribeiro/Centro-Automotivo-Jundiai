import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "d287d4gd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Queries GROQ para o blog
// Apenas posts publicados (não drafts), ordenados por data decrescente
export const postsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "category": category->{
    title,
    slug
  },
  publishedAt,
  readTime,
  image,
  tags,
  ctaMessage
}`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  "category": category->{
    title,
    slug
  },
  publishedAt,
  readTime,
  image,
  tags,
  faq,
  ctaMessage
}`;

export const postsByCategoryQuery = `*[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "category": category->{
    title,
    slug
  },
  publishedAt,
  readTime,
  image,
  tags
}`;

export const categoriesQuery = `*[_type == "category"] {
  _id,
  title,
  slug,
  description
}`;
