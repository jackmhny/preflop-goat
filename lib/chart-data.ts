export type Position = 'BTN' | 'CO' | 'HJ' | 'LJ' | 'SB' | 'BB';

export type ChartType = 'RFI' | 'IP' | 'OOP' | 'BLINDVBLIND';

export interface ChartItem {
  type: ChartType;
  heroPosition?: Position;
  villainPosition?: Position;
  filename: string;
  title: string;
  description: string;
}

export interface ChartCategory {
  type: ChartType;
  title: string;
  description: string;
  items?: ChartItem[];
}

export const RFI_CHARTS: ChartItem[] = [
  {
    type: 'RFI',
    heroPosition: 'BTN',
    filename: 'RFI_BTN.png',
    title: 'Button RFI',
    description: 'Raise First In from the Button position'
  },
  {
    type: 'RFI',
    heroPosition: 'CO',
    filename: 'RFI_CO.png',
    title: 'Cutoff RFI',
    description: 'Raise First In from the Cutoff position'
  },
  {
    type: 'RFI',
    heroPosition: 'HJ',
    filename: 'RFI_HJ.png',
    title: 'Hijack RFI',
    description: 'Raise First In from the Hijack position'
  },
  {
    type: 'RFI',
    heroPosition: 'LJ',
    filename: 'RFI_LJ.png',
    title: 'Lojack RFI',
    description: 'Raise First In from the Lojack position'
  },
  {
    type: 'RFI',
    heroPosition: 'SB',
    filename: 'RFI_SB.png',
    title: 'Small Blind RFI',
    description: 'Raise First In from the Small Blind position'
  }
];

export const IP_CHARTS: ChartItem[] = [
  {
    type: 'IP',
    heroPosition: 'BTN',
    villainPosition: 'CO',
    filename: 'IP_BTN_CO.png',
    title: 'Button vs Cutoff',
    description: 'Defending in position on the Button vs Cutoff raise'
  },
  {
    type: 'IP',
    heroPosition: 'BTN',
    villainPosition: 'HJ',
    filename: 'IP_BTN_HJ.png',
    title: 'Button vs Hijack',
    description: 'Defending in position on the Button vs Hijack raise'
  },
  {
    type: 'IP',
    heroPosition: 'BTN',
    villainPosition: 'LJ',
    filename: 'IP_BTN_LJ.png',
    title: 'Button vs Lojack',
    description: 'Defending in position on the Button vs Lojack raise'
  },
  {
    type: 'IP',
    heroPosition: 'CO',
    villainPosition: 'HJ',
    filename: 'IP_CO_HJ.png',
    title: 'Cutoff vs Hijack',
    description: 'Defending in position on the Cutoff vs Hijack raise'
  },
  {
    type: 'IP',
    heroPosition: 'CO',
    villainPosition: 'LJ',
    filename: 'IP_CO_JS.png',
    title: 'Cutoff vs Lojack',
    description: 'Defending in position on the Cutoff vs Lojack raise'
  },
  {
    type: 'IP',
    heroPosition: 'HJ',
    villainPosition: 'LJ',
    filename: 'IP_HJ_LJ.png',
    title: 'Hijack vs Lojack',
    description: 'Defending in position on the Hijack vs Lojack raise'
  }
];

export const OOP_CHARTS: ChartItem[] = [
  {
    type: 'OOP',
    heroPosition: 'SB',
    villainPosition: 'BTN',
    filename: 'OOP_SB_BTN.png',
    title: 'SB vs Button',
    description: 'Defending out of position in the Small Blind vs Button raise'
  },
  {
    type: 'OOP',
    heroPosition: 'SB',
    villainPosition: 'CO',
    filename: 'OOP_SB_CO.png',
    title: 'SB vs Cutoff',
    description: 'Defending out of position in the Small Blind vs Cutoff raise'
  },
  {
    type: 'OOP',
    heroPosition: 'SB',
    villainPosition: 'HJ',
    filename: 'OOP_SB_HJ.png',
    title: 'SB vs Hijack',
    description: 'Defending out of position in the Small Blind vs Hijack raise'
  },
  {
    type: 'OOP',
    heroPosition: 'SB',
    villainPosition: 'LJ',
    filename: 'OOP_SB_LJ.png',
    title: 'SB vs Lojack',
    description: 'Defending out of position in the Small Blind vs Lojack raise'
  },
  {
    type: 'OOP',
    heroPosition: 'BB',
    villainPosition: 'BTN',
    filename: 'OOP_BB_BTN.png',
    title: 'BB vs Button',
    description: 'Defending out of position in the Big Blind vs Button raise'
  },
  {
    type: 'OOP',
    heroPosition: 'BB',
    villainPosition: 'CO',
    filename: 'OOP_BB_CO.png',
    title: 'BB vs Cutoff',
    description: 'Defending out of position in the Big Blind vs Cutoff raise'
  },
  {
    type: 'OOP',
    heroPosition: 'BB',
    villainPosition: 'HJ',
    filename: 'OOP_BB_HJ.png',
    title: 'BB vs Hijack',
    description: 'Defending out of position in the Big Blind vs Hijack raise'
  },
  {
    type: 'OOP',
    heroPosition: 'BB',
    villainPosition: 'LJ',
    filename: 'OOP_BB_LJ.png',
    title: 'BB vs Lojack',
    description: 'Defending out of position in the Big Blind vs Lojack raise'
  }
];

export const BLIND_VS_BLIND_CHARTS: ChartItem[] = [
  {
    type: 'BLINDVBLIND',
    heroPosition: 'SB',
    filename: 'SB_STRATEGY.png',
    title: 'SB Strategy',
    description: 'Small Blind vs Big Blind strategy'
  },
  {
    type: 'BLINDVBLIND',
    heroPosition: 'BB',
    villainPosition: 'SB',
    filename: 'BB_VS_SB_RAISE.png',
    title: 'BB vs SB Raise',
    description: 'Big Blind defending vs Small Blind raise'
  },
  {
    type: 'BLINDVBLIND',
    heroPosition: 'BB',
    villainPosition: 'SB',
    filename: 'BB_VS_SB_LIMP.png',
    title: 'BB vs SB Limp',
    description: 'Big Blind vs Small Blind limp'
  }
];

export const CHART_CATEGORIES: ChartCategory[] = [
  {
    type: 'RFI',
    title: 'Raise First In',
    description: 'Opening ranges when no one has entered the pot',
    items: RFI_CHARTS
  },
  {
    type: 'IP',
    title: 'In Position Defense',
    description: 'Defending against raises when you have position',
    items: IP_CHARTS
  },
  {
    type: 'OOP',
    title: 'Out of Position Defense',
    description: 'Defending against raises when you are out of position',
    items: OOP_CHARTS
  },
  {
    type: 'BLINDVBLIND',
    title: 'Blind vs Blind',
    description: 'Playing from the blinds against each other',
    items: BLIND_VS_BLIND_CHARTS
  }
];

export const getAllCharts = (): ChartItem[] => {
  return [
    ...RFI_CHARTS,
    ...IP_CHARTS,
    ...OOP_CHARTS,
    ...BLIND_VS_BLIND_CHARTS
  ];
};

export const getChartByFilename = (filename: string): ChartItem | undefined => {
  return getAllCharts().find(chart => chart.filename === filename);
};