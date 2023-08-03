"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import MovieCard from "../ui/movieCard/MovieCard";

import "swiper/css";
import "swiper/css/navigation";

import "./categoriesSlider.scss";

interface CategoriesSliderProps {
  data: MovieCard[];
}

const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={6}
      freeMode
      navigation={{
        prevEl: ".custom-prev-button",
        nextEl: ".custom-next-button",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <button className="custom-prev-button">
        <Image
          className="img-prev"
          src="/chevron.svg"
          width={30}
          height={30}
          alt="img"
        />
      </button>
      <button className="custom-next-button">
        <Image
          className="img-next"
          src="/chevron.svg"
          width={30}
          height={30}
          alt="img"
        />
      </button>
      {data.map(({ img, name, year, rating, length }) => (
        <SwiperSlide key={name}>
          <MovieCard
            key={name}
            img={img}
            name={name}
            year={year}
            rating={rating}
            length={length}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesSlider;
