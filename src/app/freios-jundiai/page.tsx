import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "freios-jundiai")!;

export const metadata: Metadata = {
  title: `Freios em Jundiaí | Pastilhas e Discos | ${businessConfig.name}`,
  description:
    "Troca de pastilhas e discos de freio em Jundiaí. Serviço completo com inspeção, regulagem e teste. Atendimento imediato, sem agendamento. A partir de R$ 180.",
  keywords: [
    "freios Jundiaí",
    "pastilha de freio Jundiaí",
    "disco de freio Jundiaí",
    "troca de pastilha Jundiaí",
    "fluido de freio Jundiaí",
    "manutenção de freios Jundiaí",
    "freio a disco Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/freios-jundiai/`,
  },
  openGraph: {
    title: `Freios em Jundiaí | Pastilhas e Discos | ${businessConfig.name}`,
    description:
      "Troca de pastilhas e discos de freio em Jundiaí. Serviço completo com inspeção, regulagem e teste. Atendimento imediato, sem agendamento.",
    url: `${businessConfig.website}/freios-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Como saber se preciso trocar as pastilhas de freio?",
    answer:
      "Os principais sinais são: barulho agudo ou estridente ao frear, pedal de freio mais mole ou baixo, vibração ao frear, veículo puxando para um lado e luz de advertência de freio acesa no painel. Recomendamos uma inspeção a cada 10.000 km para garantir sua segurança.",
  },
  {
    question: "Qual é a vida útil das pastilhas de freio?",
    answer:
      "Em média, as pastilhas duram de 30.000 a 50.000 km. Esse prazo varia bastante conforme o estilo de direção, o tipo de pastilha utilizada e as condições de uso do veículo — como tráfego urbano intenso ou uso em declives acentuados.",
  },
  {
    question: "Com que frequência devo trocar o fluido de freio?",
    answer:
      "O fluido de freio absorve umidade com o tempo, o que reduz seu ponto de ebulição e compromete a eficiência da frenagem. Recomendamos a troca a cada 2 anos ou 40.000 km, independentemente da aparência do fluido.",
  },
  {
    question: "É necessário trocar discos e pastilhas juntos?",
    answer:
      "Não necessariamente. Avaliamos o desgaste de cada componente individualmente. Se o disco ainda estiver dentro da espessura mínima recomendada pelo fabricante, realizamos somente a troca das pastilhas. Caso contrário, indicamos a retífica ou substituição dos discos.",
  },
  {
    question: "Quanto tempo leva o serviço de freios?",
    answer:
      "A troca de pastilhas geralmente é realizada em 1 a 2 horas. Serviços mais completos, como troca de discos, fluido e regulagem geral do sistema, podem levar de 2 a 3 horas. Você pode aguardar em nossa sala de espera com Wi-Fi e café.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freios e Pastilhas em Jundiaí",
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
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "180" },
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

export default function FreiosJundiaiPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/servicos/" className="hover:text-white transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-white">Freios em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Freios e Pastilhas em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Serviço completo de manutenção do sistema de freios em Jundiaí. Pastilhas, discos, fluido e regulagem com atendimento imediato e sem agendamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de um orçamento para freios e pastilhas.">
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

      {/* PREÇO E FEATURES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Conteúdo principal */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Por que manter os freios em dia é essencial?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  O sistema de freios é o principal mecanismo de segurança do seu veículo. Pastilhas desgastadas, discos empenados ou fluido contaminado aumentam consideravelmente a distância de frenagem, colocando em risco você, seus passageiros e outros motoristas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, localizado na Av. Fernando Arens, 457 – Vila Arens, realizamos a inspeção completa do sistema de freios sem custo. Nossos mecânicos experientes avaliam o desgaste das pastilhas e discos, o nível e qualidade do fluido, além do funcionamento das pinças e cilindros de freio.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Trabalhamos com peças de primeira linha das melhores marcas do mercado, garantindo eficiência máxima de frenagem e durabilidade. Tudo isso com orçamento transparente e preço justo antes de iniciar qualquer serviço.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  O que está incluído no serviço de freios
                </h2>
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
                  Sinais de que seus freios precisam de atenção
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Barulho agudo, chiado ou rangido ao frear",
                    "Pedal de freio mole, baixo ou com curso excessivo",
                    "Vibração no pedal ou no volante durante a frenagem",
                    "Veículo puxando para um lado ao frear",
                    "Luz de advertência de freio acesa no painel",
                    "Cheiro de queimado após frenagens seguidas",
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
                  Atendemos toda a região de Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nosso centro automotivo está estrategicamente localizado para atender motoristas de Vila Arens, Centro, Anhangabaú, Vila Rami, Vila Hortolândia, Jardim das Oliveiras, Jardim Pacaembu e toda a região metropolitana de Jundiaí. Venha até nós ou entre em contato pelo WhatsApp para tirar dúvidas.
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
                  message="Olá! Gostaria de um orçamento para freios e pastilhas."
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
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
                    <Link href="/troca-de-oleo-jundiai/" className="block text-sm text-primary hover:underline">→ Troca de Óleo</Link>
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
            Perguntas Frequentes sobre Freios
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
            Não arrisque a sua segurança
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Traga seu veículo para uma inspeção gratuita do sistema de freios. Atendimento imediato, sem agendamento.
          </p>
          <CTAButton
            message="Olá! Gostaria de agendar uma inspeção gratuita dos freios."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Inspecionar Freios Gratuitamente
          </CTAButton>
        </div>
      </section>
    </>
  );
}
