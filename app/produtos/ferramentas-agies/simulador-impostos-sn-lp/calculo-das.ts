export type AnexoSimples = 1 | 2 | 3 | 4 | 5;

export type DasInput = {
  anexo: AnexoSimples;
  rbt12: number;
  faturamento: number;
  exportacaoServico: boolean;
};

export type DasResultado = {
  anexoUsado: AnexoSimples;
  rbt12: number;
  faixa: number;
  aliquotaEfetivaPercent: number;
  valorDasAPagar: number;
  rateio: Record<string, number>;
};

export type DasCalculo = {
  padrao: DasResultado;
  fatorR?: DasResultado;
};

type AnexoConfig = {
  nome: string;
  aliquotas: number[];
  deducoes: number[];
};

const anexos: Record<AnexoSimples, AnexoConfig> = {
  1: {
    nome: "Anexo I",
    aliquotas: [4.0, 7.3, 9.5, 10.7, 14.3, 19.0],
    deducoes: [0, 5940, 13860, 22500, 87300, 378000],
  },
  2: {
    nome: "Anexo II",
    aliquotas: [4.5, 7.8, 10.0, 11.2, 14.7, 30.0],
    deducoes: [0, 5940, 13860, 22500, 85500, 720000],
  },
  3: {
    nome: "Anexo III",
    aliquotas: [6.0, 11.2, 13.5, 16.0, 21.0, 33.0],
    deducoes: [0, 9360, 17640, 35640, 125640, 648000],
  },
  4: {
    nome: "Anexo IV",
    aliquotas: [4.5, 9.0, 10.2, 14.0, 22.0, 33.0],
    deducoes: [0, 8100, 12420, 39780, 183780, 828000],
  },
  5: {
    nome: "Anexo V",
    aliquotas: [15.5, 18.0, 19.5, 20.5, 23.0, 30.5],
    deducoes: [0, 4500, 9900, 17100, 62100, 540000],
  },
};

const limitesDasFaixas = [180000, 360000, 720000, 1800000, 3600000, 4800000];

const reparticaoSimplesNacional: Record<string, Array<Record<string, number>>> = {
  "Anexo I": [
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 41.5, ICMS: 34.0 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 41.5, ICMS: 34.0 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 42.0, ICMS: 33.5 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 42.0, ICMS: 33.5 },
    { IRPJ: 13.5, CSLL: 10.0, COFINS: 28.27, "PIS/Pasep": 6.13, CPP: 42.1, ICMS: 0.0 },
    { IRPJ: 13.5, CSLL: 10.0, COFINS: 28.27, "PIS/Pasep": 6.13, CPP: 42.1, ICMS: 0.0 },
  ],
  "Anexo II": [
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 37.5, IPI: 38.0 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 12.74, "PIS/Pasep": 2.76, CPP: 37.5, IPI: 38.0 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 13.57, "PIS/Pasep": 2.93, CPP: 37.0, IPI: 37.5 },
    { IRPJ: 5.5, CSLL: 3.5, COFINS: 13.57, "PIS/Pasep": 2.93, CPP: 37.0, IPI: 37.5 },
    { IRPJ: 13.5, CSLL: 10.0, COFINS: 28.27, "PIS/Pasep": 6.13, CPP: 42.1, IPI: 0.0 },
    { IRPJ: 13.5, CSLL: 10.0, COFINS: 28.27, "PIS/Pasep": 6.13, CPP: 42.1, IPI: 0.0 },
  ],
  "Anexo III": [
    { IRPJ: 4.0, CSLL: 3.5, COFINS: 12.82, "PIS/Pasep": 2.78, CPP: 43.4, ISS: 33.5 },
    { IRPJ: 4.0, CSLL: 3.5, COFINS: 14.05, "PIS/Pasep": 3.05, CPP: 43.4, ISS: 32.0 },
    { IRPJ: 4.0, CSLL: 3.5, COFINS: 13.64, "PIS/Pasep": 2.96, CPP: 43.4, ISS: 32.5 },
    { IRPJ: 4.0, CSLL: 3.5, COFINS: 13.64, "PIS/Pasep": 2.96, CPP: 43.4, ISS: 32.5 },
    { IRPJ: 4.0, CSLL: 3.5, COFINS: 12.82, "PIS/Pasep": 2.78, CPP: 43.4, ISS: 33.5 },
    { IRPJ: 35.0, CSLL: 15.0, COFINS: 16.03, "PIS/Pasep": 3.47, CPP: 30.5, ISS: 0.0 },
  ],
  "Anexo IV": [
    { IRPJ: 18.8, CSLL: 15.2, COFINS: 20.45, "PIS/Pasep": 4.45, ISS: 41.1 },
    { IRPJ: 19.8, CSLL: 15.2, COFINS: 21.45, "PIS/Pasep": 4.65, ISS: 38.9 },
    { IRPJ: 20.8, CSLL: 15.2, COFINS: 21.45, "PIS/Pasep": 4.65, ISS: 37.9 },
    { IRPJ: 17.8, CSLL: 19.2, COFINS: 20.45, "PIS/Pasep": 4.45, ISS: 38.1 },
    { IRPJ: 18.8, CSLL: 19.2, COFINS: 20.45, "PIS/Pasep": 4.45, ISS: 37.1 },
    { IRPJ: 23.3, CSLL: 11.2, COFINS: 25.45, "PIS/Pasep": 5.55, ISS: 34.5 },
  ],
  "Anexo V": [
    { IRPJ: 25.0, CSLL: 15.0, COFINS: 14.1, "PIS/Pasep": 3.05, CPP: 28.85, ISS: 14.0 },
    { IRPJ: 23.0, CSLL: 15.0, COFINS: 14.1, "PIS/Pasep": 3.05, CPP: 27.85, ISS: 17.0 },
    { IRPJ: 24.0, CSLL: 15.0, COFINS: 14.92, "PIS/Pasep": 3.23, CPP: 23.85, ISS: 19.0 },
    { IRPJ: 21.0, CSLL: 15.0, COFINS: 15.74, "PIS/Pasep": 3.41, CPP: 23.85, ISS: 21.0 },
    { IRPJ: 23.0, CSLL: 12.5, COFINS: 16.56, "PIS/Pasep": 3.59, CPP: 23.35, ISS: 21.0 },
    { IRPJ: 30.5, CSLL: 13.5, COFINS: 14.14, "PIS/Pasep": 3.06, CPP: 15.8, ISS: 23.0 },
  ],
};

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function determinarFaixa(rbt12: number) {
  if (rbt12 > limitesDasFaixas[limitesDasFaixas.length - 1]) {
    return null;
  }

  return limitesDasFaixas.findIndex((limite) => rbt12 <= limite);
}

function calcularEmAnexo({
  anexo,
  rbt12,
  faturamento,
  exportacaoServico,
}: DasInput): DasResultado {
  const faixaIndex = determinarFaixa(rbt12);

  if (faixaIndex === null || faixaIndex < 0) {
    throw new Error(
      "A RBT12 informada ultrapassa o limite de R$ 4.800.000,00 do Simples Nacional.",
    );
  }

  const dadosAnexo = anexos[anexo];
  const aliquotaNominal = dadosAnexo.aliquotas[faixaIndex];
  const deducao = dadosAnexo.deducoes[faixaIndex];
  const aliquotaEfetivaCheia =
    rbt12 === 0
      ? aliquotaNominal
      : (((rbt12 * (aliquotaNominal / 100)) - deducao) / rbt12) * 100;
  const valorDasCheio = faturamento * (aliquotaEfetivaCheia / 100);
  const reparticao = reparticaoSimplesNacional[dadosAnexo.nome][faixaIndex];
  const rateio: Record<string, number> = {};
  let valorDasFinal = 0;
  let aliquotaEfetivaFinal = aliquotaEfetivaCheia;

  if (exportacaoServico && [3, 4, 5].includes(anexo)) {
    const impostosIsentos = new Set(["PIS/Pasep", "COFINS", "ISS"]);

    for (const [imposto, percentual] of Object.entries(reparticao)) {
      const valorImposto = valorDasCheio * (percentual / 100);

      if (impostosIsentos.has(imposto)) {
        rateio[imposto] = 0;
      } else {
        rateio[imposto] = valorImposto;
        valorDasFinal += valorImposto;
      }
    }

    aliquotaEfetivaFinal =
      faturamento > 0 ? (valorDasFinal / faturamento) * 100 : 0;
  } else {
    valorDasFinal = valorDasCheio;

    for (const [imposto, percentual] of Object.entries(reparticao)) {
      rateio[imposto] = valorDasCheio * (percentual / 100);
    }
  }

  return {
    anexoUsado: anexo,
    rbt12,
    faixa: faixaIndex + 1,
    aliquotaEfetivaPercent: round(aliquotaEfetivaFinal, 8),
    valorDasAPagar: round(valorDasFinal),
    rateio: Object.fromEntries(
      Object.entries(rateio).map(([imposto, valor]) => [imposto, round(valor)]),
    ),
  };
}

export function calcularDasSimplesNacional(input: DasInput): DasCalculo {
  if (!Number.isFinite(input.rbt12) || input.rbt12 < 0) {
    throw new Error("Informe uma RBT12 valida.");
  }

  if (!Number.isFinite(input.faturamento) || input.faturamento <= 0) {
    throw new Error("Informe um faturamento mensal maior que zero.");
  }

  const padrao = calcularEmAnexo(input);

  if (input.anexo === 5) {
    return {
      padrao,
      fatorR: calcularEmAnexo({ ...input, anexo: 3 }),
    };
  }

  return { padrao };
}
