'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TrailerCard } from './trailerCard/TrailerCard';
import styles from './trailersCarousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': InitCustom;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
    interface InitCustom
      extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > {
      init: string;
    }
  }
}

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

  const swiperRef: any = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      loop: true,
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 12,
      watchOverflow: true,
      breakpoints: {
        1024: {
          slidesPerView: 1.8,
        },
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
            width: 50px;
            height: 70px;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 8px;
            background: rgba(138, 136, 145, 0.32);
            transition: opacity var(--duration), visibility var(--duration);
            color: white;
          }
          .swiper-button-next::before,
          .swiper-button-prev::before {
            content: "";
            position: absolute;
            -webkit-backdrop-filter: blur(13px);
            backdrop-filter: blur(13px);
            background: hsla(258,4%,55%,.32);
            z-index: -1;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            border: none;
            border-radius: 8px;
            transition: transform .1s;
          }
          .swiper-button-next svg,
          .swiper-button-prev svg{
            width: 24px;
            height: 24px;
            
          }
          .swiper-button-next svg path,
          .swiper-button-prev svg path{
            stroke: white; 
            stroke-width: 1; 
            
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: radial-gradient(
              100% 100% at 100% 0,
              hsla(257, 5%, 74%, 0.32) 0,
              hsla(258, 4%, 55%, 0.32) 100%
            );
            transform: scale(1.2) translateZ(0);
          }
          @media only screen and (max-width: 1000px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
            .swiper-button-next::before,
            .swiper-button-prev::before {
              display: none;
            }
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false" className={styles.container}>
      {slides.map((slide, index) => (
        <swiper-slide key={index} className={styles.slide}>
          <div className={styles.card}>
            <TrailerCard props={slide} />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
