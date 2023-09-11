'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

import { MovieCard } from '@/entities/movie/ui/movie-card';
import { IMovieCard } from '@/shared/api';
import { LoadMoreBtn, Title } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMoviesListProps {
  movies: IMovieCard[];
  className: string;
}

export const PersonMoviesList: React.FC<IMoviesListProps> = ({
  movies,
  className,
}) => {
  const [moviesAmount, setMoviesAmount] = useState(20);

  const limitedMovies = movies.slice(0, moviesAmount);

  return (
    <section
      className={classNames(
        'container container-narrow',
        styles.container,
        className,
      )}
    >
      <Title
        className={styles.title}
        title={`Фильмография (${movies.length})`}
      />
      <div className={styles.list}>
        {limitedMovies?.map((movie) => (
          <div className={styles.card} key={movie?.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
      {movies?.length > moviesAmount && (
        <LoadMoreBtn
          onClick={() => setMoviesAmount((prevAmount) => prevAmount + 40)}
        />
      )}
    </section>
  );
};
