// Configurações do negócio
export const businessConfig = {
  name: "Centro Automotivo Jundiaí",
  shortName: "Centro Automotivo",
  phone: "551148173886",
  phoneFormatted: "(11) 4817-3886",
  whatsappMessage: "Olá! Vi o site e gostaria de fazer um orçamento.",
  address: {
    street: "Avenida Fernando Arens",
    number: "457",
    neighborhood: "Vila Arens",
    city: "Jundiaí",
    state: "SP",
    zipCode: "13202-100",
    fullAddress: "Avenida Fernando Arens, 457 - Vila Arens, Jundiaí - SP",
  },
  hours: {
    weekdays: "08:00 - 18:00",
    saturday: "08:00 - 13:00",
    sunday: "Fechado",
  },
  email: "contato@centroautomotivojundiai.com.br",
  website: "https://www.centroautomotivojundiai.com.br",
  mapsUrl: "https://maps.google.com/?q=Avenida+Fernando+Arens,+457,+Vila+Arens,+Jundiaí+-+SP",
  social: {
    instagram: "https://www.instagram.com/automecanicajundiai?igsh=NnJuOGpyaXcyaGpq&utm_source=qr",
    facebook: "https://facebook.com/centroautomotivojundiai",
  },
  description: "Serviços automotivos rápidos em Jundiaí. Troca de óleo, freios, suspensão, pneus e mais. Atendimento imediato, sem agendamento.",
  foundedYear: 2015,
  capacity: "30 carros/dia",
};

// Links de navegação
export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos/", label: "Serviços" },
  { href: "/blog/", label: "Blog" },
  { href: "/mecanica-rapida-jundiai/", label: "Emergência" },
  { href: "/quem-somos/", label: "Quem Somos" },
];

// Serviços oferecidos
export const services = [
  {
    id: "troca-de-oleo",
    slug: "troca-de-oleo-jundiai",
    title: "Troca de Óleo",
    description: "Troca de óleo completa com filtros e revisão de fluidos. Serviço rápido em Jundiaí.",
    shortDescription: "Óleo e filtros trocados em minutos",
    price: "a partir de R$ 120",
    duration: "30 minutos",
    icon: "Droplets",
    keywords: ["troca de óleo Jundiaí", "óleo de motor", "filtro de óleo", "manutenção preventiva"],
    features: [
      "Troca de óleo do motor",
      "Substituição do filtro de óleo",
      "Verificação do nível de fluidos",
      "Inspeção visual do motor",
      "Lubrificação de componentes",
      "Descarte ecológico do óleo usado",
    ],
    faq: [
      {
        question: "Qual o prazo para trocar o óleo do carro?",
        answer: "Recomendamos a troca a cada 10.000 km ou 6 meses, o que ocorrer primeiro. Consulte o manual do seu veículo.",
      },
      {
        question: "Vocês trabalham com óleo sintético?",
        answer: "Sim! Trabalhamos com óleos mineral, semissintético e 100% sintético das melhores marcas.",
      },
    ],
  },
  {
    id: "freios",
    slug: "freios-jundiai",
    title: "Freios",
    description: "Serviço completo de freios em Jundiaí. Pastilhas, discos, fluido de freio e muito mais.",
    shortDescription: "Segurança total para seu veículo",
    price: "a partir de R$ 180",
    duration: "1-2 horas",
    icon: "CircleDot",
    keywords: ["freio Jundiaí", "pastilha de freio", "disco de freio", "manutenção de freios"],
    features: [
      "Troca de pastilhas de freio",
      "Retífica ou troca de discos",
      "Troca de fluido de freio",
      "Regulagem do sistema de freios",
      "Inspeção completa do sistema",
      "Teste de frenagem",
    ],
    faq: [
      {
        question: "Como saber se preciso trocar as pastilhas?",
        answer: "Sinais incluem barulho ao frear, pedal mais baixo ou luz de advertência no painel. Recomendamos inspeção a cada 10.000 km.",
      },
      {
        question: "Qual a vida útil das pastilhas?",
        answer: "Em média 30.000 a 50.000 km, mas varia conforme o estilo de direção e condições de uso.",
      },
    ],
  },
  {
    id: "suspensao",
    slug: "suspensao-jundiai",
    title: "Suspensão",
    description: "Conforto e estabilidade para seu carro. Amortecedores, molas e buchas em Jundiaí.",
    shortDescription: "Conforto e estabilidade no volante",
    price: "a partir de R$ 250",
    duration: "2-3 horas",
    icon: "MoveVertical",
    keywords: ["suspensão Jundiaí", "amortecedor", "molas", "bucha de suspensão"],
    features: [
      "Troca de amortecedores",
      "Substituição de molas",
      "Troca de buchas e pivôs",
      "Regulagem de geometria",
      "Inspeção de coxins",
      "Teste de rodagem",
    ],
    faq: [
      {
        question: "Como identificar problema na suspensão?",
        answer: "Carro balançando muito, barulhos em buracos, direção dura ou instável são sinais comuns.",
      },
      {
        question: "Quando trocar os amortecedores?",
        answer: "Recomendamos a cada 60.000 km ou quando notar vazamentos ou perda de eficiência.",
      },
    ],
  },
  {
    id: "pneus",
    slug: "pneus-jundiai",
    title: "Pneus",
    description: "Venda e montagem de pneus em Jundiaí. As melhores marcas com preço justo.",
    shortDescription: "Montagem, balanceamento e alinhamento",
    price: "consulte",
    duration: "30 minutos/pneu",
    icon: "Circle",
    keywords: ["pneus Jundiaí", "montagem de pneus", "pneu novo", "vulcanização"],
    features: [
      "Venda de pneus novos",
      "Montagem profissional",
      "Balanceamento computadorizado",
      "Alinhamento de direção",
      "Reparo de furos",
      "Roda de estepe",
    ],
    faq: [
      {
        question: "Qual a vida útil de um pneu?",
        answer: "Em média 40.000 a 60.000 km ou 5 anos, o que ocorrer primeiro. Inspecione a cada 10.000 km.",
      },
      {
        question: "Vocês vendem pneus?",
        answer: "Sim! Trabalhamos com as principais marcas e oferecemos o melhor preço de Jundiaí.",
      },
    ],
  },
  {
    id: "alinhamento-balanceamento",
    slug: "alinhamento-balanceamento-jundiai",
    title: "Alinhamento e Balanceamento",
    description: "Alinhamento computadorizado e balanceamento de rodas em Jundiaí.",
    shortDescription: "Direção precisa e pneus duráveis",
    price: "a partir de R$ 80",
    duration: "1 hora",
    icon: "AlignCenter",
    keywords: ["alinhamento Jundiaí", "balanceamento", "geometria", "cambagem"],
    features: [
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Regulagem de cambagem",
      "Regulagem de caster",
      "Regulagem de convergência",
      "Relatório completo",
    ],
    faq: [
      {
        question: "Com que frequência fazer alinhamento?",
        answer: "Recomendamos a cada 10.000 km ou ao trocar pneus/suspensão.",
      },
      {
        question: "O que acontece se não alinhar o carro?",
        answer: "Desgaste irregular dos pneus, direção puxando para um lado e maior consumo de combustível.",
      },
    ],
  },
  {
    id: "revisao-automotiva",
    slug: "revisao-automotiva-jundiai",
    title: "Revisão Automotiva",
    description: "Revisão completa do seu veículo em Jundiaí. Check-up de 50 itens.",
    shortDescription: "Check-up completo do seu veículo",
    price: "a partir de R$ 150",
    duration: "2-4 horas",
    icon: "ClipboardCheck",
    keywords: ["revisão automotiva Jundiaí", "check-up carro", "manutenção preventiva", "inspeção veicular"],
    features: [
      "Inspeção de 50 itens",
      "Verificação de fluidos",
      "Teste de bateria",
      "Inspeção de freios",
      "Verificação de suspensão",
      "Relatório completo",
    ],
    faq: [
      {
        question: "O que inclui a revisão completa?",
        answer: "Inspeção de todos os sistemas do veículo, desde motor até iluminação, com relatório detalhado.",
      },
      {
        question: "Preciso agendar a revisão?",
        answer: "Não! Atendemos por ordem de chegada. Você pode vir no horário que for melhor para você.",
      },
    ],
  },
  {
    id: "bateria",
    slug: "bateria-jundiai",
    title: "Bateria",
    description: "Troca e teste de bateria em Jundiaí. As melhores marcas com garantia.",
    shortDescription: "Teste e troca com garantia",
    price: "a partir de R$ 280",
    duration: "15 minutos",
    icon: "Battery",
    keywords: ["bateria Jundiaí", "troca de bateria", "bateria de carro", "teste de bateria"],
    features: [
      "Teste de carga gratuito",
      "Venda de baterias novas",
      "Instalação profissional",
      "Descarte ecológico",
      "Garantia de fábrica",
      "Teste do alternador",
    ],
    faq: [
      {
        question: "Qual a vida útil de uma bateria?",
        answer: "Em média 2 a 3 anos, mas pode variar conforme o uso e manutenção.",
      },
      {
        question: "Como saber se a bateria está ruim?",
        answer: "Carro demorando para ligar, luzes fracas ou luz de bateria no painel são sinais claros.",
      },
    ],
  },
  {
    id: "escapamento",
    slug: "escapamento-jundiai",
    title: "Escapamento",
    description: "Conserto e troca de escapamento em Jundiaí. Silencioso, catalisador, sonda lambda e mais.",
    shortDescription: "Conserto de barulho e vazamentos",
    price: "a partir de R$ 80",
    duration: "30 min - 2 horas",
    icon: "Wind",
    keywords: ["escapamento Jundiaí", "conserto escapamento", "catalisador", "barulho escapamento", "vazamento escapamento"],
    features: [
      "Soldagem de furos e rachaduras",
      "Troca de silencioso",
      "Substituição de catalisador",
      "Troca de sonda lambda",
      "Diagnóstico de barulhos",
      "Garantia em todos os serviços",
    ],
    faq: [
      {
        question: "Por que meu escapamento está fazendo barulho?",
        answer: "Pode ser furo no cano, silencioso danificado ou junta queimada. Fazemos diagnóstico gratuito.",
      },
      {
        question: "É perigoso dirigir com escapamento vazando?",
        answer: "Sim! Pode liberar gases tóxicos para dentro do carro. Procure uma oficina imediatamente.",
      },
    ],
  },
];

// Bairros atendidos
export const neighborhoods = [
  "Vila Arens",
  "Centro",
  "Anhangabaú",
  "Vila Rami",
  "Vila Hortolândia",
  "Vila Progresso",
  "Jardim das Oliveiras",
  "Jardim Pacaembu",
  "Vila Jundiainópolis",
  "Jardim Tamoio",
];

// Diferenciais
export const differentials = [
  {
    icon: "Clock",
    title: "Atendimento Rápido",
    description: "Serviço no mesmo dia, sem necessidade de agendamento. Você chega e é atendido.",
  },
  {
    icon: "Shield",
    title: "Orçamento Transparente",
    description: "Preço justo e explicado na hora. Sem surpresas na hora de pagar.",
  },
  {
    icon: "Users",
    title: "Atendimento Humano",
    description: "Mecânicos que explicam o serviço de forma clara e honesta.",
  },
  {
    icon: "Building2",
    title: "Estrutura Completa",
    description: "Espaço amplo e organizado com capacidade para 30 carros por dia.",
  },
  {
    icon: "Coffee",
    title: "Sala de Espera Confortável",
    description: "Ambiente climatizado com TV, Wi-Fi e café enquanto espera.",
  },
  {
    icon: "MapPin",
    title: "Localização Estratégica",
    description: "Fácil acesso na Av. Fernando Arens, no coração de Vila Arens.",
  },
];

// Schema.org para SEO
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: businessConfig.name,
  description: businessConfig.description,
  url: businessConfig.website,
  telephone: businessConfig.phoneFormatted,
  email: businessConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessConfig.address.street,
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
  priceRange: "$$",
  image: `${businessConfig.website}/images/oficina-jundiai.jpg`,
});

export const generateServiceSchema = (service: typeof services[0]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: {
    "@type": "AutoRepair",
    name: businessConfig.name,
  },
  areaServed: {
    "@type": "City",
    name: "Jundiaí",
  },
  offers: {
    "@type": "Offer",
    price: service.price.replace(/\D/g, ""),
    priceCurrency: "BRL",
  },
});

export const generateFAQSchema = (faq: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
