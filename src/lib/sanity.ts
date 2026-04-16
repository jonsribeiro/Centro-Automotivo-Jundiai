import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Queries GROQ para o blog
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
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
