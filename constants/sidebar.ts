type SidebarItem = {
  name: string;
  icon_name: string;
};

type OpeningMenuItem = {
  name: string;
  href: "/";
};

export const SIDEBAR_DATA: SidebarItem[] = [
  {
    name: "Ջեռուցում և հովացում",
    icon_name: "heating",
  },
  {
    name: "Սալիկներ",
    icon_name: "tiles",
  },
  {
    name: "Սանկերամիկա",
    icon_name: "ceramic",
  },
  {
    name: "Ծորակներ և ցնցուղներ",
    icon_name: "faucets",
  },
  {
    name: "Լամինատե հատակներ",
    icon_name: "floors",
  },
  {
    name: "Պաստառներ",
    icon_name: "posters",
  },
  {
    name: "Դռներ",
    icon_name: "doors",
  },
  {
    name: "Ջահեր և էլ. սարքավորումներ",
    icon_name: "chandeliers",
  },
  {
    name: "Խոհանոցային լվացարաններ",
    icon_name: "sinks",
  },
  {
    name: "Ներկեր և գունանյութեր",
    icon_name: "paints",
  },
  {
    name: "Գործիքներ",
    icon_name: "tools",
  },
  {
    name: "Զեղչված",
    icon_name: "discounted",
  },
];

export const TOP_CATEGORIES_MOBILE_DATA: string[] = [
  "/catalog/heating",
  "/catalog/tiles",
  "catalog/laminate_floors/",
  "/catalog/wallpapers/",
  "/catalog/doors/",
  "/catalog/lighting",
  "/catalog/kitchen",
  "/catalog/sanceramics",
  "/catalog/paints/",
  "catalog/air_conditioners/",
  "catalog/tools/",
  "catalog/air_conditioners/",
];

export const OPEN_SIDEBAR_MENU: OpeningMenuItem[] = [
  {
    name: "Տեսնել բոլորը",
    href: "/",
  },
  {
    name: "Մարտկոցներ",
    href: "/",
  },
  {
    name: "Չորանոցներ",
    href: "/",
  },
  {
    name: "Kaldo խողովակներ",
    href: "/",
  },
  {
    name: "Կցամասեր",
    href: "/",
  },
  {
    name: "Փականներ",
    href: "/",
  },
  {
    name: "Դռներ",
    href: "/",
  },
  {
    name: "Ջահեր և էլ. սարքավորումներ",
    href: "/",
  },
  {
    name: "Դռներ",
    href: "/",
  },
  {
    name: "Ջահեր և էլ. սարքավորումներ",
    href: "/",
  },
];
