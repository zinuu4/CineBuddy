import React from 'react';
import styles from './trailerCard.module.scss';
import Image from 'next/image';

interface ITrailerCardProps {
  props: {
    url: string;
    title: string;
    rating: number;
    year: number;
    genre: string;
  };
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({ props }) => {
  return (
    <div className={styles.card}>
      <Image
        src={props.url}
        alt="Image"
        fill
        className={styles.img}
        sizes="width: 100%,   height: 30vw"
        priority={true}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.properties}>
          <span className={styles.rating}>{props.rating.toFixed(1)}</span>
          <span className={styles.year}>{props.year}</span>
          <span className={styles.genre}>{props.genre}</span>
        </div>
      </div>
    </div>
  );
};
