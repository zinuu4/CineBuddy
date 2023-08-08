import React from 'react';

import { MovieRating } from '@/shared/ui/movie-rating/ui';

import styles from './styles.module.scss';

interface MainInfoProps {
  data: {
    year: number;
    genre: string;
    ageRestriction: string;
    country: string;
    seasons: string;
  };
}

export const MainInfo: React.FC<MainInfoProps> = ({ data }) => {
  const { year, genre, ageRestriction, country, seasons } = data;
  return (
    <div className={styles.root}>
      <MovieRating rating={9} showState />
      <span className={styles.item}>{year}</span>
      <span className={styles.item}>{genre}</span>
      <span className={styles.item}>{ageRestriction}</span>
      <span className={styles.item}>{country}</span>
      <span className={styles.item}>{seasons}</span>
    </div>
  );
};
