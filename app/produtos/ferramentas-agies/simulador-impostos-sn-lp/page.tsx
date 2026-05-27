import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, FileText } from "lucide-react";
import AgioAmbientBackground from "../ui/agio-ambient-background";
import SimulatorModePicker from "../ui/simulator-mode-picker";

export const metadata: Metadata = {
  title: "Simulador de Impostos SN e LP | Linha agio",
  description:
    "Ferramenta da Linha agio para simular cenarios de Simples Nacional e Lucro Presumido.",
};

export default function SimuladorImpostosSnLpPage() {
  return (
    <>
      <AgioAmbientBackground variant="simulator" />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 text-white lg:px-10">
      <Link
        href="/produtos/ferramentas-agies"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/8"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Linha agio
      </Link>

      <section className="mt-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
          <FileText className="h-4 w-4 text-cyan-200" />
          Simulador fiscal
        </span>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Simulador de Impostos SN e LP.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
          Estou construindo este simulador para organizar perguntas, calculos e
          resultado em um fluxo unico. A ideia e tirar o peso da conta manual e
          deixar o cenario fiscal mais facil de conferir.
        </p>
      </section>

      <section className="mt-12">
        <SimulatorModePicker />
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Escolher o caminho",
            description:
              "Comece por Simples Nacional ou Lucro Presumido. No Simples, siga por Anexo ou CNAE; no LP, vá direto para os dados da NFS-e.",
          },
          {
            title: "Informar os dados",
            description:
              "A ferramenta organiza RBT12, faturamento, exportação, ISS e pró-labore opcional sem misturar os regimes.",
          },
          {
            title: "Fechar o cenário",
            description:
              "O fechamento mostra tributos, líquido estimado, detalhes por imposto e um resumo pronto para exportar quando fizer sentido.",
          },
        ].map((step, index) => (
          <article
            key={step.title}
            className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/12 text-orange-200">
              <Calculator className="h-5 w-5" />
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-slate-400">
              Etapa {index + 1}
            </p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </section>
      </main>
    </>
  );
}
