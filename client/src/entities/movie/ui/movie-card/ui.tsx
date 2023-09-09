import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMovieCard } from '@/shared/api';
import { routes, convertMinutes } from '@/shared/lib';
import { Rating } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMovieCardProps {
  data: Partial<IMovieCard>;
  cardClassName?: string;
}

export const MovieCard: React.FC<IMovieCardProps> = ({
  data,
  cardClassName,
}) => {
  const { name, year, rating, movieLength, id } = data;
  return (
    <div className={classNames(styles.item, cardClassName)}>
      <Link className={styles.link} href={routes.movie(id)}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt={name ?? ''}
            fill
            sizes="100%"
            quality={100}
            src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`}
          />
        </div>

        <div className={styles.content}>
          {rating && (
            <Rating rating={Number(rating)} className={styles.rating} />
          )}
          <h3 className={styles.name}>{name}</h3>
          {year && movieLength && (
            <div className={styles.info}>
              <span className={styles.year}>{year}</span>
              <span className={styles.length}>
                {movieLength > 1 ? convertMinutes(movieLength) : null}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
