'use client';

import React, { useEffect } from 'react';

import { TrailerCard } from '@/widgets/trailer/ui/trailer-card';
import { useGetTrailersQuery } from '@/entities/movie/api';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

export const TrailersCarousel = () => {
  const { data, isLoading, isError } = useGetTrailersQuery(5);

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Slider
      slidesData={data}
      Card={TrailerCard}
      slidesPerView={1.5}
      loop
      spaceBetween={12}
      centeredSlides
      swiperClassName={styles.slider}
    />
  );
};
