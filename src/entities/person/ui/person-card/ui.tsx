import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IPersonInMovie } from '@/shared/api';
import { routes } from '@/shared/lib';
import { Title } from '@/shared/ui/title';

import { convertName, convertProfession } from '../../lib';

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
      <Title
        title={convertName(name ?? '')}
        as="h6"
        size="xs"
        className={styles.title}
      />
      <span className={styles.profession}>{convertProfession(profession)}</span>
    </Link>
  );
};
