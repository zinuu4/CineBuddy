'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const Profile: React.FC = () => {
  const session = useSession();

  console.log(session);

  return (
    <Button className={styles.btn}>
      <Image
        width={20}
        height={20}
        src="/icons/common/profile.svg"
        alt="Войти"
      />
      Войти
    </Button>
  );
};
