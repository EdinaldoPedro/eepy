"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Calculator,
  CalendarDays,
  CheckCircle2,
  FileText,
  Layers3,
  Search,
} from "lucide-react";
import {
  calcularDasSimplesNacional,
  type AnexoSimples,
  type DasCalculo,
  type DasResultado,
} from "../simulador-impostos-sn-lp/calculo-das";

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
type RbtPath = "informar" | "nao-sei";
type MonthRevenueField = {
  id: string;
  label: string;
  value: string;
};

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
    anexo: 1,
    label: "Anexo I - Comercio | lojas, varejo, e-commerce, mercados",
  },
  {
    value: "anexo-2",
    anexo: 2,
    label: "Anexo II - Industria | fabricas, producao, industria grafica",
  },
  {
    value: "anexo-3",
    anexo: 3,
    label:
      "Anexo III - Servicos | manutencao, instalacao, apoio administrativo, aulas",
  },
  {
    value: "anexo-4",
    anexo: 4,
    label: "Anexo IV - Servicos | advocacia, limpeza, obras, vigilancia",
  },
  {
    value: "anexo-5",
    anexo: 5,
    label:
      "Anexo V - Servicos Intelectuais | engenharia, medicina, tecnologia",
  },
] as const;

function formatCurrencyFromDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  const amount = Number(digits || "0") / 100;

  if (!digits) {
    return "";
  }

  return amount.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}

function parseCurrency(value: string) {
  const normalized = value.replace(/\D/g, "");
  return Number(normalized || "0") / 100;
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDateInput(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function isSameMonthAndYear(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth()
  );
}

function formatMonthLabel(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    month: "short",
    year: "2-digit",
  });
}

function buildPreviousMonthFields(openingDate: string): MonthRevenueField[] {
  if (!openingDate) {
    return [];
  }

  const opening = parseDateInput(openingDate);
  const today = new Date();

  if (isSameMonthAndYear(opening, today)) {
    return [];
  }

  const lastCompletedMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const monthsSinceOpening =
    (lastCompletedMonth.getFullYear() - opening.getFullYear()) * 12 +
    (lastCompletedMonth.getMonth() - opening.getMonth()) +
    1;
  const monthsToAsk = Math.max(0, Math.min(monthsSinceOpening, 12));
  const firstMonth =
    monthsSinceOpening > 12
      ? new Date(
          lastCompletedMonth.getFullYear(),
          lastCompletedMonth.getMonth() - monthsToAsk + 1,
          1,
        )
      : new Date(opening.getFullYear(), opening.getMonth(), 1);

  return Array.from({ length: monthsToAsk }, (_, index) => {
    const date = new Date(firstMonth.getFullYear(), firstMonth.getMonth() + index, 1);
    const month = String(date.getMonth() + 1).padStart(2, "0");

    return {
      id: `${date.getFullYear()}-${month}`,
      label: formatMonthLabel(date),
      value: "",
    };
  });
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
}

function formatPercent(value: number) {
  return `${value.toLocaleString("pt-BR", {
    maximumFractionDigits: 4,
    minimumFractionDigits: 2,
  })}%`;
}

function ResultadoDasCard({
  resultado,
  title,
}: {
  resultado: DasResultado;
  title: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
        {title}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            DAS
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {formatCurrency(resultado.valorDasAPagar)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Aliquota
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {formatPercent(resultado.aliquotaEfetivaPercent)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Faixa
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {resultado.faixa}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
          Rateio por tributo
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {Object.entries(resultado.rateio).map(([tributo, valor]) => (
            <div
              key={tributo}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2 text-sm"
            >
              <span className="text-slate-300">{tributo}</span>
              <span className="font-semibold text-white">
                {valor === 0 ? "Isento" : formatCurrency(valor)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SimulatorModePicker() {
  const [selectedRegime, setSelectedRegime] =
    useState<RegimeId>("simples-nacional");
  const [selectedSimplesPath, setSelectedSimplesPath] =
    useState<SimplesPath>("anexo");
  const [selectedAnexo, setSelectedAnexo] = useState("");
  const [cnaeQuery, setCnaeQuery] = useState("");
  const [selectedRbtPath, setSelectedRbtPath] =
    useState<RbtPath>("informar");
  const [rbt12, setRbt12] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [monthRevenues, setMonthRevenues] = useState<MonthRevenueField[]>([]);
  const [usesCurrentMonthAsRbtBase, setUsesCurrentMonthAsRbtBase] =
    useState(false);
  const [exportacaoServico, setExportacaoServico] = useState("");
  const [faturamentoMensal, setFaturamentoMensal] = useState("");
  const [isRbtConfirmed, setIsRbtConfirmed] = useState(false);
  const [dasResult, setDasResult] = useState<DasCalculo | null>(null);
  const [dasError, setDasError] = useState("");
  const [rbtError, setRbtError] = useState("");
  const [calculationPulse, setCalculationPulse] = useState(false);
  const shouldShowRbtStep =
    selectedSimplesPath === "anexo"
      ? Boolean(selectedAnexo)
      : Boolean(cnaeQuery.trim());
  const shouldShowDasFields =
    shouldShowRbtStep &&
    (selectedRbtPath === "informar" ||
      usesCurrentMonthAsRbtBase ||
      Boolean(rbt12)) &&
    isRbtConfirmed;

  function handleConfirmRbt() {
    setDasError("");
    setRbtError("");

    if (selectedRbtPath === "informar" && !rbt12) {
      setIsRbtConfirmed(false);
      setRbtError("Informe a RBT12 antes de confirmar.");
      return;
    }

    if (selectedRbtPath === "nao-sei" && !openingDate) {
      setIsRbtConfirmed(false);
      setRbtError("Informe a data de abertura antes de confirmar.");
      return;
    }

    if (selectedRbtPath === "nao-sei") {
      const opening = parseDateInput(openingDate);
      const today = new Date();

      if (opening > today) {
        setIsRbtConfirmed(false);
        setRbtError("Datas futuras nao contam para este calculo.");
        return;
      }

      const fields = buildPreviousMonthFields(openingDate);

      if (fields.length === 0) {
        setMonthRevenues([]);
        setUsesCurrentMonthAsRbtBase(true);
        setRbt12("");
        setIsRbtConfirmed(true);
        return;
      }

      setUsesCurrentMonthAsRbtBase(false);
      setIsRbtConfirmed(false);
      setMonthRevenues(fields);
      return;
    }

    setUsesCurrentMonthAsRbtBase(false);
    setIsRbtConfirmed(true);
  }

  function handleConfirmMonthRevenues() {
    setDasError("");
    setRbtError("");

    if (monthRevenues.length === 0) {
      setRbtError("Confirme a data de abertura antes de informar os meses.");
      return;
    }

    const missingMonth = monthRevenues.find(
      (monthRevenue) => !monthRevenue.value,
    );

    if (missingMonth) {
      setRbtError("Informe o faturamento de todos os meses listados.");
      setIsRbtConfirmed(false);
      return;
    }

    const total = monthRevenues.reduce(
      (sum, monthRevenue) => sum + parseCurrency(monthRevenue.value),
      0,
    );
    const proportionalRbt12 = (total / monthRevenues.length) * 12;

    setRbt12(formatCurrency(proportionalRbt12));
    setUsesCurrentMonthAsRbtBase(false);
    setIsRbtConfirmed(true);
  }

  useEffect(() => {
    if (!shouldShowDasFields) {
      setDasResult(null);
      setDasError("");
      return;
    }

    const anexo =
      selectedSimplesPath === "anexo"
        ? (anexoOptions.find((option) => option.value === selectedAnexo)
            ?.anexo as AnexoSimples | undefined)
        : undefined;
    const faturamentoValue = parseCurrency(faturamentoMensal);
    const rbt12Value = usesCurrentMonthAsRbtBase
      ? faturamentoValue * 12
      : parseCurrency(rbt12);

    setDasResult(null);
    setDasError("");

    if (!anexo) {
      setDasError(
        selectedSimplesPath === "cnae"
          ? "A busca por CNAE ainda precisa do de-para para apontar o anexo correto."
          : "Selecione um anexo valido antes de calcular.",
      );
      return;
    }

    if (!exportacaoServico || faturamentoValue <= 0) {
      return;
    }

    try {
      setDasResult(
        calcularDasSimplesNacional({
          anexo,
          exportacaoServico: exportacaoServico === "sim",
          faturamento: faturamentoValue,
          rbt12: rbt12Value,
        }),
      );
      setCalculationPulse(false);
      let timeoutId: number | undefined;
      const frameId = window.requestAnimationFrame(() => {
        setCalculationPulse(true);
        timeoutId = window.setTimeout(() => setCalculationPulse(false), 260);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      };
    } catch (error) {
      setDasError(
        error instanceof Error
          ? error.message
          : "Nao foi possivel calcular o DAS.",
      );
    }
  }, [
    exportacaoServico,
    faturamentoMensal,
    rbt12,
    selectedAnexo,
    selectedSimplesPath,
    shouldShowDasFields,
    usesCurrentMonthAsRbtBase,
  ]);

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
                    onClick={() => {
                      setSelectedSimplesPath(option.id);
                      setIsRbtConfirmed(false);
                      setUsesCurrentMonthAsRbtBase(false);
                      setMonthRevenues([]);
                      setDasResult(null);
                      setDasError("");
                      setRbtError("");
                    }}
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

            <div className="min-h-64 rounded-3xl border border-white/8 bg-slate-950/60 p-5">
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
                      value={cnaeQuery}
                      onChange={(event) => setCnaeQuery(event.target.value)}
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

          {shouldShowRbtStep ? (
            <div className="mt-5 rounded-3xl border border-white/8 bg-slate-950/60 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                Faturamento RBT12
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Voce deseja informar a RBT12?
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                RBT12 e a soma do faturamento bruto dos ultimos 12 meses. Esse
                dado ajuda a definir a faixa e a aliquota do Simples Nacional.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      id: "informar",
                      title: "Sim, quero informar",
                      description: "Abrir campo para digitar o valor da RBT12.",
                      icon: Calculator,
                    },
                    {
                      id: "nao-sei",
                      title: "Nao sei a RBT12",
                      description:
                        "Informar a data de abertura para preparar a estimativa.",
                      icon: CalendarDays,
                    },
                  ].map((option) => {
                    const Icon = option.icon;
                    const isActive = option.id === selectedRbtPath;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSelectedRbtPath(option.id as RbtPath);
                          setIsRbtConfirmed(false);
                          setUsesCurrentMonthAsRbtBase(false);
                          setMonthRevenues([]);
                          setDasResult(null);
                          setDasError("");
                          setRbtError("");
                        }}
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

              <div className="mt-5 rounded-3xl border border-white/8 bg-slate-950/70 p-5">
                {selectedRbtPath === "informar" ? (
                  <div className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
                    <label className="block">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                        Informe a RBT12
                      </span>
                      <input
                        inputMode="numeric"
                        type="text"
                        value={rbt12}
                        onChange={(event) =>
                          setRbt12(formatCurrencyFromDigits(event.target.value))
                        }
                        placeholder="R$ 0,00"
                        className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={handleConfirmRbt}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 md:min-w-48"
                    >
                      Confirmar
                      <CheckCircle2 className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="grid items-end gap-4 lg:grid-cols-[0.9fr_1.1fr_auto]">
                    <label className="block">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                        Data de abertura da empresa
                      </span>
                      <input
                        type="date"
                        max={getTodayDateString()}
                        value={openingDate}
                        onChange={(event) => {
                          setOpeningDate(event.target.value);
                          setMonthRevenues([]);
                          setIsRbtConfirmed(false);
                          setUsesCurrentMonthAsRbtBase(false);
                          setRbtError("");
                        }}
                        className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300/45"
                      />
                    </label>

                    <p className="rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-3 text-sm leading-6 text-slate-200">
                      Se a empresa ainda nao estiver aberta, coloque a data de
                      hoje. No mes atual, a RBT12 sera estimada pelo faturamento
                      mensal x 12.
                    </p>

                    <button
                      type="button"
                      onClick={handleConfirmRbt}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 lg:min-w-48"
                    >
                      Confirmar data
                      <CheckCircle2 className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {rbtError ? (
                  <p className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4 text-sm leading-7 text-orange-100">
                    {rbtError}
                  </p>
                ) : null}
              </div>

              {selectedRbtPath === "nao-sei" && monthRevenues.length > 0 ? (
                <div className="mt-5 rounded-3xl border border-white/8 bg-slate-950/60 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
                      Faturamento dos meses anteriores
                    </p>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                      {monthRevenues.length} meses
                    </span>
                  </div>

                  <div className="mt-4 max-h-48 overflow-y-auto pr-1">
                    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                      {monthRevenues.map((monthRevenue) => (
                        <label
                          key={monthRevenue.id}
                          className="flex h-11 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-3 transition-colors duration-300 focus-within:border-cyan-300/45"
                        >
                          <span className="w-16 shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                            {monthRevenue.label.replace(".", "")}
                          </span>
                          <input
                            inputMode="numeric"
                            type="text"
                            value={monthRevenue.value}
                            onChange={(event) => {
                              const value = formatCurrencyFromDigits(
                                event.target.value,
                              );
                              setMonthRevenues((currentMonths) =>
                                currentMonths.map((currentMonth) =>
                                  currentMonth.id === monthRevenue.id
                                    ? { ...currentMonth, value }
                                    : currentMonth,
                                ),
                              );
                              setIsRbtConfirmed(false);
                            }}
                            placeholder="R$ 0,00"
                            className="h-full min-w-0 flex-1 border-0 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleConfirmMonthRevenues}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 md:w-auto md:min-w-48"
                  >
                    Confirmar
                    <CheckCircle2 className="h-4 w-4" />
                  </button>
                </div>
              ) : null}

              {selectedRbtPath === "nao-sei" && isRbtConfirmed && rbt12 ? (
                <p className="mt-4 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-4 text-sm leading-7 text-slate-200">
                  RBT12 proporcionalizada: {rbt12}
                </p>
              ) : null}

              {selectedRbtPath === "nao-sei" &&
              isRbtConfirmed &&
              usesCurrentMonthAsRbtBase ? (
                <p className="mt-4 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-4 text-sm leading-7 text-slate-200">
                  Como a abertura esta no mes atual, a RBT12 sera calculada
                  automaticamente como faturamento mensal multiplicado por 12.
                </p>
              ) : null}

            {shouldShowDasFields ? (
              <div
                className={`mt-5 rounded-3xl border border-white/8 bg-slate-950/60 p-5 transition-all duration-300 ${
                  calculationPulse
                    ? "border-cyan-300/35 shadow-[0_0_34px_rgba(34,211,238,0.14)]"
                    : ""
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                  Calculo do DAS
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Informe os dados do mes.
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      E exportacao de servico?
                    </span>
                    <select
                      value={exportacaoServico}
                      onChange={(event) => setExportacaoServico(event.target.value)}
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 focus:border-cyan-300/45"
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Nao</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      Faturamento mensal
                    </span>
                    <input
                      inputMode="numeric"
                      type="text"
                      value={faturamentoMensal}
                      onChange={(event) =>
                        setFaturamentoMensal(
                          formatCurrencyFromDigits(event.target.value),
                        )
                      }
                      placeholder="R$ 0,00"
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                    />
                  </label>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  <Calculator className="h-4 w-4" />
                  Calculo automatico
                </div>

                {dasError ? (
                  <p className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4 text-sm leading-7 text-orange-100">
                    {dasError}
                  </p>
                ) : null}

                {dasResult ? (
                  <div className="mt-5 grid gap-4">
                    <ResultadoDasCard
                      resultado={dasResult.padrao}
                      title="Calculo padrao"
                    />
                    {dasResult.fatorR ? (
                      <ResultadoDasCard
                        resultado={dasResult.fatorR}
                        title="Alternativo como Anexo III / Fator R"
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
