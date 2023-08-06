"use client";

import React from "react";

import { Slider } from "@/shared/ui/slider";
import { MovieCard } from "@/entities/movie/ui/movie-card";

interface IMoviesSliderProps {
  data: MovieCard[];
}

export const MoviesSlider: React.FC<IMoviesSliderProps> = ({ data }) => {
  return (
    <Slider
      slidesData={data}
      Card={MovieCard}
      slidesPerView={6}
      spaceBetween={14}
    />
  );
};
