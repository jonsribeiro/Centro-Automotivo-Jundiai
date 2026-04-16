import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "revisao-automotiva-jundiai")!;

export const metadata: Metadata = {
  title: `Revisão Automotiva em Jundiaí | Check-up Completo | ${businessConfig.name}`,
  description:
    "Revisão automotiva completa em Jundiaí com check-up de 50 itens. Fluidos, freios, suspensão, bateria e muito mais. A partir de R$ 150. Sem agendamento.",
  keywords: [
    "revisão automotiva Jundiaí",
    "revisão completa Jundiaí",
    "check-up carro Jundiaí",
    "manutenção preventiva Jundiaí",
    "inspeção veicular Jundiaí",
    "revisão preventiva Jundiaí",
    "mecânica preventiva Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/revisao-automotiva-jundiai/`,
  },
  openGraph: {
    title: `Revisão Automotiva em Jundiaí | Check-up Completo | ${businessConfig.name}`,
    description:
      "Revisão automotiva completa em Jundiaí com check-up de 50 itens. A partir de R$ 150. Sem agendamento.",
    url: `${businessConfig.website}/revisao-automotiva-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "O que inclui a revisão automotiva completa?",
    answer:
      "Nossa revisão cobre 50 itens distribuídos em todos os sistemas do veículo: motor (nível de óleo, correia dentada, filtros), freios (pastilhas, discos, fluido), suspensão (amortecedores, buchas, pivôs), parte elétrica (bateria, alternador, iluminação), fluidos (arrefecimento, direção hidráulica, câmbio), pneus (calibragem, desgaste, estepe) e muito mais. Ao final, entregamos um relatório completo.",
  },
  {
    question: "Com que frequência devo fazer a revisão?",
    answer:
      "Recomendamos a revisão preventiva a cada 10.000 km ou 1 ano, o que ocorrer primeiro. Veículos com uso intenso (táxi, aplicativo, transporte escolar) devem fazer revisão a cada 6 meses. Mesmo carros novos se beneficiam de inspeções periódicas para manter a garantia e identificar problemas antes que se agravem.",
  },
  {
    question: "Preciso agendar a revisão com antecedência?",
    answer:
      "Não! Atendemos por ordem de chegada, sem necessidade de agendamento. Venha no horário que for mais conveniente para você. Se preferir, pode nos contatar pelo WhatsApp para verificar o horário de menor movimento.",
  },
  {
    question: "A revisão preventiva é mais barata do que corretiva?",
    answer:
      "Com certeza. A manutenção preventiva custa em média 3 a 5 vezes menos do que a corretiva. Identificar e corrigir um problema pequeno — como um nível de óleo baixo, uma bucha desgastada ou uma correia próxima do limite — evita danos graves ao motor, câmbio ou outros componentes caros.",
  },
  {
    question: "A revisão é válida para qualquer marca e modelo de veículo?",
    answer:
      "Sim! Revisamos veículos de todas as marcas e modelos: Fiat, Volkswagen, Chevrolet, Ford, Toyota, Honda, Hyundai, Renault, Nissan e muitas outras. Nossa equipe é treinada para atender desde carros populares até utilitários e veículos de médio porte.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revisão Automotiva em Jundiaí",
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
  offers: { "@type": "Offer", priceCurrency: "BRL", price: "150" },
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

const checkupItems = [
  { category: "Motor", items: ["Nível e qualidade do óleo", "Correia dentada e acessórios", "Filtros de ar e óleo", "Velas de ignição"] },
  { category: "Freios", items: ["Espessura das pastilhas", "Estado dos discos", "Fluido de freio", "Cilindros e pinças"] },
  { category: "Suspensão", items: ["Amortecedores", "Buchas e pivôs", "Molas", "Coxins"] },
  { category: "Elétrica", items: ["Bateria e carga", "Alternador", "Sistema de iluminação", "Fusíveis"] },
  { category: "Fluidos", items: ["Arrefecimento", "Direção hidráulica", "Fluido de câmbio", "Limpador de para-brisa"] },
  { category: "Pneus", items: ["Desgaste e calibragem", "Alinhamento visual", "Pneu estepe", "TPMS (sensor de pressão)"] },
];

export default function RevisaoAutomotivaPage() {
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
            <span className="text-white">Revisão Automotiva em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revisão Automotiva em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Check-up completo com 50 itens inspecionados. Identifique problemas antes que eles virem prejuízo. Atendimento imediato sem agendamento em Jundiaí.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de agendar uma revisão automotiva completa.">
              Solicitar Revisão Agora
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
                  Por que fazer a revisão preventiva regularmente?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A revisão automotiva preventiva é o serviço que mais economiza dinheiro a longo prazo. Um pequeno problema identificado na revisão — uma correia desgastada, um fluido contaminado ou uma bucha fraca — custa muito pouco para corrigir. Ignorado, pode evoluir para uma pane total no motor, câmbio ou sistema de freios, gerando reparos que chegam a dezenas de vezes mais caros.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, na Av. Fernando Arens, 457 – Vila Arens, nossa revisão cobre 50 itens distribuídos em todos os sistemas do veículo. Utilizamos ficha de inspeção padronizada e entregamos um relatório completo ao final do serviço, mostrando tudo o que foi verificado, o que está em boas condições e o que precisará de atenção.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Você decide o que quer resolver na hora e o que prefere deixar para mais tarde — sem pressão. Nossa missão é informar, não vender serviços desnecessários.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído na revisão</h2>
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
                  O que inspecionamos nos 50 pontos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {checkupItems.map((group, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-3 text-primary">{group.category}</h3>
                      <ul className="space-y-1">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-green-500">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Atendemos toda a região de Jundiaí
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Motoristas de Vila Arens, Centro, Anhangabaú, Vila Rami, Jardim das Oliveiras, Jardim Pacaembu, Vila Hortolândia, Jardim Tamoio e bairros vizinhos já confiam em nossa revisão. Nossa localização na Av. Fernando Arens facilita o acesso de toda a cidade.
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
                  message="Olá! Gostaria de fazer uma revisão automotiva completa."
                >
                  Solicitar Revisão
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
                    <Link href="/troca-de-oleo-jundiai/" className="block text-sm text-primary hover:underline">→ Troca de Óleo</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/bateria-jundiai/" className="block text-sm text-primary hover:underline">→ Bateria e Elétrica</Link>
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
            Perguntas Frequentes sobre Revisão Automotiva
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
            Seu carro está em dia com a revisão?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Não espere o problema aparecer. Faça a revisão preventiva e dirija com tranquilidade. Atendimento imediato em Jundiaí.
          </p>
          <CTAButton
            variant="secondary"
            size="lg"
            message="Olá! Gostaria de fazer a revisão automotiva completa."
          >
            Agendar Revisão pelo WhatsApp
          </CTAButton>
        </div>
      </section>
    </>
  );
}
