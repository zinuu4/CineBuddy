import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IPersonInMovie } from '@/shared/api';
import { capitalizeFirstLetter } from '@/shared/lib/helpers';
import { routes } from '@/shared/lib/routing';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface IActorCard {
  data: IPersonInMovie;
}

export const PersonCard: React.FC<IActorCard> = ({ data }) => {
  const { photo, name, profession, id } = data;
  return (
    <Link href={routes.person(id)} className={styles.item}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={photo ?? ''}
          alt={name ?? ''}
          fill
          sizes="100%"
        />
      </div>
      <Title title={name ?? ''} as="h6" size="xs" className={styles.title} />
      <span className={styles.profession}>
        {capitalizeFirstLetter(profession)}
      </span>
    </Link>
  );
};
