import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Carro Puxando para o Lado em Jundiaí | Causas e Solução | ${businessConfig.name}`,
  description:
    "Carro puxando para o lado em Jundiaí? Pode ser alinhamento, freios ou suspensão. Diagnóstico gratuito e alinhamento computadorizado 3D. Atendimento imediato, sem agendamento.",
  keywords: [
    "carro puxando para o lado Jundiaí",
    "carro desviando Jundiaí",
    "alinhamento Jundiaí",
    "carro puxando esquerda direita Jundiaí",
    "direção puxando Jundiaí",
    "alinhamento computadorizado Jundiaí",
    "geometria Jundiaí",
    "carro desalinhado Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/carro-puxando-lado-jundiai/`,
  },
  openGraph: {
    title: `Carro Puxando para o Lado em Jundiaí | Causas e Solução | ${businessConfig.name}`,
    description:
      "Carro puxando para um lado em Jundiaí? Alinhamento, suspensão ou freios podem ser a causa. Diagnóstico gratuito e resolução no mesmo dia.",
    url: `${businessConfig.website}/carro-puxando-lado-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Por que meu carro está puxando para o lado?",
    answer:
      "A causa mais comum é o desalinhamento das rodas — quando a convergência, cambagem ou caster estão fora da especificação do fabricante, o veículo tende a desviar para um lado ao soltar o volante. Outras causas incluem: pressão de pneus desigual entre os lados, pastilha ou pinça de freio travada (o carro puxa ao frear), pneus com desgaste irregular ou amortecedores com desempenho diferente entre os lados.",
  },
  {
    question: "É perigoso dirigir com o carro puxando?",
    answer:
      "Sim, especialmente em velocidade. Um veículo desalinhado exige atenção constante do motorista para manter a trajetória reta, o que é exaustivo e aumenta o risco de acidentes. Em emergências — como desvio brusco ou frenagem de emergência — um carro puxando para o lado pode reagir de forma imprevisível. Além disso, o desalinhamento desgasta os pneus de forma irregular, reduzindo sua vida útil pela metade.",
  },
  {
    question: "O alinhamento resolve sempre o problema?",
    answer:
      "O alinhamento resolve os casos de desalinhamento, que são a maioria. Porém, se a causa for uma suspensão desgastada (buchas, pivôs ou amortecedores), o alinhamento não se mantém — o carro volta a puxar em pouco tempo. Por isso, realizamos o diagnóstico completo antes de qualquer serviço, avaliando tanto o alinhamento quanto a suspensão.",
  },
  {
    question: "Com que frequência fazer o alinhamento?",
    answer:
      "Recomendamos a cada 10.000 km ou sempre que trocar pneus, bater em meio-fio, passar por buracos com impacto forte ou perceber que o carro está puxando para o lado. Em Jundiaí, onde as estradas podem exigir mais do veículo, manter o alinhamento em dia é essencial para preservar os pneus e garantir segurança.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alinhamento Computadorizado para Carro Puxando em Jundiaí",
  description:
    "Diagnóstico e correção de veículo puxando para o lado em Jundiaí. Alinhamento 3D e inspeção de suspensão.",
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
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "80" },
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

export default function CarroPuxandoLadoJundiaiPage() {
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
            <Link href="/alinhamento-balanceamento-jundiai/" className="hover:text-white transition-colors">Alinhamento em Jundiaí</Link>
            <span>/</span>
            <span className="text-white">Carro Puxando para o Lado</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Carro Puxando para o Lado em Jundiaí?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Soltar o volante e o carro desviar é sinal de desalinhamento — e pode estar custando seus pneus. Resolva hoje com alinhamento computadorizado 3D e diagnóstico gratuito.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Meu carro está puxando para o lado e gostaria de um orçamento para alinhamento.">
              Fazer Alinhamento Agora
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
                  Carro desviando: quando é alinhamento e quando é outra coisa?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Quando um veículo puxa para o lado em uma pista reta, a tendência é culpar imediatamente o alinhamento — e na maioria das vezes, a suspeita está certa. Porém, existem outras causas que mimetizam esse sintoma e que exigem abordagens diferentes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, localizado na Av. Fernando Arens, 457 – Vila Arens, realizamos o diagnóstico completo antes de indicar qualquer serviço. Avaliamos alinhamento, suspensão, freios e pressão dos pneus para identificar a causa real e resolver de uma vez.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Um alinhamento feito com a suspensão desgastada não dura — o carro volta a puxar em pouco tempo. Por isso, a inspeção completa é sempre o primeiro passo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Possíveis causas do carro puxando para o lado
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      causa: "Alinhamento fora da especificação",
                      detalhe: "Causa mais comum. Bater em meio-fio, buracos ou simplesmente o uso normal desregula a geometria. O alinhamento computadorizado 3D corrige convergência, cambagem e caster.",
                    },
                    {
                      causa: "Pressão de pneus desigual",
                      detalhe: "Pneu mais murchinho de um lado faz o carro desviar para aquele lado. Verifique e equalize a pressão conforme o manual do veículo.",
                    },
                    {
                      causa: "Pastilha ou pinça de freio travada",
                      detalhe: "Quando um freio prende parcialmente, o carro puxa para aquele lado ao frear. O sintoma é mais evidente durante a frenagem.",
                    },
                    {
                      causa: "Suspensão desgastada",
                      detalhe: "Buchas ou pivôs deteriorados não sustentam a geometria correta. O alinhamento não dura sem corrigir a suspensão primeiro.",
                    },
                    {
                      causa: "Pneus com desgaste irregular ou defeito",
                      detalhe: "Pneus muito desgastados de um lado ou com defeito estrutural causam desvio. Inspecione os quatro pneus regularmente.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">{item.causa}</p>
                      <p className="text-gray-600 text-sm">{item.detalhe}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Consequências de ignorar o problema
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Desgaste prematuro e irregular dos pneus — perda de até 50% da vida útil",
                    "Maior esforço no volante e fadiga do motorista",
                    "Consumo de combustível aumentado",
                    "Risco de acidentes em manobras e freadas de emergência",
                    "Sobrecarga em outros componentes da suspensão e direção",
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
                  Alinhamento computadorizado 3D em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Utilizamos equipamento de alinhamento computadorizado 3D que mede com precisão milimétrica todos os ângulos das rodas — convergência, cambagem e caster — e apresenta um relatório antes e depois do serviço. O resultado é imediato: você sai com a direção estabilizada e os pneus preservados.
                </p>
                <Link
                  href="/alinhamento-balanceamento-jundiai/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  → Ver tudo sobre Alinhamento e Balanceamento em Jundiaí
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Alinhamento a partir de</p>
                  <p className="text-4xl font-bold text-primary">R$ 80</p>
                  <p className="text-sm text-gray-500 mt-1">Diagnóstico gratuito</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Meu carro está puxando para o lado. Gostaria de um orçamento para alinhamento."
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
                  <p className="text-sm font-semibold text-gray-700 mb-3">Serviços relacionados</p>
                  <nav className="space-y-2">
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/pneus-jundiai/" className="block text-sm text-primary hover:underline">→ Pneus e Rodas</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
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
            Perguntas Frequentes sobre Carro Puxando para o Lado
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
            Resolva o alinhamento hoje mesmo
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Não deixe o desvio destruir seus pneus. Atendimento imediato em Jundiaí — sem agendamento, sai no mesmo dia.
          </p>
          <CTAButton
            message="Olá! Meu carro está puxando para o lado. Quero fazer o alinhamento."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Agendar Alinhamento Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
