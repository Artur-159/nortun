type FooterItem = {
  name: string;
  href: string;
};

type FooterIcon = {
  title: string;
  src: string;
};

type FooterSection = {
  items?: FooterItem[];
  icons?: FooterIcon[];
  privacy_text?: string;
};

type BottomFooterItem = {
  src: string;
  number?: string;
};

type BottomFooterData = BottomFooterItem[];

type FooterBottomData = {
  src: string;
  number?: string;
  platform?: string;
};

export const FOOTER_DATA: FooterSection[] = [
  {
    items: [
      { name: "Մեր մասին", href: "/about" },
      { name: "Խանութ-սրահներ", href: "" },
      { name: "Սպասարկման բաժին", href: "" },
      { name: "Կապ", href: "" },
    ],
  },
  {
    items: [
      { name: "Դառնալ գործընկեր", href: "" },
      { name: "Թափուր աշխատատեղեր", href: "" },
      { name: "Հետվերադարձի պայմաններ", href: "" },
      { name: "Գաղտնիության Քաղաքականություն", href: "" },
    ],
  },
  {
    items: [
      { name: "Առաքման պայմաններ", href: "" },
      { name: "Ապառիկի պայմաններ", href: "" },
      { name: "Նորություններ", href: "" },
      { name: "Ֆինանսական հաշվետվություն", href: "" },
    ],
  },
  {
    icons: [
      {
        title: "image",
        src: "/images/footer_img1.png",
      },
      {
        title: "image",
        src: "/images/footer_img2.png",
      },
      {
        title: "image",
        src: "/images/footer_img3.png",
      },
      {
        title: "image",
        src: "/images/paylater.svg",
      },
      {
        title: "image",
        src: "/images/idram.webp",
      },
      {
        title: "image",
        src: "/images/telcel.webp",
      },
    ],
    privacy_text: "© Նոր տուն 2025 | Բոլոր իրավունքները պաշտպանված են",
  },
];

export const BOTTOM_FOOTER_DATA: FooterBottomData[] = [
  { src: "phone-black", number: "+374 11 71 71 11" },
  { src: "facebook" },
  { src: "youtube" },
  { src: "instagram" },
];

export type {
  FooterItem,
  FooterIcon,
  FooterSection,
  BottomFooterItem,
  BottomFooterData,
  FooterBottomData,
};
