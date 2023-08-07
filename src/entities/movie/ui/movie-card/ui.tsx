import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMovieCard } from '@/shared/api';

import styles from './styles.module.scss';

interface MovieCardProps {
  data: IMovieCard;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { img, name, year, rating, length } = data;
  return (
    <div className={styles.item}>
      <Link className={styles.link} href="/home">
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={img}
            alt="slide"
            fill
            sizes="100%"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.rating}>{rating}</span>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.info}>
            <span className={styles.year}>{year}</span>
            <span className={styles.length}>{length}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
