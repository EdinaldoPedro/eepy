"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Binary,
  Bot,
  Blocks,
  BriefcaseBusiness,
  Calculator,
  ChartColumn,
  Cpu,
  Database,
  FileSpreadsheet,
  Linkedin,
  Monitor,
  Network,
  ReceiptText,
  Router,
  Settings2,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const linkedinUrl = "https://www.linkedin.com/in/edinaldo-pedro";

const navigation = [
  { label: "Atuação", href: "#servicos" },
  { label: "Produtos", href: "#catalogo" },
  { label: "Perfil", href: "#perfil" },
];

const orbitTags = [
  "Fiscal",
  "Automações",
  "SaaS",
  "Rede",
  "Micro",
];

const services = [
  {
    icon: BriefcaseBusiness,
    eyebrow: "Rotina fiscal e administrativa",
    title: "Analista pleno com vivência prática no dia a dia da contabilidade.",
    description:
      "Trabalhando dentro de uma contabilidade, absorvi a rotina fiscal, administrativa e operacional de perto, com leitura prática das necessidades da empresa.",
  },
  {
    icon: Wrench,
    eyebrow: "Infra e suporte técnico",
    title: "Experiência em redes de computadores e manutenção.",
    description:
      "Minha base técnica também passa por infraestrutura, suporte, manutenção e redes, o que amplia a forma como enxergo problemas e soluções dentro da operação.",
  },
  {
    icon: Workflow,
    eyebrow: "Automações e desenvolvimento",
    title: "Melhorias de processo, automações e produtos construídos para uso real.",
    description:
      "Aplico desenvolvimento para criar automações, ferramentas e produtos que resolvem dores da rotina administrativa, fiscal e operacional.",
  },
];

const catalogItems = [
  {
    icon: Blocks,
    status: "Produto independente",
    title: "NFSe Goo",
    description:
      "Plataforma independente para gestão e emissão de NFS-e, pensada para simplificar a rotina fiscal com uma experiência direta, organizada e pronta para uso.",
    actionLabel: "NFSe Goo",
    actionHref: "http://167.234.226.24:3001",
  },
  {
    icon: Wrench,
    status: "Produto eepy",
    title: "Linha agio",
    description:
      "Hub próprio para reunir ferramentas, calculadoras e utilitários em uma experiência organizada, simples de acessar e pronta para evoluir.",
    actionLabel: "Linha agio",
    actionHref: "/produtos/ferramentas-agies",
  },
  {
    icon: Workflow,
    status: "Dentro e fora da eepy",
    title: "Projetos operacionais e automações",
    description:
      "Reuno aqui projetos que nasceram da rotina real: melhorias de processo, apoio administrativo e solucoes que conectam operacao, fiscal e desenvolvimento.",
    path: "/projetos/operacao-e-automacoes",
    items: ["Processos", "Automações", "Projetos aplicados"],
  },
];

const principles = [
  "Vivência fiscal e administrativa na prática.",
  "Base técnica em TI, redes e manutenção.",
  "Servicos e produtos proprios com foco em uso real.",
];

const rainIcons: LucideIcon[] = [
  Monitor,
  Database,
  Calculator,
  Cpu,
  Network,
  Binary,
  FileSpreadsheet,
  ReceiptText,
  ChartColumn,
  Router,
  Settings2,
  Bot,
  BriefcaseBusiness,
  Workflow,
  Wrench,
];

const rainItems = Array.from({ length: 64 }, (_, index) => ({
  id: `rain-icon-${index}`,
  icon: rainIcons[index % rainIcons.length],
  left: `${(index * 9 + (index % 7) * 6) % 100}%`,
  delay: `${(index % 10) * -2.1}s`,
  duration: `${11 + (index % 6) * 1.7}s`,
  drift: `${((index % 7) - 3) * 12}px`,
  opacity: 0.13 + (index % 4) * 0.04,
  size: `${0.78 + (index % 5) * 0.12}rem`,
  blur: `${(index % 3) * 0.35}px`,
  tone: index % 5 === 0 ? "warm" : index % 3 === 0 ? "bright" : "soft",
}));

const ease = [0.22, 1, 0.36, 1] as const;

type SectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

function SectionReveal({ children, className, delay = 0, id }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.section>
  );
}

function ActionLink({
  children,
  href,
  variant = "primary",
  external = false,
}: ActionLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
        variant === "primary"
          ? "bg-[linear-gradient(135deg,#67e8f9,#f97316)] text-slate-950 shadow-[0_20px_60px_rgba(14,165,233,0.26)]"
          : "border border-white/12 bg-white/6 text-slate-100 backdrop-blur-xl hover:border-cyan-300/35 hover:bg-white/10"
      }`}
    >
      {children}
    </motion.a>
  );
}

function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
  return (
    <div
      className={`surface-card relative overflow-hidden rounded-[28px] border border-white/10 ${className}`}
    >
      <div className="card-glow" />
      {children}
    </div>
  );
}

function SymbolRain() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="symbol-rain pointer-events-none fixed inset-0 overflow-hidden">
      {rainItems.map((item) => {
        const Icon = item.icon;
        const style = {
          left: item.left,
          animationDelay: item.delay,
          animationDuration: item.duration,
          opacity: item.opacity,
          width: item.size,
          height: item.size,
          filter: `blur(${item.blur})`,
          "--symbol-drift": item.drift,
        } as CSSProperties;

        return (
          <span
            key={item.id}
            className={`symbol-rain__item symbol-rain__item--${item.tone}`}
            style={style}
          >
            <Icon className="h-full w-full" strokeWidth={1.7} />
          </span>
        );
      })}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
    >
      <SurfaceCard className="h-full p-6 md:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
            {eyebrow}
          </span>
        </div>
        <h3 className="max-w-xs text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </SurfaceCard>
    </motion.article>
  );
}

function CatalogCard({
  icon: Icon,
  title,
  description,
  status,
  path,
  actionLabel,
  actionHref,
  items,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  status: string;
  path?: string;
  actionLabel?: string;
  actionHref?: string;
  items?: string[];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isExternalAction = actionHref?.startsWith("http");

  return (
    <motion.article
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      whileHover={shouldReduceMotion ? undefined : { y: -10 }}
    >
      <SurfaceCard className="h-full p-6 md:p-7">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/12 text-orange-200">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-orange-100/85">
            {status}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>

        {path ? (
          <div className="mt-6 rounded-2xl border border-white/8 bg-slate-950/55 px-4 py-4">
            <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
              Caminho sugerido
            </p>
            <p className="mt-2 font-mono text-sm text-cyan-200">{path}</p>
          </div>
        ) : null}

        {actionHref && isExternalAction ? (
          <a
            href={actionHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(249,115,22,0.22)] focus:outline-none focus:ring-2 focus:ring-cyan-200/70 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Acessar {actionLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : actionHref ? (
          <Link
            href={actionHref}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(249,115,22,0.22)] focus:outline-none focus:ring-2 focus:ring-cyan-200/70 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Acessar {actionLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : null}

        {items?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </SurfaceCard>
    </motion.article>
  );
}

export default function PortfolioShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative isolate overflow-hidden">
      <SymbolRain />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="hero-orb hero-orb-left pointer-events-none absolute left-[-8rem] top-16" />
      <div className="hero-orb hero-orb-right pointer-events-none absolute right-[-10rem] top-[20rem]" />

      <header className="sticky top-0 z-50 border-b border-white/6 bg-slate-950/55 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <a
            href="#topo"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.34em] text-slate-100"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            eepy
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ActionLink href={linkedinUrl} external variant="secondary">
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </ActionLink>
        </div>
      </header>

      <main
        id="topo"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 lg:px-10"
      >
        <section className="relative grid min-h-[calc(100vh-88px)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              analista pleno + desenvolvimento aplicado
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Vivência fiscal, operação e tecnologia reunidas em uma entrega
              prática.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Este site é o meu portfólio. Atuo como analista pleno e, por
              trabalhar em uma contabilidade, absorvi bastante da rotina fiscal
              e administrativa. Somo isso à minha experiência com redes de
              computadores, manutenção e desenvolvimento para apoiar empresas
              com automações, melhorias de processo e soluções digitais.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ActionLink href="#catalogo">
                Ver produtos e projetos
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              <ActionLink href={linkedinUrl} external variant="secondary">
                Abrir LinkedIn
                <Linkedin className="h-4 w-4" />
              </ActionLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {principle}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="relative"
          >
            <SurfaceCard className="relative min-h-[31rem] p-6 sm:p-8">
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.16),transparent_28%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                        Meu posicionamento
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold text-white">
                        Rotina administrativa, base técnica e visão de produto.
                      </h2>
                    </div>
                    <div className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100 sm:block">
                      Portfólio
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      {
                        label: "Vivência contábil",
                        description:
                          "A rotina da contabilidade me aproximou da prática fiscal, administrativa e das dores reais da operação.",
                      },
                      {
                        label: "TI e infraestrutura",
                        description:
                          "Redes, manutenção e suporte técnico fazem parte da minha base e ampliam minha leitura de cenário.",
                      },
                      {
                        label: "Serviços e produtos",
                        description:
                          "Uso desenvolvimento para construir automações, ferramentas e produtos que saem da necessidade prática.",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-white/10 bg-slate-950/58 p-4 backdrop-blur-xl"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-white">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">
                              {item.description}
                            </p>
                          </div>
                          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/7 text-slate-200">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Rotina", value: "Fiscal" },
                    { label: "Base", value: "TI" },
                    { label: "Entrega", value: "Soluções" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SurfaceCard>

            {orbitTags.map((tag, index) => (
              <div
                key={tag}
                className="floating-chip absolute rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-100 shadow-[0_12px_38px_rgba(2,6,23,0.35)] backdrop-blur-xl"
                style={{
                  top: `${index === 0 ? "2%" : index === 1 ? "16%" : index === 2 ? "74%" : index === 3 ? "92%" : "44%"}`,
                  left: `${index === 0 ? "8%" : index === 1 ? "78%" : index === 2 ? "68%" : index === 3 ? "6%" : "84%"}`,
                  animationDelay: `${index * -1.6}s`,
                }}
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </section>

        <SectionReveal id="servicos" className="py-8 md:py-12">
          <div className="mb-8 flex flex-col gap-5 md:max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
              Atuação
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Minha atuação mistura rotina administrativa, base técnica em TI e
              desenvolvimento aplicado.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Atuo prestando serviços para empresas com foco em automações,
              melhorias de processos administrativos, apoio ao desenvolvimento
              operacional e construção de soluções que ajudam a rotina a fluir.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="catalogo" className="py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-orange-200">
                Produtos e projetos
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-5xl">
                Não crio sistemas, crio soluções que geram resultados reais. 🚀
              </h2>
            </div>

            <SurfaceCard className="p-6 md:p-7">
              <p className="text-sm leading-7 text-slate-300">
                Eu organizo este espaco como uma vitrine viva do que estou
                construindo. Alguns produtos funcionam de forma independente,
                como o SaaS, e outros crescem dentro do proprio ecossistema da
                eepy.
              </p>
            </SurfaceCard>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {catalogItems.map((item, index) => (
              <CatalogCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </SectionReveal>

        <SectionReveal id="perfil" className="py-10 md:py-16">
          <SurfaceCard className="overflow-hidden p-7 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_52%)] lg:block" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">
                  Perfil profissional
                </span>
                <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-white md:text-5xl">
                  Sou um analista pleno com vivência fiscal, administrativa e
                  técnica em TI.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Minha atuação passa pela rotina fiscal e administrativa
                  absorvida no ambiente contábil, somada à experiência com redes
                  de computadores, manutenção e desenvolvimento. Gosto de pegar
                  problemas que travam o dia a dia da empresa e transformar isso
                  em estrutura, melhoria, automação ou produto.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ActionLink href={linkedinUrl} external>
                    Ir para o LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </ActionLink>
                  <ActionLink href="#topo" variant="secondary">
                    Voltar ao topo
                    <ArrowRight className="h-4 w-4" />
                  </ActionLink>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  "Vivência diária com rotina fiscal e administrativa.",
                  "Base técnica em redes de computadores e manutenção.",
                  "Desenvolvimento voltado para automações, ferramentas e produtos.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-slate-950/58 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        </SectionReveal>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-6 py-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} eepy. Portfólio profissional em fiscal,
            operação e desenvolvimento.
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-200 transition-colors duration-300 hover:text-white"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
