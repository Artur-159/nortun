import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Timer from "./components";
import { PROFITABLE_OFFER_SLIDER_DATA } from "@/constants/home";
import HomeSliderArrows from "@/components/home-slider-arrows";
import { useWindowSize } from "@/hooks/useWindowSize";

import styles from "./styles.module.scss";

const ProfitableOffer = () => {
  const isMobile = useWindowSize(768);

  return (
    <div className={styles.slider_wrapper}>
      <h2>Շահավետ առաջարկ</h2>
      <Swiper
        speed={2000}
        loop
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: `.offer-slider-arrow-next`,
          prevEl: `.offer-slider-arrow-prev`,
        }}
        className={styles.slider}
      >
        {PROFITABLE_OFFER_SLIDER_DATA.map((item, i) => (
          <SwiperSlide className={styles.slide} key={i}>
            <div className={styles.left_block}>
              <div className={styles.inner_block}>
                {isMobile && (
                  <Timer targetDate={new Date("2025-12-31T23:59:59")} />
                )}
                <div className={styles.block_title}>{item.title}</div>
                <div className={styles.block_description}>
                  {item.description}
                </div>
                <button className={styles.show_btn}>Տեսնել ավելին</button>
              </div>
            </div>
            <div className={styles.right_block}>
              <Image
                width={620}
                height={529}
                alt="profitable offer"
                src="https://nortun.am/upload/resize_cache/webp/upload/iblock/f54/r3op77xrrhmstvy5rpvhi4qnwzq118c3.webp"
              />
              <Timer targetDate={new Date("2025-12-31T23:59:59")} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HomeSliderArrows
        prevBtnClassname="offer-slider-arrow-prev"
        nextBtnClassname="offer-slider-arrow-next"
      />
    </div>
  );
};

export default ProfitableOffer;
