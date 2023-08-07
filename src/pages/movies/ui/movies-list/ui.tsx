'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { genreOptions } from '@/features/movies-filters';
import { useGetMoviesQuery } from '@/entities/movie/api';
import { MovieCard } from '@/entities/movie/ui/movie-card';

import styles from './styles.module.scss';

export const MoviesList: React.FC = () => {
  const searchParams = useSearchParams();

  const genre = searchParams?.get('genre');
  const year = searchParams?.get('release');
  const rating = searchParams?.get('rate');
  const sort = searchParams?.get('sort');

  const selectedGenre = genreOptions.find((option) => option.value === genre);

  const { data: films } = useGetMoviesQuery({
    ...(selectedGenre?.value !== '' && { genre: selectedGenre?.value }),
    ...(selectedGenre === null && { genre: '' }),
    limit: 50,
    ...(year && { year }),
    ...(sort && { sortField: sort }),
    ...(rating && { rating }),
  });

  return (
    <section className="container">
      <div className={styles.list}>
        {films?.map((film) => (
          <div className={styles.card} key={film.img}>
            <MovieCard data={film} />
          </div>
        ))}
      </div>
    </section>
  );
};
