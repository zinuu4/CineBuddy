import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export const Photo = () => (
  <div className={styles.photoWrapper}>
    <Image
      className={styles.photo}
      src="/maks.jpeg"
      alt="avatar"
      fill
      sizes="100%"
    />
  </div>
);
