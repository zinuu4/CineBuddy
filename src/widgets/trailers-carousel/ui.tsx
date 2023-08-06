'use client';

import React from 'react';
import { TrailerCard } from '@/entities/trailer/ui/trailer-card';
import { Slider } from '@/shared/ui/slider';
import { useGetTrailersQuery } from '@/app/redux/trailers/trailer.api';

export const TrailersCarousel = () => {
  const { data, isLoading, error } = useGetTrailersQuery(5);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Slider
      slidesData={data}
      Card={TrailerCard}
      slidesPerView={1.5}
      loop
      spaceBetween={12}
      centeredSlides
    />
  );
};
