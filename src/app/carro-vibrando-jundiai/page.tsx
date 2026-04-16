import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Carro Vibrando em Jundiaí | Causas e Solução | ${businessConfig.name}`,
  description:
    "Carro vibrando em Jundiaí? Vibração no volante, no banco ou no pedal pode indicar suspensão, amortecedores ou rodas fora de balanceamento. Diagnóstico gratuito. Atendimento imediato.",
  keywords: [
    "carro vibrando Jundiaí",
    "vibração no volante Jundiaí",
    "carro tremendo Jundiaí",
    "vibração suspensão Jundiaí",
    "amortecedor ruim Jundiaí",
    "balanceamento Jundiaí",
    "carro vibrando ao acelerar",
    "suspensão Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/carro-vibrando-jundiai/`,
  },
  openGraph: {
    title: `Carro Vibrando em Jundiaí | Causas e Solução | ${businessConfig.name}`,
    description:
      "Carro vibrando ou tremendo em Jundiaí? Descubra as causas e resolva com diagnóstico gratuito no Centro Automotivo Jundiaí.",
    url: `${businessConfig.website}/carro-vibrando-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Por que meu carro está vibrando?",
    answer:
      "A vibração em um carro pode ter diversas origens. As mais comuns são: rodas fora de balanceamento (vibração sentida no volante em altas velocidades), pneus desgastados ou com defeito, amortecedores desgastados, buchas de suspensão deterioradas, pivôs frouxos, discos de freio empenados (vibração ao frear) ou até problemas na transmissão e nas juntas homocinéticas. Um diagnóstico presencial é essencial para identificar a causa exata.",
  },
  {
    question: "A vibração é mais forte em alta velocidade. O que significa?",
    answer:
      "Vibração que surge ou piora acima de 80–100 km/h está diretamente ligada ao balanceamento das rodas ou a pneus com defeito. Nesses casos, o balanceamento computadorizado resolve o problema na maioria das vezes. Se a vibração persistir após o balanceamento, pode ser sinal de amortecedores desgastados ou problema na geometria da suspensão.",
  },
  {
    question: "Carro vibrando pode danificar outros componentes?",
    answer:
      "Sim. Uma vibração não corrigida acelera o desgaste de praticamente todos os componentes do veículo: pneus, buchas, rolamentos, juntas, discos de freio e até a caixa de direção. O que começa como um balanceamento simples pode se tornar uma troca de suspensão completa se ignorado por muito tempo.",
  },
  {
    question: "Quanto custa resolver a vibração do carro?",
    answer:
      "Depende inteiramente da causa. Um balanceamento de rodas custa a partir de R$ 80. Se a causa for amortecedores ou suspensão, o serviço começa a partir de R$ 250. Realizamos o diagnóstico gratuitamente e apresentamos o orçamento antes de qualquer serviço — sem compromisso.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnóstico de Vibração em Carros em Jundiaí",
  description:
    "Identificação e solução de vibração em veículos em Jundiaí. Suspensão, balanceamento e diagnóstico completo.",
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

export default function CarroVibrandoJundiaiPage() {
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
            <span className="text-white">Carro Vibrando</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Carro Vibrando em Jundiaí?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Vibração no volante, no banco ou no pedal do freio é sinal de que algo precisa de atenção. Identifique a causa e resolva com segurança — diagnóstico gratuito, atendimento imediato.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Meu carro está vibrando e gostaria de um diagnóstico.">
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
                  Vibração no carro: onde sente faz toda a diferença
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A localização e o momento em que a vibração aparece são pistas valiosas para o diagnóstico. Um profissional experiente consegue estreitar as causas possíveis com base nessas informações antes mesmo de tocar no carro. Mas somente uma inspeção presencial confirma o diagnóstico com precisão.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, nossa equipe realiza o diagnóstico completo de vibração sem custo. Avaliamos suspensão, rodas, pneus, freios e sistema de transmissão para identificar exatamente o que está causando o problema.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Onde você sente a vibração?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      local: "No volante, em alta velocidade",
                      causa: "Rodas fora de balanceamento ou pneus com defeito. Solução: balanceamento computadorizado ou troca de pneus.",
                    },
                    {
                      local: "No pedal do freio ao frear",
                      causa: "Discos de freio empenados ou desgastados. Solução: retífica ou troca dos discos.",
                    },
                    {
                      local: "No banco ou assoalho ao passar por buracos",
                      causa: "Amortecedores desgastados ou buchas de suspensão deterioradas. Solução: troca dos componentes afetados.",
                    },
                    {
                      local: "No volante ao acelerar",
                      causa: "Junta homocinética desgastada ou problema na transmissão. Exige diagnóstico especializado.",
                    },
                    {
                      local: "Em baixas velocidades, constantemente",
                      causa: "Pneu com bolha ou defeito estrutural. Solução: inspeção e troca imediata do pneu.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">{item.local}</p>
                      <p className="text-gray-600 text-sm">{item.causa}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Quando a vibração é perigosa?
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Vibração intensa que piora progressivamente com o tempo",
                    "Perda de controle do veículo em curvas ou frenagem",
                    "Vibração acompanhada de barulho de batida ou rangido",
                    "Pneu com bolha visível (pode estourar a qualquer momento)",
                    "Carro puxando para um lado junto com a vibração",
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
                  Solução completa para suspensão em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Desde 2015, o Centro Automotivo Jundiaí resolve problemas de vibração com diagnóstico preciso e serviço de qualidade. Trabalhamos com amortecedores, buchas, pivôs, molas, balanceamento computadorizado e alinhamento 3D.
                </p>
                <Link
                  href="/suspensao-jundiai/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  → Ver tudo sobre nosso serviço de Suspensão em Jundiaí
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Diagnóstico de vibração</p>
                  <p className="text-3xl font-bold text-primary">Gratuito</p>
                  <p className="text-sm text-gray-500 mt-1">Orçamento sem compromisso</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Meu carro está vibrando e gostaria de um diagnóstico gratuito."
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
                    <Link href="/alinhamento-balanceamento-jundiai/" className="block text-sm text-primary hover:underline">→ Alinhamento e Balanceamento</Link>
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
            Perguntas Frequentes sobre Vibração no Carro
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
            Carro vibrando resolve com diagnóstico certo
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Não deixe a vibração evoluir para um problema maior. Venha agora para o diagnóstico gratuito em Jundiaí — sem agendamento.
          </p>
          <CTAButton
            message="Olá! Meu carro está vibrando. Gostaria de fazer um diagnóstico gratuito."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Quero Diagnóstico Gratuito
          </CTAButton>
        </div>
      </section>
    </>
  );
}
