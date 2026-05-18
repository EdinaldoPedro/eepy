import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { simulationModes } from "../data";
import SimulatorModePicker from "../ui/simulator-mode-picker";

export const metadata: Metadata = {
  title: "Simulador de Impostos SN e LP | eepy",
  description:
    "Primeira etapa do simulador com seleção de modo entre CNAE, Anexo do Simples e LP.",
};

export default function SimuladorImpostosPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 text-white lg:px-10">
      <Link
        href="/produtos/ferramentas-fiscais"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/8"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para ferramentas
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
            <FlaskConical className="h-4 w-4 text-cyan-200" />
            Simulador de impostos
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Primeira etapa pronta: escolher se a simulação começa por CNAE,
            Anexo do Simples ou LP.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            A interface do simulador já está sendo portada para TypeScript
            dentro do site. Nesta fase, o usuário escolhe o ponto de partida do
            cálculo e a base já fica organizada para encaixarmos a lógica dos
            scripts Python sem improviso.
          </p>
        </div>

        <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
            Próximo passo
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Depois desta tela, o próximo avanço natural é portar primeiro o
            fluxo por <strong>Anexo do Simples</strong> e o de{" "}
            <strong>LP</strong>, porque eles já têm lógica mais fechada nos
            arquivos em Python.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <SimulatorModePicker modes={simulationModes} />
      </section>
    </main>
  );
}
