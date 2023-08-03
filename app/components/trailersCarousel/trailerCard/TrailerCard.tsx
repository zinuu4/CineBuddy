import React from 'react';
import styles from './trailerCard.module.scss';
import Image from 'next/image';

interface ITrailerCardProps {
  slideUrl: string;
}

export const TrailerCard: React.FC<ITrailerCardProps> = ({ slideUrl }) => {
  return (
    <div className={styles.card}>
      <Image
        src={slideUrl}
        alt="Image"
        fill
        className={styles.img}
        sizes="width: 100%,   height: 30vw"
        priority={true}
      />
    </div>
  );
};
