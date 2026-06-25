import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ReceiptText } from "lucide-react";
import AgioAmbientBackground from "../ui/agio-ambient-background";
import ValorBrutoNfseTool from "./valor-bruto-nfse-tool";

export const metadata: Metadata = {
  title: "Compor Valor Bruto da NFS-e | Linha agio",
  description:
    "Ferramenta da Linha agio para calcular o valor bruto da NFS-e a partir do liquido desejado, impostos e custos adicionais.",
};

export default function ComporValorBrutoNfsePage() {
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

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
              <ReceiptText className="h-4 w-4 text-cyan-200" />
              Calculadora NFS-e
            </span>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Compor valor bruto da NFS-e.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Calcule quanto precisa emitir na nota para chegar ao liquido
              desejado depois de impostos, taxas fixas e custos percentuais
              embutidos na cobranca.
            </p>
          </div>

          <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
            <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
              Saida pronta
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              O resultado mostra o valor bruto da NFS-e, a composicao dos
              descontos e um relatorio limpo para exportar em PDF com as
              informacoes usadas no calculo.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <ValorBrutoNfseTool />
        </section>
      </main>
    </>
  );
}
