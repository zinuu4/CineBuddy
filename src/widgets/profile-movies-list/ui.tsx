'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { useGetMoviesQuery } from '@/shared/api/firebase/api';
import { Slider } from '@/shared/ui/slider';

import styles from './styles.module.scss';

interface IProfileMoviesListProps {
  collection: string;
}

export const ProfileMoviesList: React.FC<IProfileMoviesListProps> = ({
  collection,
}) => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data } = useGetMoviesQuery({
    collectionName: collection,
    documentId: email ?? '',
  });

  return (
    <div className={styles.container}>
      {data?.movies && data?.movies?.length > 0 ? (
        <Slider Card={MovieCard} slidesData={data?.movies} slidesPerView={3} />
      ) : (
        <span className={styles.text}>Пока здесь пусто</span>
      )}
    </div>
  );
};
