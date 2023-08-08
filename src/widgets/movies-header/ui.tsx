'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { MoviesFilters, genreOptions } from '@/features/movies-filters';

import styles from './styles.module.scss';

interface IMoviesHeaderProps {
  title: string;
}

export const MoviesHeader: React.FC<IMoviesHeaderProps> = ({ title }) => {
  const searchParams = useSearchParams();

  const genre = searchParams?.get('genre');

  const selectedGenre = genreOptions.find((option) => option.value === genre);

  return (
    <div className={classNames('container')}>
      <div className={styles.header}>
        <h2>
          {title} {genre && `: ${selectedGenre?.label}`}
        </h2>
        <MoviesFilters />
      </div>
    </div>
  );
};
