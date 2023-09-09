'use client';

import classNames from 'classnames';
import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { Slider } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMoviesSliderProps {
  data: Partial<IMovieCard[]>;
  swiperClassName?: string;
  slideClassName?: string;
}

export const MoviesSlider: React.FC<IMoviesSliderProps> = ({
  data,
  swiperClassName,
  slideClassName,
}) => (
  <Slider
    swiperClassName={swiperClassName || styles.swiper}
    slideClassName={classNames(slideClassName, styles.swiperSlide)}
    slidesData={data}
    Card={MovieCard}
    spaceBetween={14}
    modules={[FreeMode, Navigation]}
  />
);
