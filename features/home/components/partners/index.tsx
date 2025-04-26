import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PARTNERS_SLIDER_DATA, PARTNERS_SLIDER_MEDIA } from "@/constants/home";
import HomeSliderArrows from "@/components/home-slider-arrows";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

const Partners = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Մեր գործընկերները</h2>
      <Swiper
        loop
        speed={1500}
        slidesPerView={3}
        breakpoints={PARTNERS_SLIDER_MEDIA}
        navigation={{
          nextEl: `.partners_btn-next`,
          prevEl: `.partners_btn-prev`,
        }}
        className={styles.slider}
        modules={[Navigation]}
      >
        {PARTNERS_SLIDER_DATA.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slide_overlay}>
              <div className={styles.inner_block}>
                <div className={styles.top_block}>
                  <Image
                    alt={slide.alt}
                    src={slide.product_logo}
                    width={175}
                    height={54}
                  />
                </div>
                <div className={styles.bottom_block}>
                  {slide.product_images.map((image, index) => (
                    <div className={styles.img_block} key={index}>
                      <Image
                        key={index}
                        alt={slide.alt}
                        src={image}
                        width={87}
                        height={85}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.slide_link}>
                  <Link href={slide.link}>Տեսնել բոլոր ապրանքները</Link>
                  <Icon name="link-arrow" width={9} height={16} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HomeSliderArrows
        nextBtnClassname="partners_btn-next"
        prevBtnClassname="partners_btn-prev"
      />
    </div>
  );
};

export default Partners;
