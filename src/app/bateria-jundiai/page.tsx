import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "bateria-jundiai")!;

export const metadata: Metadata = {
  title: `Bateria de Carro em Jundiaí | Troca e Teste | ${businessConfig.name}`,
  description:
    "Troca de bateria e serviços elétricos em Jundiaí. Teste de carga gratuito, instalação profissional e garantia de fábrica. A partir de R$ 280. Atendimento imediato.",
  keywords: [
    "bateria Jundiaí",
    "troca de bateria Jundiaí",
    "bateria de carro Jundiaí",
    "teste de bateria Jundiaí",
    "bateria automotiva Jundiaí",
    "elétrica automotiva Jundiaí",
    "alternador Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/bateria-jundiai/`,
  },
  openGraph: {
    title: `Bateria de Carro em Jundiaí | Troca e Teste | ${businessConfig.name}`,
    description:
      "Troca de bateria e serviços elétricos em Jundiaí. Teste de carga gratuito e garantia de fábrica. A partir de R$ 280.",
    url: `${businessConfig.website}/bateria-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Qual é a vida útil de uma bateria automotiva?",
    answer:
      "A vida útil média de uma bateria automotiva é de 2 a 4 anos, dependendo do clima, frequência de uso, qualidade da bateria e estado do sistema elétrico do veículo. Baterias de veículos usados com pouca frequência ou em cidades muito quentes tendem a durar menos. Recomendamos o teste de carga anual a partir do segundo ano.",
  },
  {
    question: "Como saber se minha bateria está fraca ou descarregada?",
    answer:
      "Os principais sinais são: motor demora mais para ligar (rangi ao dar a partida), faróis e luzes internas mais fracos do que o normal, luz de bateria acesa no painel, o carro não liga após ficou muito tempo parado, ou o ar-condicionado e som perdendo potência com o motor ligado. Venha fazer o teste de carga gratuito.",
  },
  {
    question: "Vocês fazem teste de bateria gratuito?",
    answer:
      "Sim! Realizamos o teste de carga da bateria gratuitamente. Também verificamos o alternador (responsável por carregar a bateria com o motor ligado) e o sistema de partida. Assim, identificamos exatamente qual componente precisa de atenção antes de qualquer serviço.",
  },
  {
    question: "Quais marcas de bateria vocês vendem?",
    answer:
      "Trabalhamos com as melhores marcas do mercado: Heliar, Bosch, Moura, Tudor, Cral, Bosh e Varta. Todas com garantia de fábrica. Nossa equipe indica a bateria correta para o seu veículo considerando amperagem, capacidade e compatibilidade com o sistema elétrico.",
  },
  {
    question: "Posso trocar a bateria no local sem sair do carro?",
    answer:
      "Sim! A troca de bateria é um serviço rápido que leva em média 15 a 20 minutos. Você pode aguardar no veículo ou em nossa confortável sala de espera. Fazemos o descarte ecológico correto da bateria usada sem custo adicional.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bateria e Elétrica em Jundiaí",
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
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "280" },
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

export default function BateriaJundiaiPage() {
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
            <span className="text-white">Bateria em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bateria e Elétrica Automotiva em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Teste de carga gratuito, venda e instalação de baterias automotivas em Jundiaí. Melhores marcas com garantia de fábrica. Serviço rápido, sem agendamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de testar ou trocar a bateria do meu carro.">
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
                  Bateria fraca? Resolva em 15 minutos em Jundiaí
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A bateria é o coração elétrico do seu veículo. Ela é responsável pela partida do motor, pelo funcionamento do sistema de injeção, pelos acessórios elétricos e pelo carregamento de dispositivos. Uma bateria fraca ou com defeito pode te deixar na mão nos momentos mais inconvenientes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, realizamos o teste de carga completo da bateria gratuitamente. Verificamos também o alternador — que mantém a bateria carregada com o motor em funcionamento — e o motor de partida. Assim, você sabe exatamente o que precisa ser substituído.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Trabalhamos com as melhores marcas de baterias do mercado, todas com garantia de fábrica. A instalação é rápida, profissional e segura, com descarte ecológico da bateria antiga incluído no serviço.
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
                  Sinais de que sua bateria precisa de atenção
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Motor demora para ligar — barulho de rangido ou carro custa a 'pegar'",
                    "Faróis e iluminação interna visivelmente mais fracos",
                    "Luz de bateria acesa ou piscando no painel",
                    "Carro não liga após ficar parado por alguns dias",
                    "Sistema elétrico (ar-condicionado, som, vidros) com comportamento instável",
                    "Bateria com mais de 2 anos sem teste de carga",
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
                  Marcas que trabalhamos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Heliar", "Bosch", "Moura", "Tudor", "Varta", "Cral"].map((marca, i) => (
                    <div key={i} className="bg-gray-100 rounded-lg px-4 py-3 text-center font-semibold text-gray-700">
                      {marca}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Descarte ecológico incluído
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Baterias automotivas contêm chumbo e ácido sulfúrico, materiais altamente poluentes. Por isso, realizamos o descarte correto da sua bateria usada seguindo as normas ambientais brasileiras, sem custo adicional. No Centro Automotivo Jundiaí, cuidamos do seu carro e do meio ambiente.
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

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <p className="text-green-700 font-semibold text-sm">Teste de carga GRATUITO</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Gostaria de testar ou trocar a bateria do meu carro."
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
                    <Link href="/troca-de-oleo-jundiai/" className="block text-sm text-primary hover:underline">→ Troca de Óleo</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
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
            Perguntas Frequentes sobre Bateria Automotiva
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
            Carro não ligando? Venha agora!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Fazemos o teste da bateria gratuitamente e a troca em 15 minutos. Sem agendamento em Jundiaí.
          </p>
          <CTAButton
            message="Olá! Meu carro está com problema de bateria. Preciso de ajuda."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Resolver Problema de Bateria
          </CTAButton>
        </div>
      </section>
    </>
  );
}
