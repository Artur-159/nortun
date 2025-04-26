"use client";

import { JSX, useEffect, useState } from "react";
import clsx from "clsx";
//import SliderArrow from "../../../public/icons/SliderArrow";

import styles from "./styles.module.scss";

const ScrollToTop = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = (): void => {
    const scrollPosition = window.scrollY;
    const isScrollPositionVisible = scrollPosition > 500;
    setIsVisible(isScrollPositionVisible);
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={clsx(styles.scrollToTop, { [styles.visible]: isVisible })}
    >
      {/* <SliderArrow /> */}
    </button>
  );
};

export default ScrollToTop;
