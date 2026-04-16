import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Carros com Barulho no Escape: Causas em Jundiaí",
  description:
    "Carro com barulho no escape? Descubra as causas e soluções. Mecânico especializado em Jundiaí, Vila Arens. Orçamento grátis!",
  keywords: [
    "barulho escape",
    "ronco escape",
    "barulho carro",
    "escape barulhento",
    "mecânico Jundiaí",
  ],
};

export default function BarulhoEscapePage() {
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
            Carros com Barulho no Escape
            <span className="block text-red-500">Causas em Jundiaí</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            O barulho no escape é comum em carros que circulam em ruas com
            desníveis, como em Jundiaí. Entenda as causas e saiba quando levar
            ao mecânico.
          </p>

          <CTAButton
            size="lg"
            message="Olá! Meu carro está com barulho no escape e preciso de ajuda em Jundiaí."
          >
            Diagnosticar Agora
          </CTAButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tipos de barulho e suas causas
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Ronco grave e contínuo",
                description:
                  "Indica furo no cano de escape ou silencioso danificado. Quanto maior o furo, mais grave o ronco.",
              },
              {
                title: "Estalos e pancadas",
                description:
                  "Podem ser causados por catalisador quebrado, pedras dentro do escape ou partes soltas batendo.",
              },
              {
                title: "Assobio ou chiado",
                description:
                  "Geralmente indica pequeno furo ou junta com vazamento. O som é mais agudo e pode variar com a rotação.",
              },
              {
                title: "Barulho ao acelerar",
                description:
                  "Se aumenta com a aceleração, provavelmente é furo no cano intermediário ou flexível do escape.",
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
            Barulho no escape? Não espere!
          </h2>
          <p className="text-white/85 mb-6">
            Quanto mais cedo resolver, mais barato fica. Atendemos em Jundiaí.
          </p>
          <CTAButton
            variant="secondary"
            message="Olá! Barulho no escape do carro em Jundiaí."
          >
            Orçamento Grátis
          </CTAButton>
        </div>
      </section>
    </>
  );
}
