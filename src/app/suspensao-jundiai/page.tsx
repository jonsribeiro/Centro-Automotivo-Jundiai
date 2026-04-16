import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "suspensao-jundiai")!;

export const metadata: Metadata = {
  title: `Suspensão e Amortecedores em Jundiaí | ${businessConfig.name}`,
  description:
    "Troca de amortecedores, molas e buchas em Jundiaí. Serviço completo de suspensão com geometria e teste de rodagem. A partir de R$ 250. Sem agendamento.",
  keywords: [
    "suspensão Jundiaí",
    "amortecedor Jundiaí",
    "troca de amortecedor Jundiaí",
    "bucha de suspensão Jundiaí",
    "mola suspensão Jundiaí",
    "geometria Jundiaí",
    "coxim amortecedor Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/suspensao-jundiai/`,
  },
  openGraph: {
    title: `Suspensão e Amortecedores em Jundiaí | ${businessConfig.name}`,
    description:
      "Troca de amortecedores, molas e buchas em Jundiaí. Serviço completo com geometria e teste de rodagem. A partir de R$ 250.",
    url: `${businessConfig.website}/suspensao-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Como identificar problemas na suspensão do meu carro?",
    answer:
      "Os sinais mais comuns são: carro balançando excessivamente em buracos ou lombadas, barulhos de batida ou rangido ao passar por irregularidades, direção pesada ou imprecisa, veículo inclinando demais nas curvas, desgaste irregular nos pneus e perda de estabilidade em alta velocidade. Se notar algum desses sintomas, venha para uma inspeção gratuita.",
  },
  {
    question: "Com que frequência devo trocar os amortecedores?",
    answer:
      "A maioria dos fabricantes recomenda a verificação a cada 40.000 km e a substituição a cada 60.000 a 80.000 km. Entretanto, condições de uso em estradas ruins, tráfego urbano intenso ou carry carga com frequência podem reduzir esse prazo. Amortecedores com vazamento de óleo devem ser trocados imediatamente.",
  },
  {
    question: "O que são buchas de suspensão e quando precisam ser trocadas?",
    answer:
      "As buchas são componentes de borracha que absorvem impactos e reduzem ruídos entre as peças metálicas da suspensão. Com o tempo, elas racham, enrijecem ou se deterioram. Quando isso acontece, surgem barulhos, imprecisão na direção e desgaste acelerado de outros componentes. Geralmente duram de 40.000 a 60.000 km.",
  },
  {
    question: "A troca de suspensão exige alinhamento depois?",
    answer:
      "Sim, sempre. Qualquer intervenção no sistema de suspensão — seja troca de amortecedores, molas, buchas ou pivôs — altera a geometria do veículo. Por isso, realizamos o alinhamento computadorizado 3D após o serviço, garantindo desgaste uniforme dos pneus e direção precisa.",
  },
  {
    question: "Quanto tempo leva o serviço de suspensão?",
    answer:
      "A troca de amortecedores em um eixo leva de 1 a 2 horas. Serviços completos, envolvendo troca de buchas, molas e regulagem de geometria, podem levar de 3 a 4 horas. Nossa equipe trabalha com agilidade para que você retome suas atividades o mais rápido possível.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Suspensão e Amortecedores em Jundiaí",
  description: service.description,
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
  },
  areaServed: { "@type": "City", name: "Jundiaí" },
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "250" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SuspensaoJundiaiPage() {
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/servicos/" className="hover:text-white transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-white">Suspensão em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Suspensão e Amortecedores em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Serviço completo de suspensão em Jundiaí. Amortecedores, molas, buchas e pivôs com diagnóstico preciso e atendimento imediato.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de um orçamento para suspensão e amortecedores.">
              Solicitar Orçamento Agora
            </CTAButton>
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {businessConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Suspensão em dia: conforto, segurança e economia
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A suspensão é o conjunto de componentes responsável por manter as rodas em contato com o solo, absorver impactos e garantir estabilidade ao veículo. Quando algum componente está desgastado, todo o sistema é afetado — e os riscos vão muito além do desconforto.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, realizamos o diagnóstico completo do sistema de suspensão sem custo. Nossos mecânicos especializados avaliam amortecedores, molas, buchas, pivôs, coxins e toda a geometria da direção para identificar exatamente o que precisa de atenção.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Uma suspensão desgastada aumenta o desgaste dos pneus, compromete o alinhamento e sobrecarrega outros sistemas do veículo. Resolver o problema cedo evita gastos maiores no futuro.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído no serviço</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <span className="text-green-500 text-lg font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sintomas de suspensão com problema
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Carro balança excessivamente ao passar por buracos ou lombadas",
                    "Barulhos de batida, rangido ou estralo no trecho irregular",
                    "Direção pesada, imprecisa ou com folga excessiva",
                    "Veículo se inclina muito ao curvar",
                    "Desgaste irregular ou acelerado dos pneus",
                    "Perda de controle ou instabilidade em velocidade",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que escolher o Centro Automotivo Jundiaí?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Desde 2015, atendemos motoristas de toda a região com transparência, rapidez e qualidade. Trabalhamos com peças originais e paralelas de qualidade certificada, sempre apresentando o orçamento antes de começar qualquer serviço. Você só paga pelo que realmente precisa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Após qualquer intervenção na suspensão, realizamos o alinhamento computadorizado 3D para garantir que seu veículo volte às condições ideais de fábrica.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">A partir de</p>
                  <p className="text-4xl font-bold text-primary">{service.price}</p>
                  <p className="text-sm text-gray-500 mt-1">Tempo médio: {service.duration}</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Gostaria de um orçamento para suspensão e amortecedores."
                >
                  Solicitar Orçamento
                </CTAButton>

                <a
                  href={`tel:${businessConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Ligar Agora
                </a>

                <div className="text-sm text-gray-600 space-y-2">
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

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Outros serviços</p>
                  <nav className="space-y-2">
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
                    <Link href="/pneus-jundiai/" className="block text-sm text-primary hover:underline">→ Pneus e Rodas</Link>
                    <Link href="/revisao-automotiva-jundiai/" className="block text-sm text-primary hover:underline">→ Revisão Automotiva</Link>
                  </nav>
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
            Perguntas Frequentes sobre Suspensão
          </h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sente algo diferente na direção?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Não deixe para depois. Traga seu carro para uma inspeção gratuita da suspensão. Atendimento imediato em Jundiaí.
          </p>
          <CTAButton
            message="Olá! Gostaria de inspecionar a suspensão do meu veículo."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Inspecionar Suspensão Gratuitamente
          </CTAButton>
        </div>
      </section>
    </>
  );
}
