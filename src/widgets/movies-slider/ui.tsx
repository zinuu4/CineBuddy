'use client';

import React from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

interface IMoviesSliderProps {
  data: Partial<IMovieCard[]>;
}

export const MoviesSlider: React.FC<IMoviesSliderProps> = ({ data }) => (
  <Slider
    slidesData={data}
    Card={MovieCard}
    slidesPerView={6}
    spaceBetween={14}
  />
);
