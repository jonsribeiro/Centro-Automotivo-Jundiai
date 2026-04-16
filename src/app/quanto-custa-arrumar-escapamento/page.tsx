import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quanto Custa Arrumar Escapamento em Jundiaí? Preços 2024",
  description:
    "Descubra os preços para consertar escapamento em Jundiaí. Soldagem, troca de silencioso, catalisador. Orçamento grátis na Vila Arens!",
  keywords: [
    "preço escapamento",
    "custo conserto escapamento",
    "quanto custa escapamento",
    "orçamento escapamento",
    "mecânico Jundiaí",
  ],
};

export default function CustoEscapamentoPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/escapamento-jundiai/"
            className="text-red-400 hover:text-red-300 mb-4 inline-block"
          >
            ← Voltar para Escapamento
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Quanto Custa Arrumar Escapamento
            <span className="block text-red-500">em Jundiaí? Preços 2024</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Preços transparentes para conserto de escapamento em Jundiaí.
            Soldagem, troca de silencioso, catalisador e mais. Orçamento grátis
            na Vila Arens!
          </p>

          <CTAButton
            size="lg"
            message="Olá! Gostaria de um orçamento para conserto de escapamento em Jundiaí."
          >
            Pedir Orçamento Grátis
          </CTAButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tabela de preços de escapamento em Jundiaí
          </h2>

          <div className="space-y-4">
            {[
              {
                service: "Soldagem simples",
                price: "R$ 80 - 150",
                description: "Reparo de pequenos furos e rachaduras",
              },
              {
                service: "Troca de junta",
                price: "R$ 100 - 200",
                description: "Substituição de juntas queimadas",
              },
              {
                service: "Troca de silencioso",
                price: "R$ 150 - 400",
                description: "Abafador intermediário ou traseiro",
              },
              {
                service: "Troca de catalisador",
                price: "R$ 800 - 2.500",
                description: "Catalisador novo com garantia",
              },
              {
                service: "Troca de sonda lambda",
                price: "R$ 200 - 500",
                description: "Sensor de oxigênio",
              },
              {
                service: "Reforma completa",
                price: "R$ 500 - 1.500",
                description: "Troca de múltiplas peças",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.service}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="text-red-600 font-bold text-xl">{item.price}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-6">
            * Preços podem variar conforme o modelo do veículo e complexidade do
            serviço. Solicite um orçamento personalizado.
          </p>
        </div>
      </section>

      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Orçamento grátis em Jundiaí!
          </h2>
          <p className="text-white/85 mb-6">
            Venha para a Av. Fernando Arens, 457, Vila Arens. Atendimento sem
            agendamento.
          </p>
          <CTAButton
            variant="secondary"
            message="Olá! Quero orçamento grátis para escapamento em Jundiaí."
          >
            Falar no WhatsApp
          </CTAButton>
        </div>
      </section>
    </>
  );
}
