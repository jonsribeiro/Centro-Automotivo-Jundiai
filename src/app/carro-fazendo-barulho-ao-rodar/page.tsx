import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Carro Fazendo Barulho ao Rodar em Jundiaí | Causas e Solução | ${businessConfig.name}`,
  description:
    "Carro fazendo barulho ao rodar em Jundiaí? Estalos, rangidos ou zumbidos em movimento indicam suspensão, rolamentos ou pneus com problema. Diagnóstico gratuito. Atendimento imediato.",
  keywords: [
    "carro fazendo barulho ao rodar Jundiaí",
    "barulho suspensão Jundiaí",
    "carro barulhento ao andar Jundiaí",
    "estalo suspensão Jundiaí",
    "rolamento barulho Jundiaí",
    "zumbido rodas Jundiaí",
    "suspensão fazendo barulho",
    "diagnóstico suspensão Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/carro-fazendo-barulho-ao-rodar/`,
  },
  openGraph: {
    title: `Carro Fazendo Barulho ao Rodar em Jundiaí | Causas e Solução | ${businessConfig.name}`,
    description:
      "Estalos, rangidos ou zumbidos no carro ao andar em Jundiaí? Descubra as causas e resolva com diagnóstico gratuito.",
    url: `${businessConfig.website}/carro-fazendo-barulho-ao-rodar/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Por que o carro faz barulho ao rodar mesmo sem frear?",
    answer:
      "Barulhos durante o movimento — sem acionar o freio — geralmente estão relacionados à suspensão ou às rodas. Os principais suspeitos são: rolamentos de roda desgastados (produzem zumbido que aumenta com a velocidade), buchas de suspensão deterioradas (estalos em buracos ou curvas), pneus com desgaste irregular (rugido constante), amortecedores com batente desgastado (batidas ao passar por irregularidades) e junta homocinética desgastada (estalos em curvas).",
  },
  {
    question: "Como diferenciar o barulho de rolamento do barulho de suspensão?",
    answer:
      "O barulho de rolamento é geralmente um zumbido ou rugido que aumenta proporcionalmente com a velocidade e pode variar ao mudar de faixa (pior quando curva para um lado). O barulho de suspensão costuma ser um estalo, rangido ou batida que ocorre principalmente ao passar por buracos, lombadas ou em curvas. O diagnóstico preciso exige inspeção presencial — realizamos gratuitamente.",
  },
  {
    question: "Carro fazendo barulho ao rodar é perigoso?",
    answer:
      "Depende da causa. Um rolamento muito desgastado pode se partir completamente, fazendo a roda perder eficiência de movimento e, em casos extremos, travar — situação extremamente perigosa. Amortecedores deteriorados comprometem a estabilidade do veículo, especialmente em emergências. Buchas desgastadas afetam a precisão da direção. Em qualquer caso, não deixe para depois: o diagnóstico é gratuito e pode evitar um acidente ou um reparo muito mais caro.",
  },
  {
    question: "Quanto custa resolver o barulho ao rodar?",
    answer:
      "Depende inteiramente do componente afetado. Troca de buchas começa a partir de R$ 250, amortecedores a partir de R$ 250 por eixo e rolamentos variam conforme o veículo. Realizamos a inspeção sem custo e apresentamos o orçamento detalhado antes de qualquer serviço. Você decide com informação completa.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnóstico de Barulho ao Rodar em Jundiaí",
  description:
    "Identificação e reparo de barulhos durante o movimento do veículo em Jundiaí. Suspensão, rolamentos e diagnóstico completo.",
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

export default function CarroFazendoBarulhoAoRodarPage() {
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
            <Link href="/suspensao-jundiai/" className="hover:text-white transition-colors">Suspensão em Jundiaí</Link>
            <span>/</span>
            <span className="text-white">Carro Fazendo Barulho ao Rodar</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Carro Fazendo Barulho ao Rodar em Jundiaí?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Estalos, rangidos, zumbidos ou batidas durante o movimento são sinais que seu carro está pedindo atenção. Diagnóstico gratuito e resolução no mesmo dia — sem agendamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Meu carro está fazendo barulho ao rodar e gostaria de um diagnóstico.">
              Fazer Diagnóstico Gratuito
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
                  O tipo do barulho revela a causa
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Quando um carro faz barulho enquanto anda — mas não ao frear — o sistema de suspensão e as rodas são os principais suspeitos. O tipo e o momento do barulho são pistas valiosas que ajudam a direcionar o diagnóstico antes mesmo de levantar o carro na rampa.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, realizamos o diagnóstico completo de barulhos em movimento sem custo. Nossa equipe avalia suspensão, amortecedores, rolamentos, pneus e transmissão para identificar a causa real com precisão.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tipos de barulho e suas causas mais prováveis
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      barulho: "Zumbido ou rugido que aumenta com a velocidade",
                      causa: "Rolamento de roda desgastado. O som piora ao curvar para um lado. Exige troca do rolamento afetado.",
                    },
                    {
                      barulho: "Estalo ao passar por buraco ou lombada",
                      causa: "Buchas de suspensão ou batente de amortecedor deteriorados. A borracha ressecada não amortece mais o impacto.",
                    },
                    {
                      barulho: "Estalo em curvas (especialmente ao sair do estacionamento)",
                      causa: "Junta homocinética (CV) desgastada. Barulho clássico em tração dianteira ao girar o volante com força.",
                    },
                    {
                      barulho: "Batida seca ao passar por irregularidades",
                      causa: "Amortecedor com batente ou coxim desgastado. O conjunto toca nos limites mecânicos sem amortecimento.",
                    },
                    {
                      barulho: "Rugido constante nas rodas (mais grave que rolamento)",
                      causa: "Pneus com desgaste irregular, bolha ou defeito estrutural. Verifique visualmente e ao toque.",
                    },
                    {
                      barulho: "Rangido ao virar o volante",
                      causa: "Pivô de suspensão ou cremalheira da direção com desgaste. Pode evoluir para folga no volante.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">{item.barulho}</p>
                      <p className="text-gray-600 text-sm">{item.causa}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sinais de que o barulho é urgente
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Zumbido de rolamento muito intenso — risco de falha completa da roda",
                    "Estalo seguido de perda de controle ou imprecisão na direção",
                    "Barulho acompanhado de vibração forte no volante",
                    "Som que piora progressivamente a cada dia",
                    "Qualquer barulho vindo das rodas em velocidades acima de 80 km/h",
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
                  Suspensão completa em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O Centro Automotivo Jundiaí realiza serviço completo de suspensão: troca de amortecedores, buchas, pivôs, molas, rolamentos de roda e correias homocinéticas. Após qualquer intervenção, realizamos o alinhamento computadorizado 3D para garantir que o veículo retorne às especificações do fabricante.
                </p>
                <Link
                  href="/suspensao-jundiai/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  → Ver tudo sobre nosso serviço de Suspensão em Jundiaí
                </Link>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Atendemos toda a região de Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Motoristas de Vila Arens, Centro, Anhangabaú, Vila Rami, Vila Hortolândia, Jardim das Oliveiras, Jardim Pacaembu e toda a região de Jundiaí encontram atendimento rápido e sem agendamento no Centro Automotivo Jundiaí. Funcionamos de segunda a sexta das {businessConfig.hours.weekdays} e aos sábados das {businessConfig.hours.saturday}.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Diagnóstico de barulho</p>
                  <p className="text-3xl font-bold text-primary">Gratuito</p>
                  <p className="text-sm text-gray-500 mt-1">Suspensão a partir de R$ 250</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Meu carro está fazendo barulho ao rodar. Gostaria de um diagnóstico gratuito."
                >
                  Diagnóstico Gratuito
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
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/carro-vibrando-jundiai/" className="block text-sm text-primary hover:underline">→ Carro Vibrando</Link>
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
                    <Link href="/pneus-jundiai/" className="block text-sm text-primary hover:underline">→ Pneus e Rodas</Link>
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
            Perguntas Frequentes sobre Barulho ao Rodar
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
            Barulho identificado é problema resolvido
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Não deixe o barulho virar um risco na estrada. Venha agora ao Centro Automotivo Jundiaí para o diagnóstico gratuito — sem agendamento.
          </p>
          <CTAButton
            message="Olá! Meu carro está fazendo barulho ao rodar. Preciso de um diagnóstico."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Quero Diagnóstico Gratuito Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
