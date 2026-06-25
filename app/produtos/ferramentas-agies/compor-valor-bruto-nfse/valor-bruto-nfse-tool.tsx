"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Calculator,
  Download,
  FileText,
  Plus,
  ReceiptText,
  Trash2,
} from "lucide-react";
import {
  calcularValorBrutoNfse,
  type CustoAdicionalInput,
  type TipoCusto,
  type ValorBrutoResultado,
} from "./calculo-valor-bruto";

type CustoForm = CustoAdicionalInput & {
  id: string;
};

const initialCustos: CustoForm[] = [
  { id: "custo-1", descricao: "Taxa operacional", tipo: "fixo", valor: 0 },
];

const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function money(value: number) {
  return brlFormatter.format(value);
}

function percent(value: number) {
  return `${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  })}%`;
}

function parseNumber(value: string) {
  let normalized = value
    .replace(/\s/g, "")
    .replace(/R\$/gi, "")
    .replace(/[^0-9,.-]/g, "");

  const hasComma = normalized.includes(",");
  const hasDot = normalized.includes(".");

  if (hasComma && hasDot) {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else if (hasComma) {
    normalized = normalized.replace(",", ".");
  }

  return Number(normalized);
}

function parseMaskedDecimal(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return 0;
  }

  return Number(digits) / 100;
}

function formatCurrencyInput(value: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return "";
  }

  return money(value);
}

function formatPercentInput(value: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return "";
  }

  return `${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}%`;
}

function escapeHtml(value: string | number) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPrintableReport(
  resultado: ValorBrutoResultado,
  custos: CustoAdicionalInput[],
) {
  const detalhes = resultado.detalhes
    .map(
      (detalhe) => `<tr>
        <td>${escapeHtml(detalhe.descricao)}</td>
        <td>${escapeHtml(detalhe.percentual === undefined ? "-" : percent(detalhe.percentual))}</td>
        <td>${escapeHtml(money(detalhe.valor))}</td>
      </tr>`,
    )
    .join("");
  const custosInformados = custos.length
    ? custos
        .map(
          (custo) => `<tr>
            <td>${escapeHtml(custo.descricao)}</td>
            <td>${escapeHtml(custo.tipo === "fixo" ? "Valor fixo" : "Percentual")}</td>
            <td>${escapeHtml(custo.tipo === "fixo" ? money(custo.valor) : percent(custo.valor))}</td>
          </tr>`,
        )
        .join("")
    : `<tr><td colspan="3">Nenhum custo adicional informado.</td></tr>`;
  const generatedAt = new Date().toLocaleString("pt-BR");

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Relatorio - Valor bruto NFS-e</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; color: #0f172a; font-family: Arial, sans-serif; background: #f8fafc; }
    main { width: 190mm; min-height: 277mm; margin: 0 auto; padding: 18mm 18mm 24mm; background: white; }
    header { break-after: avoid; border-bottom: 2px solid #0f172a; padding-bottom: 14px; }
    h1 { margin: 0; font-size: 25px; }
    h2 { break-after: avoid; margin: 0 0 12px; font-size: 15px; letter-spacing: .08em; text-transform: uppercase; }
    p { line-height: 1.55; }
    .meta { color: #475569; font-size: 12px; }
    .report-section { break-inside: avoid; page-break-inside: avoid; margin-top: 26px; }
    .report-section--long { break-inside: auto; page-break-inside: auto; }
    .summary { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 18px; }
    .box { break-inside: avoid; border: 1px solid #cbd5e1; border-radius: 10px; padding: 12px; }
    .label { color: #64748b; font-size: 11px; text-transform: uppercase; }
    .value { margin-top: 6px; font-size: 20px; font-weight: 700; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 12px; page-break-inside: auto; }
    thead { display: table-header-group; }
    tfoot { display: table-footer-group; }
    tr { break-inside: avoid; page-break-inside: avoid; }
    th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; vertical-align: top; }
    th { background: #e2e8f0; }
    .note { break-inside: avoid; border-left: 4px solid #0891b2; background: #ecfeff; padding: 12px; font-size: 12px; }
    .report-footer { width: 190mm; margin: -18mm auto 0; padding: 8px 18mm 12px; color: #64748b; font-size: 10px; }
    .footer-line { border-top: 1px solid #cbd5e1; padding-top: 7px; display: flex; justify-content: space-between; gap: 16px; }
    @page { size: A4; margin: 12mm 12mm 16mm; }
    @media print {
      * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      body { background: white; }
      main { width: auto; min-height: auto; margin: 0; padding: 0 0 18mm; }
      .report-footer { position: fixed; right: 0; bottom: 0; left: 0; width: auto; margin: 0; padding: 0 0 2mm; background: white; }
      .footer-line { padding-top: 3mm; }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <h1>Composicao do valor bruto da NFS-e</h1>
      <p class="meta">Relatorio gerado em ${escapeHtml(generatedAt)} pela Linha agio / eepy.</p>
    </header>

    <section class="summary">
      <div class="box"><div class="label">Valor liquido desejado</div><div class="value">${escapeHtml(money(resultado.valorLiquidoDesejado))}</div></div>
      <div class="box"><div class="label">Valor bruto da nota</div><div class="value">${escapeHtml(money(resultado.valorBruto))}</div></div>
      <div class="box"><div class="label">Total de descontos</div><div class="value">${escapeHtml(money(resultado.totalDescontos))}</div></div>
      <div class="box"><div class="label">Liquido final estimado</div><div class="value">${escapeHtml(money(resultado.liquidoFinal))}</div></div>
    </section>

    <section class="report-section">
      <h2>Parametros informados</h2>
      <table>
        <tbody>
          <tr><th>Aliquota principal</th><td>${escapeHtml(percent(resultado.impostoPrincipalPercent))}</td></tr>
          <tr><th>Percentual total embutido</th><td>${escapeHtml(percent(resultado.totalPercentual))}</td></tr>
          <tr><th>Custos fixos embutidos</th><td>${escapeHtml(money(resultado.totalCustosFixos))}</td></tr>
          <tr><th>Diferenca do liquido desejado</th><td>${escapeHtml(money(resultado.diferencaLiquido))}</td></tr>
        </tbody>
      </table>
    </section>

    <section class="report-section report-section--long">
      <h2>Custos informados</h2>
      <table>
        <thead><tr><th>Descricao</th><th>Tipo</th><th>Valor informado</th></tr></thead>
        <tbody>${custosInformados}</tbody>
      </table>
    </section>

    <section class="report-section report-section--long">
      <h2>Detalhamento calculado</h2>
      <table>
        <thead><tr><th>Item</th><th>Percentual</th><th>Valor descontado</th></tr></thead>
        <tbody>${detalhes}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>Observacao tecnica</h2>
      <p class="note">Formula usada: valor bruto = (liquido desejado + custos fixos) / (1 - percentuais totais / 100). Percentuais incidem sobre o valor bruto da NFS-e; custos fixos entram como valor nominal a recompor.</p>
    </section>
  </main>
  <footer class="report-footer">
    <div class="footer-line">
      <span>eepy / Linha agio</span>
      <span>Composicao do valor bruto da NFS-e</span>
      <span>${escapeHtml(generatedAt)}</span>
    </div>
  </footer>
</body>
</html>`;
}

export default function ValorBrutoNfseTool() {
  const [valorLiquido, setValorLiquido] = useState("R$ 5.000,00");
  const [impostoPrincipal, setImpostoPrincipal] = useState("6,00%");
  const [custos, setCustos] = useState<CustoForm[]>(initialCustos);

  const custosValidos = useMemo(
    () =>
      custos
        .map(({ descricao, tipo, valor }) => ({
          descricao,
          tipo,
          valor,
        }))
        .filter(
          (custo) =>
            custo.descricao.trim() &&
            Number.isFinite(custo.valor) &&
            custo.valor > 0,
        ),
    [custos],
  );

  const calculo = useMemo(() => {
    try {
      const calculado = calcularValorBrutoNfse({
        valorLiquido: parseNumber(valorLiquido),
        impostoPrincipalPercent: parseNumber(impostoPrincipal),
        custos: custosValidos,
      });

      return { resultado: calculado, error: "" };
    } catch (currentError) {
      return {
        resultado: null,
        error:
          currentError instanceof Error
          ? currentError.message
          : "Nao foi possivel calcular o valor bruto.",
      };
    }
  }, [valorLiquido, impostoPrincipal, custosValidos]);
  const { resultado, error } = calculo;

  function updateCusto(id: string, patch: Partial<CustoForm>) {
    setCustos((current) =>
      current.map((custo) =>
        custo.id === id ? { ...custo, ...patch } : custo,
      ),
    );
  }

  function addCusto() {
    setCustos((current) => [
      ...current,
      {
        id: `custo-${Date.now()}`,
        descricao: "",
        tipo: "percentual",
        valor: 0,
      },
    ]);
  }

  function removeCusto(id: string) {
    setCustos((current) => current.filter((custo) => custo.id !== id));
  }

  function printReportInIframe(html: string) {
    const iframe = document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.style.opacity = "0";
    document.body.appendChild(iframe);

    const frameWindow = iframe.contentWindow;
    const frameDocument = frameWindow?.document;

    if (!frameWindow || !frameDocument) {
      iframe.remove();
      alert("Nao foi possivel preparar o PDF neste navegador.");
      return;
    }

    const cleanup = () => {
      setTimeout(() => iframe.remove(), 800);
    };

    frameWindow.addEventListener("afterprint", cleanup, { once: true });
    frameDocument.open();
    frameDocument.write(html);
    frameDocument.close();
    setTimeout(() => {
      frameWindow.focus();
      frameWindow.print();
      setTimeout(cleanup, 4000);
    }, 250);
  }

  function handleCurrencyChange(value: string, setValue: (next: string) => void) {
    setValue(formatCurrencyInput(parseMaskedDecimal(value)));
  }

  function handlePercentChange(value: string, setValue: (next: string) => void) {
    setValue(formatPercentInput(parseMaskedDecimal(value)));
  }

  function formatCustoValue(custo: CustoForm) {
    if (custo.tipo === "fixo") {
      return formatCurrencyInput(custo.valor);
    }

    return formatPercentInput(custo.valor);
  }

  function handleCustoValueChange(custo: CustoForm, value: string) {
    updateCusto(custo.id, { valor: parseMaskedDecimal(value) });
  }

  function exportPdf() {
    if (!resultado) return;

    const html = buildPrintableReport(resultado, custosValidos);
    const report = window.open("", "_blank", "width=980,height=820");

    if (!report) {
      printReportInIframe(html);
      return;
    }

    report.document.open();
    report.document.write(html);
    report.document.close();
    setTimeout(() => {
      report.focus();
      report.print();
    }, 250);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
          Entrada
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Monte o valor que precisa cair na conta
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Informe o liquido desejado, a aliquota total que incide sobre a nota
          e os custos que precisam ser embutidos na cobranca.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Valor liquido desejado
            </span>
            <input
              value={valorLiquido}
              onChange={(event) =>
                handleCurrencyChange(event.target.value, setValorLiquido)
              }
              onFocus={(event) => event.currentTarget.select()}
              className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 text-sm text-white outline-none transition focus:border-cyan-300/50"
              inputMode="numeric"
              placeholder="R$ 0,00"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Imposto total (%)
            </span>
            <input
              value={impostoPrincipal}
              onChange={(event) =>
                handlePercentChange(event.target.value, setImpostoPrincipal)
              }
              onFocus={(event) => event.currentTarget.select()}
              className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 text-sm text-white outline-none transition focus:border-cyan-300/50"
              inputMode="numeric"
              placeholder="0,00%"
            />
          </label>
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Custos adicionais</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Use valor fixo para taxa nominal e percentual quando o custo
              tambem incide sobre o bruto.
            </p>
          </div>
          <button
            type="button"
            onClick={addCusto}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-50 transition hover:bg-cyan-300/15"
            aria-label="Adicionar custo"
            title="Adicionar custo"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {custos.map((custo) => (
            <div
              key={custo.id}
              className="rounded-[24px] border border-white/10 bg-slate-950/42 p-4"
            >
              <div className="grid gap-3 md:grid-cols-[1fr_150px_150px_44px]">
                <input
                  value={custo.descricao}
                  onChange={(event) =>
                    updateCusto(custo.id, { descricao: event.target.value })
                  }
                  className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="Descricao do custo"
                />
                <select
                  value={custo.tipo}
                  onChange={(event) =>
                    updateCusto(custo.id, {
                      tipo: event.target.value as TipoCusto,
                    })
                  }
                  className="h-11 rounded-2xl border border-white/10 bg-slate-950 px-4 text-sm text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="percentual">Percentual</option>
                  <option value="fixo">Valor fixo</option>
                </select>
                <input
                  value={formatCustoValue(custo)}
                  onChange={(event) =>
                    handleCustoValueChange(custo, event.target.value)
                  }
                  onFocus={(event) => event.currentTarget.select()}
                  className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  inputMode="numeric"
                  placeholder={custo.tipo === "fixo" ? "R$ 0,00" : "0,00%"}
                />
                <button
                  type="button"
                  onClick={() => removeCusto(custo.id)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-300/20 bg-rose-300/10 text-rose-100 transition hover:bg-rose-300/15"
                  aria-label="Remover custo"
                  title="Remover custo"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">
                Resultado
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Valor bruto da NFS-e
              </h2>
            </div>
            <ReceiptText className="h-8 w-8 text-cyan-200" />
          </div>

          {error ? (
            <div className="mt-6 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{error}</span>
              </div>
            </div>
          ) : null}

          {resultado ? (
            <>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">
                    Emitir na nota
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-white">
                    {money(resultado.valorBruto)}
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/45 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Liquido final
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    {money(resultado.liquidoFinal)}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs text-slate-400">Percentual total</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {percent(resultado.totalPercentual)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs text-slate-400">Custos fixos</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {money(resultado.totalCustosFixos)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs text-slate-400">Descontos</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {money(resultado.totalDescontos)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={exportPdf}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Exportar PDF
              </button>
            </>
          ) : null}
        </div>

        {resultado ? (
          <div className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
            <div className="flex items-center gap-3">
              <Calculator className="h-5 w-5 text-orange-200" />
              <h3 className="text-lg font-semibold text-white">
                Detalhamento da composicao
              </h3>
            </div>
            <div className="mt-5 space-y-3">
              {resultado.detalhes.map((detalhe) => (
                <div
                  key={`${detalhe.descricao}-${detalhe.valor}`}
                  className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/45 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {detalhe.descricao}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {detalhe.percentual === undefined
                        ? "Valor fixo informado"
                        : `Incide sobre o bruto: ${percent(detalhe.percentual)}`}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-cyan-100">
                    {money(detalhe.valor)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-4">
              <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                <p>
                  O PDF inclui parametros informados, formula utilizada,
                  custos, descontos calculados e o resumo do valor bruto para
                  conferencia interna.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
