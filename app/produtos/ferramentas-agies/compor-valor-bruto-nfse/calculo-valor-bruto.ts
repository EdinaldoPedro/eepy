export type TipoCusto = "percentual" | "fixo";

export type CustoAdicionalInput = {
  descricao: string;
  tipo: TipoCusto;
  valor: number;
};

export type DetalheValorBruto = {
  descricao: string;
  valor: number;
  tipo: TipoCusto | "imposto";
  percentual?: number;
};

export type ValorBrutoInput = {
  valorLiquido: number;
  impostoPrincipalPercent: number;
  custos: CustoAdicionalInput[];
};

export type ValorBrutoResultado = {
  valorLiquidoDesejado: number;
  impostoPrincipalPercent: number;
  totalPercentual: number;
  totalCustosFixos: number;
  valorBruto: number;
  liquidoFinal: number;
  totalDescontos: number;
  diferencaLiquido: number;
  detalhes: DetalheValorBruto[];
};

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function calcularValorBrutoNfse({
  valorLiquido,
  impostoPrincipalPercent,
  custos,
}: ValorBrutoInput): ValorBrutoResultado {
  if (!Number.isFinite(valorLiquido) || valorLiquido <= 0) {
    throw new Error("Informe um valor liquido desejado maior que zero.");
  }

  if (
    !Number.isFinite(impostoPrincipalPercent) ||
    impostoPrincipalPercent < 0
  ) {
    throw new Error("Informe uma aliquota de imposto valida.");
  }

  const custosValidos = custos.filter(
    (custo) =>
      custo.descricao.trim() &&
      Number.isFinite(custo.valor) &&
      custo.valor >= 0,
  );
  const totalCustosFixos = custosValidos
    .filter((custo) => custo.tipo === "fixo")
    .reduce((sum, custo) => sum + custo.valor, 0);
  const totalCustosPercentuais = custosValidos
    .filter((custo) => custo.tipo === "percentual")
    .reduce((sum, custo) => sum + custo.valor, 0);
  const totalPercentual = impostoPrincipalPercent + totalCustosPercentuais;

  if (totalPercentual >= 100) {
    throw new Error(
      "A soma dos percentuais precisa ficar abaixo de 100% para recompor o valor bruto.",
    );
  }

  const bruto = (valorLiquido + totalCustosFixos) / (1 - totalPercentual / 100);
  const detalhes: DetalheValorBruto[] = [
    {
      descricao: `Imposto principal (${round(impostoPrincipalPercent, 4)}%)`,
      valor: round(bruto * (impostoPrincipalPercent / 100)),
      tipo: "imposto",
      percentual: round(impostoPrincipalPercent, 4),
    },
    ...custosValidos.map((custo) => ({
      descricao: custo.descricao.trim(),
      valor:
        custo.tipo === "percentual"
          ? round(bruto * (custo.valor / 100))
          : round(custo.valor),
      tipo: custo.tipo,
      percentual: custo.tipo === "percentual" ? round(custo.valor, 4) : undefined,
    })),
  ];
  const totalDescontos = round(
    detalhes.reduce((sum, detalhe) => sum + detalhe.valor, 0),
  );
  const liquidoFinal = round(bruto - totalDescontos);

  return {
    valorLiquidoDesejado: round(valorLiquido),
    impostoPrincipalPercent: round(impostoPrincipalPercent, 4),
    totalPercentual: round(totalPercentual, 4),
    totalCustosFixos: round(totalCustosFixos),
    valorBruto: round(bruto),
    liquidoFinal,
    totalDescontos,
    diferencaLiquido: round(liquidoFinal - valorLiquido),
    detalhes,
  };
}
