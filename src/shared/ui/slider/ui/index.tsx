/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDomRefWithSetter } from '../lib';
import { NavBtn } from './nav-btn';

import './styles.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  slidesData: any;
  Card: React.ComponentType<any>;
  slidesPerView?: number | 'auto';
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
  slidesPerView = 'auto',
  loop,
  spaceBetween = 14,
  centeredSlides,
  navigation = true,
  slideClassName,
  swiperClassName,
}) => {
  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

  return (
    <Swiper
      slidesPerView={slidesPerView}
      loop={loop}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      navigation={{
        prevEl,
        nextEl,
      }}
      modules={[Navigation]}
      className={swiperClassName}
    >
      {navigation && (
        <>
          <NavBtn ref={prevElRef} />
          <NavBtn ref={nextElRef} isNext />
        </>
      )}
      {slidesData.map((data: any, index: number) => (
        <SwiperSlide className={slideClassName} key={index}>
          <Card data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
