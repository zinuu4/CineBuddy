import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ILinkedMovie } from '@/shared/api';

import styles from './styles.module.scss';

interface MovieCardProps {
  data: ILinkedMovie;
}

export const SimilarMovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { name, poster } = data;
  return (
    <div className={styles.item}>
      <Link className={styles.link} href="/home">
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={poster?.previewUrl ?? ''}
            alt={name}
            fill
            sizes="100%"
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
        </div>
      </Link>
    </div>
  );
};
