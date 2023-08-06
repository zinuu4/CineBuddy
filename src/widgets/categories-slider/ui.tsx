"use client";

import React from "react";

import { Slider } from "@/shared/ui/slider";
import { MovieCard } from "@/entities/movie/ui/movie-card";

interface CategoriesSliderProps {
  data: MovieCard[];
}

export const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ data }) => {
  return (
    <Slider
      slidesData={data}
      Card={MovieCard}
      slidesPerView={6}
      spaceBetween={14}
    />
  );
};
