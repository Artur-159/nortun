import Link from "next/link";
import Image from "next/image";
import { JSX, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import HomeSliderArrows from "@/components/home-slider-arrows";
import {
  TOP_CATEGORIES_SLIDER_MEDIA,
  TOP_CATEGORIES_DATA,
} from "@/constants/home";
import { SIDEBAR_DATA, TOP_CATEGORIES_MOBILE_DATA } from "@/constants/sidebar";
import Icon from "@/components/icon";

import styles from "./styles.module.scss";

interface TopCategoriesProps {
  title: string;
}

const TopCategories = ({ title }: TopCategoriesProps): JSX.Element => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const visibleItems = showAll
    ? TOP_CATEGORIES_MOBILE_DATA
    : TOP_CATEGORIES_MOBILE_DATA.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.slider_title}>{title}</div>
      <Swiper
        speed={2000}
        slidesPerGroup={2}
        loop
        breakpoints={TOP_CATEGORIES_SLIDER_MEDIA}
        slidesPerView={4}
        navigation={{
          nextEl: `.categories_btn-next`,
          prevEl: `.categories_btn-prev`,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.slider}
        modules={[Autoplay, Navigation]}
      >
        {TOP_CATEGORIES_DATA.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.image_container}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.slide_img}
              />
            </div>
            <p className={styles.slide_title}>{slide.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <HomeSliderArrows
        nextBtnClassname="categories_btn-next"
        prevBtnClassname="categories_btn-prev"
      />
      <ul className={styles.mobile_menu}>
        {visibleItems.map((item, i) => {
          return (
            <li
              key={i}
              className={`${styles.menu_item} ${
                showAll ? styles.show : styles.hide
              }`}
            >
              <Link href={item}>
                {SIDEBAR_DATA[i].icon_name && (
                  <Icon
                    width={32}
                    height={32}
                    name={SIDEBAR_DATA[i].icon_name}
                    className={styles.icon}
                  />
                )}
                {SIDEBAR_DATA[i].name}
                <Icon name="slider-arrow-blue" className={styles.item_icon} />
              </Link>
            </li>
          );
        })}
      </ul>
      <button className={styles.show_btn} onClick={handleToggle}>
        {showAll ? "Թաքցնել" : "Ծանոթանալ բոլորին"}
      </button>
    </div>
  );
};

export default TopCategories;
