import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  businessConfig,
  services,
  differentials,
  neighborhoods,
  generateLocalBusinessSchema,
} from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Seu Carro com Problema? Resolva Hoje | ${businessConfig.name}`,
  description:
    "Serviços automotivos rápidos em Jundiaí. Troca de óleo, freios, suspensão, pneus, alinhamento e revisão completa. Atendimento imediato na Vila Arens, sem agendamento. Orçamento transparente na hora.",
  keywords: [
    "centro automotivo Jundiaí",
    "mecânica Jundiaí",
    "troca de óleo Jundiaí",
    "freios Jundiaí",
    "suspensão Jundiaí",
    "alinhamento Jundiaí",
    "pneus Jundiaí",
    "revisão automotiva Jundiaí",
    "mecânica Vila Arens",
    "oficina mecânica Jundiaí",
  ],
  alternates: { canonical: businessConfig.website + "/" },
  openGraph: {
    title: `Serviços Automotivos Rápidos em Jundiaí | ${businessConfig.name}`,
    description:
      "Troca de óleo, freios, suspensão, pneus e revisão em Jundiaí. Atendimento imediato, sem agendamento. Orçamento transparente.",
    url: businessConfig.website + "/",
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

// Imagens Unsplash por serviço — verificadas e coerentes com cada serviço
const serviceImages: Record<string, { src: string; alt: string }> = {
  "troca-de-oleo": {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    alt: "Troca de óleo em Jundiaí — mecânico realizando serviço no motor",
  },
  freios: {
    src: "https://images.unsplash.com/photo-1760317890314-e964ffd7e6a6?w=600&q=80",
    alt: "Serviço de freios em Jundiaí — pastilha e pinça de freio automotivo",
  },
  suspensao: {
    src: "https://images.unsplash.com/photo-1760836395763-25ea44ae8145?w=600&q=80",
    alt: "Suspensão automotiva em Jundiaí — amortecedor sendo substituído",
  },
  pneus: {
    src: "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?w=600&q=80",
    alt: "Troca de pneus em Jundiaí — mecânico realizando montagem de pneu",
  },
  "alinhamento-balanceamento": {
    src: "https://images.unsplash.com/photo-1691706268537-27b719ee00dd?w=600&q=80",
    alt: "Alinhamento e balanceamento em Jundiaí — roda de carro na oficina",
  },
  "revisao-automotiva": {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    alt: "Revisão automotiva em Jundiaí — mecânico inspecionando motor do carro",
  },
  bateria: {
    src: "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?w=600&q=80",
    alt: "Troca de bateria em Jundiaí — cabos e bateria automotiva",
  },
};

// Ícones SVG por serviço
const serviceIcons: Record<string, { svg: string; color: string; bg: string }> = {
  "troca-de-oleo": {
    color: "text-amber-600",
    bg: "bg-amber-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
  },
  freios: {
    color: "text-red-600",
    bg: "bg-red-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  suspensao: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  },
  pneus: {
    color: "text-gray-700",
    bg: "bg-gray-100",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>`,
  },
  "alinhamento-balanceamento": {
    color: "text-green-600",
    bg: "bg-green-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><polyline points="8 8 3 12 8 16"/><polyline points="16 8 21 12 16 16"/></svg>`,
  },
  "revisao-automotiva": {
    color: "text-purple-600",
    bg: "bg-purple-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
  bateria: {
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8l-2 4h12z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`,
  },
};

// Ícones para diferenciais
const differentialIcons: Record<string, string> = {
  Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  Users: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Building2: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
  Coffee: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  MapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

// Fotos da estrutura — grid de prova social (verificadas, tema oficina mecânica)
const estruturaFotos = [
  {
    src: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&q=80",
    alt: "Interior da oficina Centro Automotivo Jundiaí — ambiente amplo e organizado",
    caption: "Ambiente amplo e organizado",
  },
  {
    src: "https://images.unsplash.com/photo-1698998881125-b7b8f05a504b?w=800&q=80",
    alt: "Mecânico trabalhando em carro elevado — Centro Automotivo Jundiaí",
    caption: "Equipe especializada",
  },
  {
    src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    alt: "Ferramentas mecânicas profissionais — oficina em Jundiaí",
    caption: "Ferramentas de última geração",
  },
  {
    src: "https://images.unsplash.com/photo-1723099971299-3789db53604c?w=800&q=80",
    alt: "Carro em elevador na oficina mecânica — Centro Automotivo Jundiaí",
    caption: "Até 30 carros atendidos por dia",
  },
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
    alt: "Diagnóstico eletrônico automotivo em Jundiaí — mecânico inspecionando motor",
    caption: "Diagnóstico computadorizado",
  },
  {
    src: "https://images.unsplash.com/photo-1711386689622-1cda23e10217?w=800&q=80",
    alt: "Revisão de motor em carro — Centro Automotivo Jundiaí",
    caption: "Serviço rápido e sem enrolação",
  },
];

export default function HomePage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ───── HERO COM IMAGEM ───── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src="https://images.unsplash.com/photo-1723099971299-3789db53604c?w=1600&q=85"
          alt="Oficina mecânica profissional — Centro Automotivo Jundiaí"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay gradiente duplo para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

        {/* Faixa vermelha no topo */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 z-10" />

        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span>Atendimento imediato — Jundiaí, Vila Arens</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Seu carro com problema?{" "}
              <span className="text-red-500">Resolva hoje</span>, sem enrolação.
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Serviços rápidos, atendimento imediato e orçamento transparente em Jundiaí.
              Sem necessidade de agendamento. Venha agora ou chame no WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CTAButton size="lg" message="Olá! Vi o site e quero resolver meu problema hoje.">
                Falar agora e resolver hoje
              </CTAButton>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 text-white border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Ver serviços
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Sem agendamento", "Orçamento grátis", "30 carros/dia", "Vila Arens – Jundiaí"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 text-white/80 text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── NÚMEROS ───── */}
      <section className="py-12 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "10+", label: "Anos de experiência" },
              { value: "30", label: "Carros atendidos/dia" },
              { value: "7", label: "Serviços especializados" },
              { value: "100%", label: "Transparência garantida" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVIÇOS COM IMAGEM ───── */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Serviços completos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Automotivos em Jundiaí
            </h2>
            <p className="text-gray-500 text-lg">
              Do simples ao completo, temos a solução para o seu veículo. Atendimento rápido,
              peças de qualidade e preço justo em cada serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => {
              const icon = serviceIcons[service.id] || serviceIcons["revisao-automotiva"];
              const img = serviceImages[service.id];
              return (
                <Link
                  key={service.id}
                  href={`/${service.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Imagem do serviço */}
                  {img && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Badge de preço */}
                      <div className="absolute bottom-3 left-3 bg-gray-950/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                        {service.price}
                      </div>
                      {/* Overlay suave */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  )}

                  <div className="p-5 flex flex-col flex-1">
                    {/* Ícone + Título */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${icon.bg} ${icon.color}`}
                        dangerouslySetInnerHTML={{ __html: icon.svg }}
                      />
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                      {service.shortDescription || service.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-gray-400 text-xs">⏱ {service.duration}</span>
                      <span className="text-sm text-red-600 font-semibold flex items-center gap-1">
                        Ver detalhes
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/servicos/"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Ver Todos os Serviços
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── CTA EMERGÊNCIA ───── */}
      <section className="py-12 bg-gradient-to-r from-red-700 to-red-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🚨</div>
              <div>
                <h2 className="text-2xl font-black mb-2">Emergência? A gente resolve agora!</h2>
                <p className="text-white/85 text-lg">
                  Freio falhando, carro não ligando, barulho estranho? Não espere — chame agora.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <CTAButton
                variant="secondary"
                size="lg"
                message="URGENTE! Meu carro está com problema e preciso de atendimento agora."
                className="bg-white text-red-600 hover:bg-gray-100 font-bold shadow-xl"
              >
                Resolver emergência
              </CTAButton>
              <Link
                href="/mecanica-rapida-jundiai/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-red-600 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── NOSSA ESTRUTURA — PROVA VISUAL ───── */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Conheça nossa oficina
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Toda a estrutura pronta para te atender hoje
            </h2>
            <p className="text-gray-400 text-lg">
              Ambiente amplo, equipe especializada e equipamentos modernos para resolver o problema do
              seu carro com rapidez e qualidade em Jundiaí.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {estruturaFotos.map((foto, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""
                }`}
              >
                <div className={`relative w-full ${i === 0 ? "h-64 md:h-full min-h-[320px]" : "h-44 md:h-52"}`}>
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay com legenda */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{foto.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Destaques da estrutura */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: "🏗️", text: "Espaço amplo e organizado" },
              { icon: "🔧", text: "Ferramentas de última geração" },
              { icon: "🧑‍🔧", text: "Mecânicos certificados" },
              { icon: "☕", text: "Sala de espera com café e Wi-Fi" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-gray-300 text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton size="lg" message="Olá! Gostaria de visitar a oficina e fazer um orçamento.">
              Venha conhecer pessoalmente
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── POR QUE NÓS – DIFERENCIAIS ───── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Nossos diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que o {businessConfig.shortName}?
            </h2>
            <p className="text-gray-500 text-lg">
              Há mais de 10 anos, os moradores de Jundiaí confiam na nossa equipe para cuidar dos seus veículos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-5"
                  dangerouslySetInnerHTML={{
                    __html: differentialIcons[item.icon] || differentialIcons["Clock"],
                  }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── COMO FUNCIONA ───── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Simples e rápido
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona o atendimento
            </h2>
            <p className="text-gray-500 text-lg">Da chegada à entrega do veículo, sem burocracia.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Chegue sem agendamento", description: "Venha diretamente à Av. Fernando Arens, 457 – Vila Arens, Jundiaí.", emoji: "🚗" },
                { step: "02", title: "Diagnóstico gratuito", description: "Mecânicos avaliam seu veículo sem custo e explicam o diagnóstico de forma clara.", emoji: "🔍" },
                { step: "03", title: "Orçamento transparente", description: "Receba o orçamento completo antes de qualquer serviço. Sem surpresas.", emoji: "📋" },
                { step: "04", title: "Serviço e entrega", description: "Aprovado o orçamento, executamos com agilidade. Carro pronto, problema resolvido.", emoji: "✅" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-200 relative z-10">
                    <span className="text-white font-black text-lg">{item.step}</span>
                  </div>
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton size="lg" message="Olá! Gostaria de mais informações sobre os serviços.">
              Falar agora no WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ───── BAIRROS ATENDIDOS ───── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Cobertura ampla
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Atendemos toda Jundiaí e região
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Nossa localização estratégica na Vila Arens garante fácil acesso para motoristas de todos os bairros.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {neighborhoods.map((bairro, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-sm shadow-sm hover:border-red-200 hover:text-red-600 transition-colors"
                >
                  📍 {bairro}
                </span>
              ))}
              <span className="bg-red-600 text-white font-semibold px-4 py-2 rounded-full text-sm">
                + toda a região
              </span>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Venha nos visitar ou chame no WhatsApp
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    Av. Fernando Arens, 457 – Vila Arens, Jundiaí – SP
                  </p>
                  <p className="text-gray-400 text-sm">
                    Seg–Sex: {businessConfig.hours.weekdays} &nbsp;|&nbsp; Sáb: {businessConfig.hours.saturday}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CTAButton message="Olá! Gostaria de um orçamento para o meu veículo.">
                    Solicitar Orçamento
                  </CTAButton>
                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    📍 Como Chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TEXTO SEO ───── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Centro Automotivo em Jundiaí: qualidade, rapidez e transparência
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              O <strong>Centro Automotivo Jundiaí</strong> é uma das oficinas mecânicas mais completas e confiáveis
              da cidade, localizada na <strong>Av. Fernando Arens, 457, Vila Arens, Jundiaí – SP</strong>.
              Fundada em {businessConfig.foundedYear}, nossa missão é oferecer serviços automotivos de alta
              qualidade com atendimento imediato, preço justo e total transparência — sem agendamento e sem
              surpresas na hora de pagar.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Com capacidade para atender <strong>até 30 veículos por dia</strong>, contamos com uma equipe de
              mecânicos especializados, equipamentos modernos e uma estrutura pensada para oferecer comodidade ao
              cliente enquanto o carro é atendido: sala de espera climatizada, Wi-Fi gratuito e café cortesia.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Serviços automotivos completos em Jundiaí
            </h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li><strong>Troca de óleo em Jundiaí:</strong> serviço rápido com óleos mineral, semissintético e 100% sintético. Feito em cerca de 30 minutos, com descarte ecológico correto.</li>
              <li><strong>Freios em Jundiaí:</strong> troca de pastilhas, retífica ou substituição de discos, fluido de freio e regulagem completa do sistema. Segurança em primeiro lugar.</li>
              <li><strong>Suspensão em Jundiaí:</strong> amortecedores, molas, buchas e pivôs. Seu carro voltará a ter o conforto e a estabilidade que merece.</li>
              <li><strong>Alinhamento e balanceamento em Jundiaí:</strong> alinhamento computadorizado 3D e balanceamento dinâmico para uma direção precisa e maior durabilidade dos pneus.</li>
              <li><strong>Pneus em Jundiaí:</strong> venda, montagem, balanceamento e reparo das principais marcas com o melhor preço da região.</li>
              <li><strong>Revisão automotiva em Jundiaí:</strong> check-up completo de 50 itens com relatório detalhado. Ideal para manutenção preventiva.</li>
              <li><strong>Bateria em Jundiaí:</strong> teste de carga gratuito, venda e instalação de baterias novas com garantia de fábrica.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Atendimento de mecânica rápida e urgente em Jundiaí
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Entendemos que problemas no carro não avisam com antecedência. Por isso, oferecemos
              <strong> atendimento imediato</strong> sem necessidade de agendamento. Se seu carro está
              com o freio falhando, a bateria fraca, a luz de aviso acesa ou qualquer outro problema,
              você pode vir diretamente à nossa oficina ou nos chamar pelo WhatsApp.{" "}
              <Link href="/mecanica-rapida-jundiai/" className="text-red-600 hover:underline font-medium">
                Saiba mais sobre nosso atendimento de emergência →
              </Link>
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Transparência que gera confiança
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Um dos principais diferenciais do {businessConfig.name} é o <strong>orçamento transparente</strong>.
              Antes de qualquer serviço ser iniciado, você recebe um orçamento detalhado com o valor de cada peça e
              de cada procedimento. Não aprovando, nenhum custo é cobrado.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Localização estratégica em Vila Arens, Jundiaí
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nossa oficina está localizada na <strong>Avenida Fernando Arens, 457, Vila Arens</strong> —
              de fácil acesso para moradores de {neighborhoods.slice(0, 5).join(", ")} e demais bairros.
              Funcionamos de <strong>segunda a sexta das {businessConfig.hours.weekdays}</strong> e
              aos <strong>sábados das {businessConfig.hours.saturday}</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Quer resolver o problema do seu carro hoje mesmo? Entre em contato pelo WhatsApp,
              ligue para <strong>{businessConfig.phoneFormatted}</strong> ou venha diretamente à nossa oficina.
            </p>
          </div>
        </div>
      </section>

      {/* ───── LINKS INTERNOS ───── */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Saiba mais sobre nossos serviços
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/${s.slug}/`}
                  className="bg-white border border-gray-200 hover:border-red-400 hover:bg-red-50 text-gray-700 hover:text-red-700 text-sm font-medium px-4 py-3 rounded-xl transition-colors text-center"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="/mecanica-rapida-jundiai/"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors text-center"
              >
                Mecânica de Emergência
              </Link>
              <Link
                href="/quem-somos/"
                className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-3 rounded-xl transition-colors text-center"
              >
                Quem Somos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA FINAL ───── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-gray-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="text-5xl mb-6">🔧</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pronto para resolver o problema do seu carro?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Atendimento imediato, orçamento transparente e serviço de qualidade em Jundiaí.
            Venha sem agendamento ou chame agora no WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="secondary"
              size="lg"
              message="Olá! Vi o site e gostaria de fazer um orçamento."
            >
              Solicitar Orçamento Grátis
            </CTAButton>
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 text-white border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {businessConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
