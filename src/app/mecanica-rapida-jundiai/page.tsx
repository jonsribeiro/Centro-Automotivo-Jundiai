import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Mecânica Rápida em Jundiaí | Atendimento Imediato | ${businessConfig.name}`,
  description:
    "Carro com problema agora? Mecânica rápida em Jundiaí com atendimento imediato, sem agendamento. Freios, suspensão, óleo, bateria e muito mais. Ligue agora!",
  keywords: [
    "mecânica rápida Jundiaí",
    "mecânica urgente Jundiaí",
    "socorro mecânico Jundiaí",
    "carro com problema Jundiaí",
    "mecânico urgente Jundiaí",
    "atendimento imediato mecânica",
    "mecânica Vila Arens",
    "emergência automotiva Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/mecanica-rapida-jundiai/`,
  },
  openGraph: {
    title: `Mecânica Rápida em Jundiaí | Atendimento Imediato | ${businessConfig.name}`,
    description:
      "Carro com problema agora? Atendimento imediato em Jundiaí. Sem agendamento, sem enrolação. Ligue ou mande mensagem e resolva hoje.",
    url: `${businessConfig.website}/mecanica-rapida-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const urgentProblems = [
  {
    icon: "🔴",
    title: "Freio falhando ou barulhando",
    description: "Não arrisque! Freio com problema é perigo imediato. Venha agora e saia com o carro seguro.",
  },
  {
    icon: "🔋",
    title: "Carro não liga / bateria fraca",
    description: "Bateria descarregada ou com defeito? Testamos e trocamos em 15 minutos.",
  },
  {
    icon: "💧",
    title: "Motor superaquecendo",
    description: "Temperatura subindo no painel? Pare imediatamente e nos chame antes de forçar o motor.",
  },
  {
    icon: "🔊",
    title: "Barulho estranho ao rodar",
    description: "Rangido, estalo ou vibração podem indicar problemas sérios de suspensão ou rodas.",
  },
  {
    icon: "🚨",
    title: "Luz de aviso no painel acesa",
    description: "Qualquer luz de alerta merece atenção. Diagnóstico rápido e sem custo para identificar o problema.",
  },
  {
    icon: "🛞",
    title: "Pneu furado ou dano em roda",
    description: "Montagem e reparo de pneus com rapidez. Saia rodando no mesmo dia.",
  },
  {
    icon: "🔧",
    title: "Suspensão dura ou quebrando",
    description: "Carro batendo muito ou difícil de controlar? Amortecedor ou bucha com problema – resolvemos hoje.",
  },
  {
    icon: "⛽",
    title: "Consumo de combustível alto",
    description: "Revisão rápida identifica vazamentos, filtros entupidos e outros problemas que aumentam o consumo.",
  },
];

const quickServices = [
  { label: "Troca de Óleo", time: "30 min", href: "/troca-de-oleo-jundiai/" },
  { label: "Bateria", time: "15 min", href: "/bateria-jundiai/" },
  { label: "Freios", time: "1-2h", href: "/freios-jundiai/" },
  { label: "Pneus", time: "30 min", href: "/pneus-jundiai/" },
  { label: "Alinhamento e Balanceamento", time: "1h", href: "/alinhamento-balanceamento-jundiai/" },
  { label: "Suspensão", time: "2-3h", href: "/suspensao-jundiai/" },
  { label: "Revisão Completa", time: "2-4h", href: "/revisao-automotiva-jundiai/" },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mecânica Rápida em Jundiaí",
  description:
    "Atendimento automotivo imediato em Jundiaí. Sem agendamento, sem enrolação. Freios, bateria, suspensão, pneus e muito mais.",
  provider: {
    "@type": "AutoRepair",
    name: businessConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zipCode,
    },
    telephone: businessConfig.phoneFormatted,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  },
  areaServed: { "@type": "City", name: "Jundiaí" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Precisam de agendamento para atendimento de emergência?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não! Atendemos por ordem de chegada, sem necessidade de agendamento prévio. Você pode vir diretamente à nossa oficina ou ligar antes para verificar a fila.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o horário de atendimento da mecânica rápida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos de segunda a sexta das 08:00 às 18:00 e sábados das 08:00 às 13:00, na Av. Fernando Arens, 457 – Vila Arens, Jundiaí.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o tempo médio para resolver um problema simples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Serviços como troca de bateria levam cerca de 15 minutos. Troca de óleo em torno de 30 minutos. Freios entre 1 e 2 horas. Trabalhamos com agilidade sem abrir mão da qualidade.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês dão orçamento antes de fazer o serviço?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sempre! Nenhum serviço é iniciado sem aprovação do cliente. O orçamento é gratuito, transparente e sem compromisso.",
      },
    },
  ],
};

export default function MecanicaRapidaJundiaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* HERO – URGÊNCIA */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-orange-500 overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white">Mecânica Rápida Jundiaí</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <span>🚨</span>
              <span>ATENDIMENTO IMEDIATO – SEM AGENDAMENTO</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Carro com problema <span className="underline decoration-yellow-400">agora?</span>{" "}
              A gente resolve hoje.
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Mecânica rápida em Jundiaí com atendimento imediato, orçamento transparente e serviço feito na hora.
              Não fique parado — chame agora pelo WhatsApp ou venha direto à nossa oficina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton
                size="lg"
                message="URGENTE! Meu carro está com problema e preciso de atendimento imediato."
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 shadow-xl"
              >
                Chamar Mecânico Agora
              </CTAButton>
              <a
                href={`tel:${businessConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border-2 border-white/40"
              >
                📞 {businessConfig.phoneFormatted}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">✅ Sem agendamento</span>
              <span className="flex items-center gap-2">✅ Orçamento grátis</span>
              <span className="flex items-center gap-2">✅ Preço justo na hora</span>
              <span className="flex items-center gap-2">✅ Seg–Sex 08h–18h | Sáb 08h–13h</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problemas que resolvemos rapidamente
            </h2>
            <p className="text-gray-600 text-lg">
              Não importa o tipo de problema — nossa equipe está pronta para diagnosticar e resolver no menor tempo possível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgentProblems.map((problem, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECUNDÁRIO */}
      <section className="py-12 bg-red-50 border-y border-red-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                O problema do seu carro não pode esperar?
              </h2>
              <p className="text-gray-600">
                Mande uma mensagem agora e já nos conte o que está acontecendo.
              </p>
            </div>
            <CTAButton
              size="lg"
              message="Olá! Meu carro está com problema e preciso de atendimento urgente. Podem me ajudar?"
              className="shrink-0"
            >
              Resolver Agora pelo WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* SERVIÇOS RÁPIDOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serviços com tempo estimado
            </h2>
            <p className="text-gray-600">
              Sabemos que seu tempo é precioso. Por isso trabalhamos com agilidade e qualidade em cada serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickServices.map((s, index) => (
              <Link
                key={index}
                href={s.href}
                className="flex items-center justify-between bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl px-5 py-4 transition-all group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-red-700">{s.label}</span>
                <span className="text-sm font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">{s.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como funciona o atendimento de emergência
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Nos contate",
                description: "Mande mensagem no WhatsApp ou ligue diretamente. Descreva o problema do seu carro.",
              },
              {
                step: "02",
                title: "Venha ou nos chame",
                description: "Traga o carro até nossa oficina na Av. Fernando Arens, 457 – Vila Arens, Jundiaí.",
              },
              {
                step: "03",
                title: "Diagnóstico rápido",
                description: "Nossa equipe identifica o problema e apresenta orçamento transparente na hora.",
              },
              {
                step: "04",
                title: "Serviço e entrega",
                description: "Aprovado o orçamento, executamos com agilidade e você sai com o carro resolvido.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Por que escolher o {businessConfig.name}?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: "⚡",
                      title: "Mais de 10 anos de experiência",
                      desc: "Desde 2015 atendendo motoristas de Jundiaí e região com qualidade e honestidade.",
                    },
                    {
                      icon: "📋",
                      title: "Orçamento transparente",
                      desc: "Você sabe exatamente o que vai pagar antes de aprovar qualquer serviço. Sem surpresas.",
                    },
                    {
                      icon: "🏎️",
                      title: "Estrutura para 30 carros/dia",
                      desc: "Capacidade e equipe para atender sua demanda com agilidade, mesmo em emergências.",
                    },
                    {
                      icon: "🔍",
                      title: "Diagnóstico gratuito",
                      desc: "Identificamos o problema sem cobrar pela avaliação inicial. Você só paga pelo serviço aprovado.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  Fale com a gente agora
                </h3>
                <CTAButton
                  size="lg"
                  className="w-full"
                  message="Olá! Preciso de ajuda urgente com meu carro."
                >
                  Chamar no WhatsApp
                </CTAButton>
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="flex items-center justify-center gap-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-4 rounded-xl transition-colors text-lg"
                >
                  📞 {businessConfig.phoneFormatted}
                </a>
                <div className="text-sm text-gray-600 space-y-2 border-t pt-4">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>{businessConfig.address.fullAddress}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>🕐</span>
                    <span>Seg–Sex: {businessConfig.hours.weekdays}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>🕐</span>
                    <span>Sábado: {businessConfig.hours.saturday}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Dúvidas frequentes sobre atendimento de emergência
          </h2>
          <div className="space-y-6">
            {schemaFAQ.mainEntity.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-red-700 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Não deixe para amanhã o que pode resolver hoje
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Nossa equipe está pronta para atender você agora. Venha até a Av. Fernando Arens, 457 – Vila Arens, Jundiaí, ou nos chame pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              message="Preciso de atendimento de mecânica rápida agora em Jundiaí!"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold"
              size="lg"
            >
              Resolver Agora
            </CTAButton>
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors border-2 border-white/40"
            >
              📞 Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
