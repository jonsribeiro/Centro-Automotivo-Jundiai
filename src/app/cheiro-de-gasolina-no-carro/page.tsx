import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/lib/config";
import { CTAButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cheiro de Gasolina no Carro? Causas e Soluções em Jundiaí",
  description:
    "Cheiro de gasolina no carro é perigoso. Descubra as causas e como resolver. Mecânico em Jundiaí, Vila Arens. Atendimento imediato!",
  keywords: [
    "cheiro gasolina carro",
    "odor gasolina",
    "vazamento combustível",
    "cheiro forte carro",
    "mecânico Jundiaí",
  ],
};

export default function CheiroGasolinaPage() {
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
            Cheiro de Gasolina no Carro?
            <span className="block text-red-500">Causas e Soluções</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Sentir cheiro de gasolina dentro do carro é um alerta de segurança.
            Pode indicar vazamento de combustível ou problemas no escapamento.
            Saiba o que fazer imediatamente.
          </p>

          <CTAButton
            size="lg"
            message="URGENTE: Cheiro de gasolina no carro em Jundiaí. Preciso de ajuda!"
          >
            Resolver Agora
          </CTAButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Por que sinto cheiro de gasolina?
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Vazamento no escapamento",
                description:
                  "Um furo no escapamento antes do catalisador pode liberar gases de escape com cheiro de combustível não queimado. Perigoso para saúde!",
              },
              {
                title: "Injeção eletrônica com problema",
                description:
                  "Bicos injetores sujos ou defeituosos podem não atomizar o combustível corretamente, causando cheiro forte e consumo elevado.",
              },
              {
                title: "Vazamento no tanque ou tubulação",
                description:
                  "Rachaduras no tanque, mangueiras deterioradas ou conexões soltas podem vazar gasolina. Risco de incêndio!",
              },
              {
                title: "Filtro de ar saturado",
                description:
                  "Ar filtro muito sujo faz a mistura ficar rica em combustível, resultando em cheiro de gasolina no escapamento.",
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
            ⚠️ Não dirija com cheiro de gasolina!
          </h2>
          <p className="text-white/85 mb-6">
            Risco de intoxicação e incêndio. Procure uma oficina imediatamente.
            Atendemos emergências em Jundiaí.
          </p>
          <CTAButton
            variant="secondary"
            message="EMERGÊNCIA: Cheiro de gasolina no carro em Jundiaí."
          >
            Chamar Agora
          </CTAButton>
        </div>
      </section>
    </>
  );
}
