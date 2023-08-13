import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IProfile } from '@/shared/api';
import { routes } from '@/shared/lib/routing';

import styles from './styles.module.scss';

export const ProfileBtn: React.FC<Partial<IProfile>> = ({ photo }) => (
  <button className="btn-reset">
    <Link href={routes.profile}>
      <Image
        className={styles.photo}
        width={40}
        height={40}
        src={photo ?? ''}
        alt="Профиль"
      />
    </Link>
  </button>
);
