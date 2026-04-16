import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "troca-de-oleo-jundiai")!;

export const metadata: Metadata = {
  title: `Troca de Óleo em Jundiaí | Rápido e sem Agendamento | ${businessConfig.name}`,
  description:
    "Troca de óleo completa em Jundiaí com filtros e revisão de fluidos. Óleos mineral, semissintético e sintético. A partir de R$ 120. Pronto em 30 minutos.",
  keywords: [
    "troca de óleo Jundiaí",
    "óleo de motor Jundiaí",
    "filtro de óleo Jundiaí",
    "troca de óleo sintético Jundiaí",
    "manutenção preventiva Jundiaí",
    "troca de óleo rápida Jundiaí",
    "lubrificante motor Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/troca-de-oleo-jundiai/`,
  },
  openGraph: {
    title: `Troca de Óleo em Jundiaí | Rápido e sem Agendamento | ${businessConfig.name}`,
    description:
      "Troca de óleo completa em Jundiaí. Óleos mineral, semissintético e sintético. A partir de R$ 120. Pronto em 30 minutos.",
    url: `${businessConfig.website}/troca-de-oleo-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Qual o prazo recomendado para trocar o óleo do motor?",
    answer:
      "Recomendamos a troca a cada 10.000 km para óleos sintéticos ou a cada 5.000 km para óleos minerais — sempre respeitando o prazo máximo de 6 meses, o que ocorrer primeiro. O manual do veículo é o guia definitivo para cada modelo. Veículos em uso intenso (muitas partidas a frio, tráfego urbano pesado) podem necessitar de troca mais frequente.",
  },
  {
    question: "Qual a diferença entre óleo mineral, semissintético e sintético?",
    answer:
      "O óleo mineral é o mais básico e adequado para motores mais antigos com maior folga entre peças. O semissintético oferece equilíbrio entre custo e proteção, indicado para motores modernos de uso cotidiano. O sintético é o mais completo, com maior proteção em temperaturas extremas, maior intervalo de troca e ideal para motores turbo ou de alto desempenho.",
  },
  {
    question: "Preciso trocar o filtro de óleo em toda troca de óleo?",
    answer:
      "Sim, sempre. O filtro de óleo retém impurezas e resíduos da combustão. Trocar o óleo sem trocar o filtro contamina imediatamente o óleo novo com os resíduos acumulados no filtro antigo, comprometendo a lubrificação. Nossa troca de óleo inclui sempre o filtro novo.",
  },
  {
    question: "Quanto tempo leva a troca de óleo?",
    answer:
      "O serviço completo leva em média 30 minutos, incluindo a troca do óleo, substituição do filtro, verificação do nível dos outros fluidos e inspeção visual do motor. Você pode aguardar confortavelmente em nossa sala de espera com Wi-Fi, TV e café.",
  },
  {
    question: "Vocês fazem o descarte correto do óleo usado?",
    answer:
      "Sim. O óleo usado é um resíduo perigoso para o meio ambiente. Realizamos o descarte ecológico correto de todo o óleo substituído, em conformidade com as normas ambientais brasileiras, sem custo adicional para o cliente.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Troca de Óleo em Jundiaí",
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
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "120" },
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

export default function TrocaDeOleoPage() {
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
            <span className="text-white">Troca de Óleo em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Troca de Óleo em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Troca de óleo completa com filtros e revisão de fluidos em Jundiaí. Óleos mineral, semissintético e 100% sintético. Pronto em 30 minutos, sem agendamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de fazer a troca de óleo do meu veículo.">
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
                  A manutenção mais importante do seu motor
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A troca de óleo é a manutenção mais básica e ao mesmo tempo a mais importante para a saúde do motor do seu veículo. O óleo lubrifica, resfria e limpa os componentes internos do motor — e com o tempo, perde essas propriedades por oxidação e acúmulo de impurezas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, realizamos a troca de óleo de forma rápida, completa e econômica. Trabalhamos com óleos mineral, semissintético e 100% sintético das melhores marcas — Castrol, Mobil, Shell, Lubrax, Valvoline e outras. Nosso técnico indica o óleo correto para o seu motor e estilo de uso.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Além da troca do óleo e do filtro, verificamos o nível de todos os fluidos do veículo — arrefecimento, freio, direção hidráulica e limpador — e fazemos uma inspeção visual rápida do motor. Tudo em 30 minutos.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tipos de óleo: qual é o certo para o seu carro?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      tipo: "Óleo Mineral",
                      desc: "Indicado para veículos mais antigos (pré-2000) e motores com maior desgaste. Menor custo, troca mais frequente (a cada 5.000 km).",
                      cor: "bg-yellow-50 border-yellow-200",
                    },
                    {
                      tipo: "Óleo Semissintético",
                      desc: "Ideal para a maioria dos carros populares modernos. Boa proteção com custo equilibrado. Troca recomendada a cada 7.500 km.",
                      cor: "bg-blue-50 border-blue-200",
                    },
                    {
                      tipo: "Óleo 100% Sintético",
                      desc: "Melhor proteção para motores turbo, flex, GNV ou de alto desempenho. Maior intervalo de troca (até 10.000 km) e proteção superior.",
                      cor: "bg-green-50 border-green-200",
                    },
                  ].map((item, i) => (
                    <div key={i} className={`border rounded-xl p-5 ${item.cor}`}>
                      <h3 className="font-bold text-gray-900 mb-2">{item.tipo}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Atendemos toda a região de Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nossa localização estratégica na Av. Fernando Arens facilita o atendimento de motoristas de Vila Arens, Centro, Anhangabaú, Vila Rami, Jardim das Oliveiras, Jardim Pacaembu, Jardim Tamoio e toda a região metropolitana de Jundiaí. Venha sem agendamento no horário que for melhor para você.
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
                  message="Olá! Gostaria de fazer a troca de óleo do meu veículo."
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
                    <Link href="/revisao-automotiva-jundiai/" className="block text-sm text-primary hover:underline">→ Revisão Automotiva</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
                    <Link href="/bateria-jundiai/" className="block text-sm text-primary hover:underline">→ Bateria e Elétrica</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
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
            Pronto em 30 minutos, sem agendamento
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Faça a troca de óleo hoje mesmo em Jundiaí. Preço justo, óleo de qualidade e serviço rápido.
          </p>
          <CTAButton
            message="Olá! Gostaria de fazer a troca de óleo agora."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Fazer Troca de Óleo Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
