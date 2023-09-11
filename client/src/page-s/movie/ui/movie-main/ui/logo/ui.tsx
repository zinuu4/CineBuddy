import Image from 'next/image';
import React from 'react';

import { Title } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMovieLogoProps {
  img: string;
  alt: string;
}

export const MovieLogo: React.FC<IMovieLogoProps> = ({ img, alt }) => (
  <div className={styles.root}>
    {img ? (
      <div className={styles.logo}>
        <Image className={styles.img} src={img} alt={alt} fill sizes="100%" />
      </div>
    ) : (
      <Title className={styles.title} title={alt} size="large" />
    )}
  </div>
);
