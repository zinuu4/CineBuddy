'use client';

import React from 'react';

import { SimilarMovieCard } from '@/entities/similar-movie/ui/similar-movie-card';
import { ILinkedMovie } from '@/shared/api';
import { Slider } from '@/shared/ui/slider';

interface IActorsSliderProps {
  data: ILinkedMovie[];
}

export const SimilarMoviesSlider: React.FC<IActorsSliderProps> = ({ data }) => (
  <Slider
    slidesData={data}
    Card={SimilarMovieCard}
    slidesPerView={6}
    spaceBetween={14}
  />
);
