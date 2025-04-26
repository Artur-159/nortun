"use client";

import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BESTSELLERS_DATA } from "@/constants/home";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const BestSellers = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideClick = (index: number): void => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className={styles.bestSellers}>
      <h3 className={styles.bestSellers__title}>Ամենաշատ վաճառվածները</h3>
      <div className={styles.bestSellers__slider}>
        <Swiper
          onInit={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: `.${styles["slider_btn-next"]}`,
            prevEl: `.${styles["slider_btn-prev"]}`,
          }}
          loop
          modules={[Navigation]}
          className={styles.slider}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={50}
        >
          {BESTSELLERS_DATA.map((category, index) => (
            <SwiperSlide
              key={category}
              className={styles.slide}
              onClick={() => handleSlideClick(index)}
            >
              <div>{category}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles["slider_btn-prev"]}>
          <Icon name="slider-arrow-blue" />
        </div>
        <div className={styles["slider_btn-next"]}>
          <Icon name="slider-arrow-blue" />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
