'use client';

import React, { useState } from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { LoadMoreBtn } from '@/shared/ui/load-more-btn';

import styles from './styles.module.scss';

interface IMoviesListProps {
  movies: IMovieCard[];
}

export const PersonMoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
  const [moviesAmount, setMoviesAmount] = useState(20);

  const limitedMovies = movies.slice(0, moviesAmount);

  return (
    <section className="container">
      <div className={styles.list}>
        {limitedMovies?.map((movie) => (
          <div className={styles.card} key={movie?.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
      {movies?.length > moviesAmount && (
        <LoadMoreBtn
          title="Показать больше"
          onClick={() => setMoviesAmount((prevAmount) => prevAmount + 20)}
        />
      )}
    </section>
  );
};
