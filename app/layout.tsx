import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import { mardoto } from "@/utils/fonts";

import "../styles/globals.scss";
import "swiper/css/navigation";
import "swiper/css";

export const metadata: Metadata = {
  title: "Շինանյութի խոշոր ցանց - Նոր Տուն",
  description:
    "Վերանորուգումը շահավետ է Նոր Տանը։ Մենք կգոհացնենք նույնիսկ ամենաքմահաճ հաճախորդին։",
  keywords: "շինանյութ, կահույք",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${mardoto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
