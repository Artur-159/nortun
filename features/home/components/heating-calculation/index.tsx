import Image from "next/image";
import CalculationForm from "@/components/calculation-form";

import styles from "./styles.module.scss";
const HeatingCalculation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ստացեք անվճար ջեռուցման հաշվարկ</h2>
      <div className={styles.calculation_block}>
        <div className={styles.left_block}>
          <Image
            src="/images/calculation_image.png"
            alt="image"
            width={620}
            height={642}
            className={styles.calculation_img}
          />
          <Image
            src="/images/sticker.png"
            alt="image"
            width={70}
            height={70}
            className={styles.sticker}
          />
          <span className={styles.info_text}>
            Արի՛ հաշվարկենք քո ջեռուցման արժեքը
          </span>
        </div>
        <div className={styles.right_block}>
          <CalculationForm />
        </div>
      </div>
    </div>
  );
};

export default HeatingCalculation;
