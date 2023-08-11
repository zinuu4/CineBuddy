import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

interface IPhotoProps {
  photo: string;
  name: string;
}

export const Photo: React.FC<IPhotoProps> = ({ photo, name }) => (
  <div className={styles.photoWrapper}>
    <Image className={styles.photo} src={photo} alt={name} fill sizes="100%" />
  </div>
);
