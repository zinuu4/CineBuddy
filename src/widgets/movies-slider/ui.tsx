'use client';

import React from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

interface IMoviesSliderProps {
  data: IMovieCard[];
  direction?: 'horizontal' | 'vertical'
}

export const MoviesSlider: React.FC<IMoviesSliderProps> = ({ data, direction = 'horizontal' }) => (
  <Slider
    slidesData={data}
    Card={MovieCard}
    slidesPerView={6}
    spaceBetween={14}
    direction={direction}
  />
);
