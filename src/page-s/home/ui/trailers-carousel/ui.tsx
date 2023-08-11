'use client';

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useGetTrailersQuery } from '@/entities/movie/api';
import { TrailerCard } from '@/entities/trailer/ui/trailer-card';
import { Loader } from '@/shared/ui/loader';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

export const TrailersCarousel = () => {
  const { data, isLoading, error } = useGetTrailersQuery(5);

  const notify = () =>
    toast('Something went wrong. Network error', {
      theme: 'dark',
      autoClose: 5000,
      position: 'top-right',
    });

  useEffect(() => {
    if (error) notify();
  }, [error]);

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
