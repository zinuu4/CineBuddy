'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { MoviesFilters, genreOptions } from '@/features/movies-filters';
import { Title } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMoviesHeaderProps {
  title: string;
}

export const MoviesHeader: React.FC<IMoviesHeaderProps> = ({ title }) => {
  const searchParams = useSearchParams();

  const genre = searchParams?.get('genre');

  const selectedGenre = genreOptions.find((option) => option.value === genre);

  const label = genre ? `: ${selectedGenre?.label}` : '';

  return (
    <div className={classNames('container')}>
      <div className={styles.header}>
        <Title size="large" title={`${title}${label}`} />
        <MoviesFilters />
      </div>
    </div>
  );
};
