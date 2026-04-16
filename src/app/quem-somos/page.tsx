import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, differentials, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: `Quem Somos | ${businessConfig.name} – Vila Arens, Jundiaí`,
  description:
    "Conheça o Centro Automotivo Jundiaí. Mais de 10 anos de história, estrutura para 30 carros/dia e equipe especializada em Vila Arens. Transparência, rapidez e honestidade.",
  keywords: [
    "Centro Automotivo Jundiaí",
    "oficina mecânica Jundiaí",
    "mecânica Vila Arens",
    "quem somos centro automotivo",
    "história centro automotivo Jundiaí",
    "oficina Av Fernando Arens",
    "mecânica honesta Jundiaí",
  ],
  alternates: {
    canonical: `${businessConfig.website}/quem-somos/`,
  },
  openGraph: {
    title: `Quem Somos | ${businessConfig.name} – Vila Arens, Jundiaí`,
    description:
      "Mais de 10 anos servindo Jundiaí com qualidade, transparência e honestidade. Conheça nossa história e estrutura.",
    url: `${businessConfig.website}/quem-somos/`,
    siteName: businessConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

const timeline = [
  {
    year: "2015",
    title: "Fundação",
    description:
      "O Centro Automotivo Jundiaí abre suas portas na Av. Fernando Arens, 457 – Vila Arens, com o objetivo de oferecer serviços automotivos honestos, rápidos e acessíveis para os moradores de Jundiaí e região.",
  },
  {
    year: "2017",
    title: "Expansão da estrutura",
    description:
      "Com o crescimento da clientela e a confiança conquistada, ampliamos nossa estrutura para atender com mais agilidade, aumentando a capacidade de vagas e contratando mecânicos especializados.",
  },
  {
    year: "2019",
    title: "Novos serviços",
    description:
      "Incorporamos novos serviços ao portfólio: alinhamento computadorizado 3D, balanceamento, revisão completa de 50 itens e serviços especializados de suspensão, ampliando nossa capacidade de atendimento.",
  },
  {
    year: "2022",
    title: "30 carros por dia",
    description:
      "Atingimos a capacidade operacional de 30 veículos atendidos por dia, consolidando nossa posição como uma das oficinas mais completas e ágeis da região de Jundiaí.",
  },
  {
    year: "2025",
    title: "10 anos de história",
    description:
      "Uma década de serviços prestados com qualidade, honestidade e respeito ao cliente. Milhares de carros atendidos e a confiança renovada a cada dia pelos moradores de Jundiaí e região.",
  },
];

const values = [
  {
    icon: "🔍",
    title: "Transparência",
    description:
      "Orçamento claro e detalhado antes de qualquer serviço. Você sabe exatamente o que será feito e quanto vai custar. Sem cobranças escondidas, sem surpresas na hora de pagar.",
  },
  {
    icon: "⚡",
    title: "Rapidez",
    description:
      "Seu tempo é valioso. Trabalhamos com agilidade sem abrir mão da qualidade. Atendimento imediato, sem agendamento, e prazos de entrega cumpridos.",
  },
  {
    icon: "🤝",
    title: "Honestidade",
    description:
      "Indicamos apenas os serviços que seu carro realmente precisa. Nossos mecânicos explicam o diagnóstico de forma clara e sem pressão para você tomar a melhor decisão.",
  },
  {
    icon: "🏆",
    title: "Qualidade",
    description:
      "Trabalhamos somente com peças de primeira linha das melhores marcas. Cada serviço é executado com rigor técnico por profissionais com experiência comprovada.",
  },
  {
    icon: "💬",
    title: "Atendimento Humano",
    description:
      "Tratamos cada cliente de forma individualizada, com atenção, respeito e disposição para tirar todas as dúvidas. Você não é só mais um número para nós.",
  },
  {
    icon: "🌱",
    title: "Responsabilidade",
    description:
      "Descarte ecológico correto de óleos, filtros e baterias. Cuidamos do seu carro e também do meio ambiente, seguindo todas as normas ambientais vigentes.",
  },
];

const team = [
  {
    role: "Mecânicos Especialistas",
    description: "Profissionais com certificação técnica e anos de prática em veículos nacionais e importados.",
  },
  {
    role: "Especialistas em Freios e Suspensão",
    description: "Técnicos focados em sistemas de segurança, garantindo diagnóstico preciso e correção eficiente.",
  },
  {
    role: "Técnicos em Alinhamento e Balanceamento",
    description: "Operadores certificados nos equipamentos de alinhamento computadorizado 3D e balanceamento dinâmico.",
  },
  {
    role: "Atendimento ao Cliente",
    description: "Equipe treinada para explicar cada etapa do serviço de forma clara e acolhedora.",
  },
];

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: businessConfig.name,
  description:
    "Centro Automotivo com mais de 10 anos de experiência em Jundiaí. Serviços de freios, suspensão, troca de óleo, alinhamento, pneus e revisão completa.",
  url: businessConfig.website,
  telephone: businessConfig.phoneFormatted,
  email: businessConfig.email,
  foundingDate: String(businessConfig.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${businessConfig.address.street}, ${businessConfig.address.number}`,
    addressLocality: businessConfig.address.city,
    addressRegion: businessConfig.address.state,
    postalCode: businessConfig.address.zipCode,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-23.1857",
    longitude: "-46.8978",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  sameAs: [businessConfig.social.instagram, businessConfig.social.facebook],
};

export default function QuemSomosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white">Quem Somos</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <span>🏆</span>
              <span>Mais de 10 anos em Jundiaí</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Conheça o{" "}
              <span className="text-accent">Centro Automotivo Jundiaí</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Há mais de uma década cuidando dos carros — e da confiança — dos moradores de Jundiaí.
              Nossa história é construída um cliente de cada vez, com transparência, rapidez e honestidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton message="Olá! Quero conhecer melhor o Centro Automotivo Jundiaí e solicitar um orçamento.">
                Fale Conosco
              </CTAButton>
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                📍 Ver no Mapa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: "10+", label: "Anos de experiência" },
              { value: "30", label: "Carros atendidos/dia" },
              { value: "7", label: "Serviços especializados" },
              { value: "100%", label: "Orçamento transparente" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa história
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Uma trajetória de crescimento construída sobre a confiança dos clientes de Jundiaí e região.
              </p>
            </div>

            <div className="relative">
              {/* Linha do tempo */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-0.5" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-6 items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-gray-50 rounded-2xl p-6 inline-block w-full">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm z-10">
                        {item.year}
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa estrutura
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Investimos em equipamentos modernos e espaço adequado para oferecer o melhor atendimento de Jundiaí.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span>🔧</span> Equipamentos
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Alinhador computadorizado 3D de última geração",
                    "Balanceadora dinâmica computadorizada",
                    "Elevadores hidráulicos profissionais",
                    "Scanner automotivo multimarcas",
                    "Ferramental especializado por sistema",
                    "Descartador ecológico de óleo e fluidos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span>🏢</span> Comodidades
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "Capacidade para 30 veículos por dia",
                    "Pátio amplo e organizado",
                    "Sala de espera climatizada",
                    "Wi-Fi gratuito para os clientes",
                    "Café cortesia durante a espera",
                    "TV e ambiente confortável",
                    "Estacionamento próprio",
                    "Acessibilidade para todos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-primary rounded-2xl p-8 text-white text-center">
              <p className="text-xl font-semibold mb-2">
                Localizado na <span className="text-accent">Av. Fernando Arens, 457 – Vila Arens, Jundiaí – SP</span>
              </p>
              <p className="text-white/80 mb-4">
                Fácil acesso, próximo ao centro da cidade, com ótima sinalização e estacionamento.
              </p>
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                📍 Traçar Rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Equipe especializada
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nossos profissionais são o coração do {businessConfig.name}. Cada membro da equipe foi selecionado pelo conhecimento técnico e pelo compromisso com a qualidade e a honestidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Todos os nossos mecânicos são treinados para apresentar o diagnóstico de forma clara, sem termos técnicos difíceis, e para recomendar apenas os serviços que o veículo realmente necessita. Sua confiança é o nosso maior patrimônio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos valores
            </h2>
            <p className="text-gray-600 text-lg">
              Os princípios que guiam cada decisão e cada serviço prestado há mais de 10 anos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Onde nos encontrar
              </h2>
              <p className="text-gray-600 text-lg">
                Estamos no coração de Vila Arens, com fácil acesso de todos os bairros de Jundiaí.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Informações de contato</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start gap-3">
                      <span className="text-xl">📍</span>
                      <span>
                        <strong>Endereço:</strong><br />
                        {businessConfig.address.fullAddress}
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-xl">📞</span>
                      <span>
                        <strong>Telefone:</strong><br />
                        <a href={`tel:${businessConfig.phone}`} className="text-primary hover:underline">
                          {businessConfig.phoneFormatted}
                        </a>
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-xl">✉️</span>
                      <span>
                        <strong>E-mail:</strong><br />
                        <a href={`mailto:${businessConfig.email}`} className="text-primary hover:underline">
                          {businessConfig.email}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Horário de funcionamento</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>Segunda a Sexta</span>
                      <span className="font-semibold">{businessConfig.hours.weekdays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sábado</span>
                      <span className="font-semibold">{businessConfig.hours.saturday}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Domingo</span>
                      <span className="font-semibold text-red-500">{businessConfig.hours.sunday}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold px-6 py-4 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  📍 Abrir no Google Maps
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl overflow-hidden h-80 flex items-center justify-center border border-gray-200">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="font-semibold text-gray-800 mb-2">Av. Fernando Arens, 457</p>
                  <p className="text-gray-600 mb-4">Vila Arens – Jundiaí, SP</p>
                  <a
                    href={businessConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS LINK */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos serviços
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Oferecemos uma gama completa de serviços automotivos para manter seu veículo sempre seguro e eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}/`}
                className="bg-white hover:bg-primary hover:text-white border border-gray-100 rounded-xl px-5 py-4 font-semibold text-gray-800 transition-all group flex items-center justify-between"
              >
                <span>{s.title}</span>
                <span className="text-primary group-hover:text-white transition-colors">→</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/servicos/"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Venha conhecer o {businessConfig.shortName} pessoalmente
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Estamos prontos para atender você com a atenção e o cuidado que seu carro merece.
            Venha sem agendamento ou entre em contato agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              size="lg"
              message="Olá! Quero conhecer melhor o Centro Automotivo e solicitar um orçamento."
            >
              Falar pelo WhatsApp
            </CTAButton>
            <a
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              📞 {businessConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
