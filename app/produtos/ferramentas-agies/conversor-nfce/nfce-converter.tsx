"use client";

import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Archive,
  BarChart3,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Loader2,
  UploadCloud,
} from "lucide-react";

type NoteStatus = "autorizada" | "cancelada" | "invalida" | "sem-protocolo";
type OutputMode = "excel" | "pdf";
type ExcelModel = "produtos" | "notas";

type RawField = {
  key: string;
  value: string;
};

type ProductRow = {
  chave: string;
  numero: string;
  serie: string;
  emissao: string;
  emitente: string;
  cnpj: string;
  status: NoteStatus;
  itemNumero: string;
  codigo: string;
  ean: string;
  descricao: string;
  ncm: string;
  cest: string;
  cfop: string;
  unidade: string;
  quantidade: number;
  valorUnitario: number;
  valorProduto: number;
  desconto: number;
  totalLiquido: number;
  origem: string;
  rawFields: RawField[];
};

type NoteRow = {
  chave: string;
  numero: string;
  serie: string;
  modelo: string;
  emissao: string;
  municipio: string;
  uf: string;
  emitente: string;
  fantasia: string;
  cnpj: string;
  status: NoteStatus;
  motivo: string;
  protocolo: string;
  itens: number;
  valorProdutos: number;
  descontos: number;
  valorNota: number;
  origem: string;
  rawFields: RawField[];
};

type ParsedResult = {
  notes: NoteRow[];
  products: ProductRow[];
  invalidFiles: string[];
  warnings: string[];
};

type OutputOptions = {
  mode: OutputMode;
  excelModel: ExcelModel;
  includeAuthorized: boolean;
  includeCanceled: boolean;
  includeNoProtocol: boolean;
  includeInvalid: boolean;
  pdfIncludeNoteDetails: boolean;
  pdfIncludeTotals: boolean;
};

type InputFile = {
  name: string;
  relativePath: string;
  extension: string;
  text?: string;
  unsupported?: string;
};

const maxFolderDepth = 5;
const decoder = new TextDecoder("utf-8");

const statusLabels: Record<NoteStatus, string> = {
  autorizada: "Autorizada",
  cancelada: "Cancelada",
  invalida: "Invalida",
  "sem-protocolo": "Sem protocolo",
};

const initialOptions: OutputOptions = {
  mode: "excel",
  excelModel: "produtos",
  includeAuthorized: true,
  includeCanceled: true,
  includeNoProtocol: true,
  includeInvalid: true,
  pdfIncludeNoteDetails: false,
  pdfIncludeTotals: true,
};

function money(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function numberValue(value: string | null | undefined) {
  if (!value) {
    return 0;
  }

  return Number(value.replace(",", ".")) || 0;
}

function clean(value: string | null | undefined) {
  return value?.trim() ?? "";
}

function localElements(root: Element | Document, name: string) {
  return Array.from(root.getElementsByTagName("*")).filter(
    (element) => element.localName === name,
  );
}

function firstText(root: Element | Document, name: string) {
  return clean(localElements(root, name)[0]?.textContent);
}

function childText(root: Element, name: string) {
  return clean(
    Array.from(root.children).find((element) => element.localName === name)
      ?.textContent,
  );
}

function node(root: Element | Document, name: string) {
  return localElements(root, name)[0];
}

function dateText(value: string) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("pt-BR");
}

function collectLeafFields(root: Element | Document | undefined, prefix = ""): RawField[] {
  if (!root) return [];
  const element = root instanceof Document ? root.documentElement : root;
  const fields: RawField[] = [];

  function walk(current: Element, path: string) {
    const currentPath = path || current.localName;
    const children = Array.from(current.children);
    if (!children.length) {
      const value = clean(current.textContent);
      if (value) fields.push({ key: currentPath, value });
      return;
    }
    children.forEach((child) => walk(child, `${currentPath}.${child.localName}`));
  }

  walk(element, prefix || element.localName);
  return fields;
}

function fieldsToRecord(fields: RawField[]) {
  return fields.reduce<Record<string, string>>((record, field) => {
    record[field.key] = record[field.key] ? `${record[field.key]} | ${field.value}` : field.value;
    return record;
  }, {});
}
function attributeFields(element: Element | undefined, prefix: string, names: string[]): RawField[] {
  if (!element) return [];
  return names
    .map((name) => ({ key: `${prefix}.${name}`, value: element.getAttribute(name) ?? "" }))
    .filter((field) => field.value);
}
function noteStatus(cStat: string, reason: string, hasNfe: boolean): NoteStatus {
  const normalizedReason = reason.toLowerCase();

  if (["101", "135", "151", "155"].includes(cStat) || normalizedReason.includes("cancel")) {
    return "cancelada";
  }

  if (["100", "150"].includes(cStat)) {
    return "autorizada";
  }

  if (hasNfe) {
    return "sem-protocolo";
  }

  return "invalida";
}

function parseXmlDocument(xmlText: string, sourceName: string): ParsedResult {
  const parser = new DOMParser();
  const document = parser.parseFromString(xmlText, "application/xml");
  const parserError = document.getElementsByTagName("parsererror")[0];

  if (parserError) {
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [] };
  }

  const nfe = node(document, "NFe");
  const event = node(document, "procEventoNFe") ?? node(document, "evento");

  if (!nfe && event) {
    const cStat = firstText(document, "cStat");
    const reason = firstText(document, "xMotivo") || firstText(document, "descEvento");
    const chave = firstText(document, "chNFe");

    return {
      notes: [
        {
          chave,
          numero: chave.slice(25, 34).replace(/^0+/, ""),
          serie: chave.slice(22, 25).replace(/^0+/, ""),
          modelo: chave.slice(20, 22),
          emissao: "",
          municipio: "",
          uf: chave.slice(0, 2),
          emitente: "Evento de NFC-e",
          fantasia: "",
          cnpj: "",
          status: noteStatus(cStat, reason, false),
          motivo: reason || "Evento processado",
          protocolo: firstText(document, "nProt"),
          itens: 0,
          valorProdutos: 0,
          descontos: 0,
          valorNota: 0,
          origem: sourceName,
          rawFields: collectLeafFields(document, "evento"),
        },
      ],
      products: [],
      invalidFiles: [],
      warnings: [],
    };
  }

  if (!nfe) {
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [] };
  }

  const infNfe = node(nfe, "infNFe");
  const id = infNfe?.getAttribute("Id") ?? "";
  const chave = firstText(document, "chNFe") || id.replace(/^NFe/, "");
  const ide = node(nfe, "ide");
  const emit = node(nfe, "emit");
  const enderEmit = node(nfe, "enderEmit");
  const total = node(nfe, "ICMSTot");
  const dest = node(nfe, "dest");
  const transp = node(nfe, "transp");
  const pag = node(nfe, "pag");
  const infAdic = node(nfe, "infAdic");
  const infRespTec = node(nfe, "infRespTec");
  const infNFeSupl = node(document, "infNFeSupl");
  const prot = node(document, "infProt");
  const cStat = prot ? firstText(prot, "cStat") : firstText(document, "cStat");
  const motivo = prot ? firstText(prot, "xMotivo") : firstText(document, "xMotivo");
  const status = noteStatus(cStat, motivo, true);
  const details = localElements(nfe, "det");
  const valorProdutos = numberValue(total ? childText(total, "vProd") : firstText(nfe, "vProd"));
  const descontos = numberValue(total ? childText(total, "vDesc") : firstText(nfe, "vDesc"));
  const valorNota = numberValue(total ? childText(total, "vNF") : firstText(nfe, "vNF"));

  const noteBase: NoteRow = {
    chave,
    numero: firstText(nfe, "nNF"),
    serie: firstText(nfe, "serie"),
    modelo: firstText(nfe, "mod"),
    emissao: firstText(nfe, "dhEmi") || firstText(nfe, "dEmi"),
    municipio: enderEmit ? childText(enderEmit, "xMun") : "",
    uf: enderEmit ? childText(enderEmit, "UF") : "",
    emitente: emit ? childText(emit, "xNome") : "",
    fantasia: emit ? childText(emit, "xFant") : "",
    cnpj: emit ? childText(emit, "CNPJ") || childText(emit, "CPF") : "",
    status,
    motivo: motivo || (prot ? "Protocolo localizado" : "XML sem protocolo de autorizacao"),
    protocolo: prot ? firstText(prot, "nProt") : "",
    itens: details.length,
    valorProdutos,
    descontos,
    valorNota,
    origem: sourceName,
    rawFields: [
      ...attributeFields(infNfe, "infNFe", ["versao"]),
      ...collectLeafFields(ide, "ide"),
      ...collectLeafFields(emit, "emit"),
      ...collectLeafFields(dest, "dest"),
      ...collectLeafFields(total, "total.ICMSTot"),
      ...collectLeafFields(transp, "transp"),
      ...collectLeafFields(pag, "pag"),
      ...collectLeafFields(infAdic, "infAdic"),
      ...collectLeafFields(infRespTec, "infRespTec"),
      ...collectLeafFields(infNFeSupl, "infNFeSupl"),
      ...collectLeafFields(prot, "protocolo.infProt"),
    ],
  };

  const products = details.map((detail) => {
    const prod = node(detail, "prod");
    const imposto = node(detail, "imposto");
    const quantidade = numberValue(prod ? childText(prod, "qCom") : "0");
    const valorUnitario = numberValue(prod ? childText(prod, "vUnCom") : "0");
    const valorProduto = numberValue(prod ? childText(prod, "vProd") : "0");
    const desconto = numberValue(prod ? childText(prod, "vDesc") : "0");

    return {
      chave,
      numero: noteBase.numero,
      serie: noteBase.serie,
      emissao: noteBase.emissao,
      emitente: noteBase.emitente,
      cnpj: noteBase.cnpj,
      status,
      itemNumero: detail.getAttribute("nItem") ?? "",
      codigo: prod ? childText(prod, "cProd") : "",
      ean: prod ? childText(prod, "cEAN") : "",
      descricao: prod ? childText(prod, "xProd") : "",
      ncm: prod ? childText(prod, "NCM") : "",
      cest: prod ? childText(prod, "CEST") : "",
      cfop: prod ? childText(prod, "CFOP") : "",
      unidade: prod ? childText(prod, "uCom") : "",
      quantidade,
      valorUnitario,
      valorProduto,
      desconto,
      totalLiquido: valorProduto - desconto,
      rawFields: [
        ...noteBase.rawFields,
        ...collectLeafFields(prod, "produto"),
        ...collectLeafFields(imposto, "imposto"),
      ],
      origem: sourceName,
    } satisfies ProductRow;
  });

  return { notes: [noteBase], products, invalidFiles: [], warnings: [] };
}

function summarize(notes: NoteRow[], invalidCount: number) {
  const totals = notes.reduce(
    (acc, note) => {
      acc[note.status] += 1;
      acc.valorNotas += note.valorNota;
      acc.valorProdutos += note.valorProdutos;
      acc.descontos += note.descontos;
      acc.itens += note.itens;
      return acc;
    },
    {
      autorizada: 0,
      cancelada: 0,
      invalida: invalidCount,
      "sem-protocolo": 0,
      valorNotas: 0,
      valorProdutos: 0,
      descontos: 0,
      itens: 0,
    } as Record<NoteStatus, number> & {
      valorNotas: number;
      valorProdutos: number;
      descontos: number;
      itens: number;
    },
  );

  return totals;
}

function xmlEscape(value: string | number) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildExcelXml(sheetName: string, headers: string[], rows: Array<Array<string | number>>) {
  const tableRows = [headers, ...rows]
    .map(
      (row) =>
        `<Row>${row
          .map((cell) => {
            const isNumber = typeof cell === "number";
            return `<Cell><Data ss:Type="${isNumber ? "Number" : "String"}">${xmlEscape(cell)}</Data></Cell>`;
          })
          .join("")}</Row>`,
    )
    .join("");

  return `<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="${xmlEscape(sheetName)}"><Table>${tableRows}</Table></Worksheet></Workbook>`;
}

function downloadBlob(filename: string, content: BlobPart, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function rowField(row: { rawFields: RawField[] }, ...keys: string[]) {
  const record = fieldsToRecord(row.rawFields);
  for (const key of keys) {
    if (record[key]) return record[key];
  }
  return "";
}

function rowFieldBySuffix(row: { rawFields: RawField[] }, prefix: string, ...suffixes: string[]) {
  for (const suffix of suffixes) {
    const field = row.rawFields.find((item) => item.key.startsWith(prefix) && item.key.endsWith(`.${suffix}`));
    if (field?.value) return field.value;
  }
  return "";
}

type ColumnDef<T> = {
  header: string;
  value: (row: T) => string | number;
};

const productColumns: Array<ColumnDef<ProductRow>> = [
  { header: "Chave de Acesso", value: (row) => row.chave },
  { header: "Versao NFe", value: (row) => rowField(row, "infNFe.versao") },
  { header: "UF Emitente", value: (row) => rowField(row, "ide.cUF") },
  { header: "Codigo Numerico", value: (row) => rowField(row, "ide.cNF") },
  { header: "Natureza Operacao", value: (row) => rowField(row, "ide.natOp") },
  { header: "Modelo NFe", value: (row) => rowField(row, "ide.mod") },
  { header: "Serie", value: (row) => row.serie },
  { header: "Numero NFe", value: (row) => row.numero },
  { header: "Data/Hora Emissao", value: (row) => dateText(row.emissao) },
  { header: "Tipo NFe", value: (row) => rowField(row, "ide.tpNF") },
  { header: "Ambiente", value: (row) => rowField(row, "ide.tpAmb") },
  { header: "Finalidade NFe", value: (row) => rowField(row, "ide.finNFe") },
  { header: "Indica Consumidor Final", value: (row) => rowField(row, "ide.indFinal") },
  { header: "Indica Presenca", value: (row) => rowField(row, "ide.indPres") },
  { header: "Justificativa Contingencia", value: (row) => rowField(row, "ide.xJust") },
  { header: "Status", value: (row) => statusLabels[row.status] },
  { header: "Emitente_CNPJ", value: (row) => row.cnpj },
  { header: "Emitente_Nome", value: (row) => row.emitente },
  { header: "Emitente_Nome Fantasia", value: (row) => rowField(row, "emit.xFant") },
  { header: "Emitente_IE", value: (row) => rowField(row, "emit.IE") },
  { header: "Emitente_CRT", value: (row) => rowField(row, "emit.CRT") },
  { header: "Emitente_Logradouro", value: (row) => rowField(row, "emit.enderEmit.xLgr") },
  { header: "Emitente_Numero", value: (row) => rowField(row, "emit.enderEmit.nro") },
  { header: "Emitente_Bairro", value: (row) => rowField(row, "emit.enderEmit.xBairro") },
  { header: "Emitente_Cod Municipio", value: (row) => rowField(row, "emit.enderEmit.cMun") },
  { header: "Emitente_Municipio", value: (row) => rowField(row, "emit.enderEmit.xMun") },
  { header: "Emitente_UF", value: (row) => rowField(row, "emit.enderEmit.UF") },
  { header: "Emitente_CEP", value: (row) => rowField(row, "emit.enderEmit.CEP") },
  { header: "Emitente_Telefone", value: (row) => rowField(row, "emit.enderEmit.fone") },
  { header: "Valor Total Produtos", value: (row) => rowField(row, "total.ICMSTot.vProd") },
  { header: "Valor Total NFe", value: (row) => rowField(row, "total.ICMSTot.vNF") },
  { header: "Valor Outros", value: (row) => rowField(row, "total.ICMSTot.vOutro") },
  { header: "Valor Frete", value: (row) => rowField(row, "total.ICMSTot.vFrete") },
  { header: "Valor Seguro", value: (row) => rowField(row, "total.ICMSTot.vSeg") },
  { header: "Valor Desconto", value: (row) => rowField(row, "total.ICMSTot.vDesc") },
  { header: "Valor II", value: (row) => rowField(row, "total.ICMSTot.vII") },
  { header: "Valor IPI", value: (row) => rowField(row, "total.ICMSTot.vIPI") },
  { header: "Valor PIS Tot", value: (row) => rowField(row, "total.ICMSTot.vPIS") },
  { header: "Valor COFINS Tot", value: (row) => rowField(row, "total.ICMSTot.vCOFINS") },
  { header: "Item_N", value: (row) => row.itemNumero },
  { header: "Item_Cod Produto", value: (row) => row.codigo },
  { header: "Item_Descricao Produto", value: (row) => row.descricao },
  { header: "Item_NCM", value: (row) => row.ncm },
  { header: "Item_CEST", value: (row) => row.cest },
  { header: "Item_CFOP", value: (row) => row.cfop },
  { header: "Item_Unidade Comercial", value: (row) => row.unidade },
  { header: "Item_Qtde Comercial", value: (row) => row.quantidade },
  { header: "Item_Valor Unidade Comercial", value: (row) => row.valorUnitario },
  { header: "Item_Valor Produto", value: (row) => row.valorProduto },
  { header: "Item_GTIN", value: (row) => row.ean },
  { header: "Item_GTIN Tributavel", value: (row) => rowField(row, "produto.cEANTrib") },
  { header: "Item_Unidade Tributavel", value: (row) => rowField(row, "produto.uTrib") },
  { header: "Item_Qtde Tributavel", value: (row) => rowField(row, "produto.qTrib") },
  { header: "Item_Valor Unidade Tributavel", value: (row) => rowField(row, "produto.vUnTrib") },
  { header: "Item_Outros Valores", value: (row) => rowField(row, "produto.vOutro") },
  { header: "Item_Indica Total", value: (row) => rowField(row, "produto.indTot") },
  { header: "Item_Valor Total Tributos", value: (row) => rowField(row, "imposto.vTotTrib") },
  { header: "Item_ICMS_Origem", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "orig") },
  { header: "Item_ICMS_CST/CSOSN", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "CST", "CSOSN") },
  { header: "Item_ICMS_Modalidade BC", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "modBC") },
  { header: "Item_ICMS_vBC", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "vBC") },
  { header: "Item_ICMS_pICMS", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "pICMS") },
  { header: "Item_ICMS_vICMS", value: (row) => rowFieldBySuffix(row, "imposto.ICMS", "vICMS") },
  { header: "Item_IPI_CST", value: (row) => rowFieldBySuffix(row, "imposto.IPI", "CST") },
  { header: "Item_IPI_vBC", value: (row) => rowFieldBySuffix(row, "imposto.IPI", "vBC") },
  { header: "Item_IPI_pIPI", value: (row) => rowFieldBySuffix(row, "imposto.IPI", "pIPI") },
  { header: "Item_IPI_vIPI", value: (row) => rowFieldBySuffix(row, "imposto.IPI", "vIPI") },
  { header: "Item_PIS_CST", value: (row) => rowFieldBySuffix(row, "imposto.PIS", "CST") },
  { header: "Item_PIS_vBC", value: (row) => rowFieldBySuffix(row, "imposto.PIS", "vBC") },
  { header: "Item_PIS_pPIS", value: (row) => rowFieldBySuffix(row, "imposto.PIS", "pPIS") },
  { header: "Item_PIS_vPIS", value: (row) => rowFieldBySuffix(row, "imposto.PIS", "vPIS") },
  { header: "Item_COFINS_CST", value: (row) => rowFieldBySuffix(row, "imposto.COFINS", "CST") },
  { header: "Item_COFINS_vBC", value: (row) => rowFieldBySuffix(row, "imposto.COFINS", "vBC") },
  { header: "Item_COFINS_pCOFINS", value: (row) => rowFieldBySuffix(row, "imposto.COFINS", "pCOFINS") },
  { header: "Item_COFINS_vCOFINS", value: (row) => rowFieldBySuffix(row, "imposto.COFINS", "vCOFINS") },
  { header: "Origem Arquivo", value: (row) => row.origem },
];

const noteColumns: Array<ColumnDef<NoteRow>> = [
  { header: "Chave de Acesso", value: (row) => row.chave },
  { header: "Modelo NFe", value: (row) => row.modelo },
  { header: "Serie", value: (row) => row.serie },
  { header: "Numero NFe", value: (row) => row.numero },
  { header: "Data/Hora Emissao", value: (row) => dateText(row.emissao) },
  { header: "Status", value: (row) => statusLabels[row.status] },
  { header: "Motivo", value: (row) => row.motivo },
  { header: "Protocolo", value: (row) => row.protocolo },
  { header: "Natureza Operacao", value: (row) => rowField(row, "ide.natOp") },
  { header: "Emitente_CNPJ", value: (row) => row.cnpj },
  { header: "Emitente_Nome", value: (row) => row.emitente },
  { header: "Emitente_Nome Fantasia", value: (row) => row.fantasia },
  { header: "Emitente_Municipio", value: (row) => row.municipio },
  { header: "Emitente_UF", value: (row) => row.uf },
  { header: "Itens", value: (row) => row.itens },
  { header: "Valor Total Produtos", value: (row) => row.valorProdutos },
  { header: "Valor Desconto", value: (row) => row.descontos },
  { header: "Valor Total NFe", value: (row) => row.valorNota },
  { header: "Valor Outros", value: (row) => rowField(row, "total.ICMSTot.vOutro") },
  { header: "Valor Frete", value: (row) => rowField(row, "total.ICMSTot.vFrete") },
  { header: "Forma Pagamento", value: (row) => rowField(row, "pag.detPag.tPag") },
  { header: "Valor Pagamento", value: (row) => rowField(row, "pag.detPag.vPag") },
  { header: "Origem Arquivo", value: (row) => row.origem },
];

function productExport(products: ProductRow[]) {
  return {
    headers: productColumns.map((column) => column.header),
    rows: products.map((product) => productColumns.map((column) => column.value(product))),
  };
}

function noteExport(notes: NoteRow[]) {
  return {
    headers: noteColumns.map((column) => column.header),
    rows: notes.map((note) => noteColumns.map((column) => column.value(note))),
  };
}
function htmlEscape(value: string | number) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function formatCnpj(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 14) return value;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

function formatCep(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 8) return value;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length === 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return value;
}

function buildEmitterHtml(notes: NoteRow[]) {
  const emitters = Array.from(
    notes.reduce((map, note) => {
      const key = note.cnpj || note.emitente;
      if (!key || map.has(key)) return map;

      const address = [
        [rowField(note, "emit.enderEmit.xLgr"), rowField(note, "emit.enderEmit.nro")].filter(Boolean).join(", "),
        rowField(note, "emit.enderEmit.xBairro"),
        [rowField(note, "emit.enderEmit.xMun") || note.municipio, rowField(note, "emit.enderEmit.UF") || note.uf].filter(Boolean).join("/"),
        rowField(note, "emit.enderEmit.CEP") ? `CEP ${formatCep(rowField(note, "emit.enderEmit.CEP"))}` : "",
      ]
        .filter(Boolean)
        .join(" - ");

      map.set(key, {
        cnpj: note.cnpj,
        name: note.emitente,
        fantasy: note.fantasia,
        ie: rowField(note, "emit.IE"),
        address,
        phone: rowField(note, "emit.enderEmit.fone"),
      });
      return map;
    }, new Map<string, { cnpj: string; name: string; fantasy: string; ie: string; address: string; phone: string }>()),
  ).map(([, emitter]) => emitter);

  if (!emitters.length) return "";

  const visible = emitters.slice(0, 3);
  const restCount = emitters.length - visible.length;

  return `<div class="section emitter-section"><h2>Empresa emitente</h2><div class="emitter-grid">${visible
    .map(
      (emitter) =>
        `<div class="emitter-card"><div class="emitter-name">${htmlEscape(emitter.name || "Emitente nao identificado")}</div>${emitter.fantasy ? `<div class="emitter-fantasy">${htmlEscape(emitter.fantasy)}</div>` : ""}<div class="emitter-data"><span>CNPJ ${htmlEscape(formatCnpj(emitter.cnpj || "-"))}</span>${emitter.ie ? `<span>IE ${htmlEscape(emitter.ie)}</span>` : ""}${emitter.phone ? `<span>Fone ${htmlEscape(formatPhone(emitter.phone))}</span>` : ""}</div>${emitter.address ? `<div class="emitter-address">${htmlEscape(emitter.address)}</div>` : ""}</div>`,
    )
    .join("")}</div>${restCount > 0 ? `<p class="pdf-note">Mais ${restCount} emitente(s) no lote.</p>` : ""}</div>`;
}

function filterNotes(notes: NoteRow[], options: OutputOptions) {
  return notes.filter((note) => {
    if (note.status === "autorizada") return options.includeAuthorized;
    if (note.status === "cancelada") return options.includeCanceled;
    if (note.status === "sem-protocolo") return options.includeNoProtocol;
    return options.includeInvalid;
  });
}
function buildProductRankHtml(products: ProductRow[]) {
  const grouped = Array.from(
    products.reduce((map, product) => {
      const key = product.descricao || product.codigo || "Produto sem descricao";
      const current = map.get(key) ?? { description: key, quantity: 0, total: 0 };
      current.quantity += product.quantidade;
      current.total += product.totalLiquido;
      map.set(key, current);
      return map;
    }, new Map<string, { description: string; quantity: number; total: number }>()),
  )
    .map(([, value]) => value)
    .sort((left, right) => right.total - left.total);

  if (!grouped.length) return "";

  const columnSize = 15;
  const maxVisibleProducts = 44;
  const visible = grouped.slice(0, maxVisibleProducts);
  const rest = grouped.slice(maxVisibleProducts);
  if (rest.length) {
    visible.push({
      description: `Demais produtos (${rest.length})`,
      quantity: rest.reduce((sum, product) => sum + product.quantity, 0),
      total: rest.reduce((sum, product) => sum + product.total, 0),
    });
  }

  const columnCount = visible.length <= columnSize ? 1 : visible.length <= columnSize * 2 ? 2 : 3;
  const columns = Array.from({ length: columnCount }, (_, index) => visible.slice(index * columnSize, (index + 1) * columnSize));
  const maxTotal = Math.max(...visible.map((product) => product.total), 1);
  let currentIndex = 0;

  const rowsHtml = columns
    .map(
      (column) =>
        `<div class="rank-column">${column
          .map((product) => {
            currentIndex += 1;
            const width = Math.max((product.total / maxTotal) * 100, 4);
            return `<div class="rank-row"><div class="rank-head"><span>${currentIndex}. ${htmlEscape(product.description)}</span><strong>${money(product.total)}</strong></div><div class="rank-meta">Qtd. ${product.quantity.toLocaleString("pt-BR", { maximumFractionDigits: 4 })}</div><div class="rank-track"><div class="rank-bar" style="width:${width}%"></div></div></div>`;
          })
          .join("")}</div>`,
    )
    .join("");

  return `<div class="section"><h2>Ranking por produto</h2><div class="rank-list rank-cols-${columnCount}">${rowsHtml}</div></div>`;
}
function buildReportHtml(notes: NoteRow[], products: ProductRow[], invalidFiles: string[], options: OutputOptions) {
  const totals = summarize(notes, options.includeInvalid ? invalidFiles.length : 0);
  const adjustmentValue = totals.valorNotas - totals.valorProdutos + totals.descontos;
  const cards = [
    ["Autorizadas", totals.autorizada],
    ["Canceladas", totals.cancelada],
    ["Sem protocolo", totals["sem-protocolo"]],
    ["Invalidas", totals.invalida],
  ];

  return `<!doctype html><html><head><meta charset="utf-8"><title>Relatorio NFC-e eepy</title><style>
    @page { margin: 18mm; }
    body { margin: 0; background: #f8fafc; color: #0f172a; font-family: Arial, sans-serif; }
    .hero { border-radius: 24px; padding: 28px; color: white; background: linear-gradient(135deg, #06111f, #12364b 58%, #f97316); }
    .eyebrow { color: #a5f3fc; font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; }
    h1 { margin: 12px 0 8px; font-size: 30px; line-height: 1.1; }
    .muted { color: #cbd5e1; font-size: 13px; line-height: 1.55; }
    .cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 18px; }
    .card { border: 1px solid #dbeafe; border-radius: 16px; background: white; padding: 15px; }
    .label { color: #64748b; font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
    .value { margin-top: 8px; font-size: 24px; font-weight: 800; color: #0f172a; }
    .section { margin-top: 22px; border: 1px solid #e2e8f0; border-radius: 18px; background: white; padding: 18px; }
    h2 { margin: 0 0 12px; font-size: 18px; }
    table { width: 100%; border-collapse: collapse; font-size: 11px; }
    th { text-align: left; color: #475569; background: #f1f5f9; }
    th, td { border-bottom: 1px solid #e2e8f0; padding: 8px; vertical-align: top; }
    .total { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    .emitter-section { margin-top: 18px; }
    .emitter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
    .emitter-card { min-width: 0; border-radius: 14px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; }
    .emitter-name { font-size: 14px; font-weight: 800; color: #0f172a; }
    .emitter-fantasy { margin-top: 3px; color: #0f766e; font-size: 12px; font-weight: 700; }
    .emitter-data { display: grid; gap: 3px; margin-top: 10px; color: #334155; font-size: 11px; font-weight: 700; }
    .emitter-address { margin-top: 10px; color: #64748b; font-size: 11px; line-height: 1.45; }
    .pdf-note { margin: 10px 0 0; color: #64748b; font-size: 11px; }
    .rank-list { display: grid; gap: 12px; }
    .rank-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .rank-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .rank-column { display: grid; gap: 8px; min-width: 0; }
    .rank-row { break-inside: avoid; min-width: 0; }
    .rank-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; font-size: 10px; font-weight: 700; }
    .rank-head span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .rank-head strong { white-space: nowrap; }
    .rank-meta { margin-top: 2px; color: #64748b; font-size: 9px; }
    .rank-track { height: 6px; margin-top: 4px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }
    .rank-bar { height: 100%; border-radius: inherit; background: linear-gradient(90deg, #67e8f9, #f97316); }
    .footer { margin-top: 18px; color: #64748b; font-size: 11px; text-align: right; }
    @media print {
      @page { size: A4 portrait; margin: 7mm; }
      * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display:none; }
      body { background: white; font-size: 10px; }
      .hero { border-radius: 14px; padding: 12px 16px; }
      .eyebrow { font-size: 8px; letter-spacing: .16em; }
      h1 { margin: 4px 0 2px; font-size: 20px; }
      .muted { font-size: 9px; line-height: 1.3; }
      .cards { grid-template-columns: repeat(4, 1fr); gap: 5px; margin-top: 6px; }
      .card { border-radius: 10px; padding: 8px; }
      .label { font-size: 7px; letter-spacing: .12em; }
      .value { margin-top: 3px; font-size: 13px; }
      .section { break-inside: avoid; margin-top: 8px; border-radius: 12px; padding: 10px; }
      h2 { margin-bottom: 6px; font-size: 13px; }
      .total { grid-template-columns: repeat(2, 1fr); gap: 6px; }
      .section .muted { margin: 6px 0 0 !important; font-size: 8px; line-height: 1.25; }
      .emitter-section { margin-top: 8px; }
      .emitter-grid { grid-template-columns: 1fr; gap: 6px; }
      .emitter-card { border-radius: 10px; padding: 8px; }
      .emitter-name { font-size: 11px; }
      .emitter-fantasy { margin-top: 1px; font-size: 9px; }
      .emitter-data { gap: 1px; margin-top: 5px; font-size: 8px; }
      .emitter-address { margin-top: 5px; font-size: 8px; line-height: 1.25; }
      .rank-list { gap: 6px; }
      .rank-column { gap: 4px; }
      .rank-head { gap: 5px; font-size: 7.5px; }
      .rank-meta { margin-top: 0; font-size: 7px; }
      .rank-track { height: 3px; margin-top: 2px; }
      table { font-size: 7.5px; }
      th, td { padding: 3px 5px; }
      .notes-section { break-before: page; page-break-before: always; }
      .notes-section table { font-size: 8px; }
      .notes-section th, .notes-section td { padding: 4px 6px; }
      .footer { display: none; }
    }
  </style></head><body>
    <button class="no-print" onclick="window.print()" style="position:fixed;right:18px;top:18px;border:0;border-radius:999px;background:#0f172a;color:white;padding:10px 16px;font-weight:700;">Salvar em PDF</button>
    <div class="hero"><div class="eyebrow">Linha agio / eepy</div><h1>Relatorio resumido NFC-e</h1><div class="muted">Gerado em ${htmlEscape(new Date().toLocaleString("pt-BR"))}. Configurado com ${notes.length} notas consideradas no resumo.</div></div>
    ${buildEmitterHtml(notes)}
    ${options.pdfIncludeTotals ? `<div class="cards">${cards.map(([label, value]) => `<div class="card"><div class="label">${label}</div><div class="value">${value}</div></div>`).join("")}</div><div class="section"><h2>Totalizadores financeiros</h2><div class="total"><div><div class="label">Valor das notas</div><div class="value">${money(totals.valorNotas)}</div></div><div><div class="label">Valor dos produtos</div><div class="value">${money(totals.valorProdutos)}</div></div><div><div class="label">Descontos</div><div class="value">${money(totals.descontos)}</div></div><div><div class="label">Outros / ajustes</div><div class="value">${money(adjustmentValue)}</div></div></div><p class="muted" style="color:#64748b;margin:14px 0 0">A diferenca aparece porque o valor da nota pode incluir outros valores, frete, seguro, tributos ou ajustes alem do total bruto de produtos e descontos.</p></div>` : ""}
    ${buildProductRankHtml(products)}
    ${options.pdfIncludeNoteDetails ? `<div class="section notes-section"><h2>Notas consideradas</h2><table><thead><tr><th>Nota</th><th>Data</th><th>Status</th><th>Emitente</th><th>Itens</th><th>Valor</th></tr></thead><tbody>${notes.map((note) => `<tr><td>${htmlEscape(note.numero || "-")}</td><td>${htmlEscape(dateText(note.emissao) || "-")}</td><td>${htmlEscape(statusLabels[note.status])}</td><td>${htmlEscape(note.emitente || "-")}</td><td>${note.itens}</td><td>${money(note.valorNota)}</td></tr>`).join("")}</tbody></table></div>` : ""}
    ${options.includeInvalid && invalidFiles.length ? `<div class="section"><h2>Arquivos invalidos</h2><table><tbody>${invalidFiles.map((file) => `<tr><td>${htmlEscape(file)}</td></tr>`).join("")}</tbody></table></div>` : ""}
    <div class="footer">eepy - Conversor NFC-e para Excel e PDF</div>
  </body></html>`;
}

function openPrintableReport(notes: NoteRow[], products: ProductRow[], invalidFiles: string[], options: OutputOptions) {
  const report = window.open("", "_blank", "width=1100,height=800");
  if (!report) return;
  report.document.write(buildReportHtml(notes, products, invalidFiles, options));
  report.document.close();
  report.focus();
}
async function inflateRaw(data: Uint8Array) {
  if (!("DecompressionStream" in window)) {
    throw new Error("Seu navegador nao suporta descompactacao ZIP automatica.");
  }

  const payload = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
  const stream = new Blob([payload]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function u16(data: DataView, offset: number) {
  return data.getUint16(offset, true);
}

function u32(data: DataView, offset: number) {
  return data.getUint32(offset, true);
}

async function extractRar(file: File): Promise<InputFile[]> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/nfce/extract-rar", {
    method: "POST",
    body: formData,
  });
  const payload = (await response.json()) as { files?: Array<{ name: string; relativePath: string; text: string }>; error?: string };

  if (!response.ok) {
    throw new Error(payload.error || "Nao foi possivel extrair o arquivo RAR.");
  }

  return (payload.files ?? []).map((item) => ({
    name: item.name,
    relativePath: `${file.name}/${item.relativePath}`,
    extension: "xml",
    text: item.text,
  }));
}
async function extractZip(file: File): Promise<InputFile[]> {
  const buffer = await file.arrayBuffer();
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  let eocd = -1;

  for (let index = bytes.length - 22; index >= 0; index -= 1) {
    if (u32(view, index) === 0x06054b50) {
      eocd = index;
      break;
    }
  }

  if (eocd === -1) {
    return [{ name: file.name, relativePath: file.name, extension: "zip", unsupported: "ZIP invalido" }];
  }

  const entries = u16(view, eocd + 10);
  let centralOffset = u32(view, eocd + 16);
  const files: InputFile[] = [];

  for (let entry = 0; entry < entries; entry += 1) {
    if (u32(view, centralOffset) !== 0x02014b50) break;

    const method = u16(view, centralOffset + 10);
    const compressedSize = u32(view, centralOffset + 20);
    const nameLength = u16(view, centralOffset + 28);
    const extraLength = u16(view, centralOffset + 30);
    const commentLength = u16(view, centralOffset + 32);
    const localOffset = u32(view, centralOffset + 42);
    const name = decoder.decode(bytes.slice(centralOffset + 46, centralOffset + 46 + nameLength));
    const extension = name.split(".").pop()?.toLowerCase() ?? "";

    if (extension === "xml") {
      const localNameLength = u16(view, localOffset + 26);
      const localExtraLength = u16(view, localOffset + 28);
      const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = bytes.slice(dataOffset, dataOffset + compressedSize);
      let extracted: Uint8Array | null = null;

      if (method === 0) {
        extracted = compressed;
      } else if (method === 8) {
        extracted = await inflateRaw(compressed);
      }

      if (extracted) {
        files.push({
          name: name.split("/").pop() ?? name,
          relativePath: `${file.name}/${name}`,
          extension: "xml",
          text: decoder.decode(extracted),
        });
      } else {
        files.push({ name, relativePath: `${file.name}/${name}`, extension, unsupported: "Metodo ZIP nao suportado" });
      }
    }

    centralOffset += 46 + nameLength + extraLength + commentLength;
  }

  return files;
}

function folderDepth(relativePath: string) {
  return Math.max(relativePath.split(/[\\/]/).length - 1, 0);
}

async function normalizeFiles(fileList: FileList) {
  const inputFiles: InputFile[] = [];
  const warnings: string[] = [];

  for (const file of Array.from(fileList)) {
    const relativePath = file.webkitRelativePath || file.name;
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

    if (folderDepth(relativePath) > maxFolderDepth) {
      warnings.push(`${relativePath} ignorado: acima de ${maxFolderDepth} subpastas.`);
      continue;
    }

    if (extension === "xml") {
      inputFiles.push({ name: file.name, relativePath, extension, text: await file.text() });
    } else if (extension === "zip") {
      inputFiles.push(...(await extractZip(file)));
    } else if (extension === "rar") {
      try {
        const extracted = await extractRar(file);
        if (extracted.length) {
          inputFiles.push(...extracted);
        } else {
          warnings.push(`${relativePath}: RAR extraido, mas nenhum XML foi encontrado ate ${maxFolderDepth} subpastas.`);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Falha ao extrair RAR.";
        warnings.push(`${relativePath}: ${message}`);
      }
    } else {
      inputFiles.push({ name: file.name, relativePath, extension, unsupported: "Formato ignorado" });
    }
  }

  return { inputFiles, warnings };
}

function waitForPaint() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

function deduplicateNotes(notes: NoteRow[]) {
  const byKey = new Map<string, NoteRow>();

  notes.forEach((note) => {
    const key = note.chave || `${note.numero}-${note.serie}-${note.origem}`;
    const current = byKey.get(key);

    if (!current || (current.status !== "cancelada" && note.status === "cancelada")) {
      byKey.set(key, note);
    }
  });

  return Array.from(byKey.values());
}

export default function NfceConverter() {
  const [options, setOptions] = useState(initialOptions);
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [invalidFiles, setInvalidFiles] = useState<string[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState("Preparando leitura dos arquivos...");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const filteredNotes = useMemo(() => filterNotes(notes, options), [notes, options]);
  const filteredKeys = useMemo(() => new Set(filteredNotes.map((note) => note.chave)), [filteredNotes]);
  const filteredProducts = useMemo(() => products.filter((product) => filteredKeys.has(product.chave)), [products, filteredKeys]);
  const totals = useMemo(() => summarize(filteredNotes, options.includeInvalid ? invalidFiles.length : 0), [filteredNotes, invalidFiles.length, options.includeInvalid]);

  async function processFiles(files: FileList | null) {
    if (!files?.length) return;
    setIsProcessing(true);
    setProcessingMessage("Recebendo arquivos e preparando leitura...");
    try {
      await waitForPaint();
      setProcessingMessage("Extraindo pacotes e localizando XMLs NFC-e...");
      await waitForPaint();
      const normalized = await normalizeFiles(files);
      setProcessingMessage(`Lendo ${normalized.inputFiles.length} arquivo(s) XML...`);
      await waitForPaint();
      const parsed = normalized.inputFiles.reduce(
        (acc, inputFile) => {
          if (!inputFile.text) {
            acc.warnings.push(inputFile.unsupported ? `${inputFile.relativePath}: ${inputFile.unsupported}` : `${inputFile.relativePath}: sem conteudo`);
            if (inputFile.extension !== "rar") acc.invalidFiles.push(inputFile.relativePath);
            return acc;
          }
          const result = parseXmlDocument(inputFile.text, inputFile.relativePath);
          acc.notes.push(...result.notes);
          acc.products.push(...result.products);
          acc.invalidFiles.push(...result.invalidFiles);
          acc.warnings.push(...result.warnings);
          return acc;
        },
        { notes: [] as NoteRow[], products: [] as ProductRow[], invalidFiles: [] as string[], warnings: [...normalized.warnings] as string[] },
      );
      setProcessingMessage("Organizando notas, produtos e totalizadores...");
      await waitForPaint();
      const uniqueNotes = deduplicateNotes(parsed.notes);
      const activeKeys = new Set(uniqueNotes.map((note) => note.chave));
      setNotes(uniqueNotes);
      setProducts(parsed.products.filter((product) => activeKeys.has(product.chave)));
      setInvalidFiles(parsed.invalidFiles);
      setWarnings(parsed.warnings);
    } finally {
      setIsProcessing(false);
    }
  }

  function setOption<K extends keyof OutputOptions>(key: K, value: OutputOptions[K]) {
    setOptions((current) => ({ ...current, [key]: value }));
  }

  function generateOutputs() {
    if (options.mode === "excel") {
      if (options.excelModel === "produtos") {
        const exportData = productExport(filteredProducts);
        downloadBlob("nfce-analitico-produtos.xls", buildExcelXml("Analitico por produto", exportData.headers, exportData.rows), "application/vnd.ms-excel;charset=utf-8");
      } else {
        const exportData = noteExport(filteredNotes);
        downloadBlob("nfce-analitico-notas.xls", buildExcelXml("Analitico por nota", exportData.headers, exportData.rows), "application/vnd.ms-excel;charset=utf-8");
      }
      return;
    }
    openPrintableReport(filteredNotes, filteredProducts, invalidFiles, options);
  }

  const canGenerate = filteredNotes.length > 0 || (options.includeInvalid && invalidFiles.length > 0);
  const outputLabel = options.mode === "excel" ? "Gerar Excel" : "Abrir relatorio PDF";

  return (
    <div className="relative grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      {isProcessing ? (
        <div className="fixed inset-x-4 top-6 z-50 mx-auto max-w-xl rounded-[28px] border border-cyan-200/25 bg-slate-950/95 p-5 shadow-[0_24px_80px_rgba(8,47,73,0.55)] backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10">
              <span className="absolute h-12 w-12 animate-ping rounded-2xl border border-cyan-200/25" />
              <Loader2 className="h-6 w-6 animate-spin text-cyan-100" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">Processando NFC-e</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{processingMessage}</p>
              <div className="mt-4 space-y-2">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 animate-[pulse_1.15s_ease-in-out_infinite] rounded-full bg-[linear-gradient(90deg,#67e8f9,#f97316)] shadow-[0_0_24px_rgba(103,232,249,0.45)]" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-1.5 animate-pulse rounded-full bg-cyan-200/45" />
                  <span className="h-1.5 animate-pulse rounded-full bg-orange-200/35 [animation-delay:120ms]" />
                  <span className="h-1.5 animate-pulse rounded-full bg-white/25 [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="space-y-5">
        <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">Entrada</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">NFC-e selecionada</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">Envie XMLs avulsos, uma pasta com subpastas, ZIP ou RAR. A ferramenta processa os arquivos e preserva seu fluxo local.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button type="button" disabled={isProcessing} onClick={() => fileInputRef.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/15 disabled:cursor-not-allowed disabled:opacity-50"><UploadCloud className="h-5 w-5" />Selecionar arquivos</button>
            <button type="button" disabled={isProcessing} onClick={() => folderInputRef.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-300/20 bg-orange-300/10 px-4 py-4 text-sm font-semibold text-orange-50 transition hover:bg-orange-300/15 disabled:cursor-not-allowed disabled:opacity-50"><FolderOpen className="h-5 w-5" />Abrir pasta</button>
          </div>
          <input ref={fileInputRef} type="file" multiple accept=".xml,.zip,.rar,application/xml,text/xml,application/zip,application/x-rar-compressed" className="hidden" onChange={(event) => processFiles(event.target.files)} />
          <input ref={folderInputRef} type="file" multiple className="hidden" // @ts-expect-error webkitdirectory is a browser-specific folder picker attribute.
            webkitdirectory="true" onChange={(event) => processFiles(event.target.files)} />
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-xs leading-6 text-slate-300"><div className="flex items-center gap-2 font-semibold text-slate-100"><Archive className="h-4 w-4 text-cyan-200" />Flexibilidade atual</div><p className="mt-2">XML, multiplos XMLs, pasta ate 5 subpastas, ZIP e RAR com XMLs NFC-e.</p></div>
        </section>

        <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">Saida</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Escolha o arquivo final</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(["excel", "pdf"] as OutputMode[]).map((mode) => (
              <button key={mode} type="button" onClick={() => setOption("mode", mode)} className={`rounded-2xl border px-4 py-4 text-left transition ${options.mode === mode ? "border-cyan-300/50 bg-cyan-300/12 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/8"}`}>
                <span className="flex items-center gap-2 text-sm font-semibold">{mode === "excel" ? <FileSpreadsheet className="h-4 w-4" /> : <FileText className="h-4 w-4" />}{mode === "excel" ? "Excel" : "PDF"}</span>
                <span className="mt-2 block text-xs leading-5 text-slate-400">{mode === "excel" ? "Analitico rico por produto ou por nota." : "Relatorio visual com totalizadores."}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Configuracao da saida</p>
            {options.mode === "excel" ? (
              <div className="mt-4 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  {(["produtos", "notas"] as ExcelModel[]).map((model) => (
                    <button key={model} type="button" onClick={() => setOption("excelModel", model)} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${options.excelModel === model ? "border-orange-300/45 bg-orange-300/12 text-white" : "border-white/10 bg-white/5 text-slate-300"}`}>{model === "produtos" ? "Analitico por Produto" : "Analitico por Nota"}</button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"><span>Mostrar totalizadores</span><input type="checkbox" checked={options.pdfIncludeTotals} onChange={(event) => setOption("pdfIncludeTotals", event.target.checked)} className="h-4 w-4 accent-cyan-300" /></label>
                <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"><span>Listar notas no relatorio</span><input type="checkbox" checked={options.pdfIncludeNoteDetails} onChange={(event) => setOption("pdfIncludeNoteDetails", event.target.checked)} className="h-4 w-4 accent-cyan-300" /></label>
              </div>
            )}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Filtros aplicados</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[["includeAuthorized", "Autorizadas"], ["includeCanceled", "Canceladas"], ["includeNoProtocol", "Sem protocolo"], ["includeInvalid", "Invalidas"]].map(([key, label]) => (
                <label key={key} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"><span>{label}</span><input type="checkbox" checked={options[key as keyof OutputOptions] as boolean} onChange={(event) => setOption(key as keyof OutputOptions, event.target.checked as never)} className="h-4 w-4 accent-cyan-300" /></label>
              ))}
            </div>
          </div>

          <button type="button" disabled={!canGenerate || isProcessing} onClick={generateOutputs} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f97316)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45">{isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}{outputLabel}</button>
        </section>
      </div>

      <div className="space-y-5">
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[["Autorizadas", totals.autorizada, "text-cyan-100"], ["Canceladas", totals.cancelada, "text-orange-100"], ["Sem protocolo", totals["sem-protocolo"], "text-slate-100"], ["Invalidas", totals.invalida, "text-rose-100"]].map(([label, value, tone]) => (
            <div key={label} className="surface-card rounded-[24px] border border-white/10 p-5"><p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{label}</p><p className={`mt-3 text-3xl font-semibold ${tone}`}>{value}</p></div>
          ))}
        </section>

        <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><p className="text-[11px] uppercase tracking-[0.26em] text-orange-200">Previa</p><h2 className="mt-4 text-2xl font-semibold text-white">Resultado da leitura</h2></div>{canGenerate ? <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"><CheckCircle2 className="h-4 w-4" />Pronto para gerar</span> : null}</div>
          <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Notas filtradas</p><p className="mt-2 text-2xl font-semibold text-white">{filteredNotes.length}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Produtos filtrados</p><p className="mt-2 text-2xl font-semibold text-white">{filteredProducts.length}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Total filtrado</p><p className="mt-2 text-2xl font-semibold text-white">{money(totals.valorNotas)}</p></div></div>
          <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Valor produtos</p><p className="mt-2 text-xl font-semibold text-white">{money(totals.valorProdutos)}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Descontos</p><p className="mt-2 text-xl font-semibold text-white">{money(totals.descontos)}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Itens</p><p className="mt-2 text-xl font-semibold text-white">{totals.itens}</p></div></div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-7 text-slate-300"><BarChart3 className="mb-3 h-5 w-5 text-cyan-200" />A previa mostra apenas totalizadores. O detalhamento sai no Excel ou no relatorio PDF conforme os filtros escolhidos.</div>
        </section>

        {(warnings.length || invalidFiles.length) ? <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7"><p className="flex items-center gap-2 text-sm font-semibold text-orange-100"><AlertTriangle className="h-4 w-4" />Pontos de atencao</p><div className="mt-4 space-y-2 text-sm leading-6 text-slate-300">{[...warnings, ...invalidFiles.map((file) => `${file}: XML invalido ou nao reconhecido`)].map((item) => <p key={item}>{item}</p>)}</div></section> : null}

        <section className="grid gap-5 md:grid-cols-2"><article className="surface-card rounded-[24px] border border-white/10 p-5"><FileSpreadsheet className="h-5 w-5 text-cyan-200" /><h3 className="mt-4 text-lg font-semibold text-white">Excel enriquecido</h3><p className="mt-2 text-sm leading-6 text-slate-300">Inclui campos principais e, se marcado, colunas dinamicas com as tags encontradas no XML.</p></article><article className="surface-card rounded-[24px] border border-white/10 p-5"><FileText className="h-5 w-5 text-orange-200" /><h3 className="mt-4 text-lg font-semibold text-white">Relatorio eepy</h3><p className="mt-2 text-sm leading-6 text-slate-300">Abre um relatorio visual pronto para salvar como PDF, com totalizadores conforme configuracao.</p></article></section>
      </div>
    </div>
  );
}
















