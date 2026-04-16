export interface PortableTextBlock {
  _type: "block";
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  children: {
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key: string;
    _type: "link";
    href: string;
  }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PostContent {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  mainImage?: string;
  author: string;
  publishedAt: string;
  category: string; // slug da categoria
  body: PortableTextBlock[];
  faq: FAQ[];
  readTime: string;
  tags: string[];
}

export interface CategoryContent {
  title: string;
  slug: string;
  description?: string;
}
