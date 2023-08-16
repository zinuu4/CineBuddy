'use client';

import React from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

interface IMoviesSliderProps {
  data: Partial<IMovieCard[]>;
}

export const MoviesSlider: React.FC<IMoviesSliderProps> = ({ data }) => (
  <Slider
    swiperClassName={styles.swiper}
    slideClassName={styles.swiperSlide}
    slidesData={data}
    Card={MovieCard}
    spaceBetween={14}
  />
);
