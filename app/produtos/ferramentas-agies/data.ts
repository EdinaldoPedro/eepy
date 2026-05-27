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
      "Primeira ferramenta ativa da Linha agio, criada para transformar simulacoes fiscais em um fluxo mais visual e organizado.",
    status: "disponivel",
    href: "/produtos/ferramentas-agies/simulador-impostos-sn-lp",
    tags: ["Simples Nacional", "Lucro Presumido", "TypeScript"],
    note: "Estou levando a logica fiscal antiga para uma experiencia web mais clara.",
  },
  {
    slug: "valor-bruto",
    title: "Valor bruto",
    summary:
      "Uma futura ferramenta para apoiar calculos financeiros do dia a dia, mantendo a mesma linguagem da Linha agio.",
    status: "em-breve",
    href: "/produtos/ferramentas-agies/valor-bruto",
    tags: ["Em breve", "Financeiro", "Cálculo"],
    note: "Ideia mapeada para entrar como proxima entrega.",
  },
];

export const simulationModes: SimulationMode[] = [
  {
    id: "cnae",
    title: "CNAE",
    summary:
      "Uso este caminho quando o usuario conhece a atividade, mas precisa chegar ao anexo correto com mais seguranca.",
    nextInputs: [
      "CNAE principal ou atividade",
      "Faturamento mensal ou RBT12",
      "Contexto para sugerir enquadramento",
    ],
    source: "Base propria da Linha agio para consulta por atividade.",
  },
  {
    id: "simples-anexo",
    title: "Anexo do Simples",
    summary:
      "Este caminho atende quem ja sabe o anexo e quer ir direto para RBT12, faturamento, exportacao e DAS.",
    nextInputs: [
      "Anexo do Simples",
      "RBT12",
      "Faturamento do mês",
    ],
    source: "Logica migrada e refinada a partir do calculo antigo.",
  },
  {
    id: "lp",
    title: "LP",
    summary:
      "Uso este caminho para simular Lucro Presumido com PIS, COFINS, ISS, CSLL, IRPJ e adicional proporcional a NFS-e.",
    nextInputs: [
      "Faturamento mensal",
      "Valor da NFS-e",
      "Natureza da operação / ISS",
    ],
    source: "Logica migrada a partir do simulador antigo de LP.",
  },
];
