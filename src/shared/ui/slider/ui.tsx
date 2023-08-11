/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  slidesData: any;
  Card: React.ComponentType<any>;
  slidesPerView: number | 'auto';
  loop?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
  navigation?: boolean;
  slideClassName?: string;
  direction?: 'horizontal' | 'vertical'
}

export const Slider: React.FC<SliderProps> = ({
  slidesData,
  Card,
  slidesPerView,
  loop,
  spaceBetween = 14,
  centeredSlides,
  navigation = true,
  slideClassName,
  direction = 'horizontal',
}) => (
  <Swiper
    slidesPerView={slidesPerView}
    loop={loop}
    spaceBetween={spaceBetween}
    centeredSlides={centeredSlides}
    direction={direction}
    navigation={
        navigation
          ? {
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }
          : false
      }
    modules={[Navigation]}
    className="mySwiper"
  >
    {navigation && (
    <>
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
    </>
      )}
    {slidesData.map((data: any, index: number) => (
      <SwiperSlide className={slideClassName} key={index}>
        <Card data={data} />
      </SwiperSlide>
      ))}
  </Swiper>
  );
