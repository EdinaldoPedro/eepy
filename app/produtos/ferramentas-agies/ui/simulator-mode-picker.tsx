"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  Layers3,
  Search,
} from "lucide-react";
import {
  calcularDarfProLabore,
  calcularDasSimplesNacional,
  calcularLucroPresumido,
  PISO_PRO_LABORE_2026,
  type AnexoSimples,
  type DarfProLaboreResultado,
  type DasCalculo,
  type DasResultado,
  type LucroPresumidoResultado,
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function openPrintablePdf(title: string, body: string) {
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    return;
  }

  printWindow.document.write(`<!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(title)}</title>
        <style>
          @page { margin: 8mm; size: A4 portrait; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #f6f8fb;
            color: #111827;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 9.5px;
            line-height: 1.32;
            padding: 0;
          }
          header {
            align-items: flex-start;
            background:
              radial-gradient(circle at 88% 8%, rgba(249,115,22,0.32), transparent 26%),
              radial-gradient(circle at 16% 0%, rgba(103,232,249,0.26), transparent 30%),
              linear-gradient(135deg, #07111f 0%, #111827 58%, #1e293b 100%);
            border: 1px solid rgba(15,23,42,0.12);
            border-radius: 18px;
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            overflow: hidden;
            padding: 13px 15px;
            position: relative;
          }
          header:after {
            background: linear-gradient(90deg, #67e8f9, #f97316);
            bottom: 0;
            content: "";
            height: 3px;
            left: 0;
            position: absolute;
            right: 0;
          }
          h1 {
            font-size: 20px;
            letter-spacing: -0.01em;
            line-height: 1.05;
            margin: 7px 0 5px;
          }
          h2 {
            color: #0f172a;
            font-size: 9px;
            letter-spacing: 0.18em;
            margin: 0 0 7px;
            text-transform: uppercase;
          }
          p { margin: 2px 0; }
          table {
            border-collapse: separate;
            border-spacing: 0 4px;
            width: 100%;
          }
          th, td {
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
            border-top: 1px solid #e2e8f0;
            padding: 5px 7px;
            text-align: left;
          }
          th {
            border-left: 1px solid #e2e8f0;
            border-radius: 9px 0 0 9px;
            color: #475569;
            font-size: 7.8px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            width: 56%;
          }
          td {
            border-radius: 0 9px 9px 0;
            border-right: 1px solid #e2e8f0;
            color: #0f172a;
            font-size: 9.5px;
            font-weight: 800;
          }
          .brand {
            align-items: center;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 999px;
            display: inline-flex;
            gap: 7px;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.22em;
            padding: 5px 8px;
            text-transform: uppercase;
          }
          .brand-mark {
            background: linear-gradient(135deg, #67e8f9, #f97316);
            box-shadow: 0 0 0 3px rgba(255,255,255,0.08);
            border-radius: 999px;
            display: inline-block;
            height: 10px;
            width: 10px;
          }
          header .muted {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 999px;
            color: #dbeafe;
            font-size: 8.5px;
            padding: 5px 8px;
            white-space: nowrap;
          }
          .muted { color: #64748b; font-size: 8.5px; }
          .highlight {
            display: grid;
            gap: 7px;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 8px;
          }
          .highlight p {
            background: #ffffff;
            border: 1px solid #dbeafe;
            border-radius: 13px;
            box-shadow: 0 8px 20px rgba(15,23,42,0.06);
            font-size: 9.5px;
            min-height: 48px;
            padding: 8px 9px;
          }
          .highlight p:first-child { border-color: #67e8f9; }
          .highlight p:last-child { border-color: #fed7aa; }
          .highlight strong {
            color: #64748b;
            display: block;
            font-size: 7.6px;
            letter-spacing: 0.1em;
            margin-bottom: 3px;
            text-transform: uppercase;
          }
          .grid {
            display: grid;
            gap: 8px;
            grid-template-columns: 1fr 1fr;
          }
          .grid > section {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 15px;
            box-shadow: 0 8px 22px rgba(15,23,42,0.05);
            padding: 10px;
          }
          .tax-grid {
            display: grid;
            gap: 5px;
            grid-template-columns: repeat(3, 1fr);
          }
          .tax-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 6px 7px;
          }
          .tax-card strong {
            color: #334155;
            display: block;
            font-size: 8px;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
            text-transform: uppercase;
          }
          .tax-card p {
            color: #0f172a;
            font-size: 10px;
            font-weight: 800;
          }
          .tax-card span {
            color: #64748b;
            display: block;
            font-size: 7.8px;
          }
          .note {
            background: linear-gradient(135deg, #ecfeff, #fff7ed);
            border: 1px solid #bae6fd;
            border-radius: 12px;
            margin-top: 7px;
            padding: 7px 8px;
          }
          .note strong {
            color: #0f172a;
            display: block;
            font-size: 8.5px;
            margin-bottom: 3px;
          }
          .footer {
            align-items: flex-end;
            color: #475569;
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            padding: 0 3px;
          }
          .refs {
            border-right: 3px solid #f97316;
            padding-right: 8px;
            text-align: right;
          }
          .refs strong { color: #0f172a; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        ${body}
        <script>
          window.addEventListener("load", () => {
            window.print();
          });
        </script>
      </body>
    </html>`);
  printWindow.document.close();
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
  exportacaoServico,
  faturamentoMensal,
  onCalcularDarf,
  proLabore,
  proLaboreError,
  setProLabore,
}: {
  darfResult: DarfProLaboreResultado | null;
  dasResult: DasCalculo;
  exportacaoServico: boolean;
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
  const darfLpMinimo = calcularDarfProLabore(PISO_PRO_LABORE_2026).totalDarf;
  const cargaTributaria = das + darf;
  const liquido = Math.max(0, faturamento - das - darf);
  const comparativoLp =
    faturamento > 0
      ? calcularLucroPresumido({
          valorNfse: faturamento,
          faturamentoMensal: faturamento,
          exportacaoServico,
          aliquotaIssPercent: exportacaoServico ? 0 : 5,
        })
      : null;
  const cargaLp = (comparativoLp?.totalTributos ?? 0) + darfLpMinimo;
  const liquidoLp = Math.max(0, faturamento - cargaLp);
  const economiaSn = cargaLp - cargaTributaria;
  const regimeSugerido =
    comparativoLp && cargaTributaria <= cargaLp
      ? "Simples Nacional"
      : "Lucro Presumido";
  const linhas = [
    { label: "Faturamento", value: faturamento },
    { label: "DAS", value: -das },
    { label: "DARF", value: -darf },
    { label: "Carga tributaria total", value: -cargaTributaria },
    { label: "Liquido", value: liquido },
  ];

  function handleExportSnPdf() {
    if (!comparativoLp) {
      return;
    }

    const resumoRows = [
      [
        "Regra aplicada no Simples",
        resultadoDasAplicado.anexoUsado === 3 && dasResult.fatorR && aplicaFatorR
          ? "Anexo III / Fator R"
          : `Anexo ${resultadoDasAplicado.anexoUsado}`,
      ],
      ["Faturamento mensal", formatCurrency(faturamento)],
      ["DAS", formatCurrency(das)],
      ["DARF pro-labore no Simples", formatCurrency(darf)],
      [
        "Carga SN",
        `${formatCurrency(cargaTributaria)} (${formatPercent(
          (cargaTributaria / faturamento) * 100,
        )})`,
      ],
      ["Liquido SN", formatCurrency(liquido)],
      [
        "Carga LP estimada",
        `${formatCurrency(cargaLp)} (${formatPercent(
          (cargaLp / faturamento) * 100,
        )})`,
      ],
      [
        "DARF no LP pela base minima opcional",
        `${formatCurrency(darfLpMinimo)} sobre pro-labore de ${formatCurrency(
          PISO_PRO_LABORE_2026,
        )}`,
      ],
      ["Liquido LP estimado", formatCurrency(liquidoLp)],
      ["Sugestao pelo menor custo", regimeSugerido],
    ];
    const snRateioRows = Object.entries(resultadoDasAplicado.rateio)
      .map(
        ([tributo, valor]) =>
          `<div class="tax-card"><strong>${escapeHtml(
            tributo,
          )}</strong><p>${valor === 0 ? "Isento" : formatCurrency(
            valor,
          )}</p></div>`,
      )
      .join("");
    const lpRateioRows = Object.entries(comparativoLp.rateio)
      .map(
        ([tributo, valor]) =>
          `<div class="tax-card"><strong>${escapeHtml(
            tributo,
          )}</strong><p>${valor === 0 ? "Isento" : formatCurrency(
            valor,
          )}</p><span>${formatPercent(
            comparativoLp.percentuais[tributo] ?? 0,
          )}</span></div>`,
      )
      .join("");
    const body = `
      <header>
        <div>
          <div class="brand"><span class="brand-mark"></span> eepy</div>
          <h1>Resumo fiscal - Simples Nacional</h1>
          <p>Comparativo resumido entre Simples Nacional e Lucro Presumido.</p>
        </div>
        <p class="muted">${new Date().toLocaleDateString("pt-BR")}</p>
      </header>

      <section class="highlight">
        <p><strong>Regime sugerido</strong><br />${escapeHtml(regimeSugerido)}</p>
        <p><strong>Carga SN</strong><br />${formatCurrency(cargaTributaria)}</p>
        <p><strong>Carga LP</strong><br />${formatCurrency(cargaLp)}</p>
      </section>

      <div class="grid">
        <section>
          <h2>Resumo do cenario</h2>
          <table>
            <tbody>
              ${resumoRows
                .map(
                  ([label, value]) =>
                    `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
                )
                .join("")}
            </tbody>
          </table>
          <div class="note">
            <strong>Leitura rapida</strong>
            <p>${
              economiaSn >= 0
                ? `O Simples Nacional ficou menor por ${formatCurrency(economiaSn)} neste cenario.`
                : `O Lucro Presumido ficou menor por ${formatCurrency(Math.abs(economiaSn))} neste cenario.`
            }</p>
          </div>
        </section>

        <section>
          <h2>Rateio SN</h2>
          <div class="tax-grid">${snRateioRows}</div>
          <h2>LP estimado</h2>
          <div class="tax-grid">${lpRateioRows}</div>
          <div class="note">
            <strong>Premissa LP</strong>
            <p>O faturamento mensal foi considerado como NFS-e do mes e tambem como media para estimar o trimestre. Quando nao ha exportacao, o ISS do LP foi considerado a 5%. O pro-labore do LP foi considerado pela base minima opcional de ${formatCurrency(PISO_PRO_LABORE_2026)}, independente do valor escolhido no Simples.</p>
          </div>
        </section>
      </div>

      <div class="footer">
        <p class="muted">Estimativa para apoio a analise. A validacao final depende do contexto fiscal completo.</p>
        <div class="refs">
          <p><strong>www.eepy.com.br</strong></p>
          <p>linkedin.com/in/edinaldo-pedro</p>
        </div>
      </div>
    `;

    openPrintablePdf("Resumo fiscal - Simples Nacional", body);
  }

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={handleExportSnPdf}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/14"
        >
          Exportar PDF
          <Download className="h-4 w-4" />
        </button>
      </div>

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

function AnaliseTributariaSimplesCard({
  darfResult,
  dasResult,
  exportacaoServico,
  faturamentoMensal,
  setShowTaxAnalysis,
  showTaxAnalysis,
}: {
  darfResult: DarfProLaboreResultado | null;
  dasResult: DasCalculo;
  exportacaoServico: boolean;
  faturamentoMensal: string;
  setShowTaxAnalysis: (value: boolean) => void;
  showTaxAnalysis: boolean;
}) {
  const faturamento = parseCurrency(faturamentoMensal);
  const fatorRMinimo = roundCurrency(faturamento * 0.28);
  const aplicaFatorR =
    Boolean(dasResult.fatorR) &&
    Boolean(darfResult) &&
    (darfResult?.proLabore ?? 0) >= fatorRMinimo;
  const resultadoDasAplicado = aplicaFatorR
    ? (dasResult.fatorR ?? dasResult.padrao)
    : dasResult.padrao;
  const das = resultadoDasAplicado.valorDasAPagar;
  const darf = darfResult?.totalDarf ?? 0;
  const darfLpMinimo = calcularDarfProLabore(PISO_PRO_LABORE_2026).totalDarf;
  const cargaTributaria = das + darf;
  const comparativoLp =
    faturamento > 0
      ? calcularLucroPresumido({
          valorNfse: faturamento,
          faturamentoMensal: faturamento,
          exportacaoServico,
          aliquotaIssPercent: exportacaoServico ? 0 : 5,
        })
      : null;
  const cargaLp = (comparativoLp?.totalTributos ?? 0) + darfLpMinimo;
  const economiaSn = cargaLp - cargaTributaria;
  const regimeSugerido =
    comparativoLp && cargaTributaria <= cargaLp
      ? "Simples Nacional"
      : "Lucro Presumido";

  if (!comparativoLp) {
    return null;
  }

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
            Analise tributaria
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Comparativo estimado entre Simples Nacional e Lucro Presumido.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowTaxAnalysis(!showTaxAnalysis)}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/30"
        >
          {showTaxAnalysis ? "Ocultar" : "Ver analise"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              showTaxAnalysis ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {showTaxAnalysis ? (
        <div className="mt-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sugestao: {regimeSugerido}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              O Simples Nacional calculado acima foi comparado com uma
              estimativa de Lucro Presumido usando o mesmo faturamento mensal.
              Quando nao ha exportacao, o ISS do LP foi considerado a 5%. Para
              o LP, foi considerado um pro-labore minimo opcional de{" "}
              {formatCurrency(PISO_PRO_LABORE_2026)}, separado do valor escolhido
              no Simples.
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-100">
                Simples Nacional
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(cargaTributaria)}
              </p>
              <p className="mt-1 text-xs text-cyan-100/70">
                {formatPercent((cargaTributaria / faturamento) * 100)} de carga
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Lucro Presumido estimado
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(cargaLp)}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {formatPercent((cargaLp / faturamento) * 100)} de carga
              </p>
            </div>

            <div className="rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-orange-100">
                Diferenca
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(Math.abs(economiaSn))}
              </p>
              <p className="mt-1 text-xs text-orange-100/75">
                {economiaSn >= 0
                  ? "Economia estimada no Simples"
                  : "Economia estimada no Lucro Presumido"}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function ResultadoLucroPresumidoCard({
  resultado,
}: {
  resultado: LucroPresumidoResultado;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const linhasResumo = [
    { label: "Valor da NFS-e", value: resultado.valorNfse },
    { label: "Tributos", value: -resultado.totalTributos },
    { label: "Liquido estimado", value: resultado.liquidoNota },
  ];

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
            Resultado LP
          </p>
          <p className="mt-2 text-3xl font-semibold text-white">
            {formatCurrency(resultado.totalTributos)}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Carga estimada de {formatPercent(resultado.aliquotaEfetivaPercent)}
            sobre a NFS-e.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:border-cyan-300/30"
        >
          {isExpanded ? "Ocultar" : "Detalhes"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="mt-4 grid gap-2 md:grid-cols-3">
        {linhasResumo.map((linha) => {
          const isDiscount = linha.value < 0;

          return (
            <div
              key={linha.label}
              className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {linha.label}
              </p>
              <p
                className={`mt-2 text-lg font-semibold ${
                  isDiscount ? "text-orange-100" : "text-white"
                }`}
              >
                {isDiscount ? "- " : ""}
                {formatCurrency(Math.abs(linha.value))}
              </p>
            </div>
          );
        })}
      </div>

      {isExpanded ? (
        <div className="mt-4 grid gap-3">
          <div className="grid gap-2 md:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Receita trimestral
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatCurrency(resultado.receitaTrimestralEstimada)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Base presumida
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatCurrency(resultado.basePresumidaTrimestral)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Proporcao da nota
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatPercent(resultado.proporcaoNfse)}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-3 text-sm leading-6 text-slate-200">
            Para IRPJ e CSLL, o faturamento mensal foi considerado como media do
            trimestre:
            {` ${formatCurrency(resultado.faturamentoMensal)} x 3 = ${formatCurrency(
              resultado.receitaTrimestralEstimada,
            )}`}. A NFS-e entra proporcionalmente dentro desse trimestre.
          </div>

          <div className="grid gap-2 md:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                IRPJ trimestral
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatCurrency(resultado.irpjTrimestral)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                CSLL trimestral
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatCurrency(resultado.csllTrimestral)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Adicional IRPJ
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {formatCurrency(resultado.irpjAdicionalTrimestral)}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
              Rateio por tributo
            </p>
            <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {Object.entries(resultado.rateio).map(([tributo, valor]) => (
                <div
                  key={tributo}
                  className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2 text-xs"
                >
                  <span className="block truncate text-slate-300">
                    {tributo}
                  </span>
                  <span className="mt-1 block truncate font-semibold text-white">
                    {valor === 0 ? "Isento" : formatCurrency(valor)}
                  </span>
                  <span className="mt-1 block truncate text-slate-500">
                    {formatPercent(resultado.percentuais[tributo] ?? 0)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function ResultadoFinalLucroPresumidoCard({
  darfResult,
  lpResult,
  onCalcularDarf,
  proLabore,
  proLaboreError,
  setProLabore,
}: {
  darfResult: DarfProLaboreResultado | null;
  lpResult: LucroPresumidoResultado;
  onCalcularDarf: () => void;
  proLabore: string;
  proLaboreError: string;
  setProLabore: (value: string) => void;
}) {
  const darf = darfResult?.totalDarf ?? 0;
  const impostosMensais = ["PIS", "COFINS", "ISS"];
  const impostosTrimestrais = ["CSLL", "IRPJ", "IRPJ adicional"];
  const totalMensalNota = impostosMensais.reduce(
    (sum, imposto) => sum + (lpResult.rateio[imposto] ?? 0),
    0,
  );
  const totalTrimestralNota = impostosTrimestrais.reduce(
    (sum, imposto) => sum + (lpResult.rateio[imposto] ?? 0),
    0,
  );
  const totalComDarf = lpResult.totalTributos + darf;
  const liquidoComDarf = Math.max(0, lpResult.valorNfse - totalComDarf);
  const cargaTotalPercent = (totalComDarf / lpResult.valorNfse) * 100;

  function handleExportPdf() {
    const rows = [
      ["Valor da NFS-e", formatCurrency(lpResult.valorNfse)],
      ["Faturamento mensal informado", formatCurrency(lpResult.faturamentoMensal)],
      [
        "Receita trimestral estimada",
        formatCurrency(lpResult.receitaTrimestralEstimada),
      ],
      [
        "Base presumida trimestral",
        formatCurrency(lpResult.basePresumidaTrimestral),
      ],
      ["Impostos mensais da nota", formatCurrency(totalMensalNota)],
      [
        "IRPJ/CSLL proporcionais ao trimestre",
        formatCurrency(totalTrimestralNota),
      ],
      ["DARF pro-labore", formatCurrency(darf)],
      ["Carga tributaria total", formatCurrency(totalComDarf)],
      ["Liquido estimado", formatCurrency(liquidoComDarf)],
    ];
    const rateioRows = Object.entries(lpResult.rateio)
      .map(
        ([tributo, valor]) =>
          `<div class="tax-card"><strong>${escapeHtml(
            tributo,
          )}</strong><p>${formatCurrency(
            valor,
          )}</p><span>${formatPercent(
            lpResult.percentuais[tributo] ?? 0,
          )} sobre a NFS-e</span></div>`,
      )
      .join("");
    const body = `
      <header>
        <div>
          <div class="brand"><span class="brand-mark"></span> eepy</div>
          <h1>Resumo fiscal - Lucro Presumido</h1>
          <p>Analise resumida gerada pelo Simulador de Impostos SN e LP.</p>
        </div>
        <p class="muted">${new Date().toLocaleDateString("pt-BR")}</p>
      </header>

      <section class="highlight">
        <p><strong>Carga total</strong><br />${formatCurrency(totalComDarf)}</p>
        <p><strong>Percentual</strong><br />${formatPercent(cargaTotalPercent)}</p>
        <p><strong>Liquido estimado</strong><br />${formatCurrency(liquidoComDarf)}</p>
      </section>

      <div class="grid">
        <section>
          <h2>Resumo do cenario</h2>
          <table>
            <tbody>
              ${rows
                .map(
                  ([label, value]) =>
                    `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Rateio por tributo</h2>
          <div class="tax-grid">${rateioRows}</div>

          <div class="note">
            <strong>IRPJ e CSLL</strong>
            <p>Uso o faturamento mensal como media do trimestre: ${formatCurrency(
              lpResult.faturamentoMensal,
            )} x 3 = ${formatCurrency(lpResult.receitaTrimestralEstimada)}.</p>
            <p>IRPJ, CSLL e adicional aparecem proporcionais a NFS-e, mas sao de apuracao trimestral.</p>
          </div>
        </section>
      </div>

      <div class="footer">
        <p class="muted">Estimativa para apoio a analise. A validacao final depende do contexto fiscal completo.</p>
        <div class="refs">
          <p><strong>www.eepy.com.br</strong></p>
          <p>linkedin.com/in/edinaldo-pedro</p>
        </div>
      </div>
    `;

    openPrintablePdf("Resumo fiscal - Lucro Presumido", body);
  }

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
            Pro-labore opcional
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Se quiser considerar retirada de pro-labore, informe um valor a
            partir de {formatCurrency(PISO_PRO_LABORE_2026)} para calcular INSS,
            IR e DARF.
          </p>

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
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Fechamento estimado
          </p>

          <div className="mt-3 grid gap-2">
            <div className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-300">Valor da NFS-e</span>
                <span className="font-semibold text-white">
                  {formatCurrency(lpResult.valorNfse)}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-300">
                  Impostos mensais da nota
                </span>
                <span className="font-semibold text-orange-100">
                  - {formatCurrency(totalMensalNota)}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                PIS, COFINS e ISS.
              </p>
            </div>
            <div className="rounded-xl border border-orange-300/20 bg-orange-400/10 px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-orange-100">
                  IRPJ e CSLL do trimestre
                </span>
                <span className="font-semibold text-orange-50">
                  - {formatCurrency(totalTrimestralNota)}
                </span>
              </div>
              <p className="mt-1 text-xs leading-5 text-orange-100/80">
                Valores proporcionais a NFS-e, mas apurados no fechamento
                trimestral.
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-slate-950/45 px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-300">DARF pro-labore</span>
                <span className="font-semibold text-orange-100">
                  - {formatCurrency(darf)}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/8 px-3 py-2">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-cyan-100">
                  Liquido estimado
                </span>
                <span className="font-semibold text-white">
                  {formatCurrency(liquidoComDarf)}
                </span>
              </div>
              <p className="mt-1 text-xs text-cyan-100/70">
                Carga total: {formatCurrency(totalComDarf)} |{" "}
                {formatPercent(cargaTotalPercent)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleExportPdf}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/14"
          >
            Exportar PDF
            <Download className="h-4 w-4" />
          </button>
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
  const [lpValorNfse, setLpValorNfse] = useState("");
  const [lpFaturamentoMensal, setLpFaturamentoMensal] = useState("");
  const [lpExportacaoServico, setLpExportacaoServico] = useState("");
  const [lpAliquotaIss, setLpAliquotaIss] = useState("");
  const [lpResult, setLpResult] = useState<LucroPresumidoResultado | null>(
    null,
  );
  const [lpError, setLpError] = useState("");
  const [showSnTaxAnalysis, setShowSnTaxAnalysis] = useState(false);
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
      setShowSnTaxAnalysis(false);
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

  function handleConfirmLucroPresumido() {
    setLpError("");
    setLpResult(null);
    setDarfResult(null);
    setProLaboreError("");

    const valorNfse = parseCurrency(lpValorNfse);
    const faturamentoValue = parseCurrency(lpFaturamentoMensal);
    const aliquotaIss = Number(lpAliquotaIss.replace(",", "."));

    if (!lpExportacaoServico) {
      setLpError("Informe se a operacao e exportacao para o exterior.");
      return;
    }

    try {
      setLpResult(
        calcularLucroPresumido({
          valorNfse,
          faturamentoMensal: faturamentoValue,
          exportacaoServico: lpExportacaoServico === "sim",
          aliquotaIssPercent: lpExportacaoServico === "sim" ? 0 : aliquotaIss,
        }),
      );
      setCalculationPulse(false);
      window.requestAnimationFrame(() => {
        setCalculationPulse(true);
        window.setTimeout(() => setCalculationPulse(false), 260);
      });
    } catch (error) {
      setLpError(
        error instanceof Error
          ? error.message
          : "Nao foi possivel calcular o Lucro Presumido.",
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
        A simulacao comeca pela escolha do regime. A partir dessa resposta, a
        ferramenta libera apenas os campos que fazem sentido para o calculo.
      </p>

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {regimeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = option.id === selectedRegime;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setSelectedRegime(option.id);
                setDasResult(null);
                setLpResult(null);
                setDarfResult(null);
                setDasError("");
                setLpError("");
                setProLaboreError("");
              }}
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
                            {selectedCnae.anexosPossiveis.length > 1
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
                                item.permitido
                                  ? "border border-cyan-300/15 bg-cyan-300/8 text-cyan-100"
                                  : "border border-orange-300/20 bg-orange-400/10 text-orange-100"
                              }`}
                            >
                              {!item.permitido
                                ? "vedada"
                                : item.anexosPossiveis.length > 1
                                  ? "escolher anexo"
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
                        <div className="flex flex-wrap gap-2">
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
                      </div>

                      {showFinalResult ? (
                        <div className="mt-4">
                          <ResultadoFinalCard
                            darfResult={darfResult}
                            dasResult={dasResult}
                            exportacaoServico={exportacaoServico === "sim"}
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

                  </div>
                ) : null}
              </div>
            ) : null}

            {dasResult && showFinalResult ? (
              <div className="mt-5">
                <AnaliseTributariaSimplesCard
                  darfResult={darfResult}
                  dasResult={dasResult}
                  exportacaoServico={exportacaoServico === "sim"}
                  faturamentoMensal={faturamentoMensal}
                  setShowTaxAnalysis={setShowSnTaxAnalysis}
                  showTaxAnalysis={showSnTaxAnalysis}
                />
              </div>
            ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {selectedRegime === "lucro-presumido" ? (
        <div
          className={`mt-6 rounded-3xl border border-white/8 bg-slate-950/55 p-5 transition-all duration-300 md:p-6 ${
            calculationPulse
              ? "border-cyan-300/35 shadow-[0_0_34px_rgba(34,211,238,0.14)]"
              : ""
          }`}
        >
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                Lucro Presumido
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Simule os impostos proporcionais da NFS-e.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Neste caminho sao considerados PIS, COFINS, ISS, CSLL, IRPJ e o
                adicional de IRPJ. Para IRPJ e CSLL, o faturamento mensal e
                usado como media do trimestre e a receita trimestral e estimada
                multiplicando esse valor por 3.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Receita trimestral estimada pelo faturamento mensal x 3",
                  "Base presumida de 32% sobre a receita trimestral",
                  "IRPJ e CSLL proporcionais ao peso da nota no trimestre",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-slate-950/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
                Entrada de dados LP
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Valor da NFS-e
                  </span>
                  <input
                    inputMode="numeric"
                    type="text"
                    value={lpValorNfse}
                    onChange={(event) => {
                      setLpValorNfse(
                        formatCurrencyFromDigits(event.target.value),
                      );
                      setLpResult(null);
                      setLpError("");
                    }}
                    placeholder="R$ 0,00"
                    className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Faturamento mensal
                  </span>
                  <input
                    inputMode="numeric"
                    type="text"
                    value={lpFaturamentoMensal}
                    onChange={(event) => {
                      setLpFaturamentoMensal(
                        formatCurrencyFromDigits(event.target.value),
                      );
                      setLpResult(null);
                      setLpError("");
                    }}
                    placeholder="R$ 0,00"
                    className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45"
                  />
                  <span className="mt-2 block text-xs leading-5 text-slate-400">
                    Esse valor sera usado como media mensal para estimar o
                    trimestre multiplicando por 3 para IRPJ e CSLL.
                  </span>
                </label>
              </div>

              <div className="mt-4 grid items-end gap-4 md:grid-cols-[1fr_0.75fr_auto]">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    E exportacao para o exterior?
                  </span>
                  <div className="mt-3 grid h-12 grid-cols-2 rounded-2xl border border-white/10 bg-slate-950/80 p-1">
                    {[
                      { value: "sim", label: "Sim" },
                      { value: "nao", label: "Nao" },
                    ].map((option) => {
                      const isActive = lpExportacaoServico === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setLpExportacaoServico(option.value);
                            setLpResult(null);
                            setLpError("");
                            if (option.value === "sim") {
                              setLpAliquotaIss("");
                            }
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
                    ISS municipal
                  </span>
                  <input
                    inputMode="decimal"
                    type="text"
                    value={lpAliquotaIss}
                    disabled={lpExportacaoServico === "sim"}
                    onChange={(event) => {
                      setLpAliquotaIss(
                        event.target.value.replace(/[^\d,.]/g, ""),
                      );
                      setLpResult(null);
                      setLpError("");
                    }}
                    placeholder={
                      lpExportacaoServico === "sim" ? "Isento" : "2,00 a 5,00"
                    }
                    className="mt-3 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-slate-500 focus:border-cyan-300/45 disabled:cursor-not-allowed disabled:opacity-45"
                  />
                </label>

                <button
                  type="button"
                  onClick={handleConfirmLucroPresumido}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 md:min-w-48"
                >
                  Confirmar
                  <CheckCircle2 className="h-4 w-4" />
                </button>
              </div>

              {lpExportacaoServico === "sim" ? (
                <p className="mt-4 rounded-2xl border border-cyan-300/12 bg-cyan-300/6 p-3 text-sm leading-6 text-slate-200">
                  Na exportacao de servicos, este simulador considera PIS,
                  COFINS e ISS como isentos, mantendo IRPJ e CSLL proporcionais
                  a nota.
                </p>
              ) : null}

              {lpError ? (
                <p className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4 text-sm leading-7 text-orange-100">
                  {lpError}
                </p>
              ) : null}
            </div>
          </div>

          {lpResult ? (
            <div className="mt-5 grid gap-4">
              <ResultadoLucroPresumidoCard resultado={lpResult} />

              <ResultadoFinalLucroPresumidoCard
                darfResult={darfResult}
                lpResult={lpResult}
                onCalcularDarf={handleCalcularDarf}
                proLabore={proLabore}
                proLaboreError={proLaboreError}
                setProLabore={(value) => {
                  setProLabore(value);
                  setDarfResult(null);
                  setProLaboreError("");
                }}
              />

              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-orange-200">
                  Analise tributaria
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  Em desenvolvimento. Este caminho ainda precisa de informacoes
                  complementares para uma leitura tributaria mais precisa.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
