export type ToolCatalogItem = {
  slug: string;
  title: string;
  summary: string;
  status: "disponivel" | "em-breve";
  href: string;
  tags: string[];
  note: string;
};

export type SimulationMode = {
  id: "cnae" | "simples-anexo" | "lp";
  title: string;
  summary: string;
  nextInputs: string[];
  source: string;
};

export const toolCatalog: ToolCatalogItem[] = [
  {
    slug: "simulador-impostos",
    title: "Simulador de Impostos SN e LP",
    summary:
      "Primeira ferramenta ativa do hub, feita para reunir cenários do Simples Nacional e do Lucro Presumido em um fluxo web.",
    status: "disponivel",
    href: "/produtos/ferramentas-fiscais/simulador-impostos",
    tags: ["Simples Nacional", "Lucro Presumido", "TypeScript"],
    note: "Base atual em migração da lógica Python para o site.",
  },
  {
    slug: "valor-bruto",
    title: "Valor bruto",
    summary:
      "Espaço já reservado para a próxima ferramenta. Ela entra depois, sem quebrar a estrutura do hub.",
    status: "em-breve",
    href: "/produtos/ferramentas-fiscais/valor-bruto",
    tags: ["Em breve", "Financeiro", "Cálculo"],
    note: "Card preparado, mas ainda sem fluxo ativo.",
  },
];

export const simulationModes: SimulationMode[] = [
  {
    id: "cnae",
    title: "CNAE",
    summary:
      "Ideal para começar pela atividade da empresa e depois cruzar com o enquadramento mais adequado.",
    nextInputs: [
      "CNAE principal ou atividade",
      "Faturamento mensal ou RBT12",
      "Contexto para sugerir enquadramento",
    ],
    source: "Estrutura preparada para expansão do simulador.",
  },
  {
    id: "simples-anexo",
    title: "Anexo do Simples",
    summary:
      "Segue a linha do cálculo do DAS, com foco em anexo, faturamento e cenário de exportação ou regra complementar.",
    nextInputs: [
      "Anexo do Simples",
      "RBT12",
      "Faturamento do mês",
    ],
    source: "Base atual: calculo_das.py",
  },
  {
    id: "lp",
    title: "LP",
    summary:
      "Pensado para a simulação proporcional da NFS-e no Lucro Presumido, incluindo PIS, COFINS, ISS, CSLL e IRPJ.",
    nextInputs: [
      "Faturamento mensal",
      "Valor da NFS-e",
      "Natureza da operação / ISS",
    ],
    source: "Base atual: simulador_lp.py",
  },
];
