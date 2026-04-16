import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessConfig, generateLocalBusinessSchema, generateServiceSchema } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Escapamento em Jundiaí | Conserto e Troca | Centro Automotivo",
  description:
    "Serviço de escapamento em Jundiaí. Conserto de vazamentos, troca de catalisador, silencioso e sonda lambda. Orçamento grátis na Vila Arens. Atendimento rápido!",
  keywords: [
    "escapamento Jundiaí",
    "conserto escapamento",
    "troca catalisador",
    "barulho escapamento",
    "vazamento escapamento",
    "silencioso carro",
    "mecânica Vila Arens",
    "escapamento centro automotivo",
  ],
  alternates: {
    canonical: `${businessConfig.website}/escapamento-jundiai/`,
  },
  openGraph: {
    title: "Escapamento em Jundiaí | Conserto e Troca",
    description:
      "Conserto de escapamento em Jundiaí. Barulho, vazamento, cheiro de gasolina? Resolvemos na hora!",
    url: `${businessConfig.website}/escapamento-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const relatedServices = [
  {
    title: "Revisão Automotiva",
    description: "Check-up completo do seu veículo",
    href: "/revisao-automotiva-jundiai/",
  },
  {
    title: "Freios",
    description: "Segurança e performance na frenagem",
    href: "/freios-jundiai/",
  },
  {
    title: "Troca de Óleo",
    description: "Lubrificação de qualidade para seu motor",
    href: "/troca-de-oleo-jundiai/",
  },
];

const relatedProblems = [
  {
    title: "Escapamento fazendo barulho",
    href: "/escapamento-fazendo-barulho/",
  },
  {
    title: "Cheiro de gasolina no carro",
    href: "/cheiro-de-gasolina-no-carro/",
  },
  {
    title: "Barulho no escape",
    href: "/carros-com-barulho-no-escape/",
  },
  {
    title: "Quanto custa arrumar escapamento",
    href: "/quanto-custa-arrumar-escapamento/",
  },
];

const faq = [
  {
    question: "Por que meu escapamento está fazendo barulho?",
    answer:
      "O barulho no escapamento geralmente indica furo ou ruptura no cano, junta queimada ou silencioso danificado. Em Jundiaí, o desgaste acelerado pode ser causado por ruas em mau estado. Diagnóstico rápido na Vila Arens.",
  },
  {
    question: "É perigoso dirigir com escapamento vazando?",
    answer:
      "Sim! O vazamento pode liberar gases tóxicos (monóxido de carbono) para dentro do veículo, causando intoxicação. Além disso, o motor perde potência e o consumo de combustível aumenta. Procure uma oficina imediatamente.",
  },
  {
    question: "Quanto custa consertar o escapamento em Jundiaí?",
    answer:
      "O valor varia conforme o problema. Soldagem simples: a partir de R$ 80. Troca de silencioso: R$ 150-400. Catalisador: R$ 800-2500. Fazemos orçamento grátis na Av. Fernando Arens, 457.",
  },
  {
    question: "Quanto tempo leva o conserto?",
    answer:
      "Reparos simples (soldagem, troca de junta): 30 minutos a 1 hora. Serviços maiores (troca de catalisador, silencioso): 1-2 horas. Trabalhamos com agilidade para você não ficar sem carro.",
  },
  {
    question: "Vocês trabalham com todas as marcas?",
    answer:
      "Sim! Atendemos carros nacionais e importados de todas as marcas. Temos experiência com escapamentos de veículos populares até modelos premium.",
  },
];

export default function EscapamentoPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    id: "escapamento",
    slug: "escapamento-jundiai",
    title: "Serviço de Escapamento em Jundiaí",
    description: "Conserto e troca de escapamento, catalisador, silencioso e sonda lambda em Jundiaí",
    shortDescription: "Conserto de escapamento",
    price: "a partir de R$ 80",
    duration: "30 min - 2 horas",
    icon: "Wind",
    keywords: ["escapamento", "Jundiaí"],
    features: ["Soldagem", "Troca de silencioso"],
    faq: [],
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              <span>Atendimento imediato em Jundiaí</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Escapamento em Jundiaí
              <span className="block text-red-500">Conserto e Troca Rápida</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Barulho, vazamento ou cheiro de gasolina? Resolvemos na hora! Serviço
              completo de escapamento na Vila Arens, Jundiaí. Orçamento grátis e
              atendimento sem agendamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                size="lg"
                message="Olá! Meu carro está com problema no escapamento e preciso de ajuda urgente em Jundiaí."
              >
                Orçamento Grátis Agora
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Problemas que resolvemos
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sinais de que seu escapamento precisa de atenção
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔊",
                title: "Barulho excessivo",
                description:
                  "Ronco alto, estalos ou ruído metálico indicam furo, ruptura ou silencioso danificado.",
              },
              {
                icon: "💨",
                title: "Cheiro de gasolina",
                description:
                  "Odores fortes dentro do carro podem indicar vazamento de gases tóxicos. Perigoso para saúde!",
              },
              {
                icon: "⛽",
                title: "Consumo elevado",
                description:
                  "Escapamento com problema faz o motor perder eficiência e gastar mais combustível.",
              },
              {
                icon: "🔧",
                title: "Fumaça anormal",
                description:
                  "Fumaça escura, branca ou com cheiro forte indica problema no catalisador ou queima.",
              },
              {
                icon: "⚡",
                title: "Perda de potência",
                description:
                  "Carro 'falhando', aceleração fraca ou motor 'engasgando' podem ser do escapamento.",
              },
              {
                icon: "🚨",
                title: "Luz de injeção acesa",
                description:
                  "Problemas no catalisador ou sonda lambda acendem a luz amarela do motor.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-red-200 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Nossos serviços
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que fazemos no seu escapamento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Soldagem de furos",
                price: "a partir de R$ 80",
                description: "Reparo rápido de pequenos furos e rachaduras",
              },
              {
                title: "Troca de silencioso",
                price: "a partir de R$ 150",
                description: "Substituição completa do abafador",
              },
              {
                title: "Catalisador",
                price: "a partir de R$ 800",
                description: "Troca de catalisador com garantia",
              },
              {
                title: "Sonda lambda",
                price: "a partir de R$ 200",
                description: "Diagnóstico e substituição",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-red-600 font-bold mb-2">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Não espere o problema piorar!
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Um escapamento com problema pode danificar o motor e colocar sua saúde em risco.
            Atendemos em Jundiaí, Vila Arens, sem agendamento.
          </p>
          <CTAButton
            variant="secondary"
            size="lg"
            message="Olá! Preciso de orçamento para conserto de escapamento em Jundiaí."
          >
            Falar no WhatsApp
          </CTAButton>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Por que nos escolher
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Centro Automotivo Jundiaí
              </h2>
              <ul className="space-y-4">
                {[
                  "Mais de 10 anos de experiência em escapamentos",
                  "Atendimento rápido, sem agendamento",
                  "Orçamento transparente e sem surpresas",
                  "Garantia em todos os serviços",
                  "Localização fácil na Vila Arens",
                  "Peças de qualidade e procedência",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Onde estamos
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>Endereço:</strong><br />
                  Av. Fernando Arens, 457<br />
                  Vila Arens, Jundiaí - SP
                </p>
                <p>
                  <strong>Telefone:</strong><br />
                  {businessConfig.phoneFormatted}
                </p>
                <p>
                  <strong>Horário:</strong><br />
                  Seg-Sex: 08:00 - 18:00<br />
                  Sáb: 08:00 - 13:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Relacionados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Serviços Relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <span className="text-red-600 text-sm font-semibold mt-4 inline-block">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas Relacionados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Problemas Comuns de Escapamento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProblems.map((problem) => (
              <Link
                key={problem.href}
                href={problem.href}
                className="bg-red-50 border border-red-100 hover:border-red-300 text-red-700 px-5 py-4 rounded-xl font-medium transition-colors text-center"
              >
                {problem.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para resolver seu escapamento?
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Venha para o Centro Automotivo Jundiaí. Atendimento rápido,
            preço justo e garantia de qualidade na Vila Arens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="secondary"
              size="lg"
              message="Olá! Gostaria de um orçamento para escapamento em Jundiaí."
            >
              Solicitar Orçamento
            </CTAButton>
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 text-white border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              {businessConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
