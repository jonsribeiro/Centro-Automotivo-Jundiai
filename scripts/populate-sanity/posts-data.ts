import { CategoryContent, PostContent, PortableTextBlock } from "./types";

// Helper para criar bloco de texto
function block(
  text: string,
  style: PortableTextBlock["style"] = "normal",
  options: { listItem?: PortableTextBlock["listItem"]; marks?: string[] } = {}
): PortableTextBlock {
  return {
    _type: "block",
    style,
    ...(options.listItem && { listItem: options.listItem }),
    children: [
      {
        _type: "span",
        text,
        ...(options.marks && { marks: options.marks }),
      },
    ],
  };
}

// Categorias
export const categories: CategoryContent[] = [
  {
    title: "Manutenção",
    slug: "manutencao",
    description: "Dicas e guias de manutenção preventiva para seu veículo",
  },
  {
    title: "Problemas Comuns",
    slug: "problemas-comuns",
    description: "Sintomas, diagnósticos e soluções para problemas frequentes",
  },
  {
    title: "Custos",
    slug: "custos",
    description: "Informações sobre preços e como economizar na manutenção",
  },
];

// Posts
export const posts: PostContent[] = [
  // Post 1: Troca de óleo
  {
    title: "Troca de óleo em Jundiaí: quando fazer e quanto custa",
    slug: "troca-de-oleo-jundiai",
    metaTitle: "Troca de óleo em Jundiaí: quando fazer e quanto custa | Centro Automotivo",
    metaDescription:
      "Descubra o momento certo para trocar o óleo do seu carro em Jundiaí. Preços, tipos de óleo e onde fazer. Atendimento rápido na Vila Arens.",
    excerpt:
      "Saiba exatamente quando trocar o óleo do seu carro, quanto custa em Jundiaí e por que a troca regular é essencial para a saúde do motor.",
    author: "Centro Automotivo Jundiaí",
    publishedAt: new Date().toISOString(),
    category: "manutencao",
    readTime: "6 min",
    tags: ["troca de óleo", "manutenção", "Jundiaí", "preço", "motor"],
    body: [
      block(
        "Quando trocar o óleo do carro em Jundiaí?",
        "h2"
      ),
      block(
        "A troca de óleo é um dos serviços mais importantes para a saúde do seu veículo. Em Jundiaí, com o trânsito intenso e as temperaturas elevadas do verão, essa manutenção se torna ainda mais crucial. Muitos motoristas ignoram os prazos recomendados e acabam causando danos graves ao motor."
      ),
      block(
        "O ideal é seguir as recomendações do fabricante do seu veículo, mas existem algumas regras gerais que podem ajudar:"
      ),
      block("Óleo mineral: a cada 5.000 km ou 6 meses", "normal", {
        listItem: "bullet",
      }),
      block("Óleo semissintético: a cada 7.500 km ou 8 meses", "normal", {
        listItem: "bullet",
      }),
      block("Óleo sintético: a cada 10.000 km ou 1 ano", "normal", {
        listItem: "bullet",
      }),
      block("Quanto custa a troca de óleo em Jundiaí?", "h2"),
      block(
        "Os preços em Jundiaí variam conforme o tipo de óleo e a capacidade do cárter do seu veículo. Na Vila Arens, onde está localizado o Centro Automotivo Jundiaí, você encontra preços competitivos com qualidade garantida."
      ),
      block(
        "Óleo mineral: a partir de R$ 120", "normal", { listItem: "bullet" }),
      block("Óleo semissintético: a partir de R$ 180", "normal", {
        listItem: "bullet",
      }),
      block("Óleo 100% sintético: a partir de R$ 250", "normal", {
        listItem: "bullet",
      }),
      block("Por que trocar o óleo regularmente?", "h2"),
      block(
        "O óleo lubrificante tem a função de reduzir o atrito entre as peças do motor, evitando o desgaste prematuro. Com o tempo, ele perde suas propriedades e acumula impurezas, tornando-se prejudicial ao invés de protetor."
      ),
      block(
        "Em Jundiaí, o calor intenso acelera a degradação do óleo, especialmente em meses de verão. O trânsito urbano constante, com paradas e arrancadas, também exige mais do lubrificante."
      ),
      block("Onde fazer a troca de óleo em Jundiaí?", "h2"),
      block(
        "O Centro Automotivo Jundiaí, localizado na Av. Fernando Arens, 457, na Vila Arens, oferece serviço de troca de óleo rápido e profissional. Com mais de 10 anos de experiência, nossa equipe conhece as necessidades específicas dos veículos que circulam em Jundiaí."
      ),
      block(
        "Não é apenas trocar o óleo. Fazemos também a verificação de todos os fluidos, inspeção visual do motor e descarte ecológico do óleo usado. Tudo em aproximadamente 30 minutos, enquanto você espera em nossa sala de espera climatizada."
      ),
    ],
    faq: [
      {
        question: "Posso trocar só o óleo sem trocar o filtro?",
        answer:
          "Não recomendamos. O filtro de óleo retém impurezas do óleo antigo. Trocar só o óleo é como tomar banho de roupa suja. Sempre substituímos o filtro junto com o óleo.",
      },
      {
        question: "O que acontece se eu atrasar a troca de óleo?",
        answer:
          "O óleo degradado perde a capacidade de lubrificação, causando atrito excessivo entre as peças do motor. Isso leva a desgaste prematuro, perda de potência e, em casos graves, pode exigir uma retífica de motor que custa entre R$ 3.000 e R$ 8.000.",
      },
      {
        question: "Qual óleo é melhor para meu carro?",
        answer:
          "Depende do modelo e ano do veículo. Carros modernos (acima de 2015) e motores turbo se beneficiam mais do óleo sintético. Carros mais antigos com uso urbano podem usar mineral sem problemas. Consulte o manual do fabricante ou nossos mecânicos.",
      },
      {
        question: "Vocês trabalham com óleo das principais marcas?",
        answer:
          "Sim! Trabalhamos com Mobil, Shell, Castrol, Lubrax e outras marcas renomadas. Você pode trazer seu próprio óleo e pagar apenas a mão de obra, se preferir.",
      },
    ],
  },

  // Post 2: Freios
  {
    title: "Freios do carro: sinais de desgaste que você não pode ignorar",
    slug: "sinais-desgaste-freios",
    metaTitle:
      "Sinais de Desgaste nos Freios | Centro Automotivo Jundiaí",
    metaDescription:
      "Aprenda a identificar os sinais de desgaste nos freios do seu carro. Barulho, vibração, pedal baixo? Saiba quando procurar um mecânico em Jundiaí.",
    excerpt:
      "Barulho ao frear, pedal baixo ou vibração no volante? Descubra os sinais de alerta que indicam problemas nos freios e como evitar acidentes.",
    author: "Centro Automotivo Jundiaí",
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 dia atrás
    category: "problemas-comuns",
    readTime: "7 min",
    tags: ["freios", "segurança", "desgaste", "Jundiaí", "pastilhas"],
    body: [
      block("Os freios estão falhando? Saiba identificar", "h2"),
      block(
        "Os freios são o sistema de segurança mais importante do seu veículo. Ignorar os sinais de desgaste pode colocar em risco não apenas a sua vida, mas também a de passageiros e outros motoristas. Em Jundiaí, onde o trânsito é intenso, manter os freios em perfeito estado é fundamental."
      ),
      block("Barulho ao frear: o primeiro alerta", "h3"),
      block(
        "Se você ouve um chiado ou rangido ao pisar no freio, é sinal de que as pastilhas estão desgastadas. Esse som é causado por uma pequena lâmina de metal nas pastilhas que entra em contato com o disco quando o material de fricção acaba. Não ignore: isso significa que está na hora da troca imediata."
      ),
      block("Pedal baixo ou esponjoso", "h3"),
      block(
        "Se o pedal do freio vai mais fundo que o normal ou tem uma sensação mole, pode haver ar no sistema hidráulico, vazamento de fluido ou desgaste excessivo das pastilhas. Esse problema compromete a eficiência da frenagem e aumenta a distância de parada."
      ),
      block("Vibração no volante ao frear", "h3"),
      block(
        "Se o volante treme quando você freia, especialmente em velocidades mais altas, os discos de freio podem estar empenados ou com espessura irregular. Esse desgaste uneven reduz a eficiência da frenagem e pode danificar outras peças do sistema."
      ),
      block("Luz de freio acesa no painel", "h3"),
      block(
        "A luz de freio no painel não é apenas um aviso: é um pedido de socorro do seu carro. Pode indicar nível baixo de fluido, desgaste das pastilhas ou problema no sistema ABS. Diagnóstico imediato é essencial."
      ),
      block("Quanto custa trocar os freios em Jundiaí?", "h2"),
      block(
        "O valor depende do modelo do carro e do tipo de peça. Na Vila Arens, o Centro Automotivo Jundiaí oferece preços justos e transparentes:"
      ),
      block("Troca de pastilhas: a partir de R$ 180", "normal", {
        listItem: "bullet",
      }),
      block("Troca de discos + pastilhas: a partir de R$ 480", "normal", {
        listItem: "bullet",
      }),
      block("Revisão completa do sistema: a partir de R$ 150", "normal", {
        listItem: "bullet",
      }),
      block("Onde fazer revisão de freios em Jundiaí?", "h2"),
      block(
        "Localizado na Av. Fernando Arens, 457, o Centro Automotivo Jundiaí tem equipamentos modernos para diagnóstico completo do sistema de freios. Testamos cada componente e apresentamos um orçamento detalhado antes de qualquer serviço."
      ),
    ],
    faq: [
      {
        question: "A cada quantos km devo trocar as pastilhas de freio?",
        answer:
          "Em média, a cada 30.000 a 50.000 km, mas isso varia muito conforme o estilo de direção. Quem dirige em trânsito urbano intenso, como em Jundiaí, pode precisar trocar mais cedo. A inspeção visual a cada 10.000 km é recomendada.",
      },
      {
        question: "Posso trocar só as pastilhas sem trocar os discos?",
        answer:
          "Sim, se os discos estiverem em boas condições (sem ranhuras profundas, empenamento ou espessura abaixo do mínimo). Fazemos medição precisa da espessura dos discos para determinar se podem ser reaproveitados.",
      },
      {
        question: "Freio ABS tem manutenção diferente?",
        answer:
          "O sistema ABS em si não requer manutenção específica, mas os componentes de frenagem (pastilhas, discos, fluido) seguem o mesmo cronograma. Se a luz do ABS acender, é necessário diagnóstico especializado imediatamente.",
      },
      {
        question: "Quanto tempo leva para trocar os freios?",
        answer:
          "A troca de pastilhas leva cerca de 1 hora. Se for necessário trocar discos também, cerca de 2 horas. Fazemos o serviço com agilidade, sem comprometer a qualidade.",
      },
    ],
  },

  // Post 3: Suspensão
  {
    title: "Suspensão barulhenta: principais causas e riscos",
    slug: "suspensao-barulhenta-causas",
    metaTitle: "Suspensão Barulhenta: Causas e Soluções | Centro Automotivo Jundiaí",
    metaDescription:
      "Descubra por que sua suspensão está fazendo barulho. Batidas, rangidos e soluções. Mecânico especializado em Jundiaí, Vila Arens.",
    excerpt:
      "Barulhos na suspensão podem indicar problemas graves. Conheça as causas mais comuns, os riscos de ignorar e onde consertar em Jundiaí.",
    author: "Centro Automotivo Jundiaí",
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 dias atrás
    category: "problemas-comuns",
    readTime: "6 min",
    tags: ["suspensão", "barulho", "amortecedor", "Jundiaí", "conforto"],
    body: [
      block("Por que minha suspensão está barulhenta?", "h2"),
      block(
        "Se você ouve batidas, rangidos ou estalos ao passar por lombadas ou ruas irregulares, sua suspensão está pedindo atenção. Em Jundiaí, onde as ruas do Centro e da Vila Arens têm muitos desníveis, esse problema é particularmente comum."
      ),
      block("Amortecedores desgastados", "h3"),
      block(
        "Os amortecedores têm vida útil limitada, geralmente entre 60.000 e 80.000 km. Quando desgastados, perdem a capacidade de absorver impactos, causando batidas secas e reduzindo a estabilidade do veículo. O risco é maior em curvas e em frenagens."
      ),
      block("Buchas e coxins gastos", "h3"),
      block(
        "As buchas de borracha e coxins da suspensão se degradam com o tempo, especialmente com a exposição ao calor e às intempéries. Quando racham ou soltam, causam rangidos característicos e folga na direção."
      ),
      block("Molas quebradas ou cansadas", "h3"),
      block(
        "Molas quebradas são perigosas e devem ser substituídas imediatamente. Molas cansadas fazem o carro ficar mais baixo de um lado, prejudicando a geometria da suspensão e o desgaste dos pneus."
      ),
      block("Riscos de ignorar a suspensão barulhenta", "h2"),
      block(
        "Dirigir com suspensão defeituosa não é apenas desconfortável: é perigoso. A estabilidade do veículo em curvas é comprometida, a distância de frenagem aumenta e o desgaste dos pneus se acelera. Em situações extremas, pode haver perda de controle."
      ),
      block(
        "Além disso, o problema em uma peça pode se espalhar para outras. Um amortecedor ruim pode danificar os coxins, que por sua vez afetam a geometria, desgastando os pneus prematuramente."
      ),
      block("Quanto custa consertar a suspensão?", "h2"),
      block(
        "O valor depende do diagnóstico preciso. No Centro Automotivo Jundiaí, fazemos inspeção completa e apresentamos orçamento detalhado:"
      ),
      block("Troca de amortecedores (par): a partir de R$ 500", "normal", {
        listItem: "bullet",
      }),
      block("Troca de buchas: a partir de R$ 200", "normal", {
        listItem: "bullet",
      }),
      block("Troca de coxins: a partir de R$ 180", "normal", {
        listItem: "bullet",
      }),
      block("Revisão completa da suspensão: a partir de R$ 150", "normal", {
        listItem: "bullet",
      }),
    ],
    faq: [
      {
        question: "A cada quantos km trocar os amortecedores?",
        answer:
          "Em média, a cada 60.000 a 80.000 km. Mas isso varia conforme o uso. Carros que rodam em ruas ruins, como algumas regiões de Jundiaí, podem precisar trocar mais cedo. Sinais de vazamento de óleo nos amortecedores indicam troca imediata.",
      },
      {
        question: "Posso trocar só um amortecedor?",
        answer:
          "Não recomendamos. Amortecedores devem ser trocados aos pares (dianteiro ou traseiro) para manter a estabilidade do veículo. Trocar só um pode causar desequilíbrio e comportamento imprevisível.",
      },
      {
        question: "Suspensão barulhenta pode dar multa?",
        answer:
          "Embora não seja comum, um veículo com suspensão em péssimo estado pode ser considerado em condições precárias de segurança. Além disso, o desgaste excessivo pode comprometer itens de segurança obrigatória na vistoria.",
      },
      {
        question: "Quanto tempo dura o conserto da suspensão?",
        answer:
          "Depende do serviço. Troca de buchas leva cerca de 2-3 horas. Troca de amortecedores, 1-2 horas. Fazemos diagnóstico gratuito e informamos o tempo exato após avaliação.",
      },
    ],
  },

  // Post 4: Alinhamento
  {
    title: "Alinhamento e balanceamento: quando fazer e por quê?",
    slug: "alinhamento-balanceamento-quando-fazer",
    metaTitle:
      "Alinhamento e Balanceamento em Jundiaí | Centro Automotivo",
    metaDescription:
      "Saiba quando fazer alinhamento e balanceamento. Sinais de desalinhamento, importância para os pneus e segurança. Oficina em Jundiaí, Vila Arens.",
    excerpt:
      "Carro puxando para o lado? Volante torto? Descubra quando fazer alinhamento e balanceamento e por que isso economiza seus pneus.",
    author: "Centro Automotivo Jundiaí",
    publishedAt: new Date(Date.now() - 259200000).toISOString(), // 3 dias atrás
    category: "manutencao",
    readTime: "5 min",
    tags: [
      "alinhamento",
      "balanceamento",
      "pneus",
      "Jundiaí",
      "economia",
    ],
    body: [
      block("O que é alinhamento e balanceamento?", "h2"),
      block(
        "O alinhamento é o ajuste dos ângulos das rodas para que elas fiquem perpendiculares ao solo e paralelas entre si. Já o balanceamento distribui o peso da roda de forma uniforme, evitando vibrações. Ambos são essenciais para a segurança, economia de combustível e durabilidade dos pneus."
      ),
      block("Sinais de que seu carro precisa de alinhamento", "h3"),
      block(
        "Carro puxando para um lado quando você solta o volante", "normal", {
        listItem: "bullet",
      }),
      block("Volante torto quando o carro anda reto", "normal", {
        listItem: "bullet",
      }),
      block("Desgaste irregular nos pneus", "normal", { listItem: "bullet" }),
      block("Vibração no volante em velocidades acima de 80 km/h", "normal", {
        listItem: "bullet",
      }),
      block("Quando fazer alinhamento e balanceamento?", "h2"),
      block(
        "A recomendação geral é a cada 10.000 km ou quando notar algum dos sintomas acima. Em Jundiaí, onde há muitos quebra-molas e ruas com desníveis, é importante ficar atento. Após passar por buracos profundos ou bater na calçada, o alinhamento pode ser afetado."
      ),
      block(
        "Também é recomendado fazer o serviço quando:"
      ),
      block("Trocar os pneus", "normal", { listItem: "bullet" }),
      block("Fazer qualquer serviço na suspensão", "normal", {
        listItem: "bullet",
      }),
      block("Notar desgaste irregular nos pneus", "normal", {
        listItem: "bullet",
      }),
      block("Após bater forte em buraco ou quebra-molas", "normal", {
        listItem: "bullet",
      }),
      block("Por que o alinhamento é importante?", "h2"),
      block(
        "Um carro desalinhado pode reduzir a vida útil dos pneus em até 50%. Além disso, aumenta o consumo de combustível e prejudica a segurança, especialmente em curvas e em situações de frenagem de emergência."
      ),
      block(
        "O investimento em alinhamento e balanceamento é pequeno comparado ao custo de trocar pneus prematuramente. Na média, o serviço paga-se sozinho em economia de combustível e durabilidade dos pneus."
      ),
      block("Quanto custa em Jundiaí?", "h2"),
      block(
        "No Centro Automotivo Jundiaí, na Vila Arens, oferecemos:"
      ),
      block("Alinhamento computadorizado 3D: a partir de R$ 80", "normal", {
        listItem: "bullet",
      }),
      block("Balanceamento de rodas: a partir de R$ 40", "normal", {
        listItem: "bullet",
      }),
      block("Pacote alinhamento + balanceamento: a partir de R$ 100", "normal", {
        listItem: "bullet",
      }),
    ],
    faq: [
      {
        question: "Alinhamento e balanceamento são a mesma coisa?",
        answer:
          "Não. Alinhamento ajusta os ângulos das rodas para que elas fiquem na posição correta. Balanceamento distribui o peso da roda para evitar vibrações. Ambos são importantes e geralmente feitos juntos.",
      },
      {
        question: "Quanto tempo leva o serviço?",
        answer:
          "Em média, 1 hora para alinhamento e balanceamento de quatro rodas. Utilizamos equipamento computadorizado moderno que garante precisão e agilidade.",
      },
      {
        question: "Posso fazer só o balanceamento?",
        answer:
          "Sim, se o problema for apenas vibração no volante e o alinhamento estiver correto. Mas se o carro estiver puxando para o lado, o alinhamento é obrigatório.",
      },
      {
        question: "Alinhamento resolve o problema de carro puxando?",
        answer:
          "Se o desalinhamento for a causa, sim. Mas se o problema for na suspensão (bucha, pivô, terminal de direção), é necessário consertar essas peças primeiro. Fazemos diagnóstico completo para identificar a causa real.",
      },
    ],
  },

  // Post 5: Revisão preventiva
  {
    title: "Revisão preventiva: como evitar gastos altos no seu carro",
    slug: "revisao-preventiva-evitar-gastos",
    metaTitle:
      "Revisão Preventiva do Carro em Jundiaí | Centro Automotivo",
    metaDescription:
      "Descubra como a revisão preventiva pode economizar dinheiro. Check-up completo, diagnóstico e manutenção. Oficina mecânica em Jundiaí.",
    excerpt:
      "Prevenir é melhor que remediar. Saiba como uma revisão preventiva simples pode evitar gastos de milhares de reais com seu carro.",
    author: "Centro Automotivo Jundiaí",
    publishedAt: new Date(Date.now() - 345600000).toISOString(), // 4 dias atrás
    category: "manutencao",
    readTime: "8 min",
    tags: [
      "revisão preventiva",
      "economia",
      "manutenção",
      "Jundiaí",
      "check-up",
    ],
    body: [
      block("O que é revisão preventiva?", "h2"),
      block(
        "A revisão preventiva é um check-up completo do seu veículo, realizado periodicamente, para identificar problemas antes que eles se tornem defeitos graves. É como uma consulta médica de rotina: detecta sintomas iniciais e permite tratamento rápido e barato."
      ),
      block(
        "No Centro Automotivo Jundiaí, nossa revisão preventiva inclui mais de 50 itens de verificação, desde fluidos e filtros até componentes de suspensão, freios e sistema elétrico."
      ),
      block("Por que a revisão preventiva economiza dinheiro?", "h2"),
      block(
        "Um estudo da Fenabrave mostra que brasileiros gastam em média 40% mais com manutenção corretiva (quando o carro quebra) do que preventiva. Cada 1 real gasto em prevenção economiza cerca de 4 reais em reparos futuros."
      ),
      block("Exemplos práticos de economia:", "h3"),
      block(
        "Troca de correia dentada no prazo: R$ 400. Quebra da correia e danos ao motor: R$ 3.000 a 8.000.",
        "normal",
        { listItem: "bullet" }
      ),
      block(
        "Troca de pastilhas de freio: R$ 180. Disco e pinça danificados por pastilha gasta: R$ 600 a 1.200.",
        "normal",
        { listItem: "bullet" }
      ),
      block(
        "Troca de óleo preventiva: R$ 150. Retífica de motor por falta de óleo: R$ 3.000 a 8.000.",
        "normal",
        { listItem: "bullet" }
      ),
      block("O que inclui a revisão preventiva?", "h2"),
      block("Nossa revisão completa verifica:"),
      block("Nível e qualidade de todos os fluidos", "normal", {
        listItem: "bullet",
      }),
      block("Desgaste das pastilhas e discos de freio", "normal", {
        listItem: "bullet",
      }),
      block("Estado da suspensão e amortecedores", "normal", {
        listItem: "bullet",
      }),
      block("Condição dos pneus e calibragem", "normal", { listItem: "bullet" }),
      block("Sistema de arrefecimento", "normal", { listItem: "bullet" }),
      block("Bateria e sistema de carga", "normal", { listItem: "bullet" }),
      block("Correias e tensores", "normal", { listItem: "bullet" }),
      block("Filtros de ar, óleo e combustível", "normal", {
        listItem: "bullet",
      }),
      block("Sistema de iluminação", "normal", { listItem: "bullet" }),
      block("Quando fazer a revisão preventiva?", "h2"),
      block(
        "A recomendação geral é a cada 6 meses ou 10.000 km, o que ocorrer primeiro. Em Jundiaí, com o calor intenso e o trânsito urbano, essa periodicidade é especialmente importante."
      ),
      block(
        "Além disso, é recomendado fazer uma revisão antes de viagens longas, após passar por estradas de terra ou quando notar qualquer comportamento diferente no carro."
      ),
      block("Quanto custa a revisão preventiva em Jundiaí?", "h2"),
      block(
        "No Centro Automotivo Jundiaí, oferecemos revisão preventiva completa a partir de R$ 150. Esse valor inclui diagnóstico completo, relatório detalhado e orçamento transparente de tudo o que precisa ser feito."
      ),
      block(
        "Lembre-se: o custo da revisão é um investimento, não uma despesa. O que você gasta em prevenção volta multiplicado em economia de combustível, durabilidade das peças e tranquilidade ao dirigir."
      ),
    ],
    faq: [
      {
        question: "Revisão preventiva é a mesma coisa que revisão de concessionária?",
        answer:
          "Não exatamente. A revisão de concessionária segue um cronograma específico do fabricante e geralmente inclui itens mais caros. Nossa revisão preventiva é um check-up geral que pode ser feito a qualquer momento e foca em detectar problemas antes que apareçam.",
      },
      {
        question: "Posso fazer revisão preventiva em carro novo?",
        answer:
          "Sim, e é recomendado! Mesmo carros novos precisam de verificação periódica. A garantia não é perdida desde que você mantenha os serviços obrigatórios da concessionária. Nossa revisão é complementar e ajuda a manter o carro em ótimo estado.",
      },
      {
        question: "Quanto tempo leva a revisão preventiva?",
        answer:
          "A inspeção completa leva cerca de 1 hora. Se forem necessários serviços adicionais (troca de óleo, filtros, etc.), o tempo aumenta conforme o trabalho. Você pode aguardar em nossa sala de espera com ar-condicionado e Wi-Fi.",
      },
      {
        question: "Vocês fazem revisão para carros de todas as marcas?",
        answer:
          "Sim! Atendemos todas as marcas e modelos. Nossa equipe tem experiência com veículos nacionais e importados, de todos os anos. Temos equipamentos de diagnóstico modernos compatíveis com a maioria dos carros.",
      },
      {
        question: "A revisão preventiva inclui troca de peças?",
        answer:
          "A revisão em si é um diagnóstico. Se forem encontrados itens que precisam de atenção, apresentamos um orçamento detalhado e você decide o que fazer. Não há obrigatoriedade de fazer os serviços conosco, embora muitos clientes prefiram pela conveniência e preço justo.",
      },
    ],
  },
];
