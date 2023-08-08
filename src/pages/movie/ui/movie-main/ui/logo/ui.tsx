import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

interface IMovieLogoProps {
  img: string;
  alt: string;
}

export const MovieLogo: React.FC<IMovieLogoProps> = ({ img, alt }) => (
  <div className={styles.root}>
    <div className={styles.logo}>
      <Image className={styles.img} src={img} alt={alt} fill sizes="100%" />
    </div>
  </div>
);
