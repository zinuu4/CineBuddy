import Image from 'next/image';
import React from 'react';

import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface IActorCard {
  data: {
    img: string;
    name: string;
    profession: string;
  };
}

export const PersonCard: React.FC<IActorCard> = ({ data }) => {
  const { img, name, profession } = data;
  return (
    <a className={styles.item}>
      <div className={styles.imgWrapper}>
        <Image className={styles.img} src={img} alt={name} fill sizes="" />
      </div>
      <Title title={name} as="h6" size="xs" className={styles.title} />
      <span className={styles.profession}>{profession}</span>
    </a>
  );
};
