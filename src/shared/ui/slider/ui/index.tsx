/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
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

  const DEFAULT_MODULES = [Navigation, FreeMode];

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
          <Card data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
