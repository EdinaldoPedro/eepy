import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { toolCatalog } from "./data";

export const metadata: Metadata = {
  title: "Ferramentas fiscais | eepy",
  description:
    "Hub de ferramentas para cálculos, simulações e produtos utilitários dentro da eepy.",
};

export default function FerramentasFiscaisPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 text-white lg:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Hub de ferramentas
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            /produtos/ferramentas-fiscais agora vira uma base genérica para
            calculadoras e utilitários.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            A primeira ferramenta ativa é o <strong>Simulador de Impostos SN e
            LP</strong>. A estrutura já nasce pronta para crescer e receber
            novos projetos depois, como o <strong>Valor bruto</strong> e outras
            soluções numéricas que você vier publicar.
          </p>
        </div>

        <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
            Estratégia
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            O hub deixa de ser apenas “fiscal” e passa a ser um espaço
            reaproveitável para produtos de cálculo, simulação e apoio
            operacional, todos no mesmo padrão visual do site.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-5 xl:grid-cols-2">
        {toolCatalog.map((tool) => {
          const isAvailable = tool.status === "disponivel";

          return (
            <article
              key={tool.slug}
              className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${
                    isAvailable
                      ? "border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                      : "border border-white/10 bg-white/5 text-slate-200"
                  }`}
                >
                  {isAvailable ? "Disponível" : "Em breve"}
                </span>

                <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  {tool.note}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                {tool.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {tool.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {isAvailable ? (
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_20px_60px_rgba(14,165,233,0.2)]"
                  >
                    Abrir ferramenta
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                    Caminho reservado
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
