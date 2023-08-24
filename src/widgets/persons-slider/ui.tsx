'use client';

import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';

import { PersonCard } from '@/entities/person/ui/person-card';
import { IPersonInMovie } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

interface IActorsSliderProps {
  data: IPersonInMovie[];
}

export const PersonsSlider: React.FC<IActorsSliderProps> = ({ data }) => (
  <Slider
    slidesData={data}
    Card={PersonCard}
    navigation={false}
    spaceBetween={14}
    slideClassName={styles.slide}
    swiperClassName={styles.swiper}
    modules={[FreeMode, Navigation]}
  />
);
