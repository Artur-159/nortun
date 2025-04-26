type MenuItem = {
  title: string;
  url?: string;
  href?: string;
  icon?: string;
  position?: "right" | "left";
};

type HeaderBottomData = unknown[];

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "Շահավետ առաջարկ",
    url: "/",
  },
  {
    title: "Նորություններ",
    url: "/",
  },
  {
    title: "Ջեռուցման հաշվարկ",
    url: "/",
  },
  {
    title: "Կապ մեզ հետ",
    url: "/",
    position: "right",
  },
  {
    title: "Դառնալ գործընկեր",
    url: "/",
  },
  {
    title: "Խանութ-սրահներ",
    url: "/",
    icon: "location",
  },
  {
    title: "+374 11 71 71 11",
    href: "tel:+374 11 71 71 11",
    icon: "phone",
  },
];

type HeaderBottomItem = {
  icon_src: string;
  className?: string;
};

export const HEADER_BOTTOM_DATA: HeaderBottomItem[] = [
  {
    icon_src: "favorite",
  },
  {
    icon_src: "cart",
  },
  {
    icon_src: "close",
    className: "close_icon",
  },
];

export type { MenuItem, HeaderBottomData };
