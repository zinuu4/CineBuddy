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
  swiperClassName?: string;
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
  swiperClassName,
}) => (
  <Swiper
    slidesPerView={slidesPerView}
    loop={loop}
    spaceBetween={spaceBetween}
    centeredSlides={centeredSlides}
    navigation={
      navigation
        ? {
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
          }
        : false
    }
    modules={[Navigation]}
    className={swiperClassName}
  >
    {navigation && (
      <>
        <button className="custom-prev-button">
          <Image
            className="img-prev"
            src="/icons/common/chevron.svg"
            width={30}
            height={30}
            alt="img"
          />
        </button>
        <button className="custom-next-button">
          <Image
            className="img-next"
            src="/icons/common/chevron.svg"
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
