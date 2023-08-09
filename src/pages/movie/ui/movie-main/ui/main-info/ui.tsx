import React from 'react';

import { convertMinutes, capitalizeFirstLetter } from '@/shared/lib/helpers';
import { Rating } from '@/shared/ui/rating';

import styles from './styles.module.scss';

interface IMainInfoProps {
  rating: number;
  year: number;
  genre: string;
  ageRestriction: number;
  country: string;
  length: number;
}

export const MainInfo: React.FC<IMainInfoProps> = ({
  rating,
  year,
  genre,
  ageRestriction,
  country,
  length,
}) => (
  <div className={styles.root}>
    <Rating rating={rating} showState />
    <span className={styles.item}>{year}</span>
    <span className={styles.item}>{capitalizeFirstLetter(genre)}</span>
    <span className={styles.item}>{ageRestriction}+</span>
    <span className={styles.item}>{country}</span>
    <span className={styles.item}>{convertMinutes(length)}</span>
  </div>
);
