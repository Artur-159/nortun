import Image from "next/image";
import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BANNER_DATA } from "@/constants/home";

import styles from "./styles.module.scss";

const Banner = (): JSX.Element => {
  return (
    <div>
      <Swiper
        speed={2500}
        loop
        navigation={{
          nextEl: `.${styles["slider_btn-next"]}`,
          prevEl: `.${styles["slider_btn-prev"]}`,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.slider}
        modules={[Autoplay, Navigation]}
      >
        {BANNER_DATA.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide_overlay} />
            <Image
              fill
              quality={100}
              alt={slide.alt}
              src={slide.image}
              className={styles.slide_img}
            />
            <div className={styles.slide_content}>
              <button>Իմանալ ավելին</button>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.slider_btns}>
          <div className={styles["slider_btn-prev"]} />
          <div className={styles["slider_btn-next"]} />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
