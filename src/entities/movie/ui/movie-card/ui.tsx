import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMovieCard } from '@/shared/api';
import { convertMinutes } from '@/shared/lib/helpers';
import { Rating } from '@/shared/ui/rating';

import styles from './styles.module.scss';

interface MovieCardProps {
  data: IMovieCard;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { img, name, year, rating, length, id } = data;
  return (
    <div className={styles.item}>
      <Link className={styles.link} href={`/movie/${id}`}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={img}
            alt={name}
            fill
            sizes="100%"
          />
        </div>

        <div className={styles.content}>
          <Rating rating={+rating} className={styles.rating} />
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.info}>
            <span className={styles.year}>{year}</span>
            <span className={styles.length}>
              {length > 1 ? convertMinutes(length) : null}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
