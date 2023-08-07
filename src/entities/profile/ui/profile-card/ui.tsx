import classNames from 'classnames';

import Image from 'next/image';
import React from 'react';

import { IProfileCard } from '@/shared/api';

import styles from './styles.module.scss';

interface ProfileCardProps {
  data: IProfileCard
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  const { avatarUrl, email, name } = data;

  return (
    <div className={classNames('container', styles.item)}>
      <Image
        className={styles.avatar}
        src={avatarUrl}
        alt="avatar"
        width={150}
        height={150}
      />
      <div className={styles.info}>
        <h2>{name}</h2>
        <h5>{email}</h5>
        <button className={styles.logoutBtn}>Выйти</button>
      </div>
    </div>
  );
};
