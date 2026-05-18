"use client";

import { useState } from "react";
import { BadgeCheck, Calculator, FileText, Layers3, Search } from "lucide-react";

const regimeOptions = [
  {
    id: "simples-nacional",
    title: "Simples Nacional",
    description:
      "Para simular DAS, anexo, RBT12, faturamento mensal e possiveis particularidades do regime.",
    icon: Calculator,
  },
  {
    id: "lucro-presumido",
    title: "Lucro Presumido",
    description:
      "Para simular impostos como PIS, COFINS, ISS, CSLL e IRPJ a partir do cenario informado.",
    icon: FileText,
  },
] as const;

type RegimeId = (typeof regimeOptions)[number]["id"];
type SimplesPath = "anexo" | "cnae";

const simplesPathOptions = [
  {
    id: "anexo",
    title: "Anexo",
    description:
      "Para quem ja sabe se a atividade entra no Anexo I, II, III, IV ou V.",
    icon: Layers3,
  },
  {
    id: "cnae",
    title: "CNAE",
    description:
      "Para iniciar pela atividade ou CNAE e depois direcionar o anexo adequado.",
    icon: Search,
  },
] as const;

const anexoOptions = [
  {
    value: "anexo-1",
    label: "Anexo I - Comercio",
    description: "Lojas, varejo, e-commerce e atividades comerciais.",
  },
  {
    value: "anexo-2",
    label: "Anexo II - Industria",
    description: "Fabricas, producao e atividades industriais.",
  },
  {
    value: "anexo-3",
    label: "Anexo III - Servicos",
    description: "Manutencao, instalacao, apoio administrativo, aulas e afins.",
  },
  {
    value: "anexo-4",
    label: "Anexo IV - Servicos",
    description: "Advocacia, limpeza, obras, vigilancia e atividades similares.",
  },
  {
    value: "anexo-5",
    label: "Anexo V - Servicos Intelectuais",
    description: "Engenharia, publicidade, tecnologia e servicos intelectuais.",
  },
];

export default function SimulatorModePicker() {
  const [selectedRegime, setSelectedRegime] =
    useState<RegimeId>("simples-nacional");
  const [selectedSimplesPath, setSelectedSimplesPath] =
    useState<SimplesPath>("anexo");
  const [selectedAnexo, setSelectedAnexo] = useState("");

  return (
    <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.28em] text-orange-200">
        Entrada de dados
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white">
        Qual regime voce quer simular?
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
        Esta sera a primeira pergunta do questionario. A resposta define quais
        campos aparecem nas proximas etapas e qual regra de calculo sera usada.
      </p>

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {regimeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = option.id === selectedRegime;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedRegime(option.id)}
              className={`min-h-32 rounded-3xl border p-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-cyan-300/35 bg-cyan-300/10 text-white shadow-[0_16px_40px_rgba(34,211,238,0.12)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                    isActive
                      ? "bg-cyan-200/18 text-cyan-100"
                      : "bg-slate-900/60 text-slate-200"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold">{option.title}</p>
                    {isActive ? (
                      <BadgeCheck className="h-4 w-4 text-cyan-100" />
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {option.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedRegime === "simples-nacional" ? (
        <div className="mt-6 rounded-3xl border border-white/8 bg-slate-950/55 p-5 md:p-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
            Deseja simular por
          </p>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {simplesPathOptions.map((option) => {
                const Icon = option.icon;
                const isActive = option.id === selectedSimplesPath;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedSimplesPath(option.id)}
                    className={`rounded-3xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-cyan-300/35 bg-cyan-300/10 text-white"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-cyan-200/18 text-cyan-100"
                            : "bg-slate-900/60 text-slate-200"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-base font-semibold">
                            {option.title}
                          </p>
                          {isActive ? (
                            <BadgeCheck className="h-4 w-4 text-cyan-100" />
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
              {selectedSimplesPath === "anexo" ? (
                <>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
                    Qual anexo?
                  </p>
                  <label className="mt-5 block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      Selecione o anexo do Simples Nacional
                    </span>
                    <select
                      value={selectedAnexo}
                      onChange={(event) => setSelectedAnexo(event.target.value)}
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300/45"
                    >
                      <option value="">Selecione</option>
                      {anexoOptions.map((anexo) => (
                        <option key={anexo.value} value={anexo.value}>
                          {anexo.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-5 grid gap-2">
                    {anexoOptions.map((anexo) => (
                      <div
                        key={anexo.value}
                        className={`rounded-2xl border px-4 py-3 ${
                          selectedAnexo === anexo.value
                            ? "border-cyan-300/35 bg-cyan-300/10"
                            : "border-white/10 bg-white/5"
                        }`}
                      >
                        <p className="text-sm font-semibold text-white">
                          {anexo.label}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {anexo.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
                    Buscar por CNAE
                  </p>
                  <label className="mt-5 block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      CNAE ou atividade
                    </span>
                    <input
                      type="text"
                      placeholder="Ex: 6201-5/01 ou desenvolvimento de software"
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                    />
                  </label>

                  <div className="mt-5 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-4">
                    <p className="text-sm leading-7 text-slate-200">
                      Esta busca sera ligada a um arquivo de de-para com numero
                      do CNAE, descricao e anexo correspondente. CNAEs ambiguos
                      serao tratados em uma etapa futura.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
