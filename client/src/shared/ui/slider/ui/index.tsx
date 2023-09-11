/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { useDomRefWithSetter } from '../lib';
import { NavBtn } from './nav-btn';

import './styles.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps extends SwiperProps {
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
  modules,
  navigation = true,
  slideClassName,
  swiperClassName,
  ...props
}) => {
  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

  const DEFAULT_MODULES = [Navigation];

  const [realIndex, setRealIndex] = useState<number>(0);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      loop={loop}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
      navigation={{
        prevEl,
        nextEl,
      }}
      breakpoints={{
        320: {
          spaceBetween: 8,
        },
        576: {
          spaceBetween,
        },
      }}
      modules={[...(modules ?? DEFAULT_MODULES)]}
      freeMode={{ momentumBounceRatio: 0 }}
      className={swiperClassName}
      {...props}
    >
      {navigation && (
        <>
          <NavBtn ref={prevElRef} />
          <NavBtn ref={nextElRef} isNext />
        </>
      )}
      {slidesData.map((data: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide className={slideClassName} key={index}>
          <Card isActiveSlide={realIndex === index} data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
