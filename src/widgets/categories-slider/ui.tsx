'use client';

import React from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

interface CategoriesSliderProps {
  data: IMovieCard[];
}

export const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ data }) => (
  <Slider slidesData={data} Card={MovieCard} slidesPerView={6} />
);
