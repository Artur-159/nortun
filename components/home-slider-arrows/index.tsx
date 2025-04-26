import { JSX } from "react";
import clsx from "clsx";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

interface HomeSliderArrowsProps {
  nextBtnClassname?: string;
  prevBtnClassname?: string;
}

const HomeSliderArrows = ({
  nextBtnClassname,
  prevBtnClassname,
}: HomeSliderArrowsProps): JSX.Element => (
  <>
    {["prev", "next"].map((direction) => (
      <div
        key={direction}
        className={clsx(
          styles[`slider_btn-${direction}`],
          direction === "prev" ? prevBtnClassname : nextBtnClassname
        )}
      >
        <Icon name="slider-arrow-blue" />
      </div>
    ))}
  </>
);

export default HomeSliderArrows;
