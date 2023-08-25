'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { useGetMoviesQuery } from '@/shared/api/firebase/api';
import { ErrorMsg, Loader, Slider } from '@/shared/ui';

import styles from './styles.module.scss';

interface IProfileMoviesListProps {
  collection: string;
}

export const ProfileMoviesList: React.FC<IProfileMoviesListProps> = ({
  collection,
}) => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    collectionName: collection,
    documentId: email ?? 'no-email',
  });

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  if ((isLoading || isFetching) && !data) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {data?.movies && data?.movies?.length > 0 ? (
        <Slider
          Card={MovieCard}
          slidesData={data?.movies}
          swiperClassName={styles.swiper}
          slideClassName={styles.swiperSlide}
        />
      ) : (
        <span className={styles.text}>Пока здесь пусто</span>
      )}
    </div>
  );
};
