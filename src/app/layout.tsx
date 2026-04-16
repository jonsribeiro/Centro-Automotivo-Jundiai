import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { businessConfig, generateLocalBusinessSchema } from "@/lib/config";

export const metadata: Metadata = {
  title: `${businessConfig.name} | Serviços Automotivos em Jundiaí`,
  description: businessConfig.description,
  keywords: [
    "mecânica Jundiaí",
    "oficina Jundiaí",
    "troca de óleo Jundiaí",
    "freios Jundiaí",
    "centro automotivo",
    "mecânica rápida",
    "Vila Arens",
    "Anhangabaú",
  ],
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  metadataBase: new URL(businessConfig.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${businessConfig.name} | Serviços Automotivos em Jundiaí`,
    description: businessConfig.description,
    url: businessConfig.website,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
