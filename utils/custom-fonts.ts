import localFont from "next/font/local";

const ROBOTO_REGULAR = localFont({
  src: [
    {
      path: "../../public/fonts/roboto-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto-bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--ROBOTO_REGULAR",
});

export { ROBOTO_REGULAR };
