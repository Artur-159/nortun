interface LangOption {
  id: number;
  value: string;
}

export const LANG_OPTIONS: LangOption[] = [
  {
    id: 1,
    value: "HY",
  },
  {
    id: 2,
    value: "RU",
  },
  {
    id: 3,
    value: "EN",
  },
];

export type { LangOption };
