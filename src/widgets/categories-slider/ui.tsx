"use client";

import React from "react";

import Slider from "@/shared/ui/slider/ui";
import { MovieCard } from "@/entities/movie/ui/movie-card";

interface CategoriesSliderProps {
  data: MovieCard[];
}

export const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ data }) => {
  return <Slider slidesData={data} Card={MovieCard} slidesPerView={6} />;
};
