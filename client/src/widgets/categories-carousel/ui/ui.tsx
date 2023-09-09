'use client';

import classNames from 'classnames';
import { useState } from 'react';
import SwiperClass from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';

import { CategoryCard } from '@/entities/category/ui/category-card';
import { Slider } from '@/shared/ui';

import { categories } from '../config';

import styles from './styles.module.scss';

export const CategoriesCarousel = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isCenter, setIsCenter] = useState<boolean>(false);

  const slideChange = (swiper: SwiperClass) => {
    setIsStart(swiper.isEnd);
    setIsCenter(!swiper.isEnd && swiper.activeIndex > 0);
  };

  return (
    <section
      className={classNames(styles.section, {
        [styles.isStart]: isStart,
        [styles.isCenter]: isCenter,
      })}
    >
      <div className="container">
        <Slider
          modules={[Mousewheel, FreeMode]}
          navigation={false}
          slidesData={categories}
          Card={CategoryCard}
          slideClassName={styles.slide}
          swiperClassName={styles.carousel}
          onSlideChange={slideChange}
          onSliderMove={slideChange}
          mousewheel
          freeMode
        />
      </div>
    </section>
  );
};
