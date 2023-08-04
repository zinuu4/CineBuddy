"use client";

import React from "react";
import { Slider } from "@/shared/ui/slider";

import { TrailerCard } from "@/entities/trailer/ui/trailer-card";

export const TrailersCarousel = () => {
  const slides = [
    {
      url: "https://nest-kinomore-server-gnzn.onrender.com/image/efacf0bc-23e1-4694-bdc6-412c67fcabe7.jpg",
      title: "Чёрная Пантера: Ваканда навеки",
      rating: 6.2,
      year: 2022,
      genre: "фантастика",
    },
    {
      url: "https://nest-kinomore-server-gnzn.onrender.com/image/07dc5e17-180f-4e20-b06a-5f9c5b465f3d.jpg",
      title: "Аватар: Путь воды",
      rating: 7.8,
      year: 2022,
      genre: "фантастика",
    },
    {
      url: "https://nest-kinomore-server-gnzn.onrender.com/image/840de864-9493-4bf1-a891-e414ba0d819b.jpg",
      title: "Уэнсдэй",
      rating: 8.0,
      year: 2022,
      genre: "фэнтези",
    },
    {
      url: "https://nest-kinomore-server-gnzn.onrender.com/image/9bfdfffe-ca6c-45a7-b537-ee52641d8ed2.jpg",
      title: "Мир Юрского периода: Господство",
      rating: 5.7,
      year: 2022,
      genre: "фантастика",
    },
    {
      url: "https://nest-kinomore-server-gnzn.onrender.com/image/840de864-9493-4bf1-a891-e414ba0d819b.jpg",
      title: "Уэнсдэй",
      rating: 8.0,
      year: 2022,
      genre: "фэнтези",
    },
  ];

  return (
    <Slider
      slidesData={slides}
      Card={TrailerCard}
      slidesPerView={1.5}
      loop={true}
      spaceBetween={12}
      centeredSlides={true}
    />
  );
};
