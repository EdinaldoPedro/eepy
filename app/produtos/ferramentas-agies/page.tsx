import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Calculator,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Linha agio | eepy",
  description:
    "Linha agio: hub de ferramentas, calculadoras e utilitarios da eepy.",
};

const productHighlights = [
  "Ferramentas reunidas por linha",
  "Experiencia simples para abrir e usar",
  "Base pronta para novos produtos",
];

const tools = [
  {
    icon: Calculator,
    status: "Primeira ferramenta",
    title: "Simulador de Impostos SN e LP",
    description:
      "Ferramenta da Linha agio para iniciar simulacoes de Simples Nacional e Lucro Presumido em uma interface propria.",
    href: "/produtos/ferramentas-agies/simulador-impostos-sn-lp",
  },
];

const productAreas = [
  {
    icon: Calculator,
    title: "Calculadoras",
    description:
      "Ferramentas numericas para apoiar cenarios, comparacoes e tomadas de decisao.",
  },
  {
    icon: FileSpreadsheet,
    title: "Utilitarios",
    description:
      "Recursos praticos para organizar rotinas e reduzir trabalho repetitivo.",
  },
  {
    icon: Blocks,
    title: "Produtos conectados",
    description:
      "Novas ferramentas entram no mesmo padrao visual, sem perder identidade.",
  },
];

export default function FerramentasAgiesPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 text-white lg:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Linha agio
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Ferramentas prontas para entrar na rotina.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            A Linha agio concentra ferramentas da eepy em uma area de produto
            clara, organizada e feita para crescer. Cada ferramenta tem seu
            proprio espaco, mantendo a navegacao simples para quem vai usar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {productHighlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                <BadgeCheck className="h-4 w-4 text-cyan-200" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
            Produto eepy
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Linha agio
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Um hub vivo para calculadoras, simuladores e utilitarios. A
            primeira ferramenta ja esta posicionada e as proximas podem entrar
            no mesmo modelo.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
          >
            Voltar ao portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <article
              key={tool.title}
              className="surface-card rounded-[28px] border border-white/10 p-6 md:p-8"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/12 text-orange-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-orange-200">
                    {tool.status}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">
                    {tool.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {tool.description}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-100">
                  Em desenvolvimento
                </span>
              </div>

              <Link
                href={tool.href}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 md:w-auto md:min-w-64"
              >
                Abrir simulador
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}

        <article className="surface-card rounded-[28px] border border-white/10 p-6 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
            Proximas entradas
          </p>
          <h2 className="mt-5 text-2xl font-semibold text-white">
            Mais ferramentas no mesmo padrao.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            A linha ja esta preparada para receber novas experiencias sem
            parecer uma lista solta de links.
          </p>
        </article>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-3">
        {productAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              key={area.title}
              className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/12 text-orange-200">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-slate-400">
                Linha agio
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {area.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {area.description}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
