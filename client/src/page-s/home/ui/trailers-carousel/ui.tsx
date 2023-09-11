'use client';

import React, { useEffect } from 'react';

import { useGetTrailersQuery } from '@/widgets/trailer/api';
import { TrailerCard } from '@/widgets/trailer/ui/trailer-card';
import { ErrorMsg, Loader, Slider } from '@/shared/ui';

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
    <section className={styles.section}>
      <Slider
        slidesData={data}
        Card={TrailerCard}
        slidesPerView={1.5}
        breakpoints={{
          320: {
            slidesPerView: 1.12,
            spaceBetween: 7,
          },
          769: {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
        }}
        loop
        spaceBetween={12}
        centeredSlides
        swiperClassName={styles.slider}
      />
    </section>
  );
};
