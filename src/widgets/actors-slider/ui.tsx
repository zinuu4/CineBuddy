'use client';

import React from 'react';

import { ActorCard } from '@/entities/actor/ui/actor-card';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

interface IActorsSliderProps {
  // eslint-disable-next-line
  data: any;
}

export const ActorsSlider: React.FC<IActorsSliderProps> = ({ data }) => (
  <Slider
    slidesData={data}
    Card={ActorCard}
    slidesPerView="auto"
    navigation={false}
    spaceBetween={14}
    slideClassName={styles.slide}
  />
);
