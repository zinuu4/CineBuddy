'use client';

import React from 'react';

import { PersonCard } from '@/entities/person/ui/person-card';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

interface IActorsSliderProps {
  // eslint-disable-next-line
  data: any;
}

export const PersonsSlider: React.FC<IActorsSliderProps> = ({ data }) => (
  <Slider
    slidesData={data}
    Card={PersonCard}
    slidesPerView="auto"
    navigation={false}
    spaceBetween={14}
    slideClassName={styles.slide}
    swiperClassName={styles.swiper}
  />
);
