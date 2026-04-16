import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Escapamento Fazendo Barulho em Jundiaí? Veja as Causas",
  description:
    "Escapamento fazendo barulho? Descubra as causas mais comuns e como resolver. Mecânico especializado em Jundiaí, Vila Arens. Atendimento rápido!",
  keywords: [
    "escapamento barulho",
    "barulho escapamento",
    "ronco escapamento",
    "escapamento estalando",
    "mecânico Jundiaí",
  ],
};

export default function EscapamentoBarulhoPage() {
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
            Escapamento Fazendo Barulho em Jundiaí?
            <span className="block text-red-500">Descubra as Causas</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            O barulho no escapamento é um dos problemas mais comuns em carros.
            Em Jundiaí, onde as ruas têm muitos desníveis, esse desgaste é
            acelerado. Saiba quando se preocupar e onde resolver.
          </p>

          <CTAButton
            size="lg"
            message="Olá! Meu escapamento está fazendo barulho e preciso de ajuda em Jundiaí."
          >
            Resolver Barulho Agora
          </CTAButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Principais causas do barulho no escapamento
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Furo ou ruptura no cano",
                description:
                  "O desgaste natural ou impactos em lombadas e buracos podem causar fissuras. O resultado é um ronco alto e característico.",
              },
              {
                title: "Silencioso danificado",
                description:
                  "O abafador interno pode se desgastar ou queimar, perdendo a capacidade de amortecer o som. O barulho fica metálico e ensurdecedor.",
              },
              {
                title: "Junta do escapamento queimada",
                description:
                  "As juntas entre as partes do escapamento se degradam com o calor. Quando falham, causam vazamento de gases e barulho de escape.",
              },
              {
                title: "Catalisador obstruído ou quebrado",
                description:
                  "O catalisador pode quebrar internamente, causando barulho de chocalho e obstrução do fluxo de gases.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Não ignore o barulho!
          </h2>
          <p className="text-white/85 mb-6">
            Um escapamento barulhento pode indicar vazamento de gases tóxicos.
            Atendemos em Jundiaí, Vila Arens.
          </p>
          <CTAButton
            variant="secondary"
            message="URGENTE: Escapamento fazendo barulho em Jundiaí."
          >
            Chamar Mecânico
          </CTAButton>
        </div>
      </section>
    </>
  );
}
