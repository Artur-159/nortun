import localFont from "next/font/local";

export const mardoto = localFont({
  src: [
    {
      path: "../../public/fonts/Mardoto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mardoto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mardoto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Mardoto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--Mardoto",
});
