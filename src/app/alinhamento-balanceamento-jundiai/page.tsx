import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

const service = services.find((s) => s.slug === "alinhamento-balanceamento-jundiai")!;

export const metadata: Metadata = {
  title: `Alinhamento e Balanceamento em Jundiaí | ${businessConfig.name}`,
  description:
    "Alinhamento computadorizado 3D e balanceamento de rodas em Jundiaí. Direção precisa, pneus duráveis e menor consumo. A partir de R$ 80. Sem agendamento.",
  keywords: [
    "alinhamento Jundiaí",
    "balanceamento Jundiaí",
    "alinhamento computadorizado Jundiaí",
    "alinhamento 3D Jundiaí",
    "geometria Jundiaí",
    "cambagem Jundiaí",
    "convergência rodas Jundiaí",
    "Vila Arens",
  ],
  alternates: {
    canonical: `${businessConfig.website}/alinhamento-balanceamento-jundiai/`,
  },
  openGraph: {
    title: `Alinhamento e Balanceamento em Jundiaí | ${businessConfig.name}`,
    description:
      "Alinhamento computadorizado 3D e balanceamento de rodas em Jundiaí. A partir de R$ 80. Sem agendamento.",
    url: `${businessConfig.website}/alinhamento-balanceamento-jundiai/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const faq = [
  {
    question: "Com que frequência devo fazer o alinhamento do carro?",
    answer:
      "Recomendamos o alinhamento a cada 10.000 km ou sempre que trocar pneus, realizar serviços na suspensão ou após bater em um buraco profundo. Motoristas que percorrem estradas ruins com frequência devem fazer a verificação com mais regularidade.",
  },
  {
    question: "O que acontece se eu não fizer o alinhamento?",
    answer:
      "O desalinhamento provoca desgaste irregular e acelerado dos pneus, direção que puxa para um lado, maior esforço no volante e aumento no consumo de combustível. A longo prazo, pode causar danos à suspensão e comprometer a segurança do veículo.",
  },
  {
    question: "Qual a diferença entre alinhamento e balanceamento?",
    answer:
      "O alinhamento ajusta os ângulos das rodas em relação ao solo e entre si (cambagem, caster e convergência), garantindo que o veículo ande reto. O balanceamento distribui o peso uniformemente no conjunto pneu-roda para eliminar vibrações. Ambos se complementam e devem ser feitos juntos.",
  },
  {
    question: "O que é o alinhamento computadorizado 3D?",
    answer:
      "O alinhamento 3D utiliza sensores de alta precisão fixados nas quatro rodas para medir todos os ângulos da geometria do veículo em tempo real. O sistema computadorizado gera um relatório completo e guia o mecânico nas correções necessárias, com muito mais precisão do que os métodos tradicionais.",
  },
  {
    question: "Quanto tempo leva o alinhamento e balanceamento?",
    answer:
      "O serviço completo (alinhamento + balanceamento das quatro rodas) leva em média 1 hora. Você pode aguardar em nossa sala de espera confortável com Wi-Fi, TV e café enquanto o trabalho é realizado.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Alinhamento e Balanceamento em Jundiaí",
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

export default function AlinhamentoBalanceamentoPage() {
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
            <span className="text-white">Alinhamento e Balanceamento em Jundiaí</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alinhamento e Balanceamento em Jundiaí
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Alinhamento computadorizado 3D e balanceamento de rodas com tecnologia de precisão em Jundiaí. Direção perfeita, pneus que duram mais e menos combustível.
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton message="Olá! Gostaria de fazer alinhamento e balanceamento.">
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
                  Alinhamento computadorizado 3D em Jundiaí
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  O alinhamento e balanceamento são os serviços de manutenção preventiva mais ignorados pelos motoristas — e os que causam mais prejuízo quando negligenciados. Um veículo desalinhado desgasta os pneus até 3 vezes mais rápido e aumenta o consumo de combustível em até 10%.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No <strong>Centro Automotivo Jundiaí</strong>, realizamos o alinhamento com equipamento de última geração que mede simultaneamente os ângulos das quatro rodas (cambagem, caster e convergência) em tempo real. O resultado é preciso, documentado e explicado para você entender exatamente o que foi corrigido.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O balanceamento é feito com máquinas computadorizadas que identificam exatamente onde o conjunto pneu-roda está desequilibrado. Pequenos contrapesos são fixados na roda para corrigir o desequilíbrio, eliminando vibrações e prolongando a vida útil dos pneus e da suspensão.
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
                  Quando fazer alinhamento e balanceamento?
                </h2>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "A cada 10.000 km como manutenção preventiva",
                    "Sempre que trocar um ou mais pneus",
                    "Após qualquer serviço na suspensão ou direção",
                    "Ao notar o carro puxando para um lado",
                    "Quando o volante vibra em determinadas velocidades",
                    "Depois de bater em um buraco profundo ou meio-fio",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Benefícios do alinhamento e balanceamento regulares
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Pneus mais duráveis", desc: "Desgaste uniforme aumenta a vida útil em até 30%" },
                    { title: "Menos combustível", desc: "Redução de até 10% no consumo com geometria correta" },
                    { title: "Direção precisa", desc: "Controle total do veículo e menor esforço no volante" },
                    { title: "Suspensão preservada", desc: "Menos impactos desnecessários nos componentes" },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-5">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                  message="Olá! Gostaria de fazer alinhamento e balanceamento."
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
                    <Link href="/pneus-jundiai/" className="block text-sm text-primary hover:underline">→ Pneus e Rodas</Link>
                    <Link href="/suspensao-jundiai/" className="block text-sm text-primary hover:underline">→ Suspensão e Amortecedores</Link>
                    <Link href="/freios-jundiai/" className="block text-sm text-primary hover:underline">→ Freios e Pastilhas</Link>
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
            Perguntas Frequentes sobre Alinhamento e Balanceamento
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
            Seu carro merece uma direção perfeita
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Venha fazer o alinhamento e balanceamento hoje mesmo. Atendimento em até 1 hora, sem agendamento.
          </p>
          <CTAButton
            message="Olá! Gostaria de fazer alinhamento e balanceamento hoje."
            className="bg-white text-primary hover:bg-gray-100"
          >
            Fazer Alinhamento Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
