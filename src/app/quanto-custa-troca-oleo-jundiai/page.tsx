import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Quanto Custa Troca de Óleo em Jundiaí? | Preços e Serviço | ${businessConfig.name}`,
  description:
    "Quanto custa a troca de óleo em Jundiaí? Veja os preços reais, o que está incluso e por que vale a pena. A partir de R$ 120 com filtro. Atendimento imediato no Centro Automotivo Jundiaí.",
  keywords: [
    "quanto custa troca de óleo Jundiaí",
    "preço troca de óleo Jundiaí",
    "troca de óleo barata Jundiaí",
    "troca óleo com filtro Jundiaí",
    "óleo sintético Jundiaí",
    "troca de óleo Jundiaí valor",
    "revisão óleo Jundiaí",
    "manutenção óleo motor Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/quanto-custa-troca-oleo-jundiai/`,
  },
  openGraph: {
    title: `Quanto Custa Troca de Óleo em Jundiaí? | Preços e Serviço | ${businessConfig.name}`,
    description:
      "Preços reais de troca de óleo em Jundiaí. Saiba o que está incluso e venha com tranquilidade. A partir de R$ 120.",
    url: `${businessConfig.website}/quanto-custa-troca-oleo-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Qual o preço da troca de óleo em Jundiaí?",
    answer:
      "No Centro Automotivo Jundiaí, a troca de óleo começa a partir de R$ 120, incluindo o filtro de óleo e a mão de obra. O valor final depende do tipo de óleo escolhido (mineral, semissintético ou sintético) e da quantidade necessária para o motor do seu veículo. Não há taxas ocultas — o orçamento é apresentado antes de começar.",
  },
  {
    question: "O que está incluído na troca de óleo?",
    answer:
      "A troca de óleo no Centro Automotivo Jundiaí inclui: drenagem e descarte ecológico do óleo usado, troca do filtro de óleo, abastecimento com óleo novo, verificação do nível de todos os fluidos (arrefecimento, freio, direção hidráulica, limpador), inspeção visual do motor e lubrificação de componentes. É um serviço completo, não apenas a troca do óleo.",
  },
  {
    question: "Qual a diferença entre óleo mineral, semissintético e sintético?",
    answer:
      "O óleo mineral é o mais básico, adequado para veículos mais antigos com motores simples. O semissintético oferece melhor proteção e resistência ao calor, sendo o mais equilibrado em custo-benefício. O sintético é o mais avançado, recomendado para veículos modernos, turboalimentados ou de alta performance — oferece maior proteção, intervalos de troca mais longos e melhor eficiência energética. Consulte o manual do veículo para saber qual o fabricante recomenda.",
  },
  {
    question: "De quanto em quanto tempo devo trocar o óleo?",
    answer:
      "O intervalo padrão é de 10.000 km ou 6 meses para óleo mineral e semissintético, e até 15.000 km para óleo sintético. Veículos que rodam muito em trânsito urbano (motor quente e frio com frequência) devem seguir o intervalo em meses, não apenas em quilometragem. Consulte sempre o manual do seu veículo.",
  },
];

const schemaPriceSpec = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Troca de Óleo em Jundiaí",
  description:
    "Troca de óleo completa em Jundiaí com filtro, verificação de fluidos e inspeção do motor. A partir de R$ 120.",
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
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: "120",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "120",
      priceCurrency: "BRL",
    },
  },
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

export default function QuantoCustaTrocaOleoJundiaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPriceSpec) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/troca-de-oleo-jundiai/" className="hover:text-white transition-colors">Troca de Óleo em Jundiaí</Link>
            <span>/</span>
            <span className="text-white">Quanto Custa</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quanto Custa a Troca de Óleo em Jundiaí?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Preço justo, transparente e sem surpresas. A troca de óleo no Centro Automotivo Jundiaí começa a partir de R$ 120 com filtro incluso — e o orçamento é apresentado antes de começar.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de saber o preço da troca de óleo para o meu carro.">
              Ver Preço para Meu Carro
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
                  Preço real da troca de óleo em Jundiaí
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  O custo da troca de óleo varia principalmente pelo tipo de óleo utilizado e pela quantidade necessária para o motor do seu veículo. No <strong>Centro Automotivo Jundiaí</strong>, não existe taxa de inspeção ou valores escondidos — o preço é calculado com base apenas no óleo, no filtro e na mão de obra.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Atendemos na Av. Fernando Arens, 457 – Vila Arens, com serviço rápido em até 30 minutos, sem necessidade de agendamento.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tabela de preços por tipo de óleo
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-4 font-semibold text-gray-900 rounded-tl-lg">Tipo de Óleo</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Indicado para</th>
                        <th className="text-left p-4 font-semibold text-gray-900 rounded-tr-lg">Preço aprox.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { tipo: "Mineral", para: "Carros mais antigos, motores simples", preco: "A partir de R$ 120" },
                        { tipo: "Semissintético", para: "Maioria dos veículos populares", preco: "A partir de R$ 150" },
                        { tipo: "Sintético", para: "Carros modernos, turbo, importados", preco: "A partir de R$ 200" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-4 font-medium text-gray-900">{row.tipo}</td>
                          <td className="p-4 text-gray-600">{row.para}</td>
                          <td className="p-4 font-semibold text-primary">{row.preco}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  * Filtro de óleo incluso. Preços podem variar conforme o veículo e marcas de óleo disponíveis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  O que está incluso na troca de óleo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Troca do óleo do motor",
                    "Substituição do filtro de óleo",
                    "Verificação do nível de todos os fluidos",
                    "Inspeção visual do motor",
                    "Lubrificação de componentes",
                    "Descarte ecológico do óleo usado",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <span className="text-green-500 text-lg font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sinais de que o óleo precisa ser trocado agora
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Óleo escuro ou preto no visor — cor normal é âmbar ou marrom claro",
                    "Luz de pressão de óleo ou \"manutenção\" acesa no painel",
                    "Barulho de motor mais alto que o normal (óleo degradado não lubrifica bem)",
                    "Mais de 6 meses ou 10.000 km desde a última troca",
                    "Cheiro de queimado vindo do motor",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 font-bold mt-0.5">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Serviço completo de troca de óleo em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Desde 2015, realizamos trocas de óleo com agilidade e qualidade. Trabalhamos com óleos das melhores marcas — Castrol, Mobil, Shell e mais — e garantimos o descarte correto do óleo usado. Tudo em até 30 minutos, sem agendamento.
                </p>
                <Link
                  href="/troca-de-oleo-jundiai/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  → Ver tudo sobre Troca de Óleo em Jundiaí
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Troca de óleo a partir de</p>
                  <p className="text-4xl font-bold text-primary">R$ 120</p>
                  <p className="text-sm text-gray-500 mt-1">Filtro incluso • 30 minutos</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Gostaria de saber o preço da troca de óleo para o meu carro."
                >
                  Consultar Preço
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
                    <Link href="/troca-de-oleo-jundiai/" className="block text-sm text-primary hover:underline">→ Troca de Óleo em Jundiaí</Link>
                    <Link href="/revisao-automotiva-jundiai/" className="block text-sm text-primary hover:underline">→ Revisão Automotiva</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
                    <Link href="/bateria-jundiai/" className="block text-sm text-primary hover:underline">→ Bateria Automotiva</Link>
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
            Perguntas Frequentes sobre Troca de Óleo
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
            Troca de óleo rápida e com preço justo
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Sem agendamento. Sem surpresa no valor. Venha ao Centro Automotivo Jundiaí e saia com o óleo trocado em até 30 minutos.
          </p>
          <CTAButton
            message="Olá! Quero fazer a troca de óleo do meu carro. Qual o preço?"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Fazer Troca de Óleo Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
