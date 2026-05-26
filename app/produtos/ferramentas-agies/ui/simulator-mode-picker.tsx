"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  Layers3,
  Search,
} from "lucide-react";
import {
  calcularDarfProLabore,
  calcularDasSimplesNacional,
  PISO_PRO_LABORE_2026,
  type AnexoSimples,
  type DarfProLaboreResultado,
  type DasCalculo,
  type DasResultado,
} from "../simulador-impostos-sn-lp/calculo-das";
import {
  cnaesSimples,
  type CnaeSimples,
} from "../data/cnaes-simples";

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

const anexoLabels: Record<AnexoSimples, string> = {
  1: "Anexo I",
  2: "Anexo II",
  3: "Anexo III",
  4: "Anexo IV",
  5: "Anexo V",
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

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function hasCommonPracticeFor(value: string, word: string) {
  const normalized = normalizeSearch(value);

  return normalized.includes("pratica mais comum") && normalized.includes(word);
}

function hasSameAnexos(
  anexos: Array<1 | 2 | 3 | 4 | 5>,
  expected: Array<1 | 2 | 3 | 4 | 5>,
) {
  return (
    anexos.length === expected.length &&
    expected.every((anexo) => anexos.includes(anexo))
  );
}

function formatCnae(cnae: string) {
  return cnae.replace(/^(\d{4})(\d)(\d{2})$/, "$1-$2/$3");
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

function roundCurrency(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function ResultadoDasCard({
  resultado,
  title,
}: {
  resultado: DasResultado;
  title: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">
            {formatCurrency(resultado.valorDasAPagar)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200">
            Aliquota {formatPercent(resultado.aliquotaEfetivaPercent)}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200">
            Faixa {resultado.faixa}
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/30"
          >
            Detalhes
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isExpanded ? (
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {Object.entries(resultado.rateio).map(([tributo, valor]) => (
              <div
                key={tributo}
                className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2 text-xs"
              >
                <span className="block truncate text-slate-300">{tributo}</span>
                <span className="mt-1 block truncate font-semibold text-white">
                  {valor === 0 ? "Isento" : formatCurrency(valor)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function ResultadoFinalCard({
  darfResult,
  dasResult,
  faturamentoMensal,
  onCalcularDarf,
  proLabore,
  proLaboreError,
  setProLabore,
}: {
  darfResult: DarfProLaboreResultado | null;
  dasResult: DasCalculo;
  faturamentoMensal: string;
  onCalcularDarf: () => void;
  proLabore: string;
  proLaboreError: string;
  setProLabore: (value: string) => void;
}) {
  const faturamento = parseCurrency(faturamentoMensal);
  const fatorRMinimo = roundCurrency(faturamento * 0.28);
  const proLaboreFatorRBase = Math.max(PISO_PRO_LABORE_2026, fatorRMinimo);
  const aplicaFatorR =
    Boolean(dasResult.fatorR) &&
    Boolean(darfResult) &&
    (darfResult?.proLabore ?? 0) >= fatorRMinimo;
  const resultadoDasAplicado = aplicaFatorR
    ? (dasResult.fatorR ?? dasResult.padrao)
    : dasResult.padrao;
  const das = resultadoDasAplicado.valorDasAPagar;
  const darf = darfResult?.totalDarf ?? 0;
  const cargaTributaria = das + darf;
  const liquido = Math.max(0, faturamento - das - darf);
  const linhas = [
    { label: "Faturamento", value: faturamento },
    { label: "DAS", value: -das },
    { label: "DARF", value: -darf },
    { label: "Carga tributaria total", value: -cargaTributaria },
    { label: "Liquido", value: liquido },
  ];

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
            Pro-labore opcional
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Informe um valor a partir de {formatCurrency(PISO_PRO_LABORE_2026)}
            para calcular INSS, IR e DARF.
          </p>
          {dasResult.fatorR ? (
            <div className="mt-3 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-3">
              <p className="text-sm leading-6 text-slate-200">
                Para aplicar Fator R neste cenario, o pro-labore precisa ser de
                pelo menos {formatCurrency(proLaboreFatorRBase)}.
              </p>
              <button
                type="button"
                onClick={() => setProLabore(formatCurrency(proLaboreFatorRBase))}
                className="mt-3 rounded-full border border-cyan-300/20 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/40"
              >
                Usar base do Fator R
              </button>
            </div>
          ) : null}
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              inputMode="numeric"
              type="text"
              value={proLabore}
              onChange={(event) =>
                setProLabore(formatCurrencyFromDigits(event.target.value))
              }
              placeholder={formatCurrency(PISO_PRO_LABORE_2026)}
              className="h-12 rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
            />
            <button
              type="button"
              onClick={onCalcularDarf}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.18)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Calcular DARF
              <CheckCircle2 className="h-4 w-4" />
            </button>
          </div>
          {proLaboreError ? (
            <p className="mt-3 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-3 text-sm text-orange-100">
              {proLaboreError}
            </p>
          ) : null}
          {darfResult ? (
            <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
              <span className="rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-slate-200">
                INSS {formatCurrency(darfResult.inss)}
              </span>
              <span className="rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-slate-200">
                IR {formatCurrency(darfResult.irpf)}
              </span>
              <span className="rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-slate-200">
                DARF {formatCurrency(darfResult.totalDarf)}
              </span>
            </div>
          ) : null}
          {dasResult.fatorR && darfResult && !aplicaFatorR ? (
            <p className="mt-3 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-3 text-sm text-orange-100">
              Pro-labore abaixo de 28% do faturamento. O resumo permanece no
              Anexo V padrao.
            </p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Resumo liquido
          </p>
          {dasResult.fatorR ? (
            <p className="mt-2 rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2 text-xs font-semibold text-slate-200">
              Regra aplicada:{" "}
              {aplicaFatorR ? "Anexo III / Fator R" : "Anexo V padrao"}
            </p>
          ) : null}
          <div className="mt-3 grid gap-2">
            {linhas.map((linha) => {
              const percent =
                faturamento > 0 ? Math.abs(linha.value / faturamento) * 100 : 0;
              const isDiscount = linha.value < 0;

              return (
                <div
                  key={linha.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{linha.label}</span>
                  <span
                    className={`font-semibold ${
                      isDiscount ? "text-orange-100" : "text-white"
                    }`}
                  >
                    {isDiscount ? "- " : ""}
                    {formatCurrency(Math.abs(linha.value))}
                    <span className="ml-2 text-xs text-slate-400">
                      {formatPercent(percent)}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
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
  const [selectedCnae, setSelectedCnae] = useState<CnaeSimples | null>(null);
  const [selectedCnaeAnexo, setSelectedCnaeAnexo] =
    useState<AnexoSimples | null>(null);
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
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [proLabore, setProLabore] = useState("");
  const [darfResult, setDarfResult] = useState<DarfProLaboreResultado | null>(
    null,
  );
  const [proLaboreError, setProLaboreError] = useState("");
  const [rbtError, setRbtError] = useState("");
  const [calculationPulse, setCalculationPulse] = useState(false);
  const shouldShowRbtStep =
    selectedSimplesPath === "anexo"
      ? Boolean(selectedAnexo)
      : Boolean(selectedCnae?.permitido && selectedCnaeAnexo);
  const cnaeResults =
    cnaeQuery.trim().length >= 2
      ? cnaesSimples
          .filter((item) => {
            const query = normalizeSearch(cnaeQuery);
            const queryDigits = cnaeQuery.replace(/\D/g, "");

            return (
              (queryDigits.length > 0 && item.cnae.includes(queryDigits)) ||
              normalizeSearch(item.descricao).includes(query)
            );
          })
          .slice(0, 8)
      : [];
  const shouldShowDasFields =
    shouldShowRbtStep &&
    (selectedRbtPath === "informar" ||
      usesCurrentMonthAsRbtBase ||
      Boolean(rbt12)) &&
    isRbtConfirmed;
  const isComercioServicoAmbiguo =
    selectedCnae?.permitido &&
    hasSameAnexos(selectedCnae.anexosPossiveis, [1, 3]) &&
    hasCommonPracticeFor(selectedCnae.observacao, "comercio");
  const isComercioIndustriaServicoAmbiguo =
    selectedCnae?.permitido &&
    hasSameAnexos(selectedCnae.anexosPossiveis, [1, 2, 3]) &&
    hasCommonPracticeFor(selectedCnae.observacao, "industria");
  const isIndustriaServicoAmbiguo =
    selectedCnae?.permitido &&
    hasSameAnexos(selectedCnae.anexosPossiveis, [2, 3]) &&
    normalizeSearch(selectedCnae.observacao).includes(
      "pratica mais comum ii",
    ) &&
    normalizeSearch(selectedCnae.observacao).includes(
      "se nao conceito industrial iii",
    );
  const isIndustriaServicoCommonAmbiguo =
    selectedCnae?.permitido &&
    hasSameAnexos(selectedCnae.anexosPossiveis, [2, 3]) &&
    hasCommonPracticeFor(selectedCnae.observacao, "industria");
  const isServicoObraAmbiguo =
    selectedCnae?.permitido &&
    hasSameAnexos(selectedCnae.anexosPossiveis, [3, 4]) &&
    normalizeSearch(selectedCnae.observacao).includes(
      "pratica mais comum iii",
    ) &&
    normalizeSearch(selectedCnae.observacao).includes("construcao obra iv");
  const isSuggestedAnexoUmOuDois =
    selectedCnae?.permitido &&
    selectedCnae.anexosPossiveis.length > 1 &&
    (selectedCnae.anexoPadrao === 1 || selectedCnae.anexoPadrao === 2);

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

  function clearFinalResult() {
    setShowFinalResult(false);
    setDarfResult(null);
    setProLaboreError("");
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

  function handleCalcularDarf() {
    setProLaboreError("");
    setDarfResult(null);

    const proLaboreValue = parseCurrency(proLabore);

    if (proLaboreValue < PISO_PRO_LABORE_2026) {
      setProLaboreError(
        `Informe um pro-labore de pelo menos ${formatCurrency(
          PISO_PRO_LABORE_2026,
        )}.`,
      );
      return;
    }

    try {
      setDarfResult(calcularDarfProLabore(proLaboreValue));
    } catch (error) {
      setProLaboreError(
        error instanceof Error
          ? error.message
          : "Nao foi possivel calcular o DARF.",
      );
    }
  }

  function handleConfirmDas() {
    const anexo =
      selectedSimplesPath === "anexo"
        ? (anexoOptions.find((option) => option.value === selectedAnexo)
            ?.anexo as AnexoSimples | undefined)
        : selectedCnaeAnexo ?? undefined;
    const faturamentoValue = parseCurrency(faturamentoMensal);
    const rbt12Value = usesCurrentMonthAsRbtBase
      ? faturamentoValue * 12
      : parseCurrency(rbt12);

    setDasResult(null);
    setDasError("");
    clearFinalResult();

    if (!anexo) {
      setDasError(
        selectedSimplesPath === "cnae"
          ? "A busca por CNAE ainda precisa do de-para para apontar o anexo correto."
          : "Selecione um anexo valido antes de calcular.",
      );
      return;
    }

    if (!exportacaoServico || faturamentoValue <= 0) {
      setDasError("Informe exportacao para o exterior e faturamento mensal.");
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
      setShowFinalResult(false);
      setDarfResult(null);
      setProLaboreError("");
      setCalculationPulse(false);
      window.requestAnimationFrame(() => {
        setCalculationPulse(true);
        window.setTimeout(() => setCalculationPulse(false), 260);
      });
    } catch (error) {
      setDasError(
        error instanceof Error
          ? error.message
          : "Nao foi possivel calcular o DAS.",
      );
    }
  }

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
                      setSelectedCnae(null);
                      setSelectedCnaeAnexo(null);
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
                      onChange={(event) => {
                        setSelectedAnexo(event.target.value);
                        setDasResult(null);
                        setDasError("");
                      }}
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
                      onChange={(event) => {
                        setCnaeQuery(event.target.value);
                        setSelectedCnae(null);
                        setSelectedCnaeAnexo(null);
                        setIsRbtConfirmed(false);
                        setDasResult(null);
                        setDasError("");
                      }}
                      placeholder="Ex: 6201-5/01 ou desenvolvimento de software"
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                    />
                  </label>

                  {selectedCnae ? (
                    <div className="mt-5 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {formatCnae(selectedCnae.cnae)} -{" "}
                            {selectedCnae.descricao}
                          </p>
                          {selectedCnae.observacao ? (
                            <p className="mt-2 text-sm leading-6 text-slate-300">
                              {selectedCnae.observacao}
                            </p>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCnae(null);
                            setSelectedCnaeAnexo(null);
                            setIsRbtConfirmed(false);
                          }}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors duration-300 hover:border-white/20 hover:text-white"
                        >
                          Trocar
                        </button>
                      </div>

                      {!selectedCnae.permitido ? (
                        <p className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-3 text-sm leading-6 text-orange-100">
                          Esta atividade esta marcada como nao permitida para
                          seguir na simulacao do Simples Nacional.
                        </p>
                      ) : (
                        <div className="mt-4">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                            {isComercioServicoAmbiguo ||
                            isComercioIndustriaServicoAmbiguo
                            || isIndustriaServicoAmbiguo
                            || isIndustriaServicoCommonAmbiguo
                            || isServicoObraAmbiguo
                            || isSuggestedAnexoUmOuDois
                              ? "Escolha como levar para o calculo"
                              : "Anexo aplicado no calculo"}
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {selectedCnae.anexosPossiveis.map((anexo) => {
                              const isActive = selectedCnaeAnexo === anexo;
                              const canChoose =
                                selectedCnae.anexosPossiveis.length > 1;
                              const optionClass = `rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                                isActive
                                  ? "border-cyan-300/35 bg-cyan-300/10 text-white"
                                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8"
                              }`;
                              const optionContent = (
                                <>
                                  {anexoLabels[anexo]}
                                  {canChoose ? (
                                    <span className="ml-2 text-xs text-cyan-100">
                                      {anexo === 1
                                        ? "comercio"
                                        : anexo === 2
                                          ? "industria"
                                          : anexo === 4
                                            ? "construcao/obra"
                                            : "servico"}
                                    </span>
                                  ) : (
                                    <span className="ml-2 text-xs text-cyan-100">
                                      validado
                                    </span>
                                  )}
                                </>
                              );

                              return canChoose ? (
                                <button
                                  key={anexo}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCnaeAnexo(anexo);
                                    setIsRbtConfirmed(false);
                                    setDasResult(null);
                                    setDasError("");
                                  }}
                                  className={optionClass}
                                >
                                  {optionContent}
                                </button>
                              ) : (
                                <div key={anexo} className={optionClass}>
                                  {optionContent}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : cnaeResults.length > 0 ? (
                    <div className="mt-4 grid max-h-72 gap-2 overflow-y-auto pr-1">
                      {cnaeResults.map((item) => (
                        <button
                          key={item.cnae}
                          type="button"
                          onClick={() => {
                            setSelectedCnae(item);
                            setSelectedCnaeAnexo(
                              item.permitido &&
                                item.anexosPossiveis.length === 1
                                ? (item.anexosPossiveis[0] as AnexoSimples)
                                : null,
                            );
                            setCnaeQuery(
                              `${formatCnae(item.cnae)} - ${item.descricao}`,
                            );
                            setIsRbtConfirmed(false);
                            setDasResult(null);
                            setDasError("");
                          }}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/8"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {formatCnae(item.cnae)}
                            </span>
                            <span
                              className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                                item.permitido &&
                                item.anexosPossiveis.length === 1
                                  ? "border border-cyan-300/15 bg-cyan-300/8 text-cyan-100"
                                  : "border border-orange-300/20 bg-orange-400/10 text-orange-100"
                              }`}
                            >
                              {!item.permitido
                                ? "vedada"
                                  : "permitida"}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-5 text-slate-300">
                            {item.descricao}
                          </p>
                        </button>
                      ))}
                    </div>
                  ) : cnaeQuery.trim().length >= 2 ? (
                    <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                      Nenhum CNAE encontrado para essa busca.
                    </p>
                  ) : (
                    <div className="mt-5 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-4">
                      <p className="text-sm leading-7 text-slate-200">
                        Pesquise pelo numero do CNAE ou por palavras da
                        atividade. Depois escolha o CNAE para definir o anexo.
                      </p>
                    </div>
                  )}
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
                        onChange={(event) => {
                          setRbt12(
                            formatCurrencyFromDigits(event.target.value),
                          );
                          setDasResult(null);
                          setDasError("");
                        }}
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
                          setDasResult(null);
                          setDasError("");
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
                              setDasResult(null);
                              setDasError("");
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

                <div className="mt-5 grid items-end gap-4 md:grid-cols-[0.9fr_1fr_auto]">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      E exportacao para o exterior?
                    </span>
                    <div className="mt-3 grid h-12 grid-cols-2 rounded-2xl border border-white/10 bg-slate-950/80 p-1">
                      {[
                        { value: "sim", label: "Sim" },
                        { value: "nao", label: "Nao" },
                      ].map((option) => {
                        const isActive = exportacaoServico === option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setExportacaoServico(option.value);
                              setDasResult(null);
                              setDasError("");
                            }}
                            className={`rounded-xl text-sm font-semibold transition-all duration-300 ${
                              isActive
                                ? "bg-cyan-300/15 text-white shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                                : "text-slate-500 hover:text-slate-200"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      Faturamento mensal
                    </span>
                    <input
                      inputMode="numeric"
                      type="text"
                      value={faturamentoMensal}
                      onChange={(event) => {
                        setFaturamentoMensal(
                          formatCurrencyFromDigits(event.target.value),
                        );
                        setDasResult(null);
                        setDasError("");
                      }}
                      placeholder="R$ 0,00"
                      className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={handleConfirmDas}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 md:min-w-48"
                  >
                    Confirmar
                    <CheckCircle2 className="h-4 w-4" />
                  </button>
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
                        title="Calculo com Fator R"
                      />
                    ) : null}

                    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
                            Resultado
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">
                            Resumo do faturamento, impostos e liquido estimado.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setShowFinalResult((current) => !current)
                          }
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/30"
                        >
                          {showFinalResult ? "Ocultar" : "Ver resultado"}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              showFinalResult ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {showFinalResult ? (
                        <div className="mt-4">
                          <ResultadoFinalCard
                            darfResult={darfResult}
                            dasResult={dasResult}
                            faturamentoMensal={faturamentoMensal}
                            onCalcularDarf={handleCalcularDarf}
                            proLabore={proLabore}
                            proLaboreError={proLaboreError}
                            setProLabore={(value) => {
                              setProLabore(value);
                              setDarfResult(null);
                              setProLaboreError("");
                            }}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
                        Analise tributaria
                      </p>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                        Espaco reservado para interpretar o resultado, comparar
                        caminhos e orientar os proximos ajustes do cenario.
                      </p>
                    </div>
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
