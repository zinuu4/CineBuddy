'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { TrailerCard } from './trailerCard/TrailerCard';
import styles from './trailersCarousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const TrailersCarousel = () => {
  const [slides, setSlides] = useState([
    {
      url: 'https://nest-kinomore-server-gnzn.onrender.com/image/efacf0bc-23e1-4694-bdc6-412c67fcabe7.jpg',
      title: 'Чёрная Пантера: Ваканда навеки',
      rating: 6.2,
      year: 2022,
      genre: 'фантастика',
    },
    {
      url: 'https://nest-kinomore-server-gnzn.onrender.com/image/07dc5e17-180f-4e20-b06a-5f9c5b465f3d.jpg',
      title: 'Аватар: Путь воды',
      rating: 7.8,
      year: 2022,
      genre: 'фантастика',
    },
    {
      url: 'https://nest-kinomore-server-gnzn.onrender.com/image/840de864-9493-4bf1-a891-e414ba0d819b.jpg',
      title: 'Уэнсдэй',
      rating: 8.0,
      year: 2022,
      genre: 'фэнтези',
    },
    {
      url: 'https://nest-kinomore-server-gnzn.onrender.com/image/9bfdfffe-ca6c-45a7-b537-ee52641d8ed2.jpg',
      title: 'Мир Юрского периода: Господство',
      rating: 5.7,
      year: 2022,
      genre: 'фантастика',
    },
    {
      url: 'https://nest-kinomore-server-gnzn.onrender.com/image/840de864-9493-4bf1-a891-e414ba0d819b.jpg',
      title: 'Уэнсдэй',
      rating: 8.0,
      year: 2022,
      genre: 'фэнтези',
    },
  ]);

  return (
    <section>
      <Swiper
        slidesPerView={1.5}
        loop
        spaceBetween={12}
        centeredSlides
        navigation={{
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button',
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <TrailerCard
                url={slide.url}
                title={slide.title}
                genre={slide.genre}
                rating={slide.rating}
                year={slide.year}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
