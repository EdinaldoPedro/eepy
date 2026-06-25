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
type DocumentKind = "nfce" | "nfe-entrada" | "nfe-saida" | "nfe" | "nfse-abrasf" | "nfse-nacional" | "evento" | "desconhecido";
type OutputMode = "excel" | "pdf";
type ExcelModel = "produtos" | "notas";
type SelectedDocumentType = "nfce" | "nfe" | "nfse";
type OperationDirection = "entrada" | "saida" | "nao-classificada";

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
  documentKind: DocumentKind;
  operationDirection: OperationDirection;
  counterpartyName: string;
  counterpartyCnpj: string;
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
  documentKind: DocumentKind;
  operationDirection: OperationDirection;
  counterpartyName: string;
  counterpartyCnpj: string;
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


const selectedDocumentTypeLabels: Record<SelectedDocumentType, string> = {
  nfce: "NFC-e",
  nfe: "NF-e",
  nfse: "NFS-e",
};

const documentKindLabels: Record<DocumentKind, string> = {
  nfce: "NFC-e",
  "nfe-entrada": "NF-e Entrada",
  "nfe-saida": "NF-e Saida",
  nfe: "NF-e",
  "nfse-abrasf": "NFS-e ABRASF",
  "nfse-nacional": "NFS-e Nacional",
  evento: "Evento",
  desconhecido: "Desconhecido",
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


function firstAvailableText(root: Element | Document | undefined, names: string[]) {
  if (!root) return "";
  for (const name of names) {
    const value = firstText(root, name);
    if (value) return value;
  }
  return "";
}

function serviceStatus(root: Element | Document): NoteStatus {
  const cancelText = ["CancelamentoNfse", "PedidoCancelamento", "InfPedidoCancelamento", "Cancelamento", "infPedReg", "pedRegEvento"].some((name) => localElements(root, name).length > 0);
  const statusText = firstAvailableText(root, ["Status", "cStat", "situacao", "Situacao"]);
  const reason = firstAvailableText(root, ["xMotivo", "Motivo", "DescricaoEvento", "descEvento"]).toLowerCase();

  if (cancelText || ["2", "101", "135", "151", "155"].includes(statusText) || reason.includes("cancel")) return "cancelada";
  if (["100", "150"].includes(statusText)) return "autorizada";
  return "autorizada";
}

function classifyNfeDocument(modelo: string, tipoOperacao: string): DocumentKind {
  if (modelo === "65") return "nfce";
  if (modelo === "55" && tipoOperacao === "0") return "nfe-entrada";
  if (modelo === "55" && tipoOperacao === "1") return "nfe-saida";
  if (modelo === "55") return "nfe";
  return "desconhecido";
}

function firstElement(root: Element | Document | undefined, names: string[]) {
  if (!root) return undefined;
  for (const name of names) {
    const found = node(root, name);
    if (found) return found;
  }
  return undefined;
}

function idText(root: Element | undefined) {
  const idRoot = firstElement(root, ["CpfCnpj", "CPFCNPJ", "cpfCnpj"]) ?? root;
  return firstAvailableText(idRoot, ["Cnpj", "CNPJ", "Cpf", "CPF", "cNPJ", "cCpf"]);
}

function serviceValue(values: Element | undefined, names: string[]) {
  return numberValue(firstAvailableText(values, names));
}

function parseServiceRoot(root: Element, sourceName: string, documentKind: DocumentKind, index: number): { note: NoteRow; product?: ProductRow } | null {
  const info = firstElement(root, ["InfNfse", "infNFSe", "infDPS", "Nfse", "NFSe"]) ?? root;
  const service = firstElement(root, ["Servico", "serv", "Serv", "servico"]) ?? info;
  const values = firstElement(service, ["Valores", "valores", "vServPrest", "ValoresNfse"]) ?? firstElement(root, ["Valores", "valores", "vServPrest", "ValoresNfse"]) ?? service;
  const emit = firstElement(root, ["emit"]);
  const provider = firstElement(root, ["PrestadorServico", "Prestador", "IdentificacaoPrestador", "prest"]) ?? emit;
  const providerIdRoot = firstElement(provider, ["IdentificacaoPrestador", "CpfCnpj", "CPFCNPJ", "prest"]) ?? provider;
  const providerIdentity = emit ?? provider;
  const providerAddress = firstElement(providerIdentity, ["Endereco", "ender", "enderNac", "end", "endereco"]) ?? firstElement(provider, ["Endereco", "ender", "enderNac", "end", "endereco"]) ?? providerIdentity;
  const taker = firstElement(root, ["TomadorServico", "Tomador", "IdentificacaoTomador", "toma", "dest"]);
  const takerIdRoot = firstElement(taker, ["IdentificacaoTomador", "CpfCnpj", "CPFCNPJ", "toma", "dest"]) ?? taker;

  const numero = firstAvailableText(info, ["Numero", "nNFSe", "nNFS-e", "nDPS", "NumeroNfse", "nNFSeSubst"]);
  const codigoVerificacao = firstAvailableText(info, ["CodigoVerificacao", "cVerif", "codVerificacao", "cLocIncid"]);
  const valorServico = serviceValue(values, ["ValorServicos", "ValorServico", "vServ", "vLiq", "ValorLiquidoNfse", "vBC", "vServPrest"]);
  const descontoCondicionado = serviceValue(values, ["DescontoCondicionado", "ValorDescontoCondicionado", "vDescCond", "ValorDesconto", "vDesc"]);
  const descontoIncondicionado = serviceValue(values, ["DescontoIncondicionado", "ValorDescontoIncondicionado", "vDescIncond"]);
  const deducoes = serviceValue(values, ["ValorDeducoes", "vDed", "vDedRedBC"]);
  const descontos = descontoCondicionado + descontoIncondicionado + deducoes;
  const valorLiquido = serviceValue(values, ["ValorLiquidoNfse", "vLiq", "vLiqNfse"]);
  const emitente = firstAvailableText(providerIdentity, ["RazaoSocial", "xNome", "Nome", "NomeFantasia", "xFant"]) || firstAvailableText(info, ["xNome", "Nome"]);
  const fantasia = firstAvailableText(providerIdentity, ["NomeFantasia", "xFant"]);
  const cnpj = idText(providerIdRoot) || idText(emit);
  const takerName = firstAvailableText(taker, ["RazaoSocial", "xNome", "Nome", "NomeFantasia", "xFant"]);
  const takerCnpj = idText(takerIdRoot);
  const municipio = firstAvailableText(providerAddress, ["Municipio", "xMun", "CodigoMunicipio", "cMun", "cLocEmi", "cLocPrestacao"]);
  const uf = firstAvailableText(providerAddress, ["Uf", "UF", "uf"]);
  const descricao = firstAvailableText(service, ["Discriminacao", "xDescServ", "Descricao", "descServ", "xDesc", "DescricaoServico"]);
  const cnaeServico = firstAvailableText(service, ["CNAE", "Cnae", "cCNAE", "cnae", "cCnae"]);
  const itemServico = firstAvailableText(service, ["ItemListaServico", "itemListaServico", "cItemListaServico"]);
  const codigoServico = firstAvailableText(service, ["cTribNac", "cTribMun", "CodigoTributacaoMunicipio", "CodigoServico", "CodigoServicoNacional"]);
  const tipoServico = firstAvailableText(info, ["xTribNac", "xTribMun"]) || descricao;
  const servicoReferencia = [
    cnaeServico ? `CNAE ${cnaeServico}` : "",
    itemServico ? `Item ${itemServico}` : "",
    codigoServico ? `Cod. servico ${codigoServico}` : "",
    tipoServico,
  ]
    .filter(Boolean)
    .join(" - ");
  const emissao = firstAvailableText(info, ["DataEmissao", "dhEmi", "dEmi", "DataEmissaoNfse", "dhProc", "dhEmiDPS"]);
  const chave = firstAvailableText(info, ["ChaveAcesso", "chNFSe", "chNFe", "Id", "chDPS"]);
  const status = serviceStatus(root);
  const rawFields = [
    ...collectLeafFields(root, "nfse"),
    { key: "nfse.servico.cnae", value: cnaeServico },
    { key: "nfse.servico.item", value: itemServico },
    { key: "nfse.servico.codigo", value: codigoServico },
    { key: "nfse.servico.tipo", value: tipoServico },
  ].filter((field) => field.value);
  const finalValue = valorLiquido || Math.max(valorServico - descontos, 0);

  if (!numero && !chave && !valorServico && !descricao && !servicoReferencia && !cnpj && !takerCnpj) return null;

  const note: NoteRow = {
    chave: chave || `${sourceName}-${numero || codigoVerificacao || index}`,
    numero,
    serie: firstAvailableText(info, ["Serie", "serie", "SeriePrestacao"]),
    modelo: documentKindLabels[documentKind],
    emissao,
    municipio,
    uf,
    emitente,
    fantasia,
    cnpj,
    status,
    documentKind,
    operationDirection: "nao-classificada",
    counterpartyName: takerName,
    counterpartyCnpj: takerCnpj,
    motivo: status === "cancelada" ? "NFS-e com indicativo de cancelamento" : `${documentKindLabels[documentKind]} localizada`,
    protocolo: codigoVerificacao,
    itens: valorServico || servicoReferencia || descricao ? 1 : 0,
    valorProdutos: valorServico,
    descontos,
    valorNota: finalValue,
    origem: sourceName,
    rawFields,
  };

  const product: ProductRow | undefined = valorServico || servicoReferencia || descricao ? {
    chave: note.chave,
    numero: note.numero,
    serie: note.serie,
    emissao: note.emissao,
    emitente: note.emitente,
    cnpj: note.cnpj,
    status: note.status,
    documentKind,
    operationDirection: note.operationDirection,
    counterpartyName: note.counterpartyName,
    counterpartyCnpj: note.counterpartyCnpj,
    itemNumero: "1",
    codigo: codigoServico,
    ean: "",
    descricao: servicoReferencia || descricao || "Servico prestado",
    ncm: "",
    cest: "",
    cfop: "",
    unidade: "SERV",
    quantidade: 1,
    valorUnitario: valorServico,
    valorProduto: valorServico,
    desconto: descontos,
    totalLiquido: finalValue,
    origem: sourceName,
    rawFields: [
      ...rawFields,
      ...(taker ? collectLeafFields(taker, "tomador") : []),
      ...collectLeafFields(service, "servico"),
    ],
  } : undefined;

  return { note, product };
}

function parseServiceDocument(document: Document, sourceName: string): ParsedResult | null {
  const abrasfRoots = localElements(document, "CompNfse");
  const hasAbrasf = abrasfRoots.length > 0 || Boolean(node(document, "InfNfse") || node(document, "ListaNfse"));
  const nationalRoots = localElements(document, "infNFSe").length ? localElements(document, "infNFSe") : localElements(document, "infDPS");
  const hasNational = nationalRoots.length > 0 || Boolean(node(document, "DPS") || node(document, "NFSe"));

  if (!hasAbrasf && !hasNational) return null;

  const documentKind: DocumentKind = hasAbrasf ? "nfse-abrasf" : "nfse-nacional";
  const roots = hasAbrasf
    ? (abrasfRoots.length ? abrasfRoots : [node(document, "InfNfse") ?? document.documentElement].filter(Boolean))
    : (nationalRoots.length ? nationalRoots : [node(document, "DPS") ?? node(document, "NFSe") ?? document.documentElement].filter(Boolean));

  const parsed = roots
    .map((root, index) => parseServiceRoot(root, sourceName, documentKind, index + 1))
    .filter((item): item is { note: NoteRow; product?: ProductRow } => Boolean(item));

  if (!parsed.length) return { notes: [], products: [], invalidFiles: [sourceName], warnings: [`${sourceName}: NFS-e localizada, mas sem dados suficientes para gerar a saida.`] };

  return {
    notes: parsed.map((item) => item.note),
    products: parsed.flatMap((item) => (item.product ? [item.product] : [])),
    invalidFiles: [],
    warnings: [],
  };
}function parseXmlDocument(xmlText: string, sourceName: string, selectedType: SelectedDocumentType): ParsedResult {
  const parser = new DOMParser();
  const document = parser.parseFromString(xmlText, "application/xml");
  const parserError = document.getElementsByTagName("parsererror")[0];

  if (parserError) {
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [] };
  }

  const nfe = node(document, "NFe");
  const serviceDocument = parseServiceDocument(document, sourceName);
  const event = node(document, "procEventoNFe") ?? node(document, "evento");

  if (selectedType === "nfse") {
    return serviceDocument ?? { notes: [], products: [], invalidFiles: [sourceName], warnings: [`${sourceName}: o arquivo nao parece ser uma NFS-e no padrao esperado.`] };
  }
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
          documentKind: "evento",
          operationDirection: "nao-classificada",
          counterpartyName: "",
          counterpartyCnpj: "",
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
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [`${sourceName}: o arquivo nao parece ser ${selectedDocumentTypeLabels[selectedType]}.`] };
  }
  const infNfe = node(nfe, "infNFe");
  const id = infNfe?.getAttribute("Id") ?? "";
  const chave = firstText(document, "chNFe") || id.replace(/^NFe/, "");
  const ide = node(nfe, "ide");
  const emit = node(nfe, "emit");
  const enderEmit = node(nfe, "enderEmit");
  const total = node(nfe, "ICMSTot");
  const dest = node(nfe, "dest");
  const destName = dest ? childText(dest, "xNome") : "";
  const destCnpj = dest ? childText(dest, "CNPJ") || childText(dest, "CPF") : "";
  const transp = node(nfe, "transp");
  const pag = node(nfe, "pag");
  const infAdic = node(nfe, "infAdic");
  const infRespTec = node(nfe, "infRespTec");
  const infNFeSupl = node(document, "infNFeSupl");
  const prot = node(document, "infProt");
  const cStat = prot ? firstText(prot, "cStat") : firstText(document, "cStat");
  const motivo = prot ? firstText(prot, "xMotivo") : firstText(document, "xMotivo");
  const status = noteStatus(cStat, motivo, true);
  const modelo = firstText(nfe, "mod");
  const tipoOperacao = ide ? childText(ide, "tpNF") : firstText(nfe, "tpNF");
  const documentKind = classifyNfeDocument(modelo, tipoOperacao);

  if (selectedType === "nfce" && documentKind !== "nfce") {
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [`${sourceName}: XML ignorado porque nao e NFC-e modelo 65.`] };
  }

  if (selectedType === "nfe" && !["nfe-entrada", "nfe-saida", "nfe"].includes(documentKind)) {
    return { notes: [], products: [], invalidFiles: [sourceName], warnings: [`${sourceName}: XML ignorado porque nao e NF-e modelo 55.`] };
  }

  const details = localElements(nfe, "det");
  const valorProdutos = numberValue(total ? childText(total, "vProd") : firstText(nfe, "vProd"));
  const descontos = numberValue(total ? childText(total, "vDesc") : firstText(nfe, "vDesc"));
  const valorNota = numberValue(total ? childText(total, "vNF") : firstText(nfe, "vNF"));

  const noteBase: NoteRow = {
    chave,
    numero: firstText(nfe, "nNF"),
    serie: firstText(nfe, "serie"),
    modelo,
    emissao: firstText(nfe, "dhEmi") || firstText(nfe, "dEmi"),
    municipio: enderEmit ? childText(enderEmit, "xMun") : "",
    uf: enderEmit ? childText(enderEmit, "UF") : "",
    emitente: emit ? childText(emit, "xNome") : "",
    fantasia: emit ? childText(emit, "xFant") : "",
    cnpj: emit ? childText(emit, "CNPJ") || childText(emit, "CPF") : "",
    status,
    documentKind,
    operationDirection:
      documentKind === "nfe-entrada"
        ? "entrada"
        : documentKind === "nfe-saida" || documentKind === "nfce"
          ? "saida"
          : "nao-classificada",
    counterpartyName: destName,
    counterpartyCnpj: destCnpj,
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
      documentKind,
      operationDirection: noteBase.operationDirection,
      counterpartyName: noteBase.counterpartyName,
      counterpartyCnpj: noteBase.counterpartyCnpj,
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

function buildExcelWorkbookXml(sheets: Array<{ name: string; headers: string[]; rows: Array<Array<string | number>> }>) {
  const worksheets = sheets
    .map((sheet) => {
      const tableRows = [sheet.headers, ...sheet.rows]
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

      return `<Worksheet ss:Name="${xmlEscape(sheet.name)}"><Table>${tableRows}</Table></Worksheet>`;
    })
    .join("");

  return `<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">${worksheets}</Workbook>`;
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
  { header: "Modelo NFe", value: (row) => rowField(row, "ide.mod") || documentKindLabels[row.documentKind] },
  { header: "Tipo Operacao", value: (row) => rowField(row, "ide.tpNF") },
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
  { header: "Operacao", value: (row) => operationLabel(row.operationDirection) },
  { header: "Servico_CNAE", value: (row) => rowField(row, "nfse.servico.cnae") },
  { header: "Servico_Item", value: (row) => rowField(row, "nfse.servico.item") },
  { header: "Servico_Codigo", value: (row) => rowField(row, "nfse.servico.codigo") },
  { header: "Servico_Tipo", value: (row) => rowField(row, "nfse.servico.tipo") },
  { header: "Destinatario_Tomador_CNPJ", value: (row) => row.counterpartyCnpj },
  { header: "Destinatario_Tomador_Nome", value: (row) => row.counterpartyName },
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
  { header: "Tipo Operacao", value: (row) => rowField(row, "ide.tpNF") },
  { header: "Serie", value: (row) => row.serie },
  { header: "Numero NFe", value: (row) => row.numero },
  { header: "Data/Hora Emissao", value: (row) => dateText(row.emissao) },
  { header: "Status", value: (row) => statusLabels[row.status] },
  { header: "Motivo", value: (row) => row.motivo },
  { header: "Operacao", value: (row) => operationLabel(row.operationDirection) },
  { header: "Servico_CNAE", value: (row) => rowField(row, "nfse.servico.cnae") },
  { header: "Servico_Item", value: (row) => rowField(row, "nfse.servico.item") },
  { header: "Servico_Codigo", value: (row) => rowField(row, "nfse.servico.codigo") },
  { header: "Servico_Tipo", value: (row) => rowField(row, "nfse.servico.tipo") },
  { header: "Destinatario_Tomador_CNPJ", value: (row) => row.counterpartyCnpj },
  { header: "Destinatario_Tomador_Nome", value: (row) => row.counterpartyName },
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

const nfseNationalTagPaths = [
  "nfse.Id",
  "nfse.xLocEmi",
  "nfse.xLocPrestacao",
  "nfse.nNFSe",
  "nfse.cLocIncid",
  "nfse.xLocIncid",
  "nfse.xTribNac",
  "nfse.xTribMun",
  "nfse.verAplic",
  "nfse.ambGer",
  "nfse.tpEmis",
  "nfse.procEmi",
  "nfse.cStat",
  "nfse.dhProc",
  "nfse.nDFSe",
  "nfse.emit.CNPJ",
  "nfse.emit.CPF",
  "nfse.emit.NIF",
  "nfse.emit.IM",
  "nfse.emit.xNome",
  "nfse.emit.xFant",
  "nfse.emit.enderNac.xLgr",
  "nfse.emit.enderNac.nro",
  "nfse.emit.enderNac.xCpl",
  "nfse.emit.enderNac.xBairro",
  "nfse.emit.enderNac.cMun",
  "nfse.emit.enderNac.UF",
  "nfse.emit.enderNac.CEP",
  "nfse.emit.enderExt.cPais",
  "nfse.emit.enderExt.xPais",
  "nfse.emit.enderExt.xCidade",
  "nfse.emit.fone",
  "nfse.emit.email",
  "nfse.valores.vBC",
  "nfse.valores.vLiq",
  "nfse.valores.vServ",
  "nfse.valores.vDescCond",
  "nfse.valores.vDescIncond",
  "nfse.valores.vDedRedBC",
  "nfse.valores.vISSQN",
  "nfse.valores.vTotalRet",
  "nfse.valores.vISSQNRetido",
  "nfse.DPS.versao",
  "nfse.DPS.infDPS.Id",
  "nfse.DPS.infDPS.tpAmb",
  "nfse.DPS.infDPS.dhEmi",
  "nfse.DPS.infDPS.verAplic",
  "nfse.DPS.infDPS.serie",
  "nfse.DPS.infDPS.nDPS",
  "nfse.DPS.infDPS.dCompet",
  "nfse.DPS.infDPS.tpEmit",
  "nfse.DPS.infDPS.cLocEmi",
  "nfse.DPS.infDPS.prest.CNPJ",
  "nfse.DPS.infDPS.prest.CPF",
  "nfse.DPS.infDPS.prest.NIF",
  "nfse.DPS.infDPS.prest.IM",
  "nfse.DPS.infDPS.prest.regTrib.opSimpNac",
  "nfse.DPS.infDPS.prest.regTrib.regEspTrib",
  "nfse.DPS.infDPS.toma.CNPJ",
  "nfse.DPS.infDPS.toma.CPF",
  "nfse.DPS.infDPS.toma.NIF",
  "nfse.DPS.infDPS.toma.xNome",
  "nfse.DPS.infDPS.toma.end.endNac.cMun",
  "nfse.DPS.infDPS.toma.end.endNac.CEP",
  "nfse.DPS.infDPS.toma.end.endExt.cPais",
  "nfse.DPS.infDPS.toma.end.endExt.xPais",
  "nfse.DPS.infDPS.toma.end.endExt.xCidade",
  "nfse.DPS.infDPS.toma.end.xLgr",
  "nfse.DPS.infDPS.toma.end.nro",
  "nfse.DPS.infDPS.toma.end.xCpl",
  "nfse.DPS.infDPS.toma.end.xBairro",
  "nfse.DPS.infDPS.toma.fone",
  "nfse.DPS.infDPS.toma.email",
  "nfse.DPS.infDPS.interm.CNPJ",
  "nfse.DPS.infDPS.interm.CPF",
  "nfse.DPS.infDPS.interm.NIF",
  "nfse.DPS.infDPS.interm.xNome",
  "nfse.DPS.infDPS.serv.locPrest.cLocPrestacao",
  "nfse.DPS.infDPS.serv.cServ.cTribNac",
  "nfse.DPS.infDPS.serv.cServ.cTribMun",
  "nfse.DPS.infDPS.serv.cServ.CNAE",
  "nfse.DPS.infDPS.serv.cServ.xDescServ",
  "nfse.DPS.infDPS.serv.cServ.cNBS",
  "nfse.DPS.infDPS.serv.infoCompl.xInfComp",
  "nfse.DPS.infDPS.valores.vServPrest.vServ",
  "nfse.DPS.infDPS.valores.vServPrest.vReceb",
  "nfse.DPS.infDPS.valores.vServPrest.vDescCond",
  "nfse.DPS.infDPS.valores.vServPrest.vDescIncond",
  "nfse.DPS.infDPS.valores.vDedRedBC.vDR",
  "nfse.DPS.infDPS.valores.vDedRedBC.tpDR",
  "nfse.DPS.infDPS.valores.vDedRedBC.xDescOutDed",
  "nfse.DPS.infDPS.valores.trib.tribMun.tribISSQN",
  "nfse.DPS.infDPS.valores.trib.tribMun.cLocIncid",
  "nfse.DPS.infDPS.valores.trib.tribMun.pAliq",
  "nfse.DPS.infDPS.valores.trib.tribMun.tpRetISSQN",
  "nfse.DPS.infDPS.valores.trib.tribMun.vISSQN",
  "nfse.DPS.infDPS.valores.trib.tribMun.vISSQNRet",
  "nfse.DPS.infDPS.valores.trib.tribFed.pPIS",
  "nfse.DPS.infDPS.valores.trib.tribFed.pCOFINS",
  "nfse.DPS.infDPS.valores.trib.tribFed.vPIS",
  "nfse.DPS.infDPS.valores.trib.tribFed.vCOFINS",
  "nfse.DPS.infDPS.valores.trib.tribFed.vRetCP",
  "nfse.DPS.infDPS.valores.trib.tribFed.vRetIRRF",
  "nfse.DPS.infDPS.valores.trib.tribFed.vRetCSLL",
  "nfse.DPS.infDPS.valores.trib.totTrib.indTotTrib",
  "nfse.DPS.infDPS.valores.trib.totTrib.pTotTribFed",
  "nfse.DPS.infDPS.valores.trib.totTrib.pTotTribEst",
  "nfse.DPS.infDPS.valores.trib.totTrib.pTotTribMun",
  "nfse.DPS.infDPS.valores.trib.totTrib.vTotTribFed",
  "nfse.DPS.infDPS.valores.trib.totTrib.vTotTribEst",
  "nfse.DPS.infDPS.valores.trib.totTrib.vTotTribMun",
];

const nfseAbrasfTagPaths = [
  "nfse.Nfse.InfNfse.Id",
  "nfse.Nfse.InfNfse.Numero",
  "nfse.Nfse.InfNfse.CodigoVerificacao",
  "nfse.Nfse.InfNfse.DataEmissao",
  "nfse.Nfse.InfNfse.NaturezaOperacao",
  "nfse.Nfse.InfNfse.RegimeEspecialTributacao",
  "nfse.Nfse.InfNfse.OptanteSimplesNacional",
  "nfse.Nfse.InfNfse.IncentivadorCultural",
  "nfse.Nfse.InfNfse.Competencia",
  "nfse.Nfse.InfNfse.NfseSubstituida",
  "nfse.Nfse.InfNfse.OutrasInformacoes",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorServicos",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorDeducoes",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorPis",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorCofins",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorInss",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorIr",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorCsll",
  "nfse.Nfse.InfNfse.Servico.Valores.IssRetido",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorIss",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorIssRetido",
  "nfse.Nfse.InfNfse.Servico.Valores.OutrasRetencoes",
  "nfse.Nfse.InfNfse.Servico.Valores.BaseCalculo",
  "nfse.Nfse.InfNfse.Servico.Valores.Aliquota",
  "nfse.Nfse.InfNfse.Servico.Valores.ValorLiquidoNfse",
  "nfse.Nfse.InfNfse.Servico.Valores.DescontoIncondicionado",
  "nfse.Nfse.InfNfse.Servico.Valores.DescontoCondicionado",
  "nfse.Nfse.InfNfse.Servico.ItemListaServico",
  "nfse.Nfse.InfNfse.Servico.CodigoCnae",
  "nfse.Nfse.InfNfse.Servico.CodigoTributacaoMunicipio",
  "nfse.Nfse.InfNfse.Servico.Discriminacao",
  "nfse.Nfse.InfNfse.Servico.CodigoMunicipio",
  "nfse.Nfse.InfNfse.Servico.CodigoPais",
  "nfse.Nfse.InfNfse.Servico.ExigibilidadeISS",
  "nfse.Nfse.InfNfse.Servico.MunicipioIncidencia",
  "nfse.Nfse.InfNfse.PrestadorServico.IdentificacaoPrestador.CpfCnpj.Cnpj",
  "nfse.Nfse.InfNfse.PrestadorServico.IdentificacaoPrestador.CpfCnpj.Cpf",
  "nfse.Nfse.InfNfse.PrestadorServico.IdentificacaoPrestador.InscricaoMunicipal",
  "nfse.Nfse.InfNfse.PrestadorServico.RazaoSocial",
  "nfse.Nfse.InfNfse.PrestadorServico.NomeFantasia",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Endereco",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Numero",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Complemento",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Bairro",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.CodigoMunicipio",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Uf",
  "nfse.Nfse.InfNfse.PrestadorServico.Endereco.Cep",
  "nfse.Nfse.InfNfse.PrestadorServico.Contato.Telefone",
  "nfse.Nfse.InfNfse.PrestadorServico.Contato.Email",
  "nfse.Nfse.InfNfse.TomadorServico.IdentificacaoTomador.CpfCnpj.Cnpj",
  "nfse.Nfse.InfNfse.TomadorServico.IdentificacaoTomador.CpfCnpj.Cpf",
  "nfse.Nfse.InfNfse.TomadorServico.IdentificacaoTomador.InscricaoMunicipal",
  "nfse.Nfse.InfNfse.TomadorServico.RazaoSocial",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Endereco",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Numero",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Complemento",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Bairro",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.CodigoMunicipio",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Uf",
  "nfse.Nfse.InfNfse.TomadorServico.Endereco.Cep",
  "nfse.Nfse.InfNfse.TomadorServico.Contato.Telefone",
  "nfse.Nfse.InfNfse.TomadorServico.Contato.Email",
  "nfse.Nfse.InfNfse.IntermediarioServico.RazaoSocial",
  "nfse.Nfse.InfNfse.IntermediarioServico.CpfCnpj.Cnpj",
  "nfse.Nfse.InfNfse.IntermediarioServico.CpfCnpj.Cpf",
  "nfse.Nfse.InfNfse.IntermediarioServico.InscricaoMunicipal",
  "nfse.Nfse.InfNfse.OrgaoGerador.CodigoMunicipio",
  "nfse.Nfse.InfNfse.OrgaoGerador.Uf",
  "nfse.Nfse.InfNfse.ConstrucaoCivil.CodigoObra",
  "nfse.Nfse.InfNfse.ConstrucaoCivil.Art",
  "nfse.Nfse.Cancelamento.Confirmacao.Pedido.InfPedidoCancelamento.IdentificacaoNfse.Numero",
  "nfse.Nfse.Cancelamento.Confirmacao.Pedido.InfPedidoCancelamento.IdentificacaoNfse.CpfCnpj.Cnpj",
  "nfse.Nfse.Cancelamento.Confirmacao.Pedido.InfPedidoCancelamento.IdentificacaoNfse.CodigoMunicipio",
  "nfse.Nfse.Cancelamento.Confirmacao.Pedido.InfPedidoCancelamento.CodigoCancelamento",
];

function uniquePaths(paths: string[]) {
  return Array.from(new Set(paths));
}

function nfseSchemaPaths(notes: NoteRow[]) {
  const hasNational = notes.some((note) => note.documentKind === "nfse-nacional");
  const hasAbrasf = notes.some((note) => note.documentKind === "nfse-abrasf");
  const basePaths = hasNational && !hasAbrasf ? nfseNationalTagPaths : hasAbrasf && !hasNational ? nfseAbrasfTagPaths : [...nfseNationalTagPaths, ...nfseAbrasfTagPaths];
  const discoveredPaths = notes.flatMap((note) => note.rawFields.map((field) => field.key)).filter((key) => key.startsWith("nfse."));
  return uniquePaths([...basePaths, ...discoveredPaths]);
}

function nfseAnalyticExport(notes: NoteRow[]) {
  const tagPaths = nfseSchemaPaths(notes);
  return {
    headers: ["arquivo", "padrao", "status", "operacao", ...tagPaths],
    rows: notes.map((note) => [note.origem, documentKindLabels[note.documentKind], statusLabels[note.status], operationLabel(note.operationDirection), ...tagPaths.map((path) => rowField(note, path))]),
  };
}
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
function operationLabel(direction: OperationDirection) {
  if (direction === "entrada") return "Entrada";
  if (direction === "saida") return "Saida";
  return "Nao classificada";
}

function buildOperationBlockHtml(title: string, direction: OperationDirection, notes: NoteRow[], products: ProductRow[], options: OutputOptions) {
  const operationNotes = notes.filter((note) => note.operationDirection === direction);
  const operationProducts = products.filter((product) => product.operationDirection === direction);
  if (!operationNotes.length && !operationProducts.length) return "";

  const totals = summarize(operationNotes, 0);
  const tableHtml = options.pdfIncludeNoteDetails
    ? `<table><thead><tr><th>Nota</th><th>Data</th><th>Status</th><th>Emitente</th><th>Destinatario/Tomador</th><th>Itens</th><th>Valor</th></tr></thead><tbody>${operationNotes
        .map(
          (note) =>
            `<tr><td>${htmlEscape(note.numero || "-")}</td><td>${htmlEscape(dateText(note.emissao) || "-")}</td><td>${htmlEscape(statusLabels[note.status])}</td><td>${htmlEscape(note.emitente || "-")}</td><td>${htmlEscape(note.counterpartyName || "-")}</td><td>${note.itens}</td><td>${money(note.valorNota)}</td></tr>`,
        )
        .join("")}</tbody></table>`
    : "";

  return `<div class="section operation-section"><h2>${htmlEscape(title)}</h2><div class="total"><div><div class="label">Notas</div><div class="value">${operationNotes.length}</div></div><div><div class="label">Valor das notas</div><div class="value">${money(totals.valorNotas)}</div></div><div><div class="label">Produtos/servicos</div><div class="value">${money(totals.valorProdutos)}</div></div><div><div class="label">Itens/servicos</div><div class="value">${totals.itens}</div></div></div>${buildProductRankHtml(operationProducts)}${tableHtml}</div>`;
}

function buildOperationsOverviewHtml(notes: NoteRow[]) {
  const saidas = summarize(notes.filter((note) => note.operationDirection === "saida"), 0);
  const entradas = summarize(notes.filter((note) => note.operationDirection === "entrada"), 0);
  return `<div class="section"><h2>Resumo das operacoes</h2><table><thead><tr><th>Operacao</th><th>Notas</th><th>Autorizadas</th><th>Canceladas</th><th>Sem protocolo</th><th>Valor</th></tr></thead><tbody><tr><td>Saidas</td><td>${saidas.autorizada + saidas.cancelada + saidas["sem-protocolo"] + saidas.invalida}</td><td>${saidas.autorizada}</td><td>${saidas.cancelada}</td><td>${saidas["sem-protocolo"]}</td><td>${money(saidas.valorNotas)}</td></tr><tr><td>Entradas</td><td>${entradas.autorizada + entradas.cancelada + entradas["sem-protocolo"] + entradas.invalida}</td><td>${entradas.autorizada}</td><td>${entradas.cancelada}</td><td>${entradas["sem-protocolo"]}</td><td>${money(entradas.valorNotas)}</td></tr></tbody></table></div>`;
}
function buildReportHtml(notes: NoteRow[], products: ProductRow[], invalidFiles: string[], options: OutputOptions, selectedType: SelectedDocumentType = "nfce") {
  const totals = summarize(notes, options.includeInvalid ? invalidFiles.length : 0);
  const adjustmentValue = totals.valorNotas - totals.valorProdutos + totals.descontos;
  const cards = [
    ["Autorizadas", totals.autorizada],
    ["Canceladas", totals.cancelada],
    ["Sem protocolo", totals["sem-protocolo"]],
    ["Invalidas", totals.invalida],
  ];
  const isOperationReport = selectedType !== "nfce";
  const operationSections = isOperationReport
    ? buildOperationBlockHtml("Saidas", "saida", notes, products, options) + buildOperationBlockHtml("Entradas", "entrada", notes, products, options) + buildOperationsOverviewHtml(notes)
    : "";

  return `<!doctype html><html><head><meta charset="utf-8"><title>Relatorio de notas eepy</title><style>
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
    <div class="hero"><div class="eyebrow">Linha agio / eepy</div><h1>Relatorio resumido de notas</h1><div class="muted">Gerado em ${htmlEscape(new Date().toLocaleString("pt-BR"))}. Configurado com ${notes.length} notas consideradas no resumo.</div></div>
    ${buildEmitterHtml(notes)}
    ${options.pdfIncludeTotals ? `<div class="cards">${cards.map(([label, value]) => `<div class="card"><div class="label">${label}</div><div class="value">${value}</div></div>`).join("")}</div><div class="section"><h2>Totalizadores financeiros</h2><div class="total"><div><div class="label">Valor das notas</div><div class="value">${money(totals.valorNotas)}</div></div><div><div class="label">Valor dos produtos</div><div class="value">${money(totals.valorProdutos)}</div></div><div><div class="label">Descontos</div><div class="value">${money(totals.descontos)}</div></div><div><div class="label">Outros / ajustes</div><div class="value">${money(adjustmentValue)}</div></div></div><p class="muted" style="color:#64748b;margin:14px 0 0">A diferenca aparece porque o valor da nota pode incluir outros valores, frete, seguro, tributos ou ajustes alem do total bruto de produtos e descontos.</p></div>` : ""}
    ${isOperationReport ? "" : buildProductRankHtml(products)}
    ${operationSections}
    ${!isOperationReport && options.pdfIncludeNoteDetails ? `<div class="section notes-section"><h2>Notas consideradas</h2><table><thead><tr><th>Tipo</th><th>Nota</th><th>Data</th><th>Status</th><th>Emitente</th><th>Itens</th><th>Valor</th></tr></thead><tbody>${notes.map((note) => `<tr><td>${htmlEscape(documentKindLabels[note.documentKind])}</td><td>${htmlEscape(note.numero || "-")}</td><td>${htmlEscape(dateText(note.emissao) || "-")}</td><td>${htmlEscape(statusLabels[note.status])}</td><td>${htmlEscape(note.emitente || "-")}</td><td>${note.itens}</td><td>${money(note.valorNota)}</td></tr>`).join("")}</tbody></table></div>` : ""}
    ${options.includeInvalid && invalidFiles.length ? `<div class="section"><h2>Arquivos invalidos</h2><table><tbody>${invalidFiles.map((file) => `<tr><td>${htmlEscape(file)}</td></tr>`).join("")}</tbody></table></div>` : ""}
    <div class="footer">eepy - Conversor de notas para Excel e PDF</div>
  </body></html>`;
}

function openPrintableReport(notes: NoteRow[], products: ProductRow[], invalidFiles: string[], options: OutputOptions, selectedType: SelectedDocumentType) {
  const report = window.open("", "_blank", "width=1100,height=800");
  if (!report) return;
  report.document.write(buildReportHtml(notes, products, invalidFiles, options, selectedType));
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

function cleanDocumentId(value: string) {
  return value.replace(/\D/g, "");
}

function repeatedIds(notes: NoteRow[], selector: (note: NoteRow) => string) {
  return notes.reduce((map, note) => {
    const id = cleanDocumentId(selector(note));
    if (id.length >= 11) map.set(id, (map.get(id) ?? 0) + 1);
    return map;
  }, new Map<string, number>());
}

function classifyBatchDirections(notes: NoteRow[], products: ProductRow[], selectedType: SelectedDocumentType) {
  if (selectedType === "nfce") return { notes, products };

  const issuerCounts = repeatedIds(notes, (note) => note.cnpj);
  const counterpartyCounts = repeatedIds(notes, (note) => note.counterpartyCnpj);
  const notesByOriginalKey = new Map<string, NoteRow>();

  const classifiedNotes = notes.map((note) => {
    const issuerRepeated = (issuerCounts.get(cleanDocumentId(note.cnpj)) ?? 0) >= 2;
    const counterpartyRepeated = (counterpartyCounts.get(cleanDocumentId(note.counterpartyCnpj)) ?? 0) >= 2;
    const fallback = note.operationDirection !== "nao-classificada" ? note.operationDirection : "saida";
    const operationDirection: OperationDirection = issuerRepeated && !counterpartyRepeated ? "saida" : counterpartyRepeated && !issuerRepeated ? "entrada" : fallback;
    const documentKind: DocumentKind = selectedType === "nfe" ? (operationDirection === "entrada" ? "nfe-entrada" : "nfe-saida") : note.documentKind;
    const classified = { ...note, operationDirection, documentKind };
    notesByOriginalKey.set(note.chave || `${note.numero}-${note.serie}-${note.origem}`, classified);
    return classified;
  });

  const classifiedProducts = products.map((product) => {
    const note = notesByOriginalKey.get(product.chave);
    const operationDirection = note?.operationDirection ?? product.operationDirection;
    const documentKind: DocumentKind = selectedType === "nfe" ? (operationDirection === "entrada" ? "nfe-entrada" : "nfe-saida") : product.documentKind;
    return {
      ...product,
      operationDirection,
      documentKind,
      counterpartyName: note?.counterpartyName ?? product.counterpartyName,
      counterpartyCnpj: note?.counterpartyCnpj ?? product.counterpartyCnpj,
    };
  });

  return { notes: classifiedNotes, products: classifiedProducts };
}
export default function NotasConverter() {
  const [selectedDocumentType, setSelectedDocumentType] = useState<SelectedDocumentType>("nfce");
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
  const documentBreakdown = useMemo(() => {
    return filteredNotes.reduce<Partial<Record<DocumentKind, number>>>((acc, note) => {
      acc[note.documentKind] = (acc[note.documentKind] ?? 0) + 1;
      return acc;
    }, {});
  }, [filteredNotes]);
  const detectedDocuments = (Object.entries(documentBreakdown) as Array<[DocumentKind, number]>).filter(([, count]) => count > 0);

  async function processFiles(files: FileList | null) {
    if (!files?.length) return;
    setIsProcessing(true);
    setProcessingMessage("Recebendo arquivos e preparando leitura...");
    try {
      await waitForPaint();
      setProcessingMessage(`Extraindo pacotes e localizando XMLs de ${selectedDocumentTypeLabels[selectedDocumentType]}...`);
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
          const result = parseXmlDocument(inputFile.text, inputFile.relativePath, selectedDocumentType);
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
      const activeProducts = parsed.products.filter((product) => activeKeys.has(product.chave));
      const classified = classifyBatchDirections(uniqueNotes, activeProducts, selectedDocumentType);
      setNotes(classified.notes);
      setProducts(classified.products);
      setInvalidFiles(parsed.invalidFiles);
      setWarnings(parsed.warnings);
    } finally {
      setIsProcessing(false);
    }
  }

  function changeDocumentType(type: SelectedDocumentType) {
    setSelectedDocumentType(type);
    setNotes([]);
    setProducts([]);
    setInvalidFiles([]);
    setWarnings([]);
  }

  function setOption<K extends keyof OutputOptions>(key: K, value: OutputOptions[K]) {
    setOptions((current) => ({ ...current, [key]: value }));
  }

  function generateOutputs() {
    if (options.mode === "excel") {
      if (selectedDocumentType === "nfse") {
        const exportData = nfseAnalyticExport(filteredNotes);
        downloadBlob("nfse-analitico.xls", buildExcelXml("NFS-e analitico", exportData.headers, exportData.rows), "application/vnd.ms-excel;charset=utf-8");
        return;
      }

      if (options.excelModel === "produtos") {
        const exportData = productExport(filteredProducts);
        if (selectedDocumentType === "nfce") {
          downloadBlob("notas-analitico-itens.xls", buildExcelXml("Analitico por produto", exportData.headers, exportData.rows), "application/vnd.ms-excel;charset=utf-8");
        } else {
          const saidas = productExport(filteredProducts.filter((product) => product.operationDirection === "saida"));
          const entradas = productExport(filteredProducts.filter((product) => product.operationDirection === "entrada"));
          downloadBlob(
            "notas-analitico-itens.xls",
            buildExcelWorkbookXml([
              { name: "Saidas", headers: saidas.headers, rows: saidas.rows },
              { name: "Entradas", headers: entradas.headers, rows: entradas.rows },
            ]),
            "application/vnd.ms-excel;charset=utf-8",
          );
        }
      } else {
        const exportData = noteExport(filteredNotes);
        if (selectedDocumentType === "nfce") {
          downloadBlob("notas-analitico-notas.xls", buildExcelXml("Analitico por nota", exportData.headers, exportData.rows), "application/vnd.ms-excel;charset=utf-8");
        } else {
          const saidas = noteExport(filteredNotes.filter((note) => note.operationDirection === "saida"));
          const entradas = noteExport(filteredNotes.filter((note) => note.operationDirection === "entrada"));
          downloadBlob(
            "notas-analitico-notas.xls",
            buildExcelWorkbookXml([
              { name: "Saidas", headers: saidas.headers, rows: saidas.rows },
              { name: "Entradas", headers: entradas.headers, rows: entradas.rows },
            ]),
            "application/vnd.ms-excel;charset=utf-8",
          );
        }
      }
      return;
    }
    openPrintableReport(filteredNotes, filteredProducts, invalidFiles, options, selectedDocumentType);
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
              <p className="text-sm font-semibold text-white">Processando {selectedDocumentTypeLabels[selectedDocumentType]}</p>
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
          <h2 className="mt-4 text-2xl font-semibold text-white">XMLs fiscais selecionados</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">Escolha o tipo de XML fiscal antes de importar. O conversor processa somente arquivos compatíveis com a seleção.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {(["nfce", "nfe", "nfse"] as SelectedDocumentType[]).map((type) => (
              <button key={type} type="button" disabled={isProcessing} onClick={() => changeDocumentType(type)} className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${selectedDocumentType === type ? "border-cyan-300/50 bg-cyan-300/12 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/8"}`}>{selectedDocumentTypeLabels[type]}</button>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button type="button" disabled={isProcessing} onClick={() => fileInputRef.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/15 disabled:cursor-not-allowed disabled:opacity-50"><UploadCloud className="h-5 w-5" />Selecionar arquivos</button>
            <button type="button" disabled={isProcessing} onClick={() => folderInputRef.current?.click()} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-300/20 bg-orange-300/10 px-4 py-4 text-sm font-semibold text-orange-50 transition hover:bg-orange-300/15 disabled:cursor-not-allowed disabled:opacity-50"><FolderOpen className="h-5 w-5" />Abrir pasta</button>
          </div>
          <input ref={fileInputRef} type="file" multiple accept=".xml,.zip,.rar,application/xml,text/xml,application/zip,application/x-rar-compressed" className="hidden" onChange={(event) => processFiles(event.target.files)} />
          <input ref={folderInputRef} type="file" multiple className="hidden" // @ts-expect-error webkitdirectory is a browser-specific folder picker attribute.
            webkitdirectory="true" onChange={(event) => processFiles(event.target.files)} />
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-xs leading-6 text-slate-300"><div className="flex items-center gap-2 font-semibold text-slate-100"><Archive className="h-4 w-4 text-cyan-200" />Flexibilidade atual</div><p className="mt-2">XML, multiplos XMLs, pasta ate 5 subpastas, ZIP e RAR. Tipo atual: {selectedDocumentTypeLabels[selectedDocumentType]}.</p></div>
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

          {selectedDocumentType !== "nfse" ? (
            <>
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

            </>
          ) : null}

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
          <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Valor produtos/servicos</p><p className="mt-2 text-xl font-semibold text-white">{money(totals.valorProdutos)}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Descontos</p><p className="mt-2 text-xl font-semibold text-white">{money(totals.descontos)}</p></div><div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"><p className="text-xs text-slate-400">Itens/servicos</p><p className="mt-2 text-xl font-semibold text-white">{totals.itens}</p></div></div>
          {detectedDocuments.length ? <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-4"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Tipos detectados</p><div className="mt-3 flex flex-wrap gap-2">{detectedDocuments.map(([kind, count]) => <span key={kind} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-slate-100">{documentKindLabels[kind]}: {count}</span>)}</div></div> : null}
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-7 text-slate-300"><BarChart3 className="mb-3 h-5 w-5 text-cyan-200" />A previa mostra apenas totalizadores. O detalhamento sai no Excel ou no relatorio PDF conforme os filtros escolhidos.</div>
        </section>

        {(warnings.length || invalidFiles.length) ? <section className="surface-card rounded-[28px] border border-white/10 p-6 md:p-7"><p className="flex items-center gap-2 text-sm font-semibold text-orange-100"><AlertTriangle className="h-4 w-4" />Pontos de atencao</p><div className="mt-4 space-y-2 text-sm leading-6 text-slate-300">{[...warnings, ...invalidFiles.map((file) => `${file}: XML invalido ou nao reconhecido`)].map((item) => <p key={item}>{item}</p>)}</div></section> : null}

        <section className="grid gap-5 md:grid-cols-2"><article className="surface-card rounded-[24px] border border-white/10 p-5"><FileSpreadsheet className="h-5 w-5 text-cyan-200" /><h3 className="mt-4 text-lg font-semibold text-white">Excel enriquecido</h3><p className="mt-2 text-sm leading-6 text-slate-300">Inclui campos principais de NFC-e, NF-e e NFS-e, mantendo as tags encontradas no XML.</p></article><article className="surface-card rounded-[24px] border border-white/10 p-5"><FileText className="h-5 w-5 text-orange-200" /><h3 className="mt-4 text-lg font-semibold text-white">Relatorio eepy</h3><p className="mt-2 text-sm leading-6 text-slate-300">Abre um relatorio visual pronto para salvar como PDF, com totalizadores e tipos detectados.</p></article></section>
      </div>
    </div>
  );
}































































