"use client";

import React from "react";

import { Slider } from "@/shared/ui/slider";
import { MovieCard as IMovieCard } from '@/app/types/types';
import { MovieCard } from '@/entities/movie/ui/movie-card';

interface CategoriesSliderProps {
  data: IMovieCard[];
}

export const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ data }) => {
  return <Slider slidesData={data} Card={MovieCard} slidesPerView={6} />;
};
