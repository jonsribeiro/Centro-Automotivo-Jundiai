import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Freio Fazendo Barulho em Jundiaí | O Que Fazer? | ${businessConfig.name}`,
  description:
    "Freio fazendo barulho em Jundiaí? Chiado, rangido ou estrondo ao frear são sinais de alerta. Descubra as causas e resolva agora no Centro Automotivo Jundiaí. Atendimento imediato, sem agendamento.",
  keywords: [
    "freio fazendo barulho Jundiaí",
    "freio chiando Jundiaí",
    "barulho ao frear Jundiaí",
    "rangido freio Jundiaí",
    "pastilha de freio barulho",
    "freio riscando Jundiaí",
    "disco de freio barulho",
    "manutenção de freios Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/freio-fazendo-barulho-jundiai/`,
  },
  openGraph: {
    title: `Freio Fazendo Barulho em Jundiaí | O Que Fazer? | ${businessConfig.name}`,
    description:
      "Freio chiando ou rangendo em Jundiaí? Descubra as causas e resolva com segurança. Atendimento imediato no Centro Automotivo Jundiaí.",
    url: `${businessConfig.website}/freio-fazendo-barulho-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Por que meu freio está fazendo barulho ao frear?",
    answer:
      "O barulho ao frear é quase sempre sinal de pastilhas de freio desgastadas. Quando a pastilha chega ao limite, uma lamela metálica de aviso entra em contato com o disco e gera o chiado característico. Outros motivos incluem discos empenados, pastilhas mal instaladas, acúmulo de ferrugem superficial (comum após chuva) ou corpo estranho preso entre disco e pastilha. O ideal é inspecionar imediatamente para identificar a causa exata.",
  },
  {
    question: "Chiado no freio é perigoso? Posso continuar dirigindo?",
    answer:
      "Depende do tipo de barulho. Um chiado agudo e constante indica pastilha no limite — ainda há alguma eficiência de frenagem, mas a janela para evitar danos maiores é curta. Um rangido grave ou estrondo metálico significa que a pastilha já se esgotou e o metal está ralando diretamente no disco, o que compromete seriamente a frenagem. Nesse caso, o risco é imediato e o carro não deve ser dirigido. Em qualquer situação, venha para uma inspeção o quanto antes.",
  },
  {
    question: "Quanto custa resolver o problema do freio barulhento?",
    answer:
      "O custo depende do diagnóstico. A troca de pastilhas começa a partir de R$ 180 por eixo. Se os discos também precisarem de retífica ou substituição, o valor será maior. Em todo caso, realizamos a inspeção gratuitamente e apresentamos o orçamento antes de qualquer serviço. Transparência total.",
  },
  {
    question: "O barulho do freio some sozinho?",
    answer:
      "Em alguns casos, um leve chiado após longa parada ou chuva pode desaparecer após as primeiras frenagens — isso é normal e causado pela oxidação superficial do disco. Porém, se o barulho for constante, ocorrer toda vez que você freia ou for grave e metálico, ele não vai sumir sozinho e tende a piorar. Aguardar piora o problema e aumenta o custo do reparo.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnóstico de Freio com Barulho em Jundiaí",
  description:
    "Identificação e reparo de freios com chiado, rangido ou barulho em Jundiaí. Inspeção gratuita e atendimento imediato.",
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

export default function FreioFazendoBarulhoJundiaiPage() {
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
            <Link href="/freios-jundiai/" className="hover:text-white transition-colors">Freios em Jundiaí</Link>
            <span>/</span>
            <span className="text-white">Freio Fazendo Barulho</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Freio Fazendo Barulho em Jundiaí?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Chiado, rangido ou estrondo ao frear são sinais de alerta que não devem ser ignorados. Traga seu carro agora para uma inspeção gratuita — atendimento imediato, sem agendamento.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Meu freio está fazendo barulho e gostaria de uma inspeção.">
              Inspecionar Freios Agora
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
                  Freio barulhento: entenda o que está acontecendo
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Um barulho no freio é a forma que o seu carro encontrou de dizer que algo está errado. O chiado mais comum é produzido por uma lamela metálica de aviso que os fabricantes inserem propositalmente nas pastilhas — quando elas atingem o limite de desgaste, essa lamela toca o disco e emite o som agudo característico.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, localizado na Av. Fernando Arens, 457 – Vila Arens, realizamos o diagnóstico completo do sistema de freios sem nenhum custo. Identificamos a causa exata do barulho e apresentamos o orçamento antes de iniciar qualquer serviço.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ignorar o problema é arriscado: pastilhas esgotadas danificam os discos de freio, transformando um reparo simples em um serviço muito mais caro. Além disso, freios comprometidos aumentam a distância de frenagem e colocam sua vida em risco.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Principais causas do barulho no freio
                </h2>
                <ul className="space-y-4">
                  {[
                    { causa: "Pastilhas de freio no limite do desgaste", detalhe: "A causa mais comum. A lamela metálica de aviso toca o disco e produz chiado agudo. Resolução: troca das pastilhas." },
                    { causa: "Pastilhas totalmente esgotadas", detalhe: "O metal da base da pastilha rala diretamente no disco, gerando rangido grave. Exige troca de pastilhas e possivelmente dos discos." },
                    { causa: "Discos de freio empenados ou desgastados", detalhe: "Produz vibração e rangido durante a frenagem. Pode ser resolvido com retífica ou substituição dos discos." },
                    { causa: "Ferrugem superficial nos discos", detalhe: "Comum após chuva ou períodos parados. O barulho desaparece após algumas frenagens. Geralmente não exige reparo." },
                    { causa: "Corpo estranho preso entre pastilha e disco", detalhe: "Pedra ou detrito pode causar chiado ou rangido localizado. Exige inspeção para remoção segura." },
                  ].map((item, i) => (
                    <li key={i} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-1">{item.causa}</p>
                      <p className="text-gray-600 text-sm">{item.detalhe}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Quando o barulho indica perigo imediato?
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Rangido grave e metálico constante (não apenas ao frear)",
                    "Pedal de freio cedendo ou indo ao fundo",
                    "Veículo demorando mais para parar do que o normal",
                    "Vibração intensa no pedal ou no volante durante a frenagem",
                    "Fumaça ou cheiro de queimado próximo às rodas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Se identificar qualquer um desses sinais, <strong>não continue dirigindo</strong>. Entre em contato pelo WhatsApp ou ligue agora — nossa equipe orienta você sobre o que fazer.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Serviço completo de freios em Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No Centro Automotivo Jundiaí, realizamos todo o serviço de freios: troca de pastilhas, retífica ou troca de discos, troca do fluido de freio e regulagem do sistema. Trabalhamos com as melhores marcas do mercado e oferecemos garantia no serviço.
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
                  <p className="text-sm text-gray-500 mb-1">Inspeção de freios</p>
                  <p className="text-3xl font-bold text-primary">Gratuita</p>
                  <p className="text-sm text-gray-500 mt-1">Orçamento sem compromisso</p>
                </div>

                <CTAButton
                  className="w-full"
                  message="Olá! Meu freio está fazendo barulho e gostaria de uma inspeção gratuita."
                >
                  Solicitar Inspeção Grátis
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
                    <Link href="/quando-trocar-pastilha-freio/" className="block text-sm text-primary hover:underline">→ Quando Trocar a Pastilha de Freio</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
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
            Perguntas Frequentes sobre Freio com Barulho
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
            Não arrisque sua segurança na estrada
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Freio barulhento é urgente. Venha agora para uma inspeção gratuita em Jundiaí — sem agendamento, atendimento na hora.
          </p>
          <CTAButton
            message="Olá! Meu freio está fazendo barulho. Gostaria de uma inspeção urgente."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Quero Inspeção Gratuita Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
