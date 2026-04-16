import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "pneus-jundiai")!;

export const metadata: Metadata = {
  title: `Pneus em Jundiaí | Montagem e Balanceamento | ${businessConfig.name}`,
  description:
    "Venda, montagem e balanceamento de pneus em Jundiaí. As melhores marcas com preço justo. Reparo de furos e alinhamento. Atendimento imediato, sem agendamento.",
  keywords: [
    "pneus Jundiaí",
    "montagem de pneu Jundiaí",
    "pneu novo Jundiaí",
    "troca de pneu Jundiaí",
    "borracharia Jundiaí",
    "reparo de furo Jundiaí",
    "balanceamento Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/pneus-jundiai/`,
  },
  openGraph: {
    title: `Pneus em Jundiaí | Montagem e Balanceamento | ${businessConfig.name}`,
    description:
      "Venda, montagem e balanceamento de pneus em Jundiaí. Melhores marcas, preço justo e atendimento imediato.",
    url: `${businessConfig.website}/pneus-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Qual é a vida útil de um pneu?",
    answer:
      "Em condições normais de uso, um pneu dura em média de 40.000 a 60.000 km ou 5 anos a partir da data de fabricação — o que ocorrer primeiro. Pneus expostos a muito sol, cargas pesadas ou estradas ruins podem ter vida útil menor. Recomendamos a inspeção a cada 10.000 km.",
  },
  {
    question: "Como saber se meu pneu precisa ser trocado?",
    answer:
      "O indicador de desgaste (TWI) embutido na banda de rodagem é o sinal definitivo. Quando a superfície chega ao nível do indicador, o pneu deve ser substituído. Outros sinais são: bolhas na lateral, rachaduras na borracha, desgaste irregular ou furos que não podem ser reparados.",
  },
  {
    question: "Quais marcas de pneus vocês trabalham?",
    answer:
      "Trabalhamos com as principais marcas do mercado, incluindo Michelin, Pirelli, Bridgestone, Goodyear, Continental, Dunlop e opções custo-benefício como Fate, Firestone e Westlake. Consulte nossa equipe para a melhor indicação para o seu veículo e orçamento.",
  },
  {
    question: "É possível reparar um furo no pneu?",
    answer:
      "Sim, desde que o furo esteja na banda de rodagem (parte central) e o pneu não apresente danos estruturais. Furos na lateral e danos causados por impactos que comprometem a carcaça não podem ser reparados com segurança — nesses casos, a substituição é necessária.",
  },
  {
    question: "Preciso balancear os pneus toda vez que troco?",
    answer:
      "Sim. O balanceamento é essencial sempre que um pneu é montado ou desmontado da roda. Pneus desbalanceados causam vibração no volante, desgaste irregular e maior consumo de combustível. Também recomendamos o balanceamento a cada 10.000 km como manutenção preventiva.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pneus e Rodas em Jundiaí",
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

export default function PneusJundiaiPage() {
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
            <span className="text-white">Pneus em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pneus e Rodas em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Venda, montagem, balanceamento e reparo de pneus em Jundiaí. As melhores marcas com preço justo e atendimento imediato. Sem agendamento necessário.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de um orçamento para pneus.">
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
                  Tudo sobre pneus em um só lugar em Jundiaí
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Os pneus são o único ponto de contato do seu veículo com o asfalto. Pneus em bom estado garantem frenagem eficiente, estabilidade nas curvas, menor consumo de combustível e segurança para todos a bordo. Pneus desgastados, calibrados de forma errada ou com defeito são responsáveis por grande parte dos acidentes nas estradas brasileiras.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, oferecemos serviço completo de pneus. Vendemos as melhores marcas do mercado com preços competitivos, realizamos a montagem profissional com máquinas modernas e fazemos o balanceamento computadorizado para garantir que tudo funcione perfeitamente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Também realizamos reparo de furos quando tecnicamente possível, rodízio de pneus para maximizar a durabilidade e verificação da calibragem e do pneu estepe. Tudo com rapidez e preço transparente.
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
                  Sinais de que seus pneus precisam de atenção
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Desgaste no indicador de desgaste TWI — hora de trocar",
                    "Desgaste irregular: mais no centro ou nas bordas do pneu",
                    "Bolhas, cortes ou rachaduras visíveis na lateral",
                    "Vibração no volante em velocidade constante",
                    "Perda de pressão frequente sem causa aparente",
                    "Pneu com mais de 5 anos desde a fabricação",
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
                  Dicas para conservar seus pneus por mais tempo
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  A calibragem correta é o fator mais simples e mais eficaz para preservar seus pneus. Verifique a pressão a cada 15 dias e sempre frio. O valor recomendado está na tampa do tanque de combustível ou na soleira da porta do motorista.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O rodízio a cada 10.000 km distribui o desgaste uniformemente entre os quatro pneus, aumentando significativamente a vida útil do conjunto. Combine sempre com balanceamento e alinhamento para melhores resultados.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Preço</p>
                  <p className="text-3xl font-bold text-primary">Consulte</p>
                  <p className="text-sm text-gray-500 mt-1">Tempo médio: {service.duration}</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Gostaria de um orçamento para pneus."
                >
                  Consultar Preços
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
                  <p className="text-sm font-semibold text-gray-700 mb-3">Serviços relacionados</p>
                  <nav className="space-y-2">
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
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
            Perguntas Frequentes sobre Pneus
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
            Precisa de pneus novos em Jundiaí?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Consulte os preços e disponibilidade diretamente pelo WhatsApp. Atendimento rápido e sem complicação.
          </p>
          <CTAButton
            message="Olá! Gostaria de consultar pneus disponíveis e preços."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Consultar Pneus Disponíveis
          </CTAButton>
        </div>
      </section>
    </>
  );
}
