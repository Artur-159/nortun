type Slide = {
  image: string;
  alt: string;
};

type CategorySlide = {
  image: string;
  title: string;
};

type ProfitableSliderData = {
  title: string;
  description: string;
};

interface SliderMediaConfig {
  slidesPerView: number;
  spaceBetween: number;
  centeredSlides?: boolean;
}

interface ScheduleItem {
  workingText: string;
  mainWorkingDays: string;
  mainWorkingHours: string;
  sundayAvailability: string;
  sundayWorkingHours: string;
  extendedWorkingDays: string;
  extendedWorkingHours: string;
  extendedSundayAvailability: string;
  extendedSundayWorkingHours: string;
  address: string;
  icon_name?: string;
}

interface AvailableBlockData {
  schedule: ScheduleItem[];
}

interface AvailableImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PartnersSliderData {
  product_logo: string;
  alt: string;
  link: string;
  product_images: string[];
}

interface PartnersSliderMedia {
  slidesPerView: number;
  spaceBetween: number;
  centeredSlides?: boolean;
}

interface StatisticData {
  counter: number;
  title: string;
  description: string;
}

interface StoresData {
  image: string;
  address: string;
  phone: string;
  workingDays: string;
}

export type BestsellerCategory = (typeof BESTSELLERS_DATA)[number];

export const BANNER_DATA: Slide[] = [
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/27e/8gsevttw60nzw68g1niccr4ic0grfd6c.webp",
    alt: "banner",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/e1e/d0hqb411aur5s88k3rs7vhjom41h2qo6.webp",
    alt: "banner",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/0f1/5rphq77hi256l7lfd7tl1930fic981un.webp",
    alt: "banner",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/73d/vbyhp1m2vopxrhzb3dey97dfzc7wffr0.webp",
    alt: "banner",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/iblock/2a9/r7lo9wzuphqnaqu02i31vwrxyhtogxyu.webp",
    alt: "banner",
  },
];

export const TOP_CATEGORIES_DATA: CategorySlide[] = [
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/7db/ofmge758ybci4poqxs4t3mrfcdviskl8.webp",
    title: "Դռներ",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/810/7vxf032h8z360cb0mz0beu2hsvxdc889.webp",
    title: "Լամինատե հատակներ",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/1d4/20e693amvbaqzyu83zovmsa1d9nr6rk5.webp",
    title: "Սանկերամիկա",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/iblock/f6a/6cadkbdqgvw9d6pwqlmj0b91as8rw5j6.webp",
    title: "Ծորակներ և ցնցուղներ",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/dac/l73st8udwt7yxjdrx66g59q19yte7q69.webp",
    title: "Դռներ",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/iblock/f6a/6cadkbdqgvw9d6pwqlmj0b91as8rw5j6.webp",
    title: "Լամինատե հատակներ",
  },
];

export const TOP_CATEGORIES_SLIDER_MEDIA: Record<number, SliderMediaConfig> = {
  620: {
    slidesPerView: 2,
    spaceBetween: 0,
  },

  758: {
    slidesPerView: 2.5,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 0,
  },
  1200: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1620: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

export const PROFITABLE_OFFER_SLIDER_DATA: ProfitableSliderData[] = [
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
  {
    title: "Գնեք 2 նույնատեսակ ապրանք և ստացեք 3րդը անվճար",
    description:
      "Սպասարկման  կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը:",
  },
];

export const AVAILABLE_BLOCK_DATA: AvailableBlockData = {
  schedule: [
    {
      workingText: "Մասնաճյուղերի մեծ մասը աշխատում է",
      mainWorkingDays: "Երկուշաբթի - Շաբաթ",
      mainWorkingHours: "10:00 - 19:00",
      sundayAvailability: "Կիրակի",
      sundayWorkingHours: "10:00 - 18:00",
      address: "Դավիթ Անհաղթի 21 մասնաճյուղը աշխատում է երկարացված ռեժիմով",
      icon_name: "available_location",
      extendedWorkingDays: "Երկուշաբթի - Շաբաթ",
      extendedWorkingHours: "10:00 - 21:00",
      extendedSundayAvailability: "Կիրակի",
      extendedSundayWorkingHours: "10:00 - 20:00",
    },
  ],
};

export const AVAILABLE_IMAGES_DATA: AvailableImageData[] = [
  {
    src: "https://nortun.am/upload/resize_cache/webp/iblock/36d/0ev282gsgax5wg0a41g1bes3h30tegec.webp",
    alt: "image",
    width: 306,
    height: 185,
  },
  {
    src: "",
    alt: "image",
    width: 306,
    height: 375,
  },
  {
    src: "https://nortun.am/upload/resize_cache/webp/iblock/6b2/ur5bzhbkjvukuv4tdiye3wc22rmmrsmb.webp",
    alt: "image",
    width: 306,
    height: 375,
  },

  {
    src: "https://nortun.am/upload/iblock/2ba/9gw5kamfoue8mdl5ns576atxxvvf9m1c.webp",
    alt: "image",
    width: 306,
    height: 204,
  },
];

export const AVAILABLE_DECS: string =
  "Սպասարկման կենտրոնի մասնագետները կառաջարկեն Ձեր բնակարանին համապատասխան օպտիմալ և յուրօրինակ լուծումներ: Աշխատանքները իրականացվում են ամենասեղմ ժամկետներում, քանի որ մենք թանկ ենք գնահատում պատվիրատուի ժամանակը, իսկ մոնտաժման բոլոր աշխատանքների համար կատարվում է երաշխիքային և հետերաշխիքային սպասարկում:";

export const ABSOLUTE_BLOCK_DATA: string[] = [
  "https://nortun.am/upload/iblock/73a/ezug4dgmtlq8n77zadfskqermzl69izh.svg",
  "https://nortun.am/upload/iblock/2c9/zr0me9yomribmmipfan0hkexcja0jjdz.svg",
  "https://nortun.am/upload/iblock/22c/m6so8euxjl2usq6zv3p9zzppvz0stxjm.svg",
];

export const PARTNERS_SLIDER_DATA: PartnersSliderData[] = [
  {
    product_logo:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/ae3/xplpeoi9rly5npr7l5bstsf4395vp6km.webp",
    alt: "partner",
    link: "#",
    product_images: [
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/92f/bldaes4ze4w1xl243zk94x86t2o0pkg3.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/336/tqzdslqkvurg9pmphu4uk53686ede2e0.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/3f8/5tag0lzma1l6ujpuqyau0j79z9od2x3r.webp",
    ],
  },
  {
    product_logo:
      "https://nortun.am/upload/resize_cache/webp/iblock/928/gzyr34kd1w27ktg1nunnew5kgyf34dvh.webp",
    alt: "partner",
    link: "#",
    product_images: [
      "https://nortun.am/upload/resize_cache/webp/iblock/4e3/jgdoi818nowftsd1nq5iv5xavyo62kta.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/f55/nf9ciscg7injiqr93iw7z86p0qyyswty.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/e7b/uvgwyjp3anhs5jxv0guhhkv3krfgny9r.webp",
    ],
  },
  {
    product_logo:
      "https://nortun.am/upload/resize_cache/webp/iblock/b99/il9spv8kzd0dwuhiusfbdz2fzm7vs8nj.webp",
    alt: "partner",
    link: "#",
    product_images: [
      "https://nortun.am/upload/resize_cache/webp/iblock/4e3/jgdoi818nowftsd1nq5iv5xavyo62kta.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/413/3k4sq7tkixo7abvc5v31udpddksvkpwi.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/d76/evtie26dvh7wrt3obbgku4wctew6jbve.webp",
    ],
  },
  {
    product_logo:
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/ae3/xplpeoi9rly5npr7l5bstsf4395vp6km.webp",
    alt: "partner",
    link: "#",
    product_images: [
      "https://nortun.am/upload/resize_cache/webp/upload/iblock/92f/bldaes4ze4w1xl243zk94x86t2o0pkg3.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/336/tqzdslqkvurg9pmphu4uk53686ede2e0.webp",
      "https://nortun.am/upload/resize_cache/webp/iblock/3f8/5tag0lzma1l6ujpuqyau0j79z9od2x3r.webp",
    ],
  },
];

export const PARTNERS_SLIDER_MEDIA: Record<number, PartnersSliderMedia> = {
  300: {
    slidesPerView: 1,
    spaceBetween: 20,
  },

  500: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },

  650: {
    slidesPerView: 2,
    spaceBetween: 20,
  },

  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  1620: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

export const STATISTICS_BLOCK_DATA: StatisticData[] = [
  {
    counter: 24,
    title: "ժամում",
    description: "Առաքում Երևանում և Հայաստանի տարբեր մարզերում",
  },
  {
    counter: 21,
    title: "խանութ - սրահ",
    description: "խանութ - սրահ",
  },
  {
    counter: 0,
    title: "% ապառիկ",
    description:
      "Մինչև 60 ամսով ապառիկ պայմանագիր ձևակերպելու հնարավորություն ",
  },
];

export const FAMILY_BLOCK_DATA: string[] = [
  "Ավելի քան 20 տարի ՆՈՐ ՏՈւՆԸ շինանյութի շուկայի առաջատարներից է ու հասցրել  է   երջանկացրել  բազմահազար ընտանիքների՝ հանդես գալով  բարձրակարգ շինանյութի ներմուծմամբ:",
  "Այսօր արդեն ՆՈՐ ՏՈւՆԸ ունի 21 խոշոր խանութ-սրահներ Հայաստանի տարբեր հատվածներում ու շարունակում է հասանելի դարձնել շինանյութի աշխարահռչակ  բրենդները  հայ սպառողին:",
  "Մոտ 700 անձից բաղկացած մեր թիմը հստակ քայլերով մեծանում է  ու հաջողություններ գրանցում շնորհիվ մեկ գաղափարախոսության՝ մենք ընտանիք ենք:",
];

export const CALC_FORM_OPTIONS: string[] = ["option 1", "option 2", "option 3"];

export const BESTSELLERS_DATA = [
  "Ջեռուցում",
  "Սանկերամիկա",
  "Խոհանոց",
  "Լուսավորություն",
  "Լամինատե հատակներ",
  "Պաստառներ",
  "Ներկեր",
  "Դռներ",
  "Օդորակիչներ",
  "Կահույք",
  "Սալիկներ",
] as const;

export const STORES_DATA: StoresData[] = [
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/catalog/7a1/5khkd0aggldzupyv6cj2dxf2e14wxsas.webp",
    address: "Երևան, Նար-Դոս 112",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/a1d/szm76lokvsq7yh4f4iccb8lfkabyq5be.webp",
    address: "Երևան, Դ. Բեկ 286/6",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/42e/ekx5q9gru9vk0kqb0dywyfb05b1zf36d.webp",
    address: "Երևան, Սեբաստիա 30",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/023/692zlsajc88tk71av8j95i1jafcznxyt.webp",
    address: "Երևան, Դ. Անհաղթ 21",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/43b/qbg9orhqm65t2agfbqm2m8x90an0p0w0.webp",
    address: "Երևան, Արշակունյաց 57/16",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/3fc/rzu94cv4vt0s9n3eb8kwt0w2dfiw4knq.webp",
    address: "Երևան, Ռոստովյան 69/5",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/54a/4l5r175qz8jenjmdvjvurl3pq7gp52ge.webp",
    address: "Երևան, Վարդանանց 15/8",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/09a/63lhs1v07i7x7t9netfpeemyatxx7icq.webp",
    address: "Վանաձոր, Մոսկովյան 65ա",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/bc4/5txdxdj7rausokh5gmg3nmla7i96pp0g.webp",
    address: "Իջևան, Երևանյան 10",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/e69/8usnvk1kxqx57ff9j8kwuqxnv5gutuhr.webp",
    address: "էջմիածին, Վազգեն Առաջինի 34/1",
    phone: "Հեռ: +374231 2 19 13,  (041) 00 82 11",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/1d7/2y19mf3fnm256l2k63yue61nbcj053wz.webp",
    address: "Աբովյան, Հատիսի 1/12",
    phone: "Հեռ: (041) 00 82 16",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/560/b6vjfzp468ioqk95wv21q4pky0xdlpeb.webp",
    address: "Արտաշատ, Օգոստոսի 23փ. 93/1",
    phone: "Հեռ: +374235 3 22 88, (041) 00 82 10",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/41a/lyxp11euai3qigrrrh8k5v9tt8dn4r8e.webp",
    address: "Աշտարակ, Սիսակյան 13Ա",
    phone: "Հեռ: +374232 4 20 20, (041) 00 82 20",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/a3d/y5xhpbo23q2e6mmin70jcn343rmjcqhu.webp",
    address: "Գյումրի, Շիրակացի 65/1",
    phone: "Հեռ: +374312 9 12 38, (041) 00 82 07",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/7c0/2kj5ud9laltuwq4atm265mv3uc58uzwn.webp",
    address: "Արմավիր, Երևանյան 20/1",
    phone: "Հեռ: +374237 4 41 00, (041) 00 82 17",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/upload/catalog/166/rnht4isoj48rcvtwx8obiiqy2v31r3xg.webp",
    address: "Կապան, Շահումյան 32",
    phone: "Հեռ: (041) 00 82 22",
    workingDays: "Երկ-Շաբ՝ 09:30-19:00, Կիր՝ 10:00-18:00",
  },
  {
    image:
      "https://nortun.am/upload/resize_cache/webp/catalog/c30/v26ajtlbedoz86qg4scckpf49n9xd9zm.webp",
    address: "Սպասարկման կենտրոն (Արին Բերդի 3/9)",
    phone: "Հեռ: (011) 808 000",
    workingDays: "Երկ-Ուրբ՝ 10:00-18:00",
  },
];
