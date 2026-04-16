import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Quando Trocar a Pastilha de Freio? | Guia Completo | ${businessConfig.name}`,
  description:
    "Saiba exatamente quando trocar a pastilha de freio: sinais visuais, sonoros e de comportamento do carro. Inspeção gratuita em Jundiaí. Atendimento imediato no Centro Automotivo Jundiaí.",
  keywords: [
    "quando trocar pastilha de freio",
    "pastilha de freio desgastada",
    "vida útil pastilha freio",
    "troca pastilha freio Jundiaí",
    "pastilha freio barulho",
    "sinais pastilha freio ruim",
    "manutenção freios Jundiaí",
    "pastilha freio quanto tempo",
  ],
  alternates: {
    canonical: `${businessConfig.website}/quando-trocar-pastilha-freio/`,
  },
  openGraph: {
    title: `Quando Trocar a Pastilha de Freio? | Guia Completo | ${businessConfig.name}`,
    description:
      "Descubra quando trocar a pastilha de freio e quais sinais indicam que está no limite. Inspeção gratuita em Jundiaí.",
    url: `${businessConfig.website}/quando-trocar-pastilha-freio/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Qual a vida útil de uma pastilha de freio?",
    answer:
      "Em média, as pastilhas de freio duram entre 30.000 e 50.000 km. Esse intervalo varia conforme o estilo de condução (quem freia forte e com frequência desgasta mais), o tipo de pastilha (cerâmica dura mais, metálica é mais resistente ao calor), o peso do veículo e as condições de uso — tráfego urbano com muitas paradas desgasta muito mais do que rodovias.",
  },
  {
    question: "Posso inspecionar as pastilhas sem ir à oficina?",
    answer:
      "Em muitos veículos, é possível verificar visualmente a espessura da pastilha através dos raios da roda, sem precisar desmontá-la. Uma pastilha com menos de 3 mm de material de atrito já está no limite e deve ser trocada. Porém, para um diagnóstico preciso e seguro — incluindo a avaliação dos discos e do fluido de freio — recomendamos uma inspeção profissional, que realizamos gratuitamente.",
  },
  {
    question: "O que acontece se não trocar a pastilha no tempo certo?",
    answer:
      "Pastilhas totalmente esgotadas fazem o suporte metálico ralear diretamente no disco de freio. Isso danifica os discos (que custam de 3 a 5 vezes mais que as pastilhas), compromete gravemente a eficiência de frenagem e pode causar aquecimento excessivo do sistema. O resultado é um reparo muito mais caro e um risco real à segurança.",
  },
  {
    question: "Preciso trocar pastilha dos quatro freios ao mesmo tempo?",
    answer:
      "Recomendamos sempre trocar as pastilhas por eixo (frente ou traseiro), nunca de apenas um lado. Isso garante frenagem simétrica e evita que o carro puxe para um lado ao frear. Trocar os quatro ao mesmo tempo só é necessário se todos estiverem no limite — o que avaliamos individualmente na inspeção.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quando Trocar a Pastilha de Freio? Guia Completo",
  description:
    "Descubra os sinais de desgaste, vida útil média e quando é hora de trocar a pastilha de freio do seu carro.",
  author: {
    "@type": "Organization",
    name: businessConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: businessConfig.name,
    url: businessConfig.website,
  },
};

export default function QuandoTrocarPastilhaFreioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/freios-jundiai/" className="hover:text-white transition-colors">Freios em Jundiaí</Link>
            <span>/</span>
            <span className="text-white">Quando Trocar Pastilha de Freio</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quando Trocar a Pastilha de Freio?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Guia completo com os sinais certos para não errar o momento da troca — e evitar um reparo muito mais caro. Se tiver dúvida, venha para uma inspeção gratuita em Jundiaí.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de uma inspeção gratuita das pastilhas de freio.">
              Inspecionar Pastilhas Gratuitamente
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
                  Como a pastilha de freio se desgasta?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A pastilha de freio é um componente de atrito: ela pressiona contra o disco para desacelerar o veículo. A cada frenagem, uma fina camada do material de atrito é consumida. Com o tempo, essa camada se esgota — e é exatamente aí que os problemas começam.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Os fabricantes de pastilha incluem uma <strong>lamela de aviso metálica</strong> que começa a tocar no disco quando o material de atrito está perto do limite. Esse contato produz o chiado característico que serve como sinal de alerta. Mas há outros indicadores que aparecem antes disso.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  No <strong>Centro Automotivo Jundiaí</strong>, realizamos a inspeção completa das pastilhas e discos sem custo. Nossa equipe avalia o desgaste real e apresenta o orçamento antes de qualquer serviço.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Sinais de que a pastilha precisa ser trocada
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      sinal: "Chiado agudo ao frear",
                      descricao: "O sinal mais claro: a lamela de aviso está tocando no disco. A pastilha está no limite e deve ser trocada em breve.",
                      urgencia: "Alta",
                    },
                    {
                      sinal: "Rangido metálico grave",
                      descricao: "A pastilha se esgotou completamente. O suporte metálico está ralando no disco, danificando-o. Situação urgente.",
                      urgencia: "Urgente",
                    },
                    {
                      sinal: "Pedal de freio mais fundo ou mole",
                      descricao: "Pode indicar pastilhas desgastadas ou fluido de freio contaminado. Exige inspeção imediata.",
                      urgencia: "Alta",
                    },
                    {
                      sinal: "Vibração ao frear",
                      descricao: "Pastilhas desgastadas desigualmente ou discos empenados. O carro treme ao diminuir a velocidade.",
                      urgencia: "Média",
                    },
                    {
                      sinal: "Carro puxando para o lado ao frear",
                      descricao: "Uma pastilha ou pinça trabalhando mais que a outra. Desequilíbrio que compromete a trajetória.",
                      urgencia: "Média",
                    },
                    {
                      sinal: "Pastilha com menos de 3 mm visualmente",
                      descricao: "Verificável pelos raios da roda. Abaixo de 3 mm, a troca deve ser programada imediatamente.",
                      urgencia: "Alta",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-semibold text-gray-900">{item.sinal}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            item.urgencia === "Urgente"
                              ? "bg-red-100 text-red-700"
                              : item.urgencia === "Alta"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {item.urgencia}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Intervalo recomendado por km
                </h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-2xl font-bold text-primary mb-1">10.000 km</p>
                      <p className="text-sm text-gray-600">Inspeção de rotina recomendada</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-2xl font-bold text-primary mb-1">30.000 km</p>
                      <p className="text-sm text-gray-600">Verificar espessura com atenção</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-2xl font-bold text-primary mb-1">50.000 km</p>
                      <p className="text-sm text-gray-600">Troca geralmente necessária</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    * Esses valores são referências médias. O desgaste real depende do estilo de condução e das condições de uso.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Serviço completo de freios em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O Centro Automotivo Jundiaí realiza troca de pastilhas, retífica ou troca de discos e troca do fluido de freio. Trabalhamos com peças de qualidade e garantia no serviço. Atendimento sem agendamento — venha quando quiser.
                </p>
                <Link
                  href="/freios-jundiai/"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
                >
                  → Ver tudo sobre nosso serviço de Freios em Jundiaí
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 space-y-6">
                <div className="text-center border-b border-gray-200 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Troca de pastilhas a partir de</p>
                  <p className="text-4xl font-bold text-primary">R$ 180</p>
                  <p className="text-sm text-gray-500 mt-1">Inspeção gratuita</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Gostaria de uma inspeção gratuita das pastilhas de freio."
                >
                  Inspecionar Gratuitamente
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
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas em Jundiaí</Link>
                    <Link href="/freio-fazendo-barulho-jundiai/" className="block text-sm text-primary hover:underline">→ Freio Fazendo Barulho</Link>
                    <Link href="/revisao-automotiva-jundiai/" className="block text-sm text-primary hover:underline">→ Revisão Automotiva</Link>
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
            Perguntas Frequentes sobre Pastilha de Freio
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
            Com dúvida? A inspeção é gratuita
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Venha ao Centro Automotivo Jundiaí e nossos mecânicos avaliam suas pastilhas sem custo. Você decide com informação de qualidade.
          </p>
          <CTAButton
            message="Olá! Gostaria de saber se está na hora de trocar as pastilhas de freio."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Quero Inspeção Gratuita
          </CTAButton>
        </div>
      </section>
    </>
  );
}
