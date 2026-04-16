import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig, services } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: `Serviços Automotivos em Jundiaí | ${businessConfig.name}`,
  description: "Serviços automotivos rápidos em Jundiaí: troca de óleo, freios, suspensão, pneus, alinhamento e mais. Atendimento no mesmo dia, sem agendamento. Orçamento transparente.",
  keywords: [
    "serviços automotivos Jundiaí",
    "mecânica Jundiaí",
    "oficina Vila Arens",
    "manutenção carro Jundiaí",
    "troca de óleo Jundiaí",
    "freios Jundiaí",
    "centro automotivo Jundiaí"
  ],
};

export default function ServicosHubPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={[
              { label: "Início", href: "/" },
              { label: "Serviços" }
            ]} />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Serviços Automotivos em Jundiaí
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              Tudo que seu carro precisa em um só lugar. Atendimento rápido, 
              sem agendamento e com garantia de qualidade em Jundiaí e região.
            </p>

            <CTAButton size="lg" message="Olá! Quero fazer um orçamento para meu carro.">
              Falar agora e resolver hoje
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cuidamos do seu carro com rapidez e qualidade
            </h2>
            
            <p className="text-gray-600 mb-6">
              Procurando por serviços automotivos confiáveis em Jundiaí? O Centro Automotivo 
              Jundiaí oferece soluções completas para manter seu veículo em perfeito estado. 
              Localizado estrategicamente na Vila Arens, atendemos clientes de toda a cidade 
              e região, incluindo Centro, Anhangabaú e bairros vizinhos.
            </p>

            <p className="text-gray-600 mb-6">
              Nossa diferencial é a agilidade. Sabemos que seu tempo é precioso, por isso 
              trabalhamos para resolver a maioria dos serviços no mesmo dia. Sem filas 
              intermináveis, sem necessidade de agendamento com dias de antecedência. 
              Você chega, é atendido e resolve seu problema rapidamente.
            </p>

            <p className="text-gray-600 mb-6">
              Contamos com uma equipe de mecânicos experientes e equipamentos modernos 
              para diagnosticar e solucionar qualquer problema do seu veículo. Desde 
              manutenções preventivas simples até reparos mais complexos, estamos 
              preparados para atender todas as marcas e modelos de carros nacionais 
              e importados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nossos Serviços em Jundiaí
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}/`}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <span className="text-2xl">{service.icon === "Droplets" && "💧"}
                    {service.icon === "CircleDot" && "⚫"}
                    {service.icon === "MoveVertical" && "↕️"}
                    {service.icon === "Circle" && "⭕"}
                    {service.icon === "AlignCenter" && "📐"}
                    {service.icon === "ClipboardCheck" && "📋"}
                    {service.icon === "Battery" && "🔋"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que escolher nossos serviços em Jundiaí?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">⚡ Atendimento Rápido</h3>
                <p className="text-gray-600">Resolução no mesmo dia para a maioria dos serviços. Sem espera, sem enrolação.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">💰 Orçamento Transparente</h3>
                <p className="text-gray-600">Preço justo explicado na hora. Você sabe exatamente o que está pagando.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">👨‍🔧 Mecânicos Especializados</h3>
                <p className="text-gray-600">Equipe experiente para todas as marcas e modelos de veículos.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">📍 Localização Estratégica</h3>
                <p className="text-gray-600">Fácil acesso na Vila Arens, atendendo toda Jundiaí e região.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Atendemos toda Jundiaí e região
            </h3>
            
            <p className="text-gray-600 mb-6">
              Localizados na Avenida Fernando Arens, no coração da Vila Arens, somos a 
              escolha preferida de moradores de diversos bairros de Jundiaí. Atendemos 
              clientes do Centro, Anhangabaú, Vila Rami, Vila Hortolândia, Vila Progresso, 
              Jardim das Oliveiras, Jardim Pacaembu e toda a região.
            </p>

            <p className="text-gray-600 mb-6">
              Nossa estrutura completa permite atender até 30 carros por dia, garantindo 
              que você não precise esperar horas para resolver o problema do seu veículo. 
              A sala de espera climatizada oferece conforto enquanto cuidamos do seu carro.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Manutenção preventiva ou corretiva?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Independentemente da necessidade do seu veículo, temos a solução ideal. 
              Para manutenções preventivas, oferecemos revisões completas que verificam 
              todos os sistemas do carro, evitando problemas futuros e garantindo sua 
              segurança no dia a dia.
            </p>

            <p className="text-gray-600 mb-6">
              Se o problema já aconteceu, nossa equipe está preparada para diagnosticar 
              rapidamente e apresentar a melhor solução. Trabalhamos com peças de qualidade 
              e damos garantia em todos os serviços realizados.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Como funciona nosso atendimento
            </h3>
            
            <p className="text-gray-600 mb-6">
              É simples e rápido. Você chega na nossa oficina, localizada na Avenida 
              Fernando Arens, 457, em Vila Arens, Jundiaí. Nossa equipe faz uma avaliação 
              inicial do seu veículo e apresenta um orçamento detalhado. Sem surpresas, 
              sem taxas ocultas.
            </p>

            <p className="text-gray-600 mb-6">
              Após sua aprovação, iniciamos o serviço imediatamente. A maioria das 
              manutenções é concluída em poucas horas. Para serviços mais complexos, 
              informamos o prazo realista antes de começar.
            </p>

            <p className="text-gray-600 mb-8">
              Não deixe para depois aquela manutenção que seu carro precisa. Problemas 
              pequenos podem se tornar grandes se ignorados. Entre em contato conosco 
              hoje mesmo e cuide do seu veículo com quem entende do assunto em Jundiaí.
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para cuidar do seu carro?
              </h3>
              <p className="text-gray-600 mb-6">
                Fale conosco agora pelo WhatsApp e faça seu orçamento sem compromisso.
              </p>
              <CTAButton size="lg" message="Olá! Vi a página de serviços e quero fazer um orçamento.">
                Falar agora e resolver hoje
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes sobre Nossos Serviços
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Preciso agendar para fazer um serviço?</h3>
                <p className="text-gray-600">Não! Atendemos por ordem de chegada. Você pode vir no horário que for melhor para você, de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Quanto tempo leva a troca de óleo?</h3>
                <p className="text-gray-600">Em média 30 minutos. Você espera no conforto da nossa sala de espera com TV, Wi-Fi e café.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Vocês trabalham com todas as marcas de carro?</h3>
                <p className="text-gray-600">Sim! Atendemos carros nacionais e importados de todas as marcas. Nossa equipe está preparada para cuidar do seu veículo, seja ele popular, de luxo ou utilitário.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Onde fica a oficina?</h3>
                <p className="text-gray-600">Estamos na Avenida Fernando Arens, 457, Vila Arens, Jundiaí - SP. Fácil acesso para quem vem do Centro, Anhangabaú ou qualquer bairro da cidade.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Os serviços têm garantia?</h3>
                <p className="text-gray-600">Sim! Damos garantia em todos os serviços realizados. Trabalhamos com peças de qualidade e mão de obra especializada. Sua satisfação é nossa prioridade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
