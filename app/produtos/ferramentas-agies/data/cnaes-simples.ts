export type CnaeSimples = {
  cnae: string;
  descricao: string;
  anexoPadrao: 1 | 2 | 3 | 4 | 5 | null;
  anexosPossiveis: Array<1 | 2 | 3 | 4 | 5>;
  observacao: string;
  permitido: boolean;
};

export const cnaesSimples = [
  {
    "cnae": "0159801",
    "descricao": "APICULTURA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322107",
    "descricao": "ATIVIDADES DE APOIO À AQÜICULTURA EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0321305",
    "descricao": "ATIVIDADES DE APOIO À AQÜICULTURA EM ÁGUA SALGADA E SALOBRA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0312404",
    "descricao": "ATIVIDADES DE APOIO À PESCA EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0311604",
    "descricao": "ATIVIDADES DE APOIO À PESCA EM ÁGUA SALGADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0220903",
    "descricao": "COLETA DE CASTANHA DO PARÁ EM FLORESTAS NATIVAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0220904",
    "descricao": "COLETA DE LÁTEX EM FLORESTAS NATIVAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0312403",
    "descricao": "COLETA DE OUTROS PRODUTOS AQUÁTICOS DE ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0311603",
    "descricao": "COLETA DE OUTROS PRODUTOS MARINHOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0220905",
    "descricao": "COLETA DE PALMITO EM FLORESTAS NATIVAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0220999",
    "descricao": "COLETA DE PRODUTOS NÃO MADEIREIROS NÃO ESPECIFICADOS ANTERIORMENTE EM FLORESTAS NATIVAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0159802",
    "descricao": "CRIAÇÃO DE ANIMAIS DE ESTIMAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0152103",
    "descricao": "CRIAÇÃO DE ASININOS E MUARES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0155504",
    "descricao": "CRIAÇÃO DE AVES, EXCETO GALINÁCEOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0159804",
    "descricao": "CRIAÇÃO DE BICHO DA SEDA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0151201",
    "descricao": "CRIAÇÃO DE BOVINOS PARA CORTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0151202",
    "descricao": "CRIAÇÃO DE BOVINOS PARA LEITE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0151203",
    "descricao": "CRIAÇÃO DE BOVINOS, EXCETO PARA CORTE E LEITE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0152101",
    "descricao": "CRIAÇÃO DE BUFALINOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322102",
    "descricao": "CRIAÇÃO DE CAMARÕES EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0321302",
    "descricao": "CRIAÇÃO DE CAMARÕES EM ÁGUA SALGADA E SALOBRA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0153901",
    "descricao": "CRIAÇÃO DE CAPRINOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0152102",
    "descricao": "CRIAÇÃO DE EQÜINOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0159803",
    "descricao": "CRIAÇÃO DE ESCARGÔ",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0155501",
    "descricao": "CRIAÇÃO DE FRANGOS PARA CORTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322106",
    "descricao": "CRIAÇÃO DE JACARÉ",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322103",
    "descricao": "CRIAÇÃO DE OSTRAS E MEXILHÕES EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0321303",
    "descricao": "CRIAÇÃO DE OSTRAS E MEXILHÕES EM ÁGUA SALGADA E SALOBRA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0159899",
    "descricao": "CRIAÇÃO DE OUTROS ANIMAIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0155503",
    "descricao": "CRIAÇÃO DE OUTROS GALINÁCEOS, EXCETO PARA CORTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0153902",
    "descricao": "CRIAÇÃO DE OVINOS, INCLUSIVE PARA PRODUÇÃO DE LÃ",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322101",
    "descricao": "CRIAÇÃO DE PEIXES EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0321301",
    "descricao": "CRIAÇÃO DE PEIXES EM ÁGUA SALGADA E SALOBRA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0322104",
    "descricao": "CRIAÇÃO DE PEIXES ORNAMENTAIS EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0321304",
    "descricao": "CRIAÇÃO DE PEIXES ORNAMENTAIS EM ÁGUA SALGADA E SALOBRA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0154700",
    "descricao": "CRIAÇÃO DE SUÍNOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0119901",
    "descricao": "CULTIVO DE ABACAXI",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210102",
    "descricao": "CULTIVO DE ACÁCIA NEGRA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133401",
    "descricao": "CULTIVO DE AÇAÍ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0112101",
    "descricao": "CULTIVO DE ALGODÃO HERBÁCEO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119902",
    "descricao": "CULTIVO DE ALHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0116401",
    "descricao": "CULTIVO DE AMENDOIM",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0111301",
    "descricao": "CULTIVO DE ARROZ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133402",
    "descricao": "CULTIVO DE BANANA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119903",
    "descricao": "CULTIVO DE BATATA INGLESA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0135100",
    "descricao": "CULTIVO DE CACAU",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0134200",
    "descricao": "CULTIVO DE CAFÉ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133403",
    "descricao": "CULTIVO DE CAJU",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0113000",
    "descricao": "CULTIVO DE CANA DE AÇÚCAR",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119904",
    "descricao": "CULTIVO DE CEBOLA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139301",
    "descricao": "CULTIVO DE CHÁ DA ÍNDIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133404",
    "descricao": "CULTIVO DE CÍTRICOS, EXCETO LARANJA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133405",
    "descricao": "CULTIVO DE COCO DA BAÍA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139305",
    "descricao": "CULTIVO DE DENDÊ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139302",
    "descricao": "CULTIVO DE ERVA MATE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210105",
    "descricao": "CULTIVO DE ESPÉCIES MADEIREIRAS, EXCETO EUCALIPTO, ACÁCIA NEGRA, PINUS E TECA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210101",
    "descricao": "CULTIVO DE EUCALIPTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119905",
    "descricao": "CULTIVO DE FEIJÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0122900",
    "descricao": "CULTIVO DE FLORES E PLANTAS ORNAMENTAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133499",
    "descricao": "CULTIVO DE FRUTAS DE LAVOURA PERMANENTE NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0114800",
    "descricao": "CULTIVO DE FUMO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0116402",
    "descricao": "CULTIVO DE GIRASSOL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133406",
    "descricao": "CULTIVO DE GUARANÁ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0112102",
    "descricao": "CULTIVO DE JUTA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0131800",
    "descricao": "CULTIVO DE LARANJA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133407",
    "descricao": "CULTIVO DE MAÇÃ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133408",
    "descricao": "CULTIVO DE MAMÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0116403",
    "descricao": "CULTIVO DE MAMONA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119906",
    "descricao": "CULTIVO DE MANDIOCA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133410",
    "descricao": "CULTIVO DE MANGA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133409",
    "descricao": "CULTIVO DE MARACUJÁ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119908",
    "descricao": "CULTIVO DE MELANCIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1531902",
    "descricao": "ACABAMENTO DE CALÇADOS DE COURO SOB CONTRATO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "1340502",
    "descricao": "ALVEJAMENTO, TINGIMENTO E TORÇÃO EM FIOS, TECIDOS, ARTEFATOS TÊXTEIS E PEÇAS DO VESTUÁRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "2391502",
    "descricao": "APARELHAMENTO DE PEDRAS PARA CONSTRUÇÃO, EXCETO ASSOCIADO À EXTRAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "2391503",
    "descricao": "APARELHAMENTO DE PLACAS E EXECUÇÃO DE TRABALHOS EM MÁRMORE, GRANITO, ARDÓSIA E OUTRAS PEDRAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "1061901",
    "descricao": "BENEFICIAMENTO DE ARROZ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119907",
    "descricao": "CULTIVO DE MELÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1081301",
    "descricao": "BENEFICIAMENTO DE CAFÉ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0500302",
    "descricao": "BENEFICIAMENTO DE CARVÃO MINERAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810010",
    "descricao": "BENEFICIAMENTO DE GESSO E CAULIM ASSOCIADO À EXTRAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0170900",
    "descricao": "CAÇA E SERVIÇOS RELACIONADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "0111302",
    "descricao": "CULTIVO DE MILHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0121102",
    "descricao": "CULTIVO DE MORANGO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210106",
    "descricao": "CULTIVO DE MUDAS EM VIVEIROS FLORESTAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0112199",
    "descricao": "CULTIVO DE OUTRAS FIBRAS DE LAVOURA TEMPORÁRIA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0116499",
    "descricao": "CULTIVO DE OUTRAS OLEAGINOSAS DE LAVOURA TEMPORÁRIA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139399",
    "descricao": "CULTIVO DE OUTRAS PLANTAS DE LAVOURA PERMANENTE NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119999",
    "descricao": "CULTIVO DE OUTRAS PLANTAS DE LAVOURA TEMPORÁRIA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0111399",
    "descricao": "CULTIVO DE OUTROS CEREAIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0133411",
    "descricao": "CULTIVO DE PÊSSEGO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139303",
    "descricao": "CULTIVO DE PIMENTA DO REINO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210103",
    "descricao": "CULTIVO DE PINUS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139304",
    "descricao": "CULTIVO DE PLANTAS PARA CONDIMENTO, EXCETO PIMENTA DO REINO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0139306",
    "descricao": "CULTIVO DE SERINGUEIRA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0115600",
    "descricao": "CULTIVO DE SOJA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210104",
    "descricao": "CULTIVO DE TECA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0721902",
    "descricao": "BENEFICIAMENTO DE MINÉRIO DE ALUMÍNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0119909",
    "descricao": "CULTIVO DE TOMATE RASTEIRO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0722702",
    "descricao": "BENEFICIAMENTO DE MINÉRIO DE ESTANHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0111303",
    "descricao": "CULTIVO DE TRIGO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0132600",
    "descricao": "CULTIVO DE UVA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0322199",
    "descricao": "CULTIVOS E SEMICULTIVOS DA AQÜICULTURA EM ÁGUA DOCE NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0321399",
    "descricao": "CULTIVOS E SEMICULTIVOS DA AQÜICULTURA EM ÁGUA SALGADA E SALOBRA NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0723502",
    "descricao": "BENEFICIAMENTO DE MINÉRIO DE MANGANÊS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3600602",
    "descricao": "DISTRIBUIÇÃO DE ÁGUA POR CAMINHÕES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3520402",
    "descricao": "DISTRIBUIÇÃO DE COMBUSTÍVEIS GASOSOS POR REDES URBANAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0724302",
    "descricao": "BENEFICIAMENTO DE MINÉRIO DE METAIS PRECIOSOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0729405",
    "descricao": "BENEFICIAMENTO DE MINÉRIOS DE COBRE, CHUMBO, ZINCO E OUTROS MINERAIS METÁLICOS NÃO FERROSOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2391501",
    "descricao": "BRITAMENTO DE PEDRAS, EXCETO ASSOCIADO À EXTRAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "1412601",
    "descricao": "CONFECÇÃO DE PEÇAS DE VESTUÁRIO, EXCETO ROUPAS ÍNTIMAS E AS CONFECCIONADAS SOB MEDIDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810006",
    "descricao": "EXTRAÇÃO DE AREIA, CASCALHO OU PEDREGULHO E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0500301",
    "descricao": "EXTRAÇÃO DE CARVÃO MINERAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0893200",
    "descricao": "EXTRAÇÃO DE GEMAS (PEDRAS PRECIOSAS E SEMIPRECIOSAS)",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810005",
    "descricao": "EXTRAÇÃO DE GESSO E CAULIM",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0220901",
    "descricao": "EXTRAÇÃO DE MADEIRA EM FLORESTAS NATIVAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210107",
    "descricao": "EXTRAÇÃO DE MADEIRA EM FLORESTAS PLANTADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0891600",
    "descricao": "EXTRAÇÃO DE MINERAIS PARA FABRICAÇÃO DE ADUBOS, FERTILIZANTES E OUTROS PRODUTOS QUÍMICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0725100",
    "descricao": "EXTRAÇÃO DE MINERAIS RADIOATIVOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0721901",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE ALUMÍNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0722701",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE ESTANHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0710301",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE FERRO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0723501",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE MANGANÊS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1411801",
    "descricao": "CONFECÇÃO DE ROUPAS ÍNTIMAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0724301",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE METAIS PRECIOSOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      2,
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0729403",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE NÍQUEL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0729402",
    "descricao": "EXTRAÇÃO DE MINÉRIO DE TUNGSTÊNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0729404",
    "descricao": "EXTRAÇÃO DE MINÉRIOS DE COBRE, CHUMBO, ZINCO E OUTROS MINERAIS METÁLICOS NÃO FERROSOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1413401",
    "descricao": "CONFECÇÃO DE ROUPAS PROFISSIONAIS, EXCETO SOB MEDIDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0729401",
    "descricao": "EXTRAÇÃO DE MINÉRIOS DE NIÓBIO E TITÂNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1412602",
    "descricao": "CONFECÇÃO, SOB MEDIDA, DE PEÇAS DO VESTUÁRIO, EXCETO ROUPAS ÍNTIMAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0899199",
    "descricao": "EXTRAÇÃO DE OUTROS MINERAIS NÃO METÁLICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1413402",
    "descricao": "CONFECÇÃO, SOB MEDIDA, DE ROUPAS PROFISSIONAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0600001",
    "descricao": "EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3011301",
    "descricao": "CONSTRUÇÃO DE EMBARCAÇÕES DE GRANDE PORTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3012100",
    "descricao": "CONSTRUÇÃO DE EMBARCAÇÕES PARA ESPORTE E LAZER",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3011302",
    "descricao": "CONSTRUÇÃO DE EMBARCAÇÕES PARA USO COMERCIAL E PARA USOS ESPECIAIS, EXCETO DE GRANDE PORTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810008",
    "descricao": "EXTRAÇÃO DE SAIBRO E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0892402",
    "descricao": "EXTRAÇÃO DE SAL GEMA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0892401",
    "descricao": "EXTRAÇÃO DE SAL MARINHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0600003",
    "descricao": "EXTRAÇÃO E BENEFICIAMENTO DE AREIAS BETUMINOSAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0600002",
    "descricao": "EXTRAÇÃO E BENEFICIAMENTO DE XISTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3211603",
    "descricao": "CUNHAGEM DE MOEDAS E MEDALHAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "1011201",
    "descricao": "FRIGORÍFICO - ABATE DE BOVINOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1011202",
    "descricao": "FRIGORÍFICO - ABATE DE EQÜINOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1011203",
    "descricao": "FRIGORÍFICO - ABATE DE OVINOS E CAPRINOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1011204",
    "descricao": "FRIGORÍFICO - ABATE DE BUFALINOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "0121101",
    "descricao": "HORTICULTURA, EXCETO MORANGO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0312402",
    "descricao": "PESCA DE CRUSTÁCEOS E MOLUSCOS EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "1011205",
    "descricao": "MATADOURO - ABATE DE RESES SOB CONTRATO - EXCETO ABATE DE SUÍNOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "0311602",
    "descricao": "PESCA DE CRUSTÁCEOS E MOLUSCOS EM ÁGUA SALGADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "1012101",
    "descricao": "ABATE DE AVES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1012102",
    "descricao": "ABATE DE PEQUENOS ANIMAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1012103",
    "descricao": "FRIGORÍFICO - ABATE DE SUÍNOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "0312401",
    "descricao": "PESCA DE PEIXES EM ÁGUA DOCE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0311601",
    "descricao": "PESCA DE PEIXES EM ÁGUA SALGADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "0220902",
    "descricao": "PRODUÇÃO DE CARVÃO VEGETAL - FLORESTAS NATIVAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210108",
    "descricao": "PRODUÇÃO DE CARVÃO VEGETAL - FLORESTAS PLANTADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0210109",
    "descricao": "PRODUÇÃO DE CASCA DE ACÁCIA NEGRA - FLORESTAS PLANTADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1012104",
    "descricao": "MATADOURO - ABATE DE SUÍNOS SOB CONTRATO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1510600",
    "descricao": "CURTIMENTO E OUTRAS PREPARAÇÕES DE COURO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "2399101",
    "descricao": "DECORAÇÃO, LAPIDAÇÃO, GRAVAÇÃO, VITRIFICAÇÃO E OUTROS TRABALHOS EM CERÂMICA, LOUÇA, VIDRO E CRISTAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum III, se conceito indústrial I. se venda NT II",
    "permitido": true
  },
  {
    "cnae": "3520401",
    "descricao": "PRODUÇÃO DE GÁS; PROCESSAMENTO DE GÁS NATURAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "5819100",
    "descricao": "EDIÇÃO DE CADASTROS, LISTAS E DE OUTROS PRODUTOS GRÁFICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum III, se editoração e impressão II.",
    "permitido": true
  },
  {
    "cnae": "5812301",
    "descricao": "EDIÇÃO DE JORNAIS DIÁRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum III, se editoração e impressão II, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5812302",
    "descricao": "EDIÇÃO DE JORNAIS NÃO DIÁRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum III, se editoração e impressão II, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5811500",
    "descricao": "EDIÇÃO DE LIVROS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5,
      2
    ],
    "observacao": "Prática mais comum V, se editoração e impressão II, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5813100",
    "descricao": "EDIÇÃO DE REVISTAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se anuncio III.",
    "permitido": true
  },
  {
    "cnae": "5822101",
    "descricao": "EDIÇÃO INTEGRADA À IMPRESSÃO DE JORNAIS DIÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum II, se anuncio III, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5822102",
    "descricao": "EDIÇÃO INTEGRADA À IMPRESSÃO DE JORNAIS NÃO DIÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum II, se anuncio III, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5821200",
    "descricao": "EDIÇÃO INTEGRADA À IMPRESSÃO DE LIVROS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se anuncio III, se venda I.",
    "permitido": true
  },
  {
    "cnae": "5823900",
    "descricao": "EDIÇÃO INTEGRADA À IMPRESSÃO DE REVISTAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se anuncio III, se venda I.",
    "permitido": true
  },
  {
    "cnae": "2019301",
    "descricao": "ELABORAÇÃO DE COMBUSTÍVEIS NUCLEARES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "1340501",
    "descricao": "ESTAMPARIA E TEXTURIZAÇÃO EM FIOS, TECIDOS, ARTEFATOS TÊXTEIS E PEÇAS DO VESTUÁRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "0899103",
    "descricao": "EXTRAÇÃO DE AMIANTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810001",
    "descricao": "EXTRAÇÃO DE ARDÓSIA E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810007",
    "descricao": "EXTRAÇÃO DE ARGILA E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810009",
    "descricao": "EXTRAÇÃO DE BASALTO E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810004",
    "descricao": "EXTRAÇÃO DE CALCÁRIO E DOLOMITA E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0899101",
    "descricao": "EXTRAÇÃO DE GRAFITA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810002",
    "descricao": "EXTRAÇÃO DE GRANITO E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810003",
    "descricao": "EXTRAÇÃO DE MÁRMORE E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0899102",
    "descricao": "EXTRAÇÃO DE QUARTZO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0810099",
    "descricao": "EXTRAÇÃO E BRITAMENTO DE PEDRAS E OUTROS MATERIAIS PARA CONSTRUÇÃO E BENEFICIAMENTO ASSOCIADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2399102",
    "descricao": "FABRICAÇÃO DE ABRASIVOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1742702",
    "descricao": "FABRICAÇÃO DE ABSORVENTES HIGIÊNICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1414200",
    "descricao": "FABRICAÇÃO DE ACESSÓRIOS DO VESTUÁRIO, EXCETO PARA SEGURANÇA E PROTEÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1072401",
    "descricao": "FABRICAÇÃO DE AÇÚCAR DE CANA REFINADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1072402",
    "descricao": "FABRICAÇÃO DE AÇÚCAR DE CEREAIS (DEXTROSE) E DE BETERRABA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1071600",
    "descricao": "FABRICAÇÃO DE AÇÚCAR EM BRUTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2091600",
    "descricao": "FABRICAÇÃO DE ADESIVOS E SELANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2093200",
    "descricao": "FABRICAÇÃO DE ADITIVOS DE USO INDUSTRIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099606",
    "descricao": "FABRICAÇÃO DE ADOÇANTES NATURAIS E ARTIFICIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2013401",
    "descricao": "FABRICAÇÃO DE ADUBOS E FERTILIZANTES ORGANOMINERAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2013402",
    "descricao": "FABRICAÇÃO DE ADUBOS E FERTILIZANTES, EXCETO ORGANOMINERAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3041500",
    "descricao": "FABRICAÇÃO DE AERONAVES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1121600",
    "descricao": "FABRICAÇÃO DE ÁGUAS ENVASADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1931400",
    "descricao": "FABRICAÇÃO DE ÁLCOOL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099607",
    "descricao": "FABRICAÇÃO DE ALIMENTOS DIETÉTICOS E COMPLEMENTOS ALIMENTARES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1096100",
    "descricao": "FABRICAÇÃO DE ALIMENTOS E PRATOS PRONTOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1066000",
    "descricao": "FABRICAÇÃO DE ALIMENTOS PARA ANIMAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1065101",
    "descricao": "FABRICAÇÃO DE AMIDOS E FÉCULAS DE VEGETAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2449103",
    "descricao": "FABRICAÇÃO DE ÂNODOS PARA GALVANOPLASTIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2640000",
    "descricao": "FABRICAÇÃO DE APARELHOS DE RECEPÇÃO, REPRODUÇÃO, GRAVAÇÃO E AMPLIFICAÇÃO DE ÁUDIO E VÍDEO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2824101",
    "descricao": "FABRICAÇÃO DE APARELHOS E EQUIPAMENTOS DE AR CONDICIONADO PARA USO INDUSTRIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2824102",
    "descricao": "FABRICAÇÃO DE APARELHOS E EQUIPAMENTOS DE AR CONDICIONADO PARA USO NÃO INDUSTRIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2651500",
    "descricao": "FABRICAÇÃO DE APARELHOS E EQUIPAMENTOS DE MEDIDA, TESTE E CONTROLE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2731700",
    "descricao": "FABRICAÇÃO DE APARELHOS E EQUIPAMENTOS PARA DISTRIBUIÇÃO E CONTROLE DE ENERGIA ELÉTRICA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1091102",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE PADARIA E CONFEITARIA COM PREDOMINÂNCIA  DE PRODUÇÃO PRÓPRIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "3250703",
    "descricao": "FABRICAÇÃO DE APARELHOS E UTENSÍLIOS PARA CORREÇÃO DE DEFEITOS FÍSICOS E APARELHOS ORTOPÉDICOS EM GERAL SOB ENCOMENDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3250704",
    "descricao": "FABRICAÇÃO DE APARELHOS E UTENSÍLIOS PARA CORREÇÃO DE DEFEITOS FÍSICOS E APARELHOS ORTOPÉDICOS EM GERAL, EXCETO SOB ENCOMENDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2759701",
    "descricao": "FABRICAÇÃO DE APARELHOS ELÉTRICOS DE USO PESSOAL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2660400",
    "descricao": "FABRICAÇÃO DE APARELHOS ELETROMÉDICOS E ELETROTERAPÊUTICOS E EQUIPAMENTOS DE IRRADIAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2670102",
    "descricao": "FABRICAÇÃO DE APARELHOS FOTOGRÁFICOS E CINEMATOGRÁFICOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2632900",
    "descricao": "FABRICAÇÃO DE APARELHOS TELEFÔNICOS E DE OUTROS EQUIPAMENTOS DE COMUNICAÇÃO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2219600",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE BORRACHA NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2342702",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE CERÂMICA E BARRO COZIDO PARA USO NA CONSTRUÇÃO, EXCETO AZULEJOS E PISOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330302",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE CIMENTO PARA USO NA CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099604",
    "descricao": "FABRICAÇÃO DE GELO COMUM",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "1353700",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE CORDOARIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1529700",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE COURO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330303",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE FIBROCIMENTO PARA USO NA CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3211602",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE JOALHERIA E OURIVESARIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2229399",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE MATERIAL PLÁSTICO PARA OUTROS USOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2229303",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE MATERIAL PLÁSTICO PARA USO NA CONSTRUÇÃO, EXCETO TUBOS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2229301",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE MATERIAL PLÁSTICO PARA USO PESSOAL E DOMÉSTICO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2229302",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE MATERIAL PLÁSTICO PARA USOS INDUSTRIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1623400",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE TANOARIA E DE EMBALAGENS DE MADEIRA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1352900",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DE TAPEÇARIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1629302",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DIVERSOS DE CORTIÇA, BAMBU, PALHA, VIME E OUTROS MATERIAIS TRANÇADOS, EXCETO MÓVEIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1629301",
    "descricao": "FABRICAÇÃO DE ARTEFATOS DIVERSOS DE MADEIRA, EXCETO MÓVEIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3230200",
    "descricao": "FABRICAÇÃO DE ARTEFATOS PARA PESCA E ESPORTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1351100",
    "descricao": "FABRICAÇÃO DE ARTEFATOS TÊXTEIS PARA USO DOMÉSTICO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2541100",
    "descricao": "FABRICAÇÃO DE ARTIGOS DE CUTELARIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2593400",
    "descricao": "FABRICAÇÃO DE ARTIGOS DE METAL PARA USO DOMÉSTICO E PESSOAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2542000",
    "descricao": "FABRICAÇÃO DE ARTIGOS DE SERRALHERIA, EXCETO ESQUADRIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2319200",
    "descricao": "FABRICAÇÃO DE ARTIGOS DE VIDRO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1422300",
    "descricao": "FABRICAÇÃO DE ARTIGOS DO VESTUÁRIO, PRODUZIDOS EM MALHARIAS E TRICOTAGENS, EXCETO MEIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1521100",
    "descricao": "FABRICAÇÃO DE ARTIGOS PARA VIAGEM, BOLSAS E SEMELHANTES DE QUALQUER MATERIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2092402",
    "descricao": "FABRICAÇÃO DE ARTIGOS PIROTÉCNICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299005",
    "descricao": "FABRICAÇÃO DE AVIAMENTOS PARA COSTURA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2342701",
    "descricao": "FABRICAÇÃO DE AZULEJOS E PISOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2949201",
    "descricao": "FABRICAÇÃO DE BANCOS E ESTOFADOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2722801",
    "descricao": "FABRICAÇÃO DE BATERIAS E ACUMULADORES PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1122404",
    "descricao": "FABRICAÇÃO DE BEBIDAS ISOTÔNICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3092000",
    "descricao": "FABRICAÇÃO DE BICICLETAS E TRICICLOS NÃO MOTORIZADOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3212400",
    "descricao": "FABRICAÇÃO DE BIJUTERIAS E ARTEFATOS SEMELHANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1932200",
    "descricao": "FABRICAÇÃO DE BIOCOMBUSTÍVEIS, EXCETO ÁLCOOL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1092900",
    "descricao": "FABRICAÇÃO DE BISCOITOS E BOLACHAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2930101",
    "descricao": "FABRICAÇÃO DE CABINES, CARROCERIAS E REBOQUES PARA CAMINHÕES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2930103",
    "descricao": "FABRICAÇÃO DE CABINES, CARROCERIAS E REBOQUES PARA OUTROS VEÍCULOS AUTOMOTORES, EXCETO CAMINHÕES E ÔNIBUS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2392300",
    "descricao": "FABRICAÇÃO DE CAL E GESSO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1531901",
    "descricao": "FABRICAÇÃO DE CALÇADOS DE COURO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1539400",
    "descricao": "FABRICAÇÃO DE CALÇADOS DE MATERIAIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1533500",
    "descricao": "FABRICAÇÃO DE CALÇADOS DE MATERIAL SINTÉTICO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2522500",
    "descricao": "FABRICAÇÃO DE CALDEIRAS GERADORAS DE VAPOR, EXCETO PARA AQUECIMENTO CENTRAL E PARA VEÍCULOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2920401",
    "descricao": "FABRICAÇÃO DE CAMINHÕES E ÔNIBUS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299002",
    "descricao": "FABRICAÇÃO DE CANETAS, LÁPIS E OUTROS ARTIGOS PARA ESCRITÓRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2930102",
    "descricao": "FABRICAÇÃO DE CARROCERIAS PARA ÔNIBUS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1722200",
    "descricao": "FABRICAÇÃO DE CARTOLINA E PAPEL CARTÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1622601",
    "descricao": "FABRICAÇÃO DE CASAS DE MADEIRA PRÉ FABRICADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330304",
    "descricao": "FABRICAÇÃO DE CASAS PRÉ MOLDADAS DE CONCRETO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2094100",
    "descricao": "FABRICAÇÃO DE CATALISADORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1710900",
    "descricao": "FABRICAÇÃO DE CELULOSE E OUTRAS PASTAS PARA A FABRICAÇÃO DE PAPEL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1122402",
    "descricao": "FABRICAÇÃO DE CHÁ MATE E OUTROS CHÁS PRONTOS PARA CONSUMO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1733800",
    "descricao": "FABRICAÇÃO DE CHAPAS E DE EMBALAGENS DE PAPELÃO ONDULADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2099101",
    "descricao": "FABRICAÇÃO DE CHAPAS, FILMES, PAPÉIS E OUTROS MATERIAIS E PRODUTOS QUÍMICOS PARA FOTOGRAFIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2910702",
    "descricao": "FABRICAÇÃO DE CHASSIS COM MOTOR PARA AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2320600",
    "descricao": "FABRICAÇÃO DE CIMENTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2011800",
    "descricao": "FABRICAÇÃO DE CLORO E ÁLCALIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3104700",
    "descricao": "FABRICAÇÃO DE COLCHÕES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2610800",
    "descricao": "FABRICAÇÃO DE COMPONENTES ELETRÔNICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2814301",
    "descricao": "FABRICAÇÃO DE COMPRESSORES PARA USO INDUSTRIAL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2814302",
    "descricao": "FABRICAÇÃO DE COMPRESSORES PARA USO NÃO INDUSTRIAL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1031700",
    "descricao": "FABRICAÇÃO DE CONSERVAS DE FRUTAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1032599",
    "descricao": "FABRICAÇÃO DE CONSERVAS DE LEGUMES E OUTROS VEGETAIS, EXCETO PALMITO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1032501",
    "descricao": "FABRICAÇÃO DE CONSERVAS DE PALMITO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1020102",
    "descricao": "FABRICAÇÃO DE CONSERVAS DE PEIXES, CRUSTÁCEOS E MOLUSCOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2063100",
    "descricao": "FABRICAÇÃO DE COSMÉTICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2652300",
    "descricao": "FABRICAÇÃO DE CRONÔMETROS E RELÓGIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1830001",
    "descricao": "REPRODUÇÃO DE SOM EM QUALQUER SUPORTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1830002",
    "descricao": "REPRODUÇÃO DE VÍDEO EM QUALQUER SUPORTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1910100",
    "descricao": "COQUERIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "2051700",
    "descricao": "FABRICAÇÃO DE DEFENSIVOS AGRÍCOLAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1922501",
    "descricao": "FORMULAÇÃO DE COMBUSTÍVEIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1922502",
    "descricao": "RERREFINO DE ÓLEOS LUBRIFICANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "2052500",
    "descricao": "FABRICAÇÃO DE DESINFESTANTES DOMISSANITÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2033900",
    "descricao": "FABRICAÇÃO DE ELASTÔMEROS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2790201",
    "descricao": "FABRICAÇÃO DE ELETRODOS, CONTATOS E OUTROS ARTIGOS DE CARVÃO E GRAFITA PARA USO ELÉTRICO, ELETROÍMÃS E ISOLADORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1732000",
    "descricao": "FABRICAÇÃO DE EMBALAGENS DE CARTOLINA E PAPEL CARTÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2222600",
    "descricao": "FABRICAÇÃO DE EMBALAGENS DE MATERIAL PLÁSTICO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1731100",
    "descricao": "FABRICAÇÃO DE EMBALAGENS DE PAPEL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2312500",
    "descricao": "FABRICAÇÃO DE EMBALAGENS DE VIDRO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2591800",
    "descricao": "FABRICAÇÃO DE EMBALAGENS METÁLICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2621300",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2815102",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS DE TRANSMISSÃO PARA FINS INDUSTRIAIS, EXCETO ROLAMENTOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3099700",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS DE TRANSPORTE NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3292202",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS E ACESSÓRIOS PARA SEGURANÇA PESSOAL E PROFISSIONAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2670101",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS E INSTRUMENTOS ÓPTICOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2812700",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS HIDRÁULICOS E PNEUMÁTICOS, PEÇAS E ACESSÓRIOS, EXCETO VÁLVULAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2832100",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS PARA IRRIGAÇÃO AGRÍCOLA, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2790202",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS PARA SINALIZAÇÃO E ALARME",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2631100",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTOS TRANSMISSORES DE COMUNICAÇÃO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3291400",
    "descricao": "FABRICAÇÃO DE ESCOVAS, PINCÉIS E VASSOURAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1095300",
    "descricao": "FABRICAÇÃO DE ESPECIARIAS, MOLHOS, TEMPEROS E CONDIMENTOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1622602",
    "descricao": "FABRICAÇÃO DE ESQUADRIAS DE MADEIRA E DE PEÇAS DE MADEIRA PARA INSTALAÇÕES INDUSTRIAIS E COMERCIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2512800",
    "descricao": "FABRICAÇÃO DE ESQUADRIAS DE METAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0142300",
    "descricao": "PRODUÇÃO DE MUDAS E OUTRAS FORMAS DE PROPAGAÇÃO VEGETAL, CERTIFICADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2511000",
    "descricao": "FABRICAÇÃO DE ESTRUTURAS METÁLICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330301",
    "descricao": "FABRICAÇÃO DE ESTRUTURAS PRÉ MOLDADAS DE CONCRETO ARMADO, EM SÉRIE E SOB ENCOMENDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2821602",
    "descricao": "FABRICAÇÃO DE ESTUFAS E FORNOS ELÉTRICOS PARA FINS INDUSTRIAIS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1063500",
    "descricao": "FABRICAÇÃO DE FARINHA DE MANDIOCA E DERIVADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1064300",
    "descricao": "FABRICAÇÃO DE FARINHA DE MILHO E DERIVADOS, EXCETO ÓLEOS DE MILHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099603",
    "descricao": "FABRICAÇÃO DE FERMENTOS E LEVEDURAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2543800",
    "descricao": "FABRICAÇÃO DE FERRAMENTAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2040100",
    "descricao": "FABRICAÇÃO DE FIBRAS ARTIFICIAIS E SINTÉTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2733300",
    "descricao": "FABRICAÇÃO DE FIOS, CABOS E CONDUTORES ELÉTRICOS ISOLADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2751100",
    "descricao": "FABRICAÇÃO DE FOGÕES, REFRIGERADORES E MÁQUINAS DE LAVAR E SECAR PARA USO DOMÉSTICO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1741901",
    "descricao": "FABRICAÇÃO DE FORMULÁRIOS CONTÍNUOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2821601",
    "descricao": "FABRICAÇÃO DE FORNOS INDUSTRIAIS, APARELHOS E EQUIPAMENTOS NÃO ELÉTRICOS PARA INSTALAÇÕES TÉRMICAS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2092403",
    "descricao": "FABRICAÇÃO DE FÓSFOROS DE SEGURANÇA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1742701",
    "descricao": "FABRICAÇÃO DE FRALDAS DESCARTÁVEIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1093702",
    "descricao": "FABRICAÇÃO DE FRUTAS CRISTALIZADAS, BALAS E SEMELHANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2014200",
    "descricao": "FABRICAÇÃO DE GASES INDUSTRIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2710401",
    "descricao": "FABRICAÇÃO DE GERADORES DE CORRENTE CONTÍNUA E ALTERNADA, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299001",
    "descricao": "FABRICAÇÃO DE GUARDA CHUVAS E SIMILARES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2073800",
    "descricao": "FABRICAÇÃO DE IMPERMEABILIZANTES, SOLVENTES E PRODUTOS AFINS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3220500",
    "descricao": "FABRICAÇÃO DE INSTRUMENTOS MUSICAIS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3250701",
    "descricao": "FABRICAÇÃO DE INSTRUMENTOS NÃO ELETRÔNICOS E UTENSÍLIOS PARA USO MÉDICO, CIRÚRGICO, ODONTOLÓGICO E DE LABORATÓRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2012600",
    "descricao": "FABRICAÇÃO DE INTERMEDIÁRIOS PARA FERTILIZANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2022300",
    "descricao": "FABRICAÇÃO DE INTERMEDIÁRIOS PARA PLASTIFICANTES, RESINAS E FIBRAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3240001",
    "descricao": "FABRICAÇÃO DE JOGOS ELETRÔNICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2221800",
    "descricao": "FABRICAÇÃO DE LAMINADOS PLANOS E TUBULARES DE MATERIAL PLÁSTICO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2740601",
    "descricao": "FABRICAÇÃO DE LÂMPADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1052000",
    "descricao": "FABRICAÇÃO DE LATICÍNIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299003",
    "descricao": "FABRICAÇÃO DE LETRAS, LETREIROS E PLACAS DE QUALQUER MATERIAL, EXCETO LUMINOSOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1314600",
    "descricao": "FABRICAÇÃO DE LINHAS PARA COSTURAR E BORDAR",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3031800",
    "descricao": "FABRICAÇÃO DE LOCOMOTIVAS, VAGÕES E OUTROS MATERIAIS RODANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2740602",
    "descricao": "FABRICAÇÃO DE LUMINÁRIAS E OUTROS EQUIPAMENTOS DE ILUMINAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1621800",
    "descricao": "FABRICAÇÃO DE MADEIRA LAMINADA E DE CHAPAS DE MADEIRA COMPENSADA, PRENSADA E AGLOMERADA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2829101",
    "descricao": "FABRICAÇÃO DE MÁQUINAS DE ESCREVER, CALCULAR E OUTROS EQUIPAMENTOS NÃO ELETRÔNICOS PARA ESCRITÓRIO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2823200",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E APARELHOS DE REFRIGERAÇÃO E VENTILAÇÃO PARA USO INDUSTRIAL E COMERCIAL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330305",
    "descricao": "PREPARAÇÃO DE MASSA DE CONCRETO E ARGAMASSA PARA CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "2833000",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A AGRICULTURA E PECUÁRIA, PEÇAS E ACESSÓRIOS, EXCETO PARA IRRIGAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2866600",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A INDÚSTRIA DO PLÁSTICO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2863100",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A INDÚSTRIA TÊXTIL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2851800",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A PROSPECÇÃO E EXTRAÇÃO DE PETRÓLEO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2862300",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA AS INDÚSTRIAS DE ALIMENTOS, BEBIDAS E FUMO, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2865800",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA AS INDÚSTRIAS DE CELULOSE, PAPEL E PAPELÃO E ARTEFATOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2864000",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA AS INDÚSTRIAS DO VESTUÁRIO, DO COURO E DE CALÇADOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2825900",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA SANEAMENTO BÁSICO E AMBIENTAL, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2854200",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA TERRAPLENAGEM, PAVIMENTAÇÃO E CONSTRUÇÃO, PEÇAS E ACESSÓRIOS, EXCETO TRATORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0155505",
    "descricao": "PRODUÇÃO DE OVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "2869100",
    "descricao": "FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA USO INDUSTRIAL ESPECÍFICO NÃO ESPECIFICADOS ANTERIORMENTE, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2840200",
    "descricao": "FABRICAÇÃO DE MÁQUINAS FERRAMENTA, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2861500",
    "descricao": "FABRICAÇÃO DE MÁQUINAS PARA A INDÚSTRIA METALÚRGICA, PEÇAS E ACESSÓRIOS, EXCETO MÁQUINAS FERRAMENTA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2822402",
    "descricao": "FABRICAÇÃO DE MÁQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVAÇÃO DE CARGAS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2822401",
    "descricao": "FABRICAÇÃO DE MÁQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVAÇÃO DE PESSOAS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1043100",
    "descricao": "FABRICAÇÃO DE MARGARINA E OUTRAS GORDURAS VEGETAIS E DE ÓLEOS NÃO COMESTÍVEIS DE ANIMAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1094500",
    "descricao": "FABRICAÇÃO DE MASSAS ALIMENTÍCIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3250705",
    "descricao": "FABRICAÇÃO DE MATERIAIS PARA MEDICINA E ODONTOLOGIA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2945000",
    "descricao": "FABRICAÇÃO DE MATERIAL ELÉTRICO E ELETRÔNICO PARA VEÍCULOS AUTOMOTORES, EXCETO BATERIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2732500",
    "descricao": "FABRICAÇÃO DE MATERIAL ELÉTRICO PARA INSTALAÇÕES EM CIRCUITO DE CONSUMO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2349401",
    "descricao": "FABRICAÇÃO DE MATERIAL SANITÁRIO DE CERÂMICA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2121101",
    "descricao": "FABRICAÇÃO DE MEDICAMENTOS ALOPÁTICOS PARA USO HUMANO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2121103",
    "descricao": "FABRICAÇÃO DE MEDICAMENTOS FITOTERÁPICOS PARA USO HUMANO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2121102",
    "descricao": "FABRICAÇÃO DE MEDICAMENTOS HOMEOPÁTICOS PARA USO HUMANO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2122000",
    "descricao": "FABRICAÇÃO DE MEDICAMENTOS PARA USO VETERINÁRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1421500",
    "descricao": "FABRICAÇÃO DE MEIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3240003",
    "descricao": "FABRICAÇÃO DE MESAS DE BILHAR, DE SINUCA E ACESSÓRIOS ASSOCIADA À LOCAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3240002",
    "descricao": "FABRICAÇÃO DE MESAS DE BILHAR, DE SINUCA E ACESSÓRIOS NÃO ASSOCIADA À LOCAÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2680900",
    "descricao": "FABRICAÇÃO DE MÍDIAS VIRGENS, MAGNÉTICAS E ÓPTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3250702",
    "descricao": "FABRICAÇÃO DE MOBILIÁRIO PARA USO MÉDICO, CIRÚRGICO, ODONTOLÓGICO E DE LABORATÓRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2811900",
    "descricao": "FABRICAÇÃO DE MOTORES E TURBINAS, PEÇAS E ACESSÓRIOS, EXCETO PARA AVIÕES E VEÍCULOS RODOVIÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2710403",
    "descricao": "FABRICAÇÃO DE MOTORES ELÉTRICOS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2910703",
    "descricao": "FABRICAÇÃO DE MOTORES PARA AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2920402",
    "descricao": "FABRICAÇÃO DE MOTORES PARA CAMINHÕES E ÔNIBUS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3101200",
    "descricao": "FABRICAÇÃO DE MÓVEIS COM PREDOMINÂNCIA DE MADEIRA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3102100",
    "descricao": "FABRICAÇÃO DE MÓVEIS COM PREDOMINÂNCIA DE METAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3103900",
    "descricao": "FABRICAÇÃO DE MÓVEIS DE OUTROS MATERIAIS, EXCETO MADEIRA E METAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0155502",
    "descricao": "PRODUÇÃO DE PINTOS DE UM DIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "2513600",
    "descricao": "FABRICAÇÃO DE OBRAS DE CALDEIRARIA PESADA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1065102",
    "descricao": "FABRICAÇÃO DE ÓLEO DE MILHO EM BRUTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1065103",
    "descricao": "FABRICAÇÃO DE ÓLEO DE MILHO REFINADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1041400",
    "descricao": "FABRICAÇÃO DE ÓLEOS VEGETAIS EM BRUTO, EXCETO ÓLEO DE MILHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1042200",
    "descricao": "FABRICAÇÃO DE ÓLEOS VEGETAIS REFINADOS, EXCETO ÓLEO DE MILHO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1122499",
    "descricao": "FABRICAÇÃO DE OUTRAS BEBIDAS NÃO ALCOÓLICAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2829199",
    "descricao": "FABRICAÇÃO DE OUTRAS MÁQUINAS E EQUIPAMENTOS DE USO GERAL NÃO ESPECIFICADOS ANTERIORMENTE, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2852600",
    "descricao": "FABRICAÇÃO DE OUTRAS MÁQUINAS E EQUIPAMENTOS PARA USO NA EXTRAÇÃO MINERAL, PEÇAS E ACESSÓRIOS, EXCETO NA EXTRAÇÃO DE PETRÓLEO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2949299",
    "descricao": "FABRICAÇÃO DE OUTRAS PEÇAS E ACESSÓRIOS PARA VEÍCULOS AUTOMOTORES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2759799",
    "descricao": "FABRICAÇÃO DE OUTROS APARELHOS ELETRODOMÉSTICOS NÃO ESPECIFICADOS ANTERIORMENTE, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2330399",
    "descricao": "FABRICAÇÃO DE OUTROS ARTEFATOS E PRODUTOS DE CONCRETO, CIMENTO, FIBROCIMENTO, GESSO E MATERIAIS SEMELHANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1622699",
    "descricao": "FABRICAÇÃO DE OUTROS ARTIGOS DE CARPINTARIA PARA CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3240099",
    "descricao": "FABRICAÇÃO DE OUTROS BRINQUEDOS E JOGOS RECREATIVOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2790299",
    "descricao": "FABRICAÇÃO DE OUTROS EQUIPAMENTOS E APARELHOS ELÉTRICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099699",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS ALIMENTÍCIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2599399",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS DE METAL NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2399199",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS DE MINERAIS NÃO METÁLICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1922599",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS DERIVADOS DO PETRÓLEO, EXCETO PRODUTOS DO REFINO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1220499",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS DO FUMO, EXCETO CIGARROS, CIGARRILHAS E CHARUTOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2019399",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS QUÍMICOS INORGÂNICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2099199",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS QUÍMICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1359600",
    "descricao": "FABRICAÇÃO DE OUTROS PRODUTOS TÊXTEIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299004",
    "descricao": "FABRICAÇÃO DE PAINÉIS E LETREIROS LUMINOSOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1721400",
    "descricao": "FABRICAÇÃO DE PAPEL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1540800",
    "descricao": "FABRICAÇÃO DE PARTES PARA CALÇADOS, DE QUALQUER MATERIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3091102",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA MOTOCICLETAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2944100",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA O SISTEMA DE DIREÇÃO E SUSPENSÃO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2943300",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA O SISTEMA DE FREIOS DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2941700",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA O SISTEMA MOTOR DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2942500",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA OS SISTEMAS DE MARCHA E TRANSMISSÃO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3032600",
    "descricao": "FABRICAÇÃO DE PEÇAS E ACESSÓRIOS PARA VEÍCULOS FERROVIÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2622100",
    "descricao": "FABRICAÇÃO DE PERIFÉRICOS PARA EQUIPAMENTOS DE INFORMÁTICA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2721000",
    "descricao": "FABRICAÇÃO DE PILHAS, BATERIAS E ACUMULADORES ELÉTRICOS, EXCETO PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2211100",
    "descricao": "FABRICAÇÃO DE PNEUMÁTICOS E DE CÂMARAS DE AR",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099602",
    "descricao": "FABRICAÇÃO DE PÓS ALIMENTÍCIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2123800",
    "descricao": "FABRICAÇÃO DE PREPARAÇÕES FARMACÊUTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1082100",
    "descricao": "FABRICAÇÃO DE PRODUTOS À BASE DE CAFÉ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2349499",
    "descricao": "FABRICAÇÃO DE PRODUTOS CERÂMICOS NÃO REFRATÁRIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2341900",
    "descricao": "FABRICAÇÃO DE PRODUTOS CERÂMICOS REFRATÁRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1013901",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE CARNE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2062200",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE LIMPEZA E POLIMENTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1091101",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE PANIFICAÇÃO INDUSTRIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1742799",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE PAPEL PARA USO DOMÉSTICO E HIGIÊNICO SANITÁRIO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1741902",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE PAPEL, CARTOLINA, PAPEL CARTÃO E PAPELÃO ONDULADO PARA USO COMERCIAL E DE ESCRITÓRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1749400",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE PASTAS CELULÓSICAS, PAPEL, CARTOLINA, PAPEL CARTÃO E PAPELÃO ONDULADO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2592601",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE TREFILADOS DE METAL PADRONIZADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2592602",
    "descricao": "FABRICAÇÃO DE PRODUTOS DE TREFILADOS DE METAL, EXCETO PADRONIZADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1093701",
    "descricao": "FABRICAÇÃO DE PRODUTOS DERIVADOS DO CACAU E DE CHOCOLATES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299099",
    "descricao": "FABRICAÇÃO DE PRODUTOS DIVERSOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1061902",
    "descricao": "FABRICAÇÃO DE PRODUTOS DO ARROZ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1921700",
    "descricao": "FABRICAÇÃO DE PRODUTOS DO REFINO DE PETRÓLEO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2110600",
    "descricao": "FABRICAÇÃO DE PRODUTOS FARMOQUÍMICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099605",
    "descricao": "FABRICAÇÃO DE PRODUTOS PARA INFUSÃO (CHÁ, MATE, ETC.)",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2021500",
    "descricao": "FABRICAÇÃO DE PRODUTOS PETROQUÍMICOS BÁSICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2029100",
    "descricao": "FABRICAÇÃO DE PRODUTOS QUÍMICOS ORGÂNICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1122403",
    "descricao": "FABRICAÇÃO DE REFRESCOS, XAROPES E PÓS PARA REFRESCOS, EXCETO REFRESCOS DE FRUTAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1122401",
    "descricao": "FABRICAÇÃO DE REFRIGERANTES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2032100",
    "descricao": "FABRICAÇÃO DE RESINAS TERMOFIXAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2031200",
    "descricao": "FABRICAÇÃO DE RESINAS TERMOPLÁSTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2815101",
    "descricao": "FABRICAÇÃO DE ROLAMENTOS PARA FINS INDUSTRIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3292201",
    "descricao": "FABRICAÇÃO DE ROUPAS DE PROTEÇÃO E SEGURANÇA E RESISTENTES A FOGO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2061400",
    "descricao": "FABRICAÇÃO DE SABÕES E DETERGENTES SINTÉTICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1053800",
    "descricao": "FABRICAÇÃO DE SORVETES E OUTROS GELADOS COMESTÍVEIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1033301",
    "descricao": "FABRICAÇÃO DE SUCOS CONCENTRADOS DE FRUTAS, HORTALIÇAS E LEGUMES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1033302",
    "descricao": "FABRICAÇÃO DE SUCOS DE FRUTAS, HORTALIÇAS E LEGUMES, EXCETO CONCENTRADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2521700",
    "descricao": "FABRICAÇÃO DE TANQUES, RESERVATÓRIOS METÁLICOS E CALDEIRAS PARA AQUECIMENTO CENTRAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1330800",
    "descricao": "FABRICAÇÃO DE TECIDOS DE MALHA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1354500",
    "descricao": "FABRICAÇÃO DE TECIDOS ESPECIAIS, INCLUSIVE ARTEFATOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1532700",
    "descricao": "FABRICAÇÃO DE TÊNIS DE QUALQUER MATERIAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2072000",
    "descricao": "FABRICAÇÃO DE TINTAS DE IMPRESSÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2071100",
    "descricao": "FABRICAÇÃO DE TINTAS, VERNIZES, ESMALTES E LACAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2710402",
    "descricao": "FABRICAÇÃO DE TRANSFORMADORES, INDUTORES, CONVERSORES, SINCRONIZADORES E SEMELHANTES, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2831300",
    "descricao": "FABRICAÇÃO DE TRATORES AGRÍCOLAS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2853400",
    "descricao": "FABRICAÇÃO DE TRATORES, PEÇAS E ACESSÓRIOS, EXCETO AGRÍCOLAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2223400",
    "descricao": "FABRICAÇÃO DE TUBOS E ACESSÓRIOS DE MATERIAL PLÁSTICO PARA USO NA CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3042300",
    "descricao": "FABRICAÇÃO DE TURBINAS, MOTORES E OUTROS COMPONENTES E PEÇAS PARA AERONAVES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2813500",
    "descricao": "FABRICAÇÃO DE VÁLVULAS, REGISTROS E DISPOSITIVOS SEMELHANTES, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3050400",
    "descricao": "FABRICAÇÃO DE VEÍCULOS MILITARES DE COMBATE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3299006",
    "descricao": "FABRICAÇÃO DE VELAS, INCLUSIVE DECORATIVAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2311700",
    "descricao": "FABRICAÇÃO DE VIDRO PLANO E DE SEGURANÇA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1099601",
    "descricao": "FABRICAÇÃO DE VINAGRES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1412603",
    "descricao": "FACÇÃO DE PEÇAS DO VESTUÁRIO, EXCETO ROUPAS ÍNTIMAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1411802",
    "descricao": "FACÇÃO DE ROUPAS ÍNTIMAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1413403",
    "descricao": "FACÇÃO DE ROUPAS PROFISSIONAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1313800",
    "descricao": "FIAÇÃO DE FIBRAS ARTIFICIAIS E SINTÉTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2451200",
    "descricao": "FUNDIÇÃO DE FERRO E AÇO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2452100",
    "descricao": "FUNDIÇÃO DE METAIS NÃO FERROSOS E SUAS LIGAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1811301",
    "descricao": "IMPRESSÃO DE JORNAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1811302",
    "descricao": "IMPRESSÃO DE LIVROS, REVISTAS E OUTRAS PUBLICAÇÕES PERIÓDICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1812100",
    "descricao": "IMPRESSÃO DE MATERIAL DE SEGURANÇA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1813099",
    "descricao": "IMPRESSÃO DE MATERIAL PARA OUTROS USOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1813001",
    "descricao": "IMPRESSÃO DE MATERIAL PARA USO PUBLICITÁRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3211601",
    "descricao": "LAPIDAÇÃO DE GEMAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2449199",
    "descricao": "METALURGIA DE OUTROS METAIS NÃO FERROSOS E SUAS LIGAS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2443100",
    "descricao": "METALURGIA DO COBRE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2532202",
    "descricao": "METALURGIA DO PÓ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2442300",
    "descricao": "METALURGIA DOS METAIS PRECIOSOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1062700",
    "descricao": "MOAGEM DE TRIGO E FABRICAÇÃO DE DERIVADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1069400",
    "descricao": "MOAGEM E FABRICAÇÃO DE PRODUTOS DE ORIGEM VEGETAL NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "4292801",
    "descricao": "MONTAGEM DE ESTRUTURAS METÁLICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3,
      4
    ],
    "observacao": "Executado pelo próprio fabricante II, isolado III, construção/obra V.",
    "permitido": true
  },
  {
    "cnae": "1340599",
    "descricao": "OUTROS SERVIÇOS DE ACABAMENTO EM FIOS, TECIDOS, ARTEFATOS TÊXTEIS E PEÇAS DO VESTUÁRIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0710302",
    "descricao": "PELOTIZAÇÃO, SINTERIZAÇÃO E OUTROS BENEFICIAMENTOS DE MINÉRIO DE FERRO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1013902",
    "descricao": "PREPARAÇÃO DE SUBPRODUTOS DO ABATE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1051100",
    "descricao": "PREPARAÇÃO DO LEITE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1311100",
    "descricao": "PREPARAÇÃO E FIAÇÃO DE FIBRAS DE ALGODÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1312000",
    "descricao": "PREPARAÇÃO E FIAÇÃO DE FIBRAS TÊXTEIS NATURAIS, EXCETO ALGODÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1020101",
    "descricao": "PRESERVAÇÃO DE PEIXES, CRUSTÁCEOS E MOLUSCOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1210700",
    "descricao": "PROCESSAMENTO INDUSTRIAL DO FUMO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2441501",
    "descricao": "PRODUÇÃO DE ALUMÍNIO E SUAS LIGAS EM FORMAS PRIMÁRIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2424501",
    "descricao": "PRODUÇÃO DE ARAMES DE AÇO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2532201",
    "descricao": "PRODUÇÃO DE ARTEFATOS ESTAMPADOS DE METAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2411300",
    "descricao": "PRODUÇÃO DE FERRO GUSA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2412100",
    "descricao": "PRODUÇÃO DE FERROLIGAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2531401",
    "descricao": "PRODUÇÃO DE FORJADOS DE AÇO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2531402",
    "descricao": "PRODUÇÃO DE FORJADOS DE METAIS NÃO FERROSOS E SUAS LIGAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2441502",
    "descricao": "PRODUÇÃO DE LAMINADOS DE ALUMÍNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2449102",
    "descricao": "PRODUÇÃO DE LAMINADOS DE ZINCO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2423702",
    "descricao": "PRODUÇÃO DE LAMINADOS LONGOS DE AÇO, EXCETO TUBOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2422901",
    "descricao": "PRODUÇÃO DE LAMINADOS PLANOS DE AÇO AO CARBONO, REVESTIDOS OU NÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2422902",
    "descricao": "PRODUÇÃO DE LAMINADOS PLANOS DE AÇOS ESPECIAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2439300",
    "descricao": "PRODUÇÃO DE OUTROS TUBOS DE FERRO E AÇO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2424502",
    "descricao": "PRODUÇÃO DE RELAMINADOS, TREFILADOS E PERFILADOS DE AÇO, EXCETO ARAMES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2421100",
    "descricao": "PRODUÇÃO DE SEMI ACABADOS DE AÇO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3250707",
    "descricao": "FABRICAÇÃO DE ARTIGOS ÓPTICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "2431800",
    "descricao": "PRODUÇÃO DE TUBOS DE AÇO COM COSTURA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2423701",
    "descricao": "PRODUÇÃO DE TUBOS DE AÇO SEM COSTURA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2449101",
    "descricao": "PRODUÇÃO DE ZINCO EM FORMAS PRIMÁRIAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2722802",
    "descricao": "RECONDICIONAMENTO DE BATERIAS E ACUMULADORES PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2950600",
    "descricao": "RECONDICIONAMENTO E RECUPERAÇÃO DE MOTORES PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3831999",
    "descricao": "RECUPERAÇÃO DE MATERIAIS METÁLICOS, EXCETO ALUMÍNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3839499",
    "descricao": "RECUPERAÇÃO DE MATERIAIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3832700",
    "descricao": "RECUPERAÇÃO DE MATERIAIS PLÁSTICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3831901",
    "descricao": "RECUPERAÇÃO DE SUCATAS DE ALUMÍNIO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2212900",
    "descricao": "REFORMA DE PNEUMÁTICOS USADOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "3839401",
    "descricao": "USINAS DE COMPOSTAGEM",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "1830003",
    "descricao": "REPRODUÇÃO DE SOFTWARE EM QUALQUER SUPORTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      1,
      2,
      5
    ],
    "observacao": "Serviços V, se revenda I, venda alta escala II.",
    "permitido": true
  },
  {
    "cnae": "1610203",
    "descricao": "SERRARIAS COM DESDOBRAMENTO DE MADEIRA EM BRUTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1610204",
    "descricao": "SERRARIAS SEM DESDOBRAMENTO DE MADEIRA EM BRUTO - RESSERRAGEM",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1822999",
    "descricao": "SERVIÇOS DE ACABAMENTOS GRÁFICOS, EXCETO ENCADERNAÇÃO E PLASTIFICAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum III, se editoração e impressão II.",
    "permitido": true
  },
  {
    "cnae": "2599301",
    "descricao": "SERVIÇOS DE CONFECÇÃO DE ARMAÇÕES METÁLICAS PARA A CONSTRUÇÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum II, se não conceito indústrial III.",
    "permitido": true
  },
  {
    "cnae": "4520007",
    "descricao": "SERVIÇOS DE INSTALAÇÃO, MANUTENÇÃO E REPARAÇÃO DE ACESSÓRIOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum III, se conceito indústrial I. se venda NT II",
    "permitido": true
  },
  {
    "cnae": "5829800",
    "descricao": "EDIÇÃO INTEGRADA À IMPRESSÃO DE CADASTROS, LISTAS E DE OUTROS PRODUTOS GRÁFICOS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "8292000",
    "descricao": "ENVASAMENTO E EMPACOTAMENTO SOB CONTRATO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2
    ],
    "observacao": "Validado, apenas anexo 2",
    "permitido": true
  },
  {
    "cnae": "0161001",
    "descricao": "SERVIÇO DE PULVERIZAÇÃO E CONTROLE DE PRAGAS AGRÍCOLAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0161002",
    "descricao": "SERVIÇO DE PODA DE ÁRVORES PARA LAVOURAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0161003",
    "descricao": "SERVIÇO DE PREPARAÇÃO DE TERRENO, CULTIVO E COLHEITA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0161099",
    "descricao": "ATIVIDADES DE APOIO À AGRICULTURA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0162801",
    "descricao": "SERVIÇO DE INSEMINAÇÃO ARTIFICIAL DE ANIMAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0162802",
    "descricao": "SERVIÇO DE TOSQUIAMENTO DE OVINOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0162803",
    "descricao": "SERVIÇO DE MANEJO DE ANIMAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0162899",
    "descricao": "ATIVIDADES DE APOIO À PECUÁRIA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0163600",
    "descricao": "ATIVIDADES DE PÓS COLHEITA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0220906",
    "descricao": "CONSERVAÇÃO DE FLORESTAS NATIVAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0230600",
    "descricao": "ATIVIDADES DE APOIO À PRODUÇÃO FLORESTAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0910600",
    "descricao": "ATIVIDADES DE APOIO À EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0990401",
    "descricao": "ATIVIDADES DE APOIO À EXTRAÇÃO DE MINÉRIO DE FERRO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0990402",
    "descricao": "ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS METÁLICOS NÃO FERROSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0990403",
    "descricao": "ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS NÃO METÁLICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "1822901",
    "descricao": "SERVIÇOS DE ENCADERNAÇÃO E PLASTIFICAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "2599302",
    "descricao": "SERVIÇO DE CORTE E DOBRA DE METAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3311200",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE TANQUES, RESERVATÓRIOS METÁLICOS E CALDEIRAS, EXCETO PARA VEÍCULOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3312102",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE APARELHOS E INSTRUMENTOS DE MEDIDA, TESTE E CONTROLE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3312103",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE APARELHOS ELETROMÉDICOS E ELETROTERAPÊUTICOS E EQUIPAMENTOS DE IRRADIAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3312104",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EQUIPAMENTOS E INSTRUMENTOS ÓPTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3313901",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE GERADORES, TRANSFORMADORES E MOTORES ELÉTRICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3313902",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE BATERIAS E ACUMULADORES ELÉTRICOS, EXCETO PARA VEÍCULOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3313999",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS, APARELHOS E MATERIAIS ELÉTRICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314701",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS MOTRIZES NÃO ELÉTRICAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314702",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EQUIPAMENTOS HIDRÁULICOS E PNEUMÁTICOS, EXCETO VÁLVULAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314703",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE VÁLVULAS INDUSTRIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314704",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE COMPRESSORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314705",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EQUIPAMENTOS DE TRANSMISSÃO PARA FINS INDUSTRIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314706",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS, APARELHOS E EQUIPAMENTOS PARA INSTALAÇÕES TÉRMICAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314707",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E APARELHOS DE REFRIGERAÇÃO E VENTILAÇÃO PARA USO INDUSTRIAL E COMERCIAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314708",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVAÇÃO DE CARGAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314709",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS DE ESCREVER, CALCULAR E DE OUTROS EQUIPAMENTOS NÃO ELETRÔNICOS PARA ESCRITÓRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314710",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA USO GERAL NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314711",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA AGRICULTURA E PECUÁRIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314712",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE TRATORES AGRÍCOLAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314713",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS FERRAMENTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314714",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A PROSPECÇÃO E EXTRAÇÃO DE PETRÓLEO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314715",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA USO NA EXTRAÇÃO MINERAL, EXCETO NA EXTRAÇÃO DE PETRÓLEO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314716",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE TRATORES, EXCETO AGRÍCOLAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314717",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS DE TERRAPLENAGEM, PAVIMENTAÇÃO E CONSTRUÇÃO, EXCETO TRATORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314718",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS PARA A INDÚSTRIA METALÚRGICA, EXCETO MÁQUINAS FERRAMENTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314719",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA AS INDÚSTRIAS DE ALIMENTOS, BEBIDAS E FUMO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314720",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E EQUIPAMENTOS PARA A INDÚSTRIA TÊXTIL, DO VESTUÁRIO, DO COURO E CALÇADOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314721",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E APARELHOS PARA A INDÚSTRIA DE CELULOSE, PAPEL E PAPELÃO E ARTEFATOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314722",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MÁQUINAS E APARELHOS PARA A INDÚSTRIA DO PLÁSTICO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3314799",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE OUTRAS MÁQUINAS E EQUIPAMENTOS PARA USOS INDUSTRIAIS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3315500",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE VEÍCULOS FERROVIÁRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3316301",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE AERONAVES, EXCETO A MANUTENÇÃO NA PISTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3316302",
    "descricao": "MANUTENÇÃO DE AERONAVES NA PISTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3317101",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EMBARCAÇÕES E ESTRUTURAS FLUTUANTES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3317102",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EMBARCAÇÕES PARA ESPORTE E LAZER",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3319800",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE EQUIPAMENTOS E PRODUTOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3321000",
    "descricao": "INSTALAÇÃO DE MÁQUINAS E EQUIPAMENTOS INDUSTRIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3329501",
    "descricao": "SERVIÇOS DE MONTAGEM DE MÓVEIS DE QUALQUER MATERIAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3329599",
    "descricao": "INSTALAÇÃO DE OUTROS EQUIPAMENTOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3811400",
    "descricao": "COLETA DE RESÍDUOS NÃO PERIGOSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, se houver coleta com mão de obra IV.",
    "permitido": true
  },
  {
    "cnae": "3812200",
    "descricao": "COLETA DE RESÍDUOS PERIGOSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, se houver coleta com mão de obra IV.",
    "permitido": true
  },
  {
    "cnae": "4211102",
    "descricao": "PINTURA PARA SINALIZAÇÃO EM PISTAS RODOVIÁRIAS E AEROPORTOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4221903",
    "descricao": "MANUTENÇÃO DE REDES DE DISTRIBUIÇÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4221905",
    "descricao": "MANUTENÇÃO DE ESTAÇÕES E REDES DE TELECOMUNICAÇÕES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4313400",
    "descricao": "OBRAS DE TERRAPLENAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4321500",
    "descricao": "INSTALAÇÃO E MANUTENÇÃO ELÉTRICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4322301",
    "descricao": "INSTALAÇÕES HIDRÁULICAS, SANITÁRIAS E DE GÁS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4322302",
    "descricao": "INSTALAÇÃO E MANUTENÇÃO DE SISTEMAS CENTRAIS DE AR CONDICIONADO, DE VENTILAÇÃO E REFRIGERAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4322303",
    "descricao": "INSTALAÇÕES DE SISTEMA DE PREVENÇÃO CONTRA INCÊNDIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4329101",
    "descricao": "INSTALAÇÃO DE PAINÉIS PUBLICITÁRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4329102",
    "descricao": "INSTALAÇÃO DE EQUIPAMENTOS PARA ORIENTAÇÃO À NAVEGAÇÃO MARÍTIMA FLUVIAL E LACUSTRE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "0210199",
    "descricao": "PRODUÇÃO DE PRODUTOS NÃO MADEIREIROS NÃO ESPECIFICADOS ANTERIORMENTE EM FLORESTAS PLANTADAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0141502",
    "descricao": "PRODUÇÃO DE SEMENTES CERTIFICADAS DE FORRAGEIRAS PARA FORMAÇÃO DE PASTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "0141501",
    "descricao": "PRODUÇÃO DE SEMENTES CERTIFICADAS, EXCETO DE FORRAGEIRAS PARA PASTO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "4329103",
    "descricao": "INSTALAÇÃO, MANUTENÇÃO E REPARAÇÃO DE ELEVADORES, ESCADAS E ESTEIRAS ROLANTES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "3530100",
    "descricao": "PRODUÇÃO E DISTRIBUIÇÃO DE VAPOR, ÁGUA QUENTE E AR CONDICIONADO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "4329104",
    "descricao": "MONTAGEM E INSTALAÇÃO DE SISTEMAS E EQUIPAMENTOS DE ILUMINAÇÃO E SINALIZAÇÃO EM VIAS PÚBLICAS, PORTOS E AEROPORTOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4329105",
    "descricao": "TRATAMENTOS TÉRMICOS, ACÚSTICOS OU DE VIBRAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4329199",
    "descricao": "OUTRAS OBRAS DE INSTALAÇÕES EM CONSTRUÇÕES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4330401",
    "descricao": "IMPERMEABILIZAÇÃO EM OBRAS DE ENGENHARIA CIVIL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4330402",
    "descricao": "INSTALAÇÃO DE PORTAS, JANELAS, TETOS, DIVISÓRIAS E ARMÁRIOS EMBUTIDOS DE QUALQUER MATERIAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4,
      5
    ],
    "observacao": "Prática mais comum III, construção/obra IV, instalação ou montagem de estantes p/ feiras e eventos V.",
    "permitido": true
  },
  {
    "cnae": "4330403",
    "descricao": "OBRAS DE ACABAMENTO EM GESSO E ESTUQUE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "0322105",
    "descricao": "RANICULTURA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "1821100",
    "descricao": "SERVIÇOS DE PRÉ IMPRESSÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "2539002",
    "descricao": "SERVIÇOS DE TRATAMENTO E REVESTIMENTO EM METAIS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "4330404",
    "descricao": "SERVIÇOS DE PINTURA DE EDIFÍCIOS EM GERAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "2539001",
    "descricao": "SERVIÇOS DE USINAGEM, TORNEARIA E SOLDA",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "4330405",
    "descricao": "APLICAÇÃO DE REVESTIMENTOS E DE RESINAS EM INTERIORES E EXTERIORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4330499",
    "descricao": "OUTRAS OBRAS DE ACABAMENTO DA CONSTRUÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4399102",
    "descricao": "MONTAGEM E DESMONTAGEM DE ANDAIMES E OUTRAS ESTRUTURAS TEMPORÁRIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4399104",
    "descricao": "SERVIÇOS DE OPERAÇÃO E FORNECIMENTO DE EQUIPAMENTOS PARA TRANSPORTE E ELEVAÇÃO DE CARGAS E PESSOAS PARA USO EM OBRAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4520001",
    "descricao": "SERVIÇOS DE MANUTENÇÃO E REPARAÇÃO MECÂNICA DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4520002",
    "descricao": "SERVIÇOS DE LANTERNAGEM OU FUNILARIA E PINTURA DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4520003",
    "descricao": "SERVIÇOS DE MANUTENÇÃO E REPARAÇÃO ELÉTRICA DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4520004",
    "descricao": "SERVIÇOS DE ALINHAMENTO E BALANCEAMENTO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4520005",
    "descricao": "SERVIÇOS DE LAVAGEM, LUBRIFICAÇÃO E POLIMENTO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3,
      4
    ],
    "observacao": "Prática mais comum III, construção/obra IV.",
    "permitido": true
  },
  {
    "cnae": "4520006",
    "descricao": "SERVIÇOS DE BORRACHARIA PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4520008",
    "descricao": "SERVIÇOS DE CAPOTARIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4543900",
    "descricao": "MANUTENÇÃO E REPARAÇÃO DE MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4911600",
    "descricao": "TRANSPORTE FERROVIÁRIO DE CARGA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4912402",
    "descricao": "TRANSPORTE FERROVIÁRIO DE PASSAGEIROS MUNICIPAL E EM REGIÃO METROPOLITANA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4912403",
    "descricao": "TRANSPORTE METROVIÁRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4921301",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, COM ITINERÁRIO FIXO, MUNICIPAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4921302",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, COM ITINERÁRIO FIXO, INTERMUNICIPAL EM REGIÃO METROPOLITANA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4922103",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, COM ITINERÁRIO FIXO, INTERNACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4923001",
    "descricao": "SERVIÇO DE TÁXI",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4923002",
    "descricao": "SERVIÇO DE TRANSPORTE DE PASSAGEIROS - LOCAÇÃO DE AUTOMÓVEIS COM MOTORISTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4924800",
    "descricao": "TRANSPORTE ESCOLAR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4929901",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, SOB REGIME DE FRETAMENTO, MUNICIPAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4929902",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, SOB REGIME DE FRETAMENTO, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4929903",
    "descricao": "ORGANIZAÇÃO DE EXCURSÕES EM VEÍCULOS RODOVIÁRIOS PRÓPRIOS, MUNICIPAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4929904",
    "descricao": "ORGANIZAÇÃO DE EXCURSÕES EM VEÍCULOS RODOVIÁRIOS PRÓPRIOS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4929999",
    "descricao": "OUTROS TRANSPORTES RODOVIÁRIOS DE PASSAGEIROS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4930201",
    "descricao": "TRANSPORTE RODOVIÁRIO DE CARGA, EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, MUNICIPAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4930202",
    "descricao": "TRANSPORTE RODOVIÁRIO DE CARGA, EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4930203",
    "descricao": "TRANSPORTE RODOVIÁRIO DE PRODUTOS PERIGOSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4930204",
    "descricao": "TRANSPORTE RODOVIÁRIO DE MUDANÇAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4940000",
    "descricao": "TRANSPORTE DUTOVIÁRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4950700",
    "descricao": "TRENS TURÍSTICOS, TELEFÉRICOS E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5011401",
    "descricao": "TRANSPORTE MARÍTIMO DE CABOTAGEM - CARGA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5011402",
    "descricao": "TRANSPORTE MARÍTIMO DE CABOTAGEM - PASSAGEIROS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5012201",
    "descricao": "TRANSPORTE MARÍTIMO DE LONGO CURSO - CARGA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5012202",
    "descricao": "TRANSPORTE MARÍTIMO DE LONGO CURSO - PASSAGEIROS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5021101",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO INTERIOR DE CARGA, MUNICIPAL, EXCETO TRAVESSIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5021102",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO INTERIOR DE CARGA, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL, EXCETO TRAVESSIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5022001",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO INTERIOR DE PASSAGEIROS EM LINHAS REGULARES, MUNICIPAL, EXCETO TRAVESSIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5022002",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO INTERIOR DE PASSAGEIROS EM LINHAS REGULARES, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL, EXCETO TRAVESSIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5030101",
    "descricao": "NAVEGAÇÃO DE APOIO MARÍTIMO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5030102",
    "descricao": "NAVEGAÇÃO DE APOIO PORTUÁRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5030103",
    "descricao": "SERVIÇO DE REBOCADORES E EMPURRADORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5091201",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO DE TRAVESSIA, MUNICIPAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5091202",
    "descricao": "TRANSPORTE POR NAVEGAÇÃO DE TRAVESSIA INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5099801",
    "descricao": "TRANSPORTE AQUAVIÁRIO PARA PASSEIOS TURÍSTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5099899",
    "descricao": "OUTROS TRANSPORTES AQUAVIÁRIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5111100",
    "descricao": "TRANSPORTE AÉREO DE PASSAGEIROS REGULAR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4511101",
    "descricao": "COMÉRCIO A VAREJO DE AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS NOVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4511102",
    "descricao": "COMÉRCIO A VAREJO DE AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4511103",
    "descricao": "COMÉRCIO POR ATACADO DE AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS NOVOS E USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4511104",
    "descricao": "COMÉRCIO POR ATACADO DE CAMINHÕES NOVOS E USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4511105",
    "descricao": "COMÉRCIO POR ATACADO DE REBOQUES E SEMI REBOQUES NOVOS E USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4511106",
    "descricao": "COMÉRCIO POR ATACADO DE ÔNIBUS E MICROÔNIBUS NOVOS E USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "5112901",
    "descricao": "SERVIÇO DE TÁXI AÉREO E LOCAÇÃO DE AERONAVES COM TRIPULAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4512902",
    "descricao": "COMÉRCIO SOB CONSIGNAÇÃO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "5112999",
    "descricao": "OUTROS SERVIÇOS DE TRANSPORTE AÉREO DE PASSAGEIROS NÃO REGULAR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5120000",
    "descricao": "TRANSPORTE AÉREO DE CARGA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5130700",
    "descricao": "TRANSPORTE ESPACIAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5211701",
    "descricao": "ARMAZÉNS GERAIS - EMISSÃO DE WARRANT",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5211702",
    "descricao": "GUARDA MÓVEIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5211799",
    "descricao": "DEPÓSITOS DE MERCADORIAS PARA TERCEIROS, EXCETO ARMAZÉNS GERAIS E GUARDA MÓVEIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "1321900",
    "descricao": "TECELAGEM DE FIOS DE ALGODÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "5212500",
    "descricao": "CARGA E DESCARGA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4530701",
    "descricao": "COMÉRCIO POR ATACADO DE PEÇAS E ACESSÓRIOS NOVOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4530702",
    "descricao": "COMÉRCIO POR ATACADO DE PNEUMÁTICOS E CÂMARAS DE AR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4530703",
    "descricao": "COMÉRCIO A VAREJO DE PEÇAS E ACESSÓRIOS NOVOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4530704",
    "descricao": "COMÉRCIO A VAREJO DE PEÇAS E ACESSÓRIOS USADOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4530705",
    "descricao": "COMÉRCIO A VAREJO DE PNEUMÁTICOS E CÂMARAS DE AR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5221400",
    "descricao": "CONCESSIONÁRIAS DE RODOVIAS, PONTES, TÚNEIS E SERVIÇOS RELACIONADOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4541201",
    "descricao": "COMÉRCIO POR ATACADO DE MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4541202",
    "descricao": "COMÉRCIO POR ATACADO DE PEÇAS E ACESSÓRIOS PARA MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4541203",
    "descricao": "COMÉRCIO A VAREJO DE MOTOCICLETAS E MOTONETAS NOVAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4541204",
    "descricao": "COMÉRCIO A VAREJO DE MOTOCICLETAS E MOTONETAS USADAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4541206",
    "descricao": "COMÉRCIO A VAREJO DE PEÇAS E ACESSÓRIOS NOVOS PARA MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5223100",
    "descricao": "ESTACIONAMENTO DE VEÍCULOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5229001",
    "descricao": "SERVIÇOS DE APOIO AO TRANSPORTE POR TÁXI, INCLUSIVE CENTRAIS DE CHAMADA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4542102",
    "descricao": "COMÉRCIO SOB CONSIGNAÇÃO DE MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "5229002",
    "descricao": "SERVIÇOS DE REBOQUE DE VEÍCULOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5229099",
    "descricao": "OUTRAS ATIVIDADES AUXILIARES DOS TRANSPORTES TERRESTRES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5231102",
    "descricao": "ATIVIDADES DO OPERADOR PORTUÁRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5239701",
    "descricao": "SERVIÇOS DE PRATICAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5239799",
    "descricao": "ATIVIDADES AUXILIARES DOS TRANSPORTES AQUAVIÁRIOS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5240199",
    "descricao": "ATIVIDADES AUXILIARES DOS TRANSPORTES AÉREOS, EXCETO OPERAÇÃO DOS AEROPORTOS E CAMPOS DE ATERRISSAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5310502",
    "descricao": "ATIVIDADES DE FRANQUEADAS DO CORREIO NACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5320201",
    "descricao": "SERVIÇOS DE MALOTE NÃO REALIZADOS PELO CORREIO NACIONAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5320202",
    "descricao": "SERVIÇOS DE ENTREGA RÁPIDA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5510801",
    "descricao": "HOTÉIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5510802",
    "descricao": "APART HOTÉIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5510803",
    "descricao": "MOTÉIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5590601",
    "descricao": "ALBERGUES, EXCETO ASSISTENCIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4621400",
    "descricao": "COMÉRCIO ATACADISTA DE CAFÉ EM GRÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4622200",
    "descricao": "COMÉRCIO ATACADISTA DE SOJA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623101",
    "descricao": "COMÉRCIO ATACADISTA DE ANIMAIS VIVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623102",
    "descricao": "COMÉRCIO ATACADISTA DE COUROS, LÃS, PELES E OUTROS SUBPRODUTOS NÃO COMESTÍVEIS DE ORIGEM ANIMAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623103",
    "descricao": "COMÉRCIO ATACADISTA DE ALGODÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623104",
    "descricao": "COMÉRCIO ATACADISTA DE FUMO EM FOLHA NÃO BENEFICIADO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623105",
    "descricao": "COMÉRCIO ATACADISTA DE CACAU",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623106",
    "descricao": "COMÉRCIO ATACADISTA DE SEMENTES, FLORES, PLANTAS E GRAMAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623107",
    "descricao": "COMÉRCIO ATACADISTA DE SISAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623108",
    "descricao": "COMÉRCIO ATACADISTA DE MATÉRIAS PRIMAS AGRÍCOLAS COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623109",
    "descricao": "COMÉRCIO ATACADISTA DE ALIMENTOS PARA ANIMAIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4623199",
    "descricao": "COMÉRCIO ATACADISTA DE MATÉRIAS PRIMAS AGRÍCOLAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4631100",
    "descricao": "COMÉRCIO ATACADISTA DE LEITE E LATICÍNIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4632001",
    "descricao": "COMÉRCIO ATACADISTA DE CEREAIS E LEGUMINOSAS BENEFICIADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4632002",
    "descricao": "COMÉRCIO ATACADISTA DE FARINHAS, AMIDOS E FÉCULAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4632003",
    "descricao": "COMÉRCIO ATACADISTA DE CEREAIS E LEGUMINOSAS BENEFICIADOS, FARINHAS, AMIDOS E FÉCULAS, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4633801",
    "descricao": "COMÉRCIO ATACADISTA DE FRUTAS, VERDURAS, RAÍZES, TUBÉRCULOS, HORTALIÇAS E LEGUMES FRESCOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4633802",
    "descricao": "COMÉRCIO ATACADISTA DE AVES VIVAS E OVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4633803",
    "descricao": "COMÉRCIO ATACADISTA DE COELHOS E OUTROS PEQUENOS ANIMAIS VIVOS PARA ALIMENTAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4634601",
    "descricao": "COMÉRCIO ATACADISTA DE CARNES BOVINAS E SUÍNAS E DERIVADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4634602",
    "descricao": "COMÉRCIO ATACADISTA DE AVES ABATIDAS E DERIVADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4634603",
    "descricao": "COMÉRCIO ATACADISTA DE PESCADOS E FRUTOS DO MAR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4634699",
    "descricao": "COMÉRCIO ATACADISTA DE CARNES E DERIVADOS DE OUTROS ANIMAIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4635401",
    "descricao": "COMÉRCIO ATACADISTA DE ÁGUA MINERAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4635402",
    "descricao": "COMÉRCIO ATACADISTA DE CERVEJA, CHOPE E REFRIGERANTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4635403",
    "descricao": "COMÉRCIO ATACADISTA DE BEBIDAS COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5590602",
    "descricao": "CAMPINGS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4636201",
    "descricao": "COMÉRCIO ATACADISTA DE FUMO BENEFICIADO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5590603",
    "descricao": "PENSÕES(ALOJAMENTO)",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "4637101",
    "descricao": "COMÉRCIO ATACADISTA DE CAFÉ TORRADO, MOÍDO E SOLÚVEL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637102",
    "descricao": "COMÉRCIO ATACADISTA DE AÇÚCAR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637103",
    "descricao": "COMÉRCIO ATACADISTA DE ÓLEOS E GORDURAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637104",
    "descricao": "COMÉRCIO ATACADISTA DE PÃES, BOLOS, BISCOITOS E SIMILARES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637105",
    "descricao": "COMÉRCIO ATACADISTA DE MASSAS ALIMENTÍCIAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637106",
    "descricao": "COMÉRCIO ATACADISTA DE SORVETES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637107",
    "descricao": "COMÉRCIO ATACADISTA DE CHOCOLATES, CONFEITOS, BALAS, BOMBONS E SEMELHANTES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4637199",
    "descricao": "COMÉRCIO ATACADISTA ESPECIALIZADO EM OUTROS PRODUTOS ALIMENTÍCIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4639701",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS ALIMENTÍCIOS EM GERAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4639702",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS ALIMENTÍCIOS EM GERAL, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4641901",
    "descricao": "COMÉRCIO ATACADISTA DE TECIDOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4641902",
    "descricao": "COMÉRCIO ATACADISTA DE ARTIGOS DE CAMA, MESA E BANHO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4641903",
    "descricao": "COMÉRCIO ATACADISTA DE ARTIGOS DE ARMARINHO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4642701",
    "descricao": "COMÉRCIO ATACADISTA DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS, EXCETO PROFISSIONAIS E DE SEGURANÇA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4642702",
    "descricao": "COMÉRCIO ATACADISTA DE ROUPAS E ACESSÓRIOS PARA USO PROFISSIONAL E DE SEGURANÇA DO TRABALHO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4643501",
    "descricao": "COMÉRCIO ATACADISTA DE CALÇADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4643502",
    "descricao": "COMÉRCIO ATACADISTA DE BOLSAS, MALAS E ARTIGOS DE VIAGEM",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4644301",
    "descricao": "COMÉRCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO HUMANO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4644302",
    "descricao": "COMÉRCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO VETERINÁRIO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4645101",
    "descricao": "COMÉRCIO ATACADISTA DE INSTRUMENTOS E MATERIAIS PARA USO MÉDICO, CIRÚRGICO, HOSPITALAR E DE LABORATÓRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4645102",
    "descricao": "COMÉRCIO ATACADISTA DE PRÓTESES E ARTIGOS DE ORTOPEDIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4645103",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS ODONTOLÓGICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4646001",
    "descricao": "COMÉRCIO ATACADISTA DE COSMÉTICOS E PRODUTOS DE PERFUMARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4646002",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE PESSOAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4647801",
    "descricao": "COMÉRCIO ATACADISTA DE ARTIGOS DE ESCRITÓRIO E DE PAPELARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4647802",
    "descricao": "COMÉRCIO ATACADISTA DE LIVROS, JORNAIS E OUTRAS PUBLICAÇÕES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649401",
    "descricao": "COMÉRCIO ATACADISTA DE EQUIPAMENTOS ELÉTRICOS DE USO PESSOAL E DOMÉSTICO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649402",
    "descricao": "COMÉRCIO ATACADISTA DE APARELHOS ELETRÔNICOS DE USO PESSOAL E DOMÉSTICO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649403",
    "descricao": "COMÉRCIO ATACADISTA DE BICICLETAS, TRICICLOS E OUTROS VEÍCULOS RECREATIVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649404",
    "descricao": "COMÉRCIO ATACADISTA DE MÓVEIS E ARTIGOS DE COLCHOARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649405",
    "descricao": "COMÉRCIO ATACADISTA DE ARTIGOS DE TAPEÇARIA; PERSIANAS E CORTINAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649406",
    "descricao": "COMÉRCIO ATACADISTA DE LUSTRES, LUMINÁRIAS E ABAJURES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649407",
    "descricao": "COMÉRCIO ATACADISTA DE FILMES, CDS, DVDS, FITAS E DISCOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649408",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVAÇÃO DOMICILIAR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649409",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVAÇÃO DOMICILIAR, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649410",
    "descricao": "COMÉRCIO ATACADISTA DE JÓIAS, RELÓGIOS E BIJUTERIAS, INCLUSIVE PEDRAS PRECIOSAS E SEMIPRECIOSAS LAPIDADAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4649499",
    "descricao": "COMÉRCIO ATACADISTA DE OUTROS EQUIPAMENTOS E ARTIGOS DE USO PESSOAL E DOMÉSTICO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4651601",
    "descricao": "COMÉRCIO ATACADISTA DE EQUIPAMENTOS DE INFORMÁTICA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4651602",
    "descricao": "COMÉRCIO ATACADISTA DE SUPRIMENTOS PARA INFORMÁTICA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4652400",
    "descricao": "COMÉRCIO ATACADISTA DE COMPONENTES ELETRÔNICOS E EQUIPAMENTOS DE TELEFONIA E COMUNICAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4661300",
    "descricao": "COMÉRCIO ATACADISTA DE MÁQUINAS, APARELHOS E EQUIPAMENTOS PARA USO AGROPECUÁRIO; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4662100",
    "descricao": "COMÉRCIO ATACADISTA DE MÁQUINAS, EQUIPAMENTOS PARA TERRAPLENAGEM, MINERAÇÃO E CONSTRUÇÃO; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4663000",
    "descricao": "COMÉRCIO ATACADISTA DE MÁQUINAS E EQUIPAMENTOS PARA USO INDUSTRIAL; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4664800",
    "descricao": "COMÉRCIO ATACADISTA DE MÁQUINAS, APARELHOS E EQUIPAMENTOS PARA USO ODONTO MÉDICO HOSPITALAR; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4665600",
    "descricao": "COMÉRCIO ATACADISTA DE MÁQUINAS E EQUIPAMENTOS PARA USO COMERCIAL; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4669901",
    "descricao": "COMÉRCIO ATACADISTA DE BOMBAS E COMPRESSORES; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4669999",
    "descricao": "COMÉRCIO ATACADISTA DE OUTRAS MÁQUINAS E EQUIPAMENTOS NÃO ESPECIFICADOS ANTERIORMENTE; PARTES E PEÇAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4671100",
    "descricao": "COMÉRCIO ATACADISTA DE MADEIRA E PRODUTOS DERIVADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4672900",
    "descricao": "COMÉRCIO ATACADISTA DE FERRAGENS E FERRAMENTAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4673700",
    "descricao": "COMÉRCIO ATACADISTA DE MATERIAL ELÉTRICO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4674500",
    "descricao": "COMÉRCIO ATACADISTA DE CIMENTO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4679601",
    "descricao": "COMÉRCIO ATACADISTA DE TINTAS, VERNIZES E SIMILARES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4679602",
    "descricao": "COMÉRCIO ATACADISTA DE MÁRMORES E GRANITOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4679603",
    "descricao": "COMÉRCIO ATACADISTA DE VIDROS, ESPELHOS E VITRAIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4679604",
    "descricao": "COMÉRCIO ATACADISTA ESPECIALIZADO DE MATERIAIS DE CONSTRUÇÃO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4679699",
    "descricao": "COMÉRCIO ATACADISTA DE MATERIAIS DE CONSTRUÇÃO EM GERAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4681801",
    "descricao": "COMÉRCIO ATACADISTA DE ÁLCOOL CARBURANTE, BIODIESEL, GASOLINA E DEMAIS DERIVADOS DE PETRÓLEO, EXCETO LUBRIFICANTES, NÃO REALIZADO POR TRANSPORTADOR RETALHISTA (T.R.R.)",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4681802",
    "descricao": "COMÉRCIO ATACADISTA DE COMBUSTÍVEIS REALIZADO POR TRANSPORTADOR RETALHISTA (T.R.R.)",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4681803",
    "descricao": "COMÉRCIO ATACADISTA DE COMBUSTÍVEIS DE ORIGEM VEGETAL, EXCETO ÁLCOOL CARBURANTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4681804",
    "descricao": "COMÉRCIO ATACADISTA DE COMBUSTÍVEIS DE ORIGEM MINERAL EM BRUTO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4681805",
    "descricao": "COMÉRCIO ATACADISTA DE LUBRIFICANTES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4682600",
    "descricao": "COMÉRCIO ATACADISTA DE GÁS LIQÜEFEITO DE PETRÓLEO (GLP)",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4683400",
    "descricao": "COMÉRCIO ATACADISTA DE DEFENSIVOS AGRÍCOLAS, ADUBOS, FERTILIZANTES E CORRETIVOS DO SOLO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4684201",
    "descricao": "COMÉRCIO ATACADISTA DE RESINAS E ELASTÔMEROS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4684202",
    "descricao": "COMÉRCIO ATACADISTA DE SOLVENTES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4684299",
    "descricao": "COMÉRCIO ATACADISTA DE OUTROS PRODUTOS QUÍMICOS E PETROQUÍMICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4685100",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS SIDERÚRGICOS E METALÚRGICOS, EXCETO PARA CONSTRUÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4686901",
    "descricao": "COMÉRCIO ATACADISTA DE PAPEL E PAPELÃO EM BRUTO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4686902",
    "descricao": "COMÉRCIO ATACADISTA DE EMBALAGENS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4687701",
    "descricao": "COMÉRCIO ATACADISTA DE RESÍDUOS DE PAPEL E PAPELÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4687702",
    "descricao": "COMÉRCIO ATACADISTA DE RESÍDUOS E SUCATAS NÃO METÁLICOS, EXCETO DE PAPEL E PAPELÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4687703",
    "descricao": "COMÉRCIO ATACADISTA DE RESÍDUOS E SUCATAS METÁLICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4689301",
    "descricao": "COMÉRCIO ATACADISTA DE PRODUTOS DA EXTRAÇÃO MINERAL, EXCETO COMBUSTÍVEIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4689302",
    "descricao": "COMÉRCIO ATACADISTA DE FIOS E FIBRAS BENEFICIADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4689399",
    "descricao": "COMÉRCIO ATACADISTA ESPECIALIZADO EM OUTROS PRODUTOS INTERMEDIÁRIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4691500",
    "descricao": "COMÉRCIO ATACADISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE PRODUTOS ALIMENTÍCIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4692300",
    "descricao": "COMÉRCIO ATACADISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE INSUMOS AGROPECUÁRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4693100",
    "descricao": "COMÉRCIO ATACADISTA DE MERCADORIAS EM GERAL, SEM PREDOMINÂNCIA DE ALIMENTOS OU DE INSUMOS AGROPECUÁRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4711301",
    "descricao": "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE PRODUTOS ALIMENTÍCIOS   HIPERMERCADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4711302",
    "descricao": "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE PRODUTOS ALIMENTÍCIOS - SUPERMERCADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4712100",
    "descricao": "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE PRODUTOS ALIMENTÍCIOS - MINIMERCADOS, MERCEARIAS E ARMAZÉNS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4713002",
    "descricao": "LOJAS DE VARIEDADES, EXCETO LOJAS DE DEPARTAMENTOS OU MAGAZINES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4713004",
    "descricao": "LOJAS DE DEPARTAMENTOS OU MAGAZINES, EXCETO LOJAS FRANCAS (DUTY FREE)",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4713005",
    "descricao": "LOJAS FRANCAS (DUTY FREE) DE AEROPORTOS, PORTOS E EM FRONTEIRAS TERRESTRES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4721102",
    "descricao": "PADARIA E CONFEITARIA COM PREDOMINÂNCIA DE REVENDA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4721103",
    "descricao": "COMÉRCIO VAREJISTA DE LATICÍNIOS E FRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4721104",
    "descricao": "COMÉRCIO VAREJISTA DE DOCES, BALAS, BOMBONS E SEMELHANTES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4722901",
    "descricao": "COMÉRCIO VAREJISTA DE CARNES - AÇOUGUES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4722902",
    "descricao": "PEIXARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4723700",
    "descricao": "COMÉRCIO VAREJISTA DE BEBIDAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4724500",
    "descricao": "COMÉRCIO VAREJISTA DE HORTIFRUTIGRANJEIROS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4729601",
    "descricao": "TABACARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4729602",
    "descricao": "COMÉRCIO VAREJISTA DE MERCADORIAS EM LOJAS DE CONVENIÊNCIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4729699",
    "descricao": "COMÉRCIO VAREJISTA DE PRODUTOS ALIMENTÍCIOS EM GERAL OU ESPECIALIZADO EM PRODUTOS ALIMENTÍCIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4731800",
    "descricao": "COMÉRCIO VAREJISTA DE COMBUSTÍVEIS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4732600",
    "descricao": "COMÉRCIO VAREJISTA DE LUBRIFICANTES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4741500",
    "descricao": "COMÉRCIO VAREJISTA DE TINTAS E MATERIAIS PARA PINTURA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4742300",
    "descricao": "COMÉRCIO VAREJISTA DE MATERIAL ELÉTRICO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4743100",
    "descricao": "COMÉRCIO VAREJISTA DE VIDROS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744001",
    "descricao": "COMÉRCIO VAREJISTA DE FERRAGENS E FERRAMENTAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744002",
    "descricao": "COMÉRCIO VAREJISTA DE MADEIRA E ARTEFATOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744003",
    "descricao": "COMÉRCIO VAREJISTA DE MATERIAIS HIDRÁULICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744004",
    "descricao": "COMÉRCIO VAREJISTA DE CAL, AREIA, PEDRA BRITADA, TIJOLOS E TELHAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744005",
    "descricao": "COMÉRCIO VAREJISTA DE MATERIAIS DE CONSTRUÇÃO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744006",
    "descricao": "COMÉRCIO VAREJISTA DE PEDRAS PARA REVESTIMENTO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4744099",
    "descricao": "COMÉRCIO VAREJISTA DE MATERIAIS DE CONSTRUÇÃO EM GERAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4751201",
    "descricao": "COMÉRCIO VAREJISTA ESPECIALIZADO DE EQUIPAMENTOS E SUPRIMENTOS DE INFORMÁTICA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4751202",
    "descricao": "RECARGA DE CARTUCHOS PARA EQUIPAMENTOS DE INFORMÁTICA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4752100",
    "descricao": "COMÉRCIO VAREJISTA ESPECIALIZADO DE EQUIPAMENTOS DE TELEFONIA E COMUNICAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4753900",
    "descricao": "COMÉRCIO VAREJISTA ESPECIALIZADO DE ELETRODOMÉSTICOS E EQUIPAMENTOS DE ÁUDIO E VÍDEO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4754701",
    "descricao": "COMÉRCIO VAREJISTA DE MÓVEIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4754702",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE COLCHOARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4754703",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE ILUMINAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4755501",
    "descricao": "COMÉRCIO VAREJISTA DE TECIDOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4755502",
    "descricao": "COMERCIO VAREJISTA DE ARTIGOS DE ARMARINHO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4755503",
    "descricao": "COMERCIO VAREJISTA DE ARTIGOS DE CAMA, MESA E BANHO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4756300",
    "descricao": "COMÉRCIO VAREJISTA ESPECIALIZADO DE INSTRUMENTOS MUSICAIS E ACESSÓRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4757100",
    "descricao": "COMÉRCIO VAREJISTA ESPECIALIZADO DE PEÇAS E ACESSÓRIOS PARA APARELHOS ELETROELETRÔNICOS PARA USO DOMÉSTICO, EXCETO INFORMÁTICA E COMUNICAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4759801",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE TAPEÇARIA, CORTINAS E PERSIANAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4759899",
    "descricao": "COMÉRCIO VAREJISTA DE OUTROS ARTIGOS DE USO PESSOAL E DOMÉSTICO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4761001",
    "descricao": "COMÉRCIO VAREJISTA DE LIVROS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4761002",
    "descricao": "COMÉRCIO VAREJISTA DE JORNAIS E REVISTAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4761003",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE PAPELARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4762800",
    "descricao": "COMÉRCIO VAREJISTA DE DISCOS, CDS, DVDS E FITAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4763601",
    "descricao": "COMÉRCIO VAREJISTA DE BRINQUEDOS E ARTIGOS RECREATIVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4763602",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS ESPORTIVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4763603",
    "descricao": "COMÉRCIO VAREJISTA DE BICICLETAS E TRICICLOS; PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4763604",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE CAÇA, PESCA E CAMPING",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4763605",
    "descricao": "COMÉRCIO VAREJISTA DE EMBARCAÇÕES E OUTROS VEÍCULOS RECREATIVOS; PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4771701",
    "descricao": "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS, SEM MANIPULAÇÃO DE FÓRMULAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4771702",
    "descricao": "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS, COM MANIPULAÇÃO DE FÓRMULAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "4771703",
    "descricao": "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS HOMEOPÁTICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4771704",
    "descricao": "COMÉRCIO VAREJISTA DE MEDICAMENTOS VETERINÁRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4772500",
    "descricao": "COMÉRCIO VAREJISTA DE COSMÉTICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4773300",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS MÉDICOS E ORTOPÉDICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4774100",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE ÓPTICA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4781400",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4782201",
    "descricao": "COMÉRCIO VAREJISTA DE CALÇADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4782202",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE VIAGEM",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4783101",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE JOALHERIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4783102",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS DE RELOJOARIA",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4784900",
    "descricao": "COMÉRCIO VAREJISTA DE GÁS LIQÜEFEITO DE PETRÓLEO (GLP)",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4785701",
    "descricao": "COMÉRCIO VAREJISTA DE ANTIGÜIDADES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4785799",
    "descricao": "COMÉRCIO VAREJISTA DE OUTROS ARTIGOS USADOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789001",
    "descricao": "COMÉRCIO VAREJISTA DE SUVENIRES, BIJUTERIAS E ARTESANATOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789002",
    "descricao": "COMÉRCIO VAREJISTA DE PLANTAS E FLORES NATURAIS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789003",
    "descricao": "COMÉRCIO VAREJISTA DE OBJETOS DE ARTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789004",
    "descricao": "COMÉRCIO VAREJISTA DE ANIMAIS VIVOS E DE ARTIGOS E ALIMENTOS PARA ANIMAIS DE ESTIMAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789005",
    "descricao": "COMÉRCIO VAREJISTA DE PRODUTOS SANEANTES DOMISSANITÁRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789006",
    "descricao": "COMÉRCIO VAREJISTA DE FOGOS DE ARTIFÍCIO E ARTIGOS PIROTÉCNICOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789007",
    "descricao": "COMÉRCIO VAREJISTA DE EQUIPAMENTOS PARA ESCRITÓRIO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789008",
    "descricao": "COMÉRCIO VAREJISTA DE ARTIGOS FOTOGRÁFICOS E PARA FILMAGEM",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789009",
    "descricao": "COMÉRCIO VAREJISTA DE ARMAS E MUNIÇÕES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "4789099",
    "descricao": "COMÉRCIO VAREJISTA DE OUTROS PRODUTOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5590699",
    "descricao": "OUTROS ALOJAMENTOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5911101",
    "descricao": "ESTÚDIOS CINEMATOGRÁFICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5911102",
    "descricao": "PRODUÇÃO DE FILMES PARA PUBLICIDADE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5911199",
    "descricao": "ATIVIDADES DE PRODUÇÃO CINEMATOGRÁFICA, DE VÍDEOS E DE PROGRAMAS DE TELEVISÃO NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5912001",
    "descricao": "SERVIÇOS DE DUBLAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5912002",
    "descricao": "SERVIÇOS DE MIXAGEM SONORA EM PRODUÇÃO AUDIOVISUAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5912099",
    "descricao": "ATIVIDADES DE PÓS PRODUÇÃO CINEMATOGRÁFICA, DE VÍDEOS E DE PROGRAMAS DE TELEVISÃO NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5913800",
    "descricao": "DISTRIBUIÇÃO CINEMATOGRÁFICA, DE VÍDEO E DE PROGRAMAS DE TELEVISÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5914600",
    "descricao": "ATIVIDADES DE EXIBIÇÃO CINEMATOGRÁFICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5920100",
    "descricao": "ATIVIDADES DE GRAVAÇÃO DE SOM E DE EDIÇÃO DE MÚSICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6010100",
    "descricao": "ATIVIDADES DE RÁDIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6021700",
    "descricao": "ATIVIDADES DE TELEVISÃO ABERTA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6022501",
    "descricao": "PROGRAMADORAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6110801",
    "descricao": "SERVIÇOS DE TELEFONIA FIXA COMUTADA - STFC",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6110802",
    "descricao": "SERVIÇOS DE REDES DE TRANSPORTES DE TELECOMUNICAÇÕES - SRTT",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6110803",
    "descricao": "SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA - SCM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6110899",
    "descricao": "SERVIÇOS DE TELECOMUNICAÇÕES POR FIO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6120501",
    "descricao": "TELEFONIA MÓVEL CELULAR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6120502",
    "descricao": "SERVIÇO MÓVEL ESPECIALIZADO - SME",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6120599",
    "descricao": "SERVIÇOS DE TELECOMUNICAÇÕES SEM FIO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6130200",
    "descricao": "TELECOMUNICAÇÕES POR SATÉLITE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6141800",
    "descricao": "OPERADORAS DE TELEVISÃO POR ASSINATURA POR CABO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6142600",
    "descricao": "OPERADORAS DE TELEVISÃO POR ASSINATURA POR MICROONDAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6143400",
    "descricao": "OPERADORAS DE TELEVISÃO POR ASSINATURA POR SATÉLITE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6190601",
    "descricao": "PROVEDORES DE ACESSO ÀS REDES DE COMUNICAÇÕES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6190602",
    "descricao": "PROVEDORES DE VOZ SOBRE PROTOCOLO INTERNET - VOIP",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6190699",
    "descricao": "OUTRAS ATIVIDADES DE TELECOMUNICAÇÕES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6201501",
    "descricao": "DESENVOLVIMENTO DE PROGRAMAS DE COMPUTADOR SOB ENCOMENDA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo V direto. Pode ter reducao pelo Fator R no resultado conforme pro-labore.",
    "permitido": true
  },
  {
    "cnae": "6209100",
    "descricao": "SUPORTE TÉCNICO, MANUTENÇÃO E OUTROS SERVIÇOS EM TECNOLOGIA DA INFORMAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Prática mais comum III, se assessoria técnica V.",
    "permitido": true
  },
  {
    "cnae": "6311900",
    "descricao": "TRATAMENTO DE DADOS, PROVEDORES DE SERVIÇOS DE APLICAÇÃO E SERVIÇOS DE HOSPEDAGEM NA INTERNET",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      3,
      5
    ],
    "observacao": "Prática mais comum V, se manut. de computador/perifericos III.",
    "permitido": true
  },
  {
    "cnae": "6319400",
    "descricao": "PORTAIS, PROVEDORES DE CONTEÚDO E OUTROS SERVIÇOS DE INFORMAÇÃO NA INTERNET",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6391700",
    "descricao": "AGÊNCIAS DE NOTÍCIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6399200",
    "descricao": "OUTRAS ATIVIDADES DE PRESTAÇÃO DE SERVIÇOS DE INFORMAÇÃO NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6619302",
    "descricao": "CORRESPONDENTES DE INSTITUIÇÕES FINANCEIRAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6622300",
    "descricao": "CORRETORES E AGENTES DE SEGUROS, DE PLANOS DE PREVIDÊNCIA COMPLEMENTAR E DE SAÚDE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6821801",
    "descricao": "CORRETAGEM NA COMPRA E VENDA E AVALIAÇÃO DE IMÓVEIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Se venda/intermediação III, Se avalição de imoveis V.",
    "permitido": true
  },
  {
    "cnae": "6821802",
    "descricao": "CORRETAGEM NO ALUGUEL DE IMÓVEIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "6920601",
    "descricao": "ATIVIDADES DE CONTABILIDADE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7312200",
    "descricao": "AGENCIAMENTO DE ESPAÇOS PARA PUBLICIDADE, EXCETO EM VEÍCULOS DE COMUNICAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7319002",
    "descricao": "PROMOÇÃO DE VENDAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7319003",
    "descricao": "MARKETING DIRETO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7319099",
    "descricao": "OUTRAS ATIVIDADES DE PUBLICIDADE NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7420001",
    "descricao": "ATIVIDADES DE PRODUÇÃO DE FOTOGRAFIAS, EXCETO AÉREA E SUBMARINA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7420002",
    "descricao": "ATIVIDADES DE PRODUÇÃO DE FOTOGRAFIAS AÉREAS E SUBMARINAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7420003",
    "descricao": "LABORATÓRIOS FOTOGRÁFICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7420004",
    "descricao": "FILMAGEM DE FESTAS E EVENTOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7420005",
    "descricao": "SERVIÇOS DE MICROFILMAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7490102",
    "descricao": "ESCAFANDRIA E MERGULHO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7711000",
    "descricao": "LOCAÇÃO DE AUTOMÓVEIS SEM CONDUTOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7719501",
    "descricao": "LOCAÇÃO DE EMBARCAÇÕES SEM TRIPULAÇÃO, EXCETO PARA FINS RECREATIVOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7719502",
    "descricao": "LOCAÇÃO DE AERONAVES SEM TRIPULAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7719599",
    "descricao": "LOCAÇÃO DE OUTROS MEIOS DE TRANSPORTE NÃO ESPECIFICADOS ANTERIORMENTE, SEM CONDUTOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7721700",
    "descricao": "ALUGUEL DE EQUIPAMENTOS RECREATIVOS E ESPORTIVOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7722500",
    "descricao": "ALUGUEL DE FITAS DE VÍDEO, DVDS E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7723300",
    "descricao": "ALUGUEL DE OBJETOS DO VESTUÁRIO, JÓIAS E ACESSÓRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7729201",
    "descricao": "ALUGUEL DE APARELHOS DE JOGOS ELETRÔNICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7729202",
    "descricao": "ALUGUEL DE MÓVEIS, UTENSÍLIOS E APARELHOS DE USO DOMÉSTICO E PESSOAL; INSTRUMENTOS MUSICAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7729203",
    "descricao": "ALUGUEL DE MATERIAL MÉDICO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7729299",
    "descricao": "ALUGUEL DE OUTROS OBJETOS PESSOAIS E DOMÉSTICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7731400",
    "descricao": "ALUGUEL DE MÁQUINAS E EQUIPAMENTOS AGRÍCOLAS SEM OPERADOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7732201",
    "descricao": "ALUGUEL DE MÁQUINAS E EQUIPAMENTOS PARA CONSTRUÇÃO SEM OPERADOR, EXCETO ANDAIMES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7732202",
    "descricao": "ALUGUEL DE ANDAIMES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7733100",
    "descricao": "ALUGUEL DE MÁQUINAS E EQUIPAMENTOS PARA ESCRITÓRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7739001",
    "descricao": "ALUGUEL DE MÁQUINAS E EQUIPAMENTOS PARA EXTRAÇÃO DE MINÉRIOS E PETRÓLEO, SEM OPERADOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7739002",
    "descricao": "ALUGUEL DE EQUIPAMENTOS CIENTÍFICOS, MÉDICOS E HOSPITALARES, SEM OPERADOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7739003",
    "descricao": "ALUGUEL DE PALCOS, COBERTURAS E OUTRAS ESTRUTURAS DE USO TEMPORÁRIO, EXCETO ANDAIMES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7739099",
    "descricao": "ALUGUEL DE OUTRAS MÁQUINAS E EQUIPAMENTOS COMERCIAIS E INDUSTRIAIS NÃO ESPECIFICADOS ANTERIORMENTE, SEM OPERADOR",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7911200",
    "descricao": "AGÊNCIAS DE VIAGENS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7912100",
    "descricao": "OPERADORES TURÍSTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "7990200",
    "descricao": "SERVIÇOS DE RESERVAS E OUTROS SERVIÇOS DE TURISMO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8011102",
    "descricao": "SERVIÇOS DE ADESTRAMENTO DE CÃES DE GUARDA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8020002",
    "descricao": "OUTRAS ATIVIDADES DE SERVIÇOS DE SEGURANÇA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8211300",
    "descricao": "SERVIÇOS COMBINADOS DE ESCRITÓRIO E APOIO ADMINISTRATIVO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8219901",
    "descricao": "FOTOCÓPIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8219999",
    "descricao": "PREPARAÇÃO DE DOCUMENTOS E SERVIÇOS ESPECIALIZADOS DE APOIO ADMINISTRATIVO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8220200",
    "descricao": "ATIVIDADES DE TELEATENDIMENTO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8230001",
    "descricao": "SERVIÇOS DE ORGANIZAÇÃO DE FEIRAS, CONGRESSOS, EXPOSIÇÕES E FESTAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5611201",
    "descricao": "RESTAURANTES E SIMILARES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5611203",
    "descricao": "LANCHONETES, CASAS DE CHÁ, DE SUCOS E SIMILARES",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5611204",
    "descricao": "BARES E OUTROS ESTABELECIMENTOS ESPECIALIZADOS EM SERVIR BEBIDAS, SEM ENTRETENIMENTO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "8230002",
    "descricao": "CASAS DE FESTAS E EVENTOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5612100",
    "descricao": "SERVIÇOS AMBULANTES DE ALIMENTAÇÃO",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5620101",
    "descricao": "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "0892403",
    "descricao": "REFINO E OUTROS TRATAMENTOS DO SAL",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      1,
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "5620103",
    "descricao": "CANTINAS - SERVIÇOS DE ALIMENTAÇÃO PRIVATIVOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "5620104",
    "descricao": "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA CONSUMO DOMICILIAR",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "8291100",
    "descricao": "ATIVIDADES DE COBRANÇAS E INFORMAÇÕES CADASTRAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "1323500",
    "descricao": "TECELAGEM DE FIOS DE FIBRAS ARTIFICIAIS E SINTÉTICAS",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "1322700",
    "descricao": "TECELAGEM DE FIOS DE FIBRAS TÊXTEIS NATURAIS, EXCETO ALGODÃO",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "8299701",
    "descricao": "MEDIÇÃO DE CONSUMO DE ENERGIA ELÉTRICA, GÁS E ÁGUA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8299703",
    "descricao": "SERVIÇOS DE GRAVAÇÃO DE CARIMBOS, EXCETO CONFECÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8299706",
    "descricao": "CASAS LOTÉRICAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "5620102",
    "descricao": "SERVIÇOS DE ALIMENTAÇÃO PARA EVENTOS E RECEPÇÕES - BUFÊ",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1,
      3
    ],
    "observacao": "Prática mais comum: \"Comércio\".",
    "permitido": true
  },
  {
    "cnae": "1081302",
    "descricao": "TORREFAÇÃO E MOAGEM DE CAFÉ",
    "anexoPadrao": 2,
    "anexosPossiveis": [
      2,
      3
    ],
    "observacao": "Prática mais comum: \"Indústria\".",
    "permitido": true
  },
  {
    "cnae": "8299707",
    "descricao": "SALAS DE ACESSO À INTERNET",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8299799",
    "descricao": "OUTRAS ATIVIDADES DE SERVIÇOS PRESTADOS PRINCIPALMENTE ÀS EMPRESAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Se ativa não intelectual III, com atividade intelectual V.",
    "permitido": true
  },
  {
    "cnae": "8511200",
    "descricao": "EDUCAÇÃO INFANTIL - CRECHE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8512100",
    "descricao": "EDUCAÇÃO INFANTIL - PRÉESCOLA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8513900",
    "descricao": "ENSINO FUNDAMENTAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8520100",
    "descricao": "ENSINO MÉDIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8541400",
    "descricao": "EDUCAÇÃO PROFISSIONAL DE NÍVEL TÉCNICO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8592902",
    "descricao": "ENSINO DE ARTES CÊNICAS, EXCETO DANÇA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8592903",
    "descricao": "ENSINO DE MÚSICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8592999",
    "descricao": "ENSINO DE ARTE E CULTURA NÃO ESPECIFICADO ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8593700",
    "descricao": "ENSINO DE IDIOMAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599601",
    "descricao": "FORMAÇÃO DE CONDUTORES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599602",
    "descricao": "CURSOS DE PILOTAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599603",
    "descricao": "TREINAMENTO EM INFORMÁTICA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599604",
    "descricao": "TREINAMENTO EM DESENVOLVIMENTO PROFISSIONAL E GERENCIAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599605",
    "descricao": "CURSOS PREPARATÓRIOS PARA CONCURSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8599699",
    "descricao": "OUTRAS ATIVIDADES DE ENSINO NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8622400",
    "descricao": "SERVIÇOS DE REMOÇÃO DE PACIENTES, EXCETO OS SERVIÇOS MÓVEIS DE ATENDIMENTO A URGÊNCIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8650004",
    "descricao": "ATIVIDADES DE FISIOTERAPIA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8711502",
    "descricao": "INSTITUIÇÕES DE LONGA PERMANÊNCIA PARA IDOSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8711505",
    "descricao": "CONDOMÍNIOS RESIDENCIAIS PARA IDOSOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8712300",
    "descricao": "ATIVIDADES DE FORNECIMENTO DE INFRAESTRUTURA DE APOIO E ASSISTÊNCIA A PACIENTE NO DOMICÍLIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8730101",
    "descricao": "ORFANATOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "8730102",
    "descricao": "ALBERGUES ASSISTENCIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001901",
    "descricao": "PRODUÇÃO TEATRAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001902",
    "descricao": "PRODUÇÃO MUSICAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001903",
    "descricao": "PRODUÇÃO DE ESPETÁCULOS DE DANÇA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001904",
    "descricao": "PRODUÇÃO DE ESPETÁCULOS CIRCENSES, DE MARIONETES E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001905",
    "descricao": "PRODUÇÃO DE ESPETÁCULOS DE RODEIOS, VAQUEJADAS E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001906",
    "descricao": "ATIVIDADES DE SONORIZAÇÃO E DE ILUMINAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9001999",
    "descricao": "ARTES CÊNICAS, ESPETÁCULOS E ATIVIDADES COMPLEMENTARES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9002702",
    "descricao": "RESTAURAÇÃO DE OBRAS DE ARTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9003500",
    "descricao": "GESTÃO DE ESPAÇOS PARA ARTES CÊNICAS, ESPETÁCULOS E OUTRAS ATIVIDADES ARTÍSTICAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9101500",
    "descricao": "ATIVIDADES DE BIBLIOTECAS E ARQUIVOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9102301",
    "descricao": "ATIVIDADES DE MUSEUS E DE EXPLORAÇÃO DE LUGARES E PRÉDIOS HISTÓRICOS E ATRAÇÕES SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9102302",
    "descricao": "RESTAURAÇÃO E CONSERVAÇÃO DE LUGARES E PRÉDIOS HISTÓRICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9103100",
    "descricao": "ATIVIDADES DE JARDINS BOTÂNICOS, ZOOLÓGICOS, PARQUES NACIONAIS, RESERVAS ECOLÓGICAS E ÁREAS DE PROTEÇÃO AMBIENTAL",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9200301",
    "descricao": "CASAS DE BINGO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9200302",
    "descricao": "EXPLORAÇÃO DE APOSTAS EM CORRIDAS DE CAVALOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9200399",
    "descricao": "EXPLORAÇÃO DE JOGOS DE AZAR E APOSTAS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9311500",
    "descricao": "GESTÃO DE INSTALAÇÕES DE ESPORTES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9312300",
    "descricao": "CLUBES SOCIAIS, ESPORTIVOS E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9319101",
    "descricao": "PRODUÇÃO E PROMOÇÃO DE EVENTOS ESPORTIVOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9319199",
    "descricao": "OUTRAS ATIVIDADES ESPORTIVAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Se ativa não intelectual III, com atividade intelectual V.",
    "permitido": true
  },
  {
    "cnae": "9321200",
    "descricao": "PARQUES DE DIVERSÃO E PARQUES TEMÁTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9329801",
    "descricao": "DISCOTECAS, DANCETERIAS, SALÕES DE DANÇA E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9329802",
    "descricao": "EXPLORAÇÃO DE BOLICHES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9329803",
    "descricao": "EXPLORAÇÃO DE JOGOS DE SINUCA, BILHAR E SIMILARES",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9329804",
    "descricao": "EXPLORAÇÃO DE JOGOS ELETRÔNICOS RECREATIVOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9329899",
    "descricao": "OUTRAS ATIVIDADES DE RECREAÇÃO E LAZER NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9511800",
    "descricao": "REPARAÇÃO E MANUTENÇÃO DE COMPUTADORES E DE EQUIPAMENTOS PERIFÉRICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9512600",
    "descricao": "REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS DE COMUNICAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9521500",
    "descricao": "REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS ELETROELETRÔNICOS DE USO PESSOAL E DOMÉSTICO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529101",
    "descricao": "REPARAÇÃO DE CALÇADOS, DE BOLSAS E ARTIGOS DE VIAGEM",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529102",
    "descricao": "CHAVEIROS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529103",
    "descricao": "REPARAÇÃO DE RELÓGIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529104",
    "descricao": "REPARAÇÃO DE BICICLETAS, TRICICLOS E OUTROS VEÍCULOS NÃO MOTORIZADOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529105",
    "descricao": "REPARAÇÃO DE ARTIGOS DO MOBILIÁRIO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529106",
    "descricao": "REPARAÇÃO DE JÓIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9529199",
    "descricao": "REPARAÇÃO E MANUTENÇÃO DE OUTROS OBJETOS E EQUIPAMENTOS PESSOAIS E DOMÉSTICOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9601701",
    "descricao": "LAVANDERIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9601702",
    "descricao": "TINTURARIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9601703",
    "descricao": "TOALHEIROS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9602501",
    "descricao": "CABELEIREIROS, MANICURE E PEDICURE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9602502",
    "descricao": "ATIVIDADES DE ESTÉTICA E OUTROS SERVIÇOS DE CUIDADOS COM A BELEZA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603301",
    "descricao": "GESTÃO E MANUTENÇÃO DE CEMITÉRIOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603302",
    "descricao": "SERVIÇOS DE CREMAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603303",
    "descricao": "SERVIÇOS DE SEPULTAMENTO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603304",
    "descricao": "SERVIÇOS DE FUNERÁRIAS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603305",
    "descricao": "SERVIÇOS DE SOMATOCONSERVAÇÃO",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9603399",
    "descricao": "ATIVIDADES FUNERÁRIAS E SERVIÇOS RELACIONADOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609202",
    "descricao": "AGÊNCIAS MATRIMONIAIS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609204",
    "descricao": "EXPLORAÇÃO DE MÁQUINAS DE SERVIÇOS PESSOAIS ACIONADAS POR MOEDA",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609205",
    "descricao": "ATIVIDADES DE SAUNA E BANHOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609206",
    "descricao": "SERVIÇOS DE TATUAGEM E COLOCAÇÃO DE PIERCING",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609207",
    "descricao": "ALOJAMENTO DE ANIMAIS DOMÉSTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609208",
    "descricao": "HIGIENE E EMBELEZAMENTO DE ANIMAIS DOMÉSTICOS",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "9609299",
    "descricao": "OUTRAS ATIVIDADES DE SERVIÇOS PESSOAIS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 3,
    "anexosPossiveis": [
      3
    ],
    "observacao": "Validado, apenas anexo 3",
    "permitido": true
  },
  {
    "cnae": "3702900",
    "descricao": "ATIVIDADES RELACIONADAS A ESGOTO, EXCETO A GESTÃO DE REDES",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4120400",
    "descricao": "CONSTRUÇÃO DE EDIFÍCIOS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4211101",
    "descricao": "CONSTRUÇÃO DE RODOVIAS E FERROVIAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4212000",
    "descricao": "CONSTRUÇÃO DE OBRAS DE ARTE ESPECIAIS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4213800",
    "descricao": "OBRAS DE URBANIZAÇÃO - RUAS, PRAÇAS E CALÇADAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4221901",
    "descricao": "CONSTRUÇÃO DE BARRAGENS E REPRESAS PARA GERAÇÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4221902",
    "descricao": "CONSTRUÇÃO DE ESTAÇÕES E REDES DE DISTRIBUIÇÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4221904",
    "descricao": "CONSTRUÇÃO DE ESTAÇÕES E REDES DE TELECOMUNICAÇÕES",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4222701",
    "descricao": "CONSTRUÇÃO DE REDES DE ABASTECIMENTO DE ÁGUA, COLETA DE ESGOTO E CONSTRUÇÕES CORRELATAS, EXCETO OBRAS DE IRRIGAÇÃO",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4222702",
    "descricao": "OBRAS DE IRRIGAÇÃO",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4223500",
    "descricao": "CONSTRUÇÃO DE REDES DE TRANSPORTES POR DUTOS, EXCETO PARA ÁGUA E ESGOTO",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4291000",
    "descricao": "OBRAS PORTUÁRIAS, MARÍTIMAS E FLUVIAIS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4292802",
    "descricao": "OBRAS DE MONTAGEM INDUSTRIAL",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4299501",
    "descricao": "CONSTRUÇÃO DE INSTALAÇÕES ESPORTIVAS E RECREATIVAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4299599",
    "descricao": "OUTRAS OBRAS DE ENGENHARIA CIVIL NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4311801",
    "descricao": "DEMOLIÇÃO DE EDIFÍCIOS E OUTRAS ESTRUTURAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4311802",
    "descricao": "PREPARAÇÃO DE CANTEIRO E LIMPEZA DE TERRENO",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4312600",
    "descricao": "PERFURAÇÕES E SONDAGENS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4319300",
    "descricao": "SERVIÇOS DE PREPARAÇÃO DO TERRENO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4391600",
    "descricao": "OBRAS DE FUNDAÇÕES",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4399103",
    "descricao": "OBRAS DE ALVENARIA",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4399105",
    "descricao": "PERFURAÇÃO E CONSTRUÇÃO DE POÇOS DE ÁGUA",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "4399199",
    "descricao": "SERVIÇOS ESPECIALIZADOS PARA CONSTRUÇÃO NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "6911701",
    "descricao": "SERVIÇOS ADVOCATÍCIOS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "7410202",
    "descricao": "DESIGN DE INTERIORES",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Prática mais comum IV, se assessoria técnica V.",
    "permitido": true
  },
  {
    "cnae": "8011101",
    "descricao": "ATIVIDADES DE VIGILÂNCIA E SEGURANÇA PRIVADA",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "6810201",
    "descricao": "COMPRA E VENDA DE IMÓVEIS PRÓPRIOS",
    "anexoPadrao": 1,
    "anexosPossiveis": [
      1
    ],
    "observacao": "Validado, apenas anexo 1",
    "permitido": true
  },
  {
    "cnae": "8012900",
    "descricao": "ATIVIDADES DE TRANSPORTE DE VALORES",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8020001",
    "descricao": "ATIVIDADES DE MONITORAMENTO DE SISTEMAS DE SEGURANÇA ELETRÔNICO",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8111700",
    "descricao": "SERVIÇOS COMBINADOS PARA APOIO A EDIFÍCIOS, EXCETO CONDOMÍNIOS PREDIAIS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8121400",
    "descricao": "LIMPEZA EM PRÉDIOS E EM DOMICÍLIOS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8122200",
    "descricao": "IMUNIZAÇÃO E CONTROLE DE PRAGAS URBANAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8129000",
    "descricao": "ATIVIDADES DE LIMPEZA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "8130300",
    "descricao": "ATIVIDADES PAISAGÍSTICAS",
    "anexoPadrao": 4,
    "anexosPossiveis": [
      4
    ],
    "observacao": "Validado, apenas anexo 4",
    "permitido": true
  },
  {
    "cnae": "1111901",
    "descricao": "FABRICAÇÃO DE AGUARDENTE DE CANA DE AÇÚCAR",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1111902",
    "descricao": "FABRICAÇÃO DE OUTRAS AGUARDENTES E BEBIDAS DESTILADAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1112700",
    "descricao": "FABRICAÇÃO DE VINHO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1113501",
    "descricao": "FABRICAÇÃO DE MALTE, INCLUSIVE MALTE UÍSQUE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1113502",
    "descricao": "FABRICAÇÃO DE CERVEJAS E CHOPES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1220401",
    "descricao": "FABRICAÇÃO DE CIGARROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1220402",
    "descricao": "FABRICAÇÃO DE CIGARRILHAS E CHARUTOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1220403",
    "descricao": "FABRICAÇÃO DE FILTROS PARA CIGARROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "1610205",
    "descricao": "SERVIÇO DE TRATAMENTO DE MADEIRA REALIZADO SOB CONTRATO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "2092401",
    "descricao": "FABRICAÇÃO DE PÓLVORAS, EXPLOSIVOS E DETONANTES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "2550101",
    "descricao": "FABRICAÇÃO DE EQUIPAMENTO BÉLICO PESADO, EXCETO VEÍCULOS MILITARES DE COMBATE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "2550102",
    "descricao": "FABRICAÇÃO DE ARMAS DE FOGO, OUTRAS ARMAS  E MUNIÇÕES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "2910701",
    "descricao": "FABRICAÇÃO DE AUTOMÓVEIS, CAMIONETAS E UTILITÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3091101",
    "descricao": "FABRICAÇÃO DE MOTOCICLETAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3511501",
    "descricao": "GERAÇÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3511502",
    "descricao": "ATIVIDADES DE COORDENAÇÃO E CONTROLE DA OPERAÇÃO DA GERAÇÃO E TRANSMISSÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3512300",
    "descricao": "TRANSMISSÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3513100",
    "descricao": "COMÉRCIO ATACADISTA DE ENERGIA ELÉTRICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3514000",
    "descricao": "DISTRIBUIÇÃO DE ENERGIA ELÉTRICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4110700",
    "descricao": "INCORPORAÇÃO DE EMPREENDIMENTOS IMOBILIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4541207",
    "descricao": "COMÉRCIO A VAREJO DE PEÇAS E ACESSÓRIOS USADOS PARA MOTOCICLETAS E MOTONETAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4635499",
    "descricao": "COMÉRCIO ATACADISTA DE BEBIDAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4636202",
    "descricao": "COMÉRCIO ATACADISTA DE CIGARROS, CIGARRILHAS E CHARUTOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4912401",
    "descricao": "TRANSPORTE FERROVIÁRIO DE PASSAGEIROS INTERMUNICIPAL E INTERESTADUAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4922101",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, COM ITINERÁRIO FIXO, INTERMUNICIPAL, EXCETO EM REGIÃO METROPOLITANA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "4922102",
    "descricao": "TRANSPORTE RODOVIÁRIO COLETIVO DE PASSAGEIROS, COM ITINERÁRIO FIXO, INTERESTADUAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "5310501",
    "descricao": "ATIVIDADES DO CORREIO NACIONAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "5611205",
    "descricao": "BARES E OUTROS ESTABELECIMENTOS ESPECIALIZADOS EM SERVIR BEBIDAS, COM ENTRETENIMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6410700",
    "descricao": "BANCO CENTRAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6421200",
    "descricao": "BANCOS COMERCIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6422100",
    "descricao": "BANCOS MÚLTIPLOS, COM CARTEIRA COMERCIAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6423900",
    "descricao": "CAIXAS ECONÔMICAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6424701",
    "descricao": "BANCOS COOPERATIVOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6424702",
    "descricao": "COOPERATIVAS CENTRAIS DE CRÉDITO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6424703",
    "descricao": "COOPERATIVAS DE CRÉDITO MÚTUO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6424704",
    "descricao": "COOPERATIVAS DE CRÉDITO RURAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6431000",
    "descricao": "BANCOS MÚLTIPLOS, SEM CARTEIRA COMERCIAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6432800",
    "descricao": "BANCOS DE INVESTIMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6433600",
    "descricao": "BANCOS DE DESENVOLVIMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6434400",
    "descricao": "AGÊNCIAS DE FOMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6435201",
    "descricao": "SOCIEDADES DE CRÉDITO IMOBILIÁRIO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6435202",
    "descricao": "ASSOCIAÇÕES DE POUPANÇA E EMPRÉSTIMO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6435203",
    "descricao": "COMPANHIAS HIPOTECÁRIAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6436100",
    "descricao": "SOCIEDADES DE CRÉDITO, FINANCIAMENTO E INVESTIMENTO - FINANCEIRAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6437900",
    "descricao": "SOCIEDADES DE CRÉDITO AO MICROEMPREENDEDOR",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6438701",
    "descricao": "BANCOS DE CÂMBIO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6438799",
    "descricao": "OUTRAS INSTITUIÇÕES DE INTERMEDIAÇÃO NÃO MONETÁRIA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6440900",
    "descricao": "ARRENDAMENTO MERCANTIL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6450600",
    "descricao": "SOCIEDADES DE CAPITALIZAÇÃO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6461100",
    "descricao": "HOLDINGS DE INSTITUIÇÕES FINANCEIRAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6462000",
    "descricao": "HOLDINGS DE INSTITUIÇÕES NÃO FINANCEIRAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6463800",
    "descricao": "OUTRAS SOCIEDADES DE PARTICIPAÇÃO, EXCETO HOLDINGS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6470101",
    "descricao": "FUNDOS DE INVESTIMENTO, EXCETO PREVIDENCIÁRIOS E IMOBILIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6470102",
    "descricao": "FUNDOS DE INVESTIMENTO PREVIDENCIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6470103",
    "descricao": "FUNDOS DE INVESTIMENTO IMOBILIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6491300",
    "descricao": "SOCIEDADES DE FOMENTO MERCANTIL - FACTORING",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6492100",
    "descricao": "SECURITIZAÇÃO DE CRÉDITOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499901",
    "descricao": "CLUBES DE INVESTIMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499902",
    "descricao": "SOCIEDADES DE INVESTIMENTO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499903",
    "descricao": "FUNDO GARANTIDOR DE CRÉDITO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499904",
    "descricao": "CAIXAS DE FINANCIAMENTO DE CORPORAÇÕES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499905",
    "descricao": "CONCESSÃO DE CRÉDITO PELAS OSCIP",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6499999",
    "descricao": "OUTRAS ATIVIDADES DE SERVIÇOS FINANCEIROS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6511101",
    "descricao": "SOCIEDADE SEGURADORA DE SEGUROS VIDA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6511102",
    "descricao": "PLANOS DE AUXÍLIO FUNERAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6512000",
    "descricao": "SOCIEDADE SEGURADORA DE SEGUROS NÃO VIDA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6520100",
    "descricao": "SOCIEDADE SEGURADORA DE SEGUROS SAÚDE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6530800",
    "descricao": "RESSEGUROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6541300",
    "descricao": "PREVIDÊNCIA COMPLEMENTAR FECHADA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6542100",
    "descricao": "PREVIDÊNCIA COMPLEMENTAR ABERTA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6611801",
    "descricao": "BOLSA DE VALORES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6611802",
    "descricao": "BOLSA DE MERCADORIAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6611803",
    "descricao": "BOLSA DE MERCADORIAS E FUTUROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6611804",
    "descricao": "ADMINISTRAÇÃO DE MERCADOS DE BALCÃO ORGANIZADOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6612601",
    "descricao": "CORRETORAS DE TÍTULOS E VALORES MOBILIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6612602",
    "descricao": "DISTRIBUIDORAS DE TÍTULOS E VALORES MOBILIÁRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6612603",
    "descricao": "CORRETORAS DE CÂMBIO",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6612604",
    "descricao": "CORRETORAS DE CONTRATOS DE MERCADORIAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6612605",
    "descricao": "AGENTES DE INVESTIMENTOS EM APLICAÇÕES FINANCEIRAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6619301",
    "descricao": "SERVIÇOS DE LIQUIDAÇÃO E CUSTÓDIA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6619303",
    "descricao": "REPRESENTAÇÕES DE BANCOS ESTRANGEIROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6619304",
    "descricao": "CAIXAS ELETRÔNICOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6810202",
    "descricao": "ALUGUEL DE IMÓVEIS PRÓPRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6810203",
    "descricao": "LOTEAMENTO DE IMÓVEIS PRÓPRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6911702",
    "descricao": "ATIVIDADES AUXILIARES DA JUSTIÇA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "6912500",
    "descricao": "CARTÓRIOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "7820500",
    "descricao": "LOCAÇÃO DE MÃO DE OBRA TEMPORÁRIA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "7830200",
    "descricao": "FORNECIMENTO E GESTÃO DE RECURSOS HUMANOS PARA TERCEIROS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8112500",
    "descricao": "CONDOMÍNIOS PREDIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8299704",
    "descricao": "LEILOEIROS INDEPENDENTES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8411600",
    "descricao": "ADMINISTRAÇÃO PÚBLICA EM GERAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8412400",
    "descricao": "REGULAÇÃO DAS ATIVIDADES DE SAÚDE, EDUCAÇÃO, SERVIÇOS CULTURAIS E OUTROS SERVIÇOS SOCIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8413200",
    "descricao": "REGULAÇÃO DAS ATIVIDADES ECONÔMICAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8421300",
    "descricao": "RELAÇÕES EXTERIORES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8422100",
    "descricao": "DEFESA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8423000",
    "descricao": "JUSTIÇA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8424800",
    "descricao": "SEGURANÇA E ORDEM PÚBLICA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8425600",
    "descricao": "DEFESA CIVIL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8430200",
    "descricao": "SEGURIDADE SOCIAL OBRIGATÓRIA",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "8550301",
    "descricao": "ADMINISTRAÇÃO DE CAIXAS ESCOLARES",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9411100",
    "descricao": "ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS PATRONAIS E EMPRESARIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9412001",
    "descricao": "ATIVIDADES DE FISCALIZAÇÃO PROFISSIONAL",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9412099",
    "descricao": "OUTRAS ATIVIDADES ASSOCIATIVAS PROFISSIONAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9420100",
    "descricao": "ATIVIDADES DE ORGANIZAÇÕES SINDICAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9430800",
    "descricao": "ATIVIDADES DE ASSOCIAÇÕES DE DEFESA DE DIREITOS SOCIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9491000",
    "descricao": "ATIVIDADES DE ORGANIZAÇÕES RELIGIOSAS OU FILOSÓFICAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9492800",
    "descricao": "ATIVIDADES DE ORGANIZAÇÕES POLÍTICAS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9493600",
    "descricao": "ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS LIGADAS À CULTURA E À ARTE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9499500",
    "descricao": "ATIVIDADES ASSOCIATIVAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9700500",
    "descricao": "SERVIÇOS DOMÉSTICOS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "9900800",
    "descricao": "ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS",
    "anexoPadrao": null,
    "anexosPossiveis": [],
    "observacao": "nan",
    "permitido": false
  },
  {
    "cnae": "3250706",
    "descricao": "SERVIÇOS DE PRÓTESE DENTÁRIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "3250709",
    "descricao": "SERVIÇO DE LABORATÓRIO ÓPTICO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "6201502",
    "descricao": "WEB DESIGN",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "6202300",
    "descricao": "DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE COMPUTADOR CUSTOMIZÁVEIS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "6203100",
    "descricao": "DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE COMPUTADOR NÃO CUSTOMIZÁVEIS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "6822600",
    "descricao": "GESTÃO E ADMINISTRAÇÃO DA PROPRIEDADE IMOBILIARIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8591100",
    "descricao": "ENSINO DE ESPORTES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8592901",
    "descricao": "ENSINO DE DANÇA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640201",
    "descricao": "LABORATÓRIOS DE ANATOMIA PATOLÓGICA E CITOLÓGICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640202",
    "descricao": "LABORATÓRIOS CLÍNICOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640204",
    "descricao": "SERVIÇOS DE TOMOGRAFIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640205",
    "descricao": "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM COM USO DE RADIAÇÃO IONIZANTE, EXCETO TOMOGRAFIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640206",
    "descricao": "SERVIÇOS DE RESSONÂNCIA MAGNÉTICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640207",
    "descricao": "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM SEM USO DE RADIAÇÃO IONIZANTE, EXCETO RESSONÂNCIA MAGNÉTICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640208",
    "descricao": "SERVIÇOS DE DIAGNÓSTICO POR REGISTRO GRÁFICO - ECG, EEG E OUTROS EXAMES ANÁLOGOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "8640209",
    "descricao": "SERVIÇOS DE DIAGNÓSTICO POR MÉTODOS ÓPTICOS - ENDOSCOPIA E OUTROS EXAMES ANÁLOGOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "9313100",
    "descricao": "ATIVIDADES DE CONDICIONAMENTO FÍSICO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, apenas anexo 5",
    "permitido": true
  },
  {
    "cnae": "3600601",
    "descricao": "CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "3701100",
    "descricao": "GESTÃO DE REDES DE ESGOTO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "3821100",
    "descricao": "TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS NÃO PERIGOSOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "3822000",
    "descricao": "TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS PERIGOSOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "3900500",
    "descricao": "DESCONTAMINAÇÃO E OUTROS SERVIÇOS DE GESTÃO DE RESÍDUOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4399101",
    "descricao": "ADMINISTRAÇÃO DE OBRAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4512901",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4530706",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE PEÇAS E ACESSÓRIOS NOVOS E USADOS PARA VEÍCULOS AUTOMOTORES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4542101",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MOTOCICLETAS E MOTONETAS, PEÇAS E ACESSÓRIOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4611700",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MATÉRIAS PRIMAS AGRÍCOLAS E ANIMAIS VIVOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4612500",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE COMBUSTÍVEIS, MINERAIS, PRODUTOS SIDERÚRGICOS E QUÍMICOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4613300",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MADEIRA, MATERIAL DE CONSTRUÇÃO E FERRAGENS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4614100",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MÁQUINAS, EQUIPAMENTOS, EMBARCAÇÕES E AERONAVES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4615000",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE ELETRODOMÉSTICOS, MÓVEIS E ARTIGOS DE USO DOMÉSTICO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4616800",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE TÊXTEIS, VESTUÁRIO, CALÇADOS E ARTIGOS DE VIAGEM",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4617600",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE PRODUTOS ALIMENTÍCIOS, BEBIDAS E FUMO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4618401",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MEDICAMENTOS, COSMÉTICOS E PRODUTOS DE PERFUMARIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4618402",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE INSTRUMENTOS E MATERIAIS ODONTO MÉDICO HOSPITALARES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4618403",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE JORNAIS, REVISTAS E OUTRAS PUBLICAÇÕES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4618499",
    "descricao": "OUTROS REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO ESPECIALIZADO EM PRODUTOS NÃO ESPECIFICADOS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "4619200",
    "descricao": "REPRESENTANTES COMERCIAIS E AGENTES DO COMÉRCIO DE MERCADORIAS EM GERAL NÃO ESPECIALIZADO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5222200",
    "descricao": "TERMINAIS RODOVIÁRIOS E FERROVIÁRIOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5231101",
    "descricao": "ADMINISTRAÇÃO DA INFRAESTRUTURA PORTUÁRIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5231103",
    "descricao": "GESTÃO DE TERMINAIS AQUAVIÁRIOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5232000",
    "descricao": "ATIVIDADES DE AGENCIAMENTO MARÍTIMO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5240101",
    "descricao": "OPERAÇÃO DOS AEROPORTOS E CAMPOS DE ATERRISSAGEM",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5250801",
    "descricao": "COMISSARIA DE DESPACHOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5250802",
    "descricao": "ATIVIDADES DE DESPACHANTES ADUANEIROS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5250803",
    "descricao": "AGENCIAMENTO DE CARGAS, EXCETO PARA O TRANSPORTE MARÍTIMO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5250804",
    "descricao": "ORGANIZAÇÃO LOGÍSTICA DO TRANSPORTE DE CARGA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "5250805",
    "descricao": "OPERADOR DE TRANSPORTE MULTIMODAL - OTM",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6022502",
    "descricao": "ATIVIDADES RELACIONADAS À TELEVISÃO POR ASSINATURA, EXCETO PROGRAMADORAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6204000",
    "descricao": "CONSULTORIA EM TECNOLOGIA DA INFORMAÇÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6493000",
    "descricao": "ADMINISTRAÇÃO DE CONSÓRCIOS PARA AQUISIÇÃO DE BENS E DIREITOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6550200",
    "descricao": "PLANOS DE SAÚDE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6613400",
    "descricao": "ADMINISTRAÇÃO DE CARTÕES DE CRÉDITO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6619305",
    "descricao": "OPERADORAS DE CARTÕES DE DÉBITO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6619399",
    "descricao": "OUTRAS ATIVIDADES AUXILIARES DOS SERVIÇOS FINANCEIROS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6621501",
    "descricao": "PERITOS E AVALIADORES DE SEGUROS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6621502",
    "descricao": "AUDITORIA E CONSULTORIA ATUARIAL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6629100",
    "descricao": "ATIVIDADES AUXILIARES DOS SEGUROS, DA PREVIDÊNCIA COMPLEMENTAR E DOS PLANOS DE SAÚDE NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6630400",
    "descricao": "ATIVIDADES DE ADMINISTRAÇÃO DE FUNDOS POR CONTRATO OU COMISSÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6911703",
    "descricao": "AGENTE DE PROPRIEDADE INDUSTRIAL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "6920602",
    "descricao": "ATIVIDADES DE CONSULTORIA E AUDITORIA CONTÁBIL E TRIBUTÁRIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7020400",
    "descricao": "ATIVIDADES DE CONSULTORIA EM GESTÃO EMPRESARIAL, EXCETO CONSULTORIA TÉCNICA ESPECÍFICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7111100",
    "descricao": "SERVIÇOS DE ARQUITETURA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7112000",
    "descricao": "SERVIÇOS DE ENGENHARIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7119701",
    "descricao": "SERVIÇOS DE CARTOGRAFIA, TOPOGRAFIA E GEODÉSIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7119702",
    "descricao": "ATIVIDADES DE ESTUDOS GEOLÓGICOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7119703",
    "descricao": "SERVIÇOS DE DESENHO TÉCNICO RELACIONADOS À ARQUITETURA E ENGENHARIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7119704",
    "descricao": "SERVIÇOS DE PERÍCIA TÉCNICA RELACIONADOS À SEGURANÇA DO TRABALHO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7119799",
    "descricao": "ATIVIDADES TÉCNICAS RELACIONADAS À ENGENHARIA E ARQUITETURA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7120100",
    "descricao": "TESTES E ANÁLISES TÉCNICAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7210000",
    "descricao": "PESQUISA E DESENVOLVIMENTO EXPERIMENTAL EM CIÊNCIAS FÍSICAS E NATURAIS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7220700",
    "descricao": "PESQUISA E DESENVOLVIMENTO EXPERIMENTAL EM CIÊNCIAS SOCIAIS E HUMANAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7311400",
    "descricao": "AGÊNCIAS DE PUBLICIDADE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7319001",
    "descricao": "CRIAÇÃO ESTANDES PARA FEIRAS E EXPOSIÇÕES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7319004",
    "descricao": "CONSULTORIA EM PUBLICIDADE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7320300",
    "descricao": "PESQUISAS DE MERCADO E DE OPINIÃO PÚBLICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7410203",
    "descricao": "DESIGN DE PRODUTO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7410299",
    "descricao": "ATIVIDADES DE DESIGN NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7490101",
    "descricao": "SERVIÇOS DE TRADUÇÃO, INTERPRETAÇÃO E SIMILARES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7490103",
    "descricao": "SERVIÇOS DE AGRONOMIA E DE CONSULTORIA ÀS ATIVIDADES AGRÍCOLAS E PECUÁRIAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7490104",
    "descricao": "ATIVIDADES DE INTERMEDIAÇÃO E AGENCIAMENTO DE SERVIÇOS E NEGÓCIOS EM GERAL, EXCETO IMOBILIÁRIOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7490105",
    "descricao": "AGENCIAMENTO DE PROFISSIONAIS PARA ATIVIDADES ESPORTIVAS, CULTURAIS E ARTÍSTICAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7490199",
    "descricao": "OUTRAS ATIVIDADES PROFISSIONAIS, CIENTÍFICAS E TÉCNICAS NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7500100",
    "descricao": "ATIVIDADES VETERINÁRIAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7740300",
    "descricao": "GESTÃO DE ATIVOS INTANGÍVEIS NÃO FINANCEIROS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "7810800",
    "descricao": "SELEÇÃO E AGENCIAMENTO DE MÃO DE OBRA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8030700",
    "descricao": "ATIVIDADES DE INVESTIGAÇÃO PARTICULAR",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8299702",
    "descricao": "EMISSÃO DE VALES ALIMENTAÇÃO, VALES TRANSPORTE E SIMILARES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8299705",
    "descricao": "SERVIÇOS DE LEVANTAMENTO DE FUNDOS SOB CONTRATO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8531700",
    "descricao": "EDUCAÇÃO SUPERIOR - GRADUAÇÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8532500",
    "descricao": "EDUCAÇÃO SUPERIOR - GRADUAÇÃO E PÓS GRADUAÇÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8533300",
    "descricao": "EDUCAÇÃO SUPERIOR - PÓS GRADUAÇÃO E EXTENSÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8542200",
    "descricao": "EDUCAÇÃO PROFISSIONAL DE NÍVEL TECNOLÓGICO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8550302",
    "descricao": "ATIVIDADES DE APOIO À EDUCAÇÃO, EXCETO CAIXAS ESCOLARES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8610101",
    "descricao": "ATIVIDADES DE ATENDIMENTO HOSPITALAR, EXCETO PRONTO SOCORRO E UNIDADES PARA ATENDIMENTO A URGÊNCIAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8610102",
    "descricao": "ATIVIDADES DE ATENDIMENTO EM PRONTO SOCORRO E UNIDADES HOSPITALARES PARA ATENDIMENTO A URGÊNCIAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8621601",
    "descricao": "UTI MÓVEL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8621602",
    "descricao": "SERVIÇOS MÓVEIS DE ATENDIMENTO A URGÊNCIAS, EXCETO POR UTI MÓVEL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630501",
    "descricao": "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE PROCEDIMENTOS CIRÚRGICOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630502",
    "descricao": "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE EXAMES COMPLEMENTARES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630503",
    "descricao": "ATIVIDADE MÉDICA AMBULATORIAL RESTRITA A CONSULTAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630504",
    "descricao": "ATIVIDADE ODONTOLÓGICA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630506",
    "descricao": "SERVIÇOS DE VACINAÇÃO E IMUNIZAÇÃO HUMANA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630507",
    "descricao": "ATIVIDADES DE REPRODUÇÃO HUMANA ASSISTIDA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8630599",
    "descricao": "ATIVIDADES DE ATENÇÃO AMBULATORIAL NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640203",
    "descricao": "SERVIÇOS DE DIÁLISE E NEFROLOGIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640210",
    "descricao": "SERVIÇOS DE QUIMIOTERAPIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640211",
    "descricao": "SERVIÇOS DE RADIOTERAPIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640212",
    "descricao": "SERVIÇOS DE HEMOTERAPIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640213",
    "descricao": "SERVIÇOS DE LITOTRIPCIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640214",
    "descricao": "SERVIÇOS DE BANCOS DE CÉLULAS E TECIDOS HUMANOS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8640299",
    "descricao": "ATIVIDADES DE SERVIÇOS DE COMPLEMENTAÇÃO DIAGNÓSTICA E TERAPÊUTICA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650001",
    "descricao": "ATIVIDADES DE ENFERMAGEM",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650002",
    "descricao": "ATIVIDADES DE PROFISSIONAIS DA NUTRIÇÃO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650003",
    "descricao": "ATIVIDADES DE PSICOLOGIA E PSICANÁLISE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650005",
    "descricao": "ATIVIDADES DE TERAPIA OCUPACIONAL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650006",
    "descricao": "ATIVIDADES DE FONOAUDIOLOGIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650007",
    "descricao": "ATIVIDADES DE TERAPIA DE NUTRIÇÃO ENTERAL E PARENTERAL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8650099",
    "descricao": "ATIVIDADES DE PROFISSIONAIS DA ÁREA DE SAÚDE NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8660700",
    "descricao": "ATIVIDADES DE APOIO À GESTÃO DE SAÚDE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8690901",
    "descricao": "ATIVIDADES DE PRÁTICAS INTEGRATIVAS E COMPLEMENTARES EM SAÚDE HUMANA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8690902",
    "descricao": "ATIVIDADES DE BANCO DE LEITE HUMANO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8690903",
    "descricao": "ATIVIDADES DE ACUPUNTURA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8690904",
    "descricao": "ATIVIDADES DE PODOLOGIA",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8690999",
    "descricao": "OUTRAS ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8711501",
    "descricao": "CLÍNICAS E RESIDÊNCIAS GERIÁTRICAS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8711503",
    "descricao": "ATIVIDADES DE ASSISTÊNCIA A DEFICIENTES FÍSICOS, IMUNODEPRIMIDOS E CONVALESCENTES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8711504",
    "descricao": "CENTROS DE APOIO A PACIENTES COM CÂNCER E COM AIDS",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8720401",
    "descricao": "ATIVIDADES DE CENTROS DE ASSISTÊNCIA PSICOSSOCIAL",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8720499",
    "descricao": "ATIVIDADES DE ASSISTÊNCIA PSICOSSOCIAL E À SAÚDE A PORTADORES DE DISTÚRBIOS PSÍQUICOS, DEFICIÊNCIA MENTAL E DEPENDÊNCIA QUÍMICA E GRUPOS SIMILARES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8730199",
    "descricao": "ATIVIDADES DE ASSISTÊNCIA SOCIAL PRESTADAS EM RESIDÊNCIAS COLETIVAS E PARTICULARES NÃO ESPECIFICADAS ANTERIORMENTE",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "8800600",
    "descricao": "SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  },
  {
    "cnae": "9002701",
    "descricao": "ATIVIDADES DE ARTISTAS PLÁSTICOS, JORNALISTAS INDEPENDENTES E ESCRITORES",
    "anexoPadrao": 5,
    "anexosPossiveis": [
      5
    ],
    "observacao": "Validado, anexo VI passa a ser V",
    "permitido": true
  }
] satisfies CnaeSimples[];
