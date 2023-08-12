'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { routes } from '@/shared/lib/routing';
import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const SignInBtn: React.FC = () => (
  <Button className={styles.btn}>
    <Link href={routes.signin}>
      <Image
        width={20}
        height={20}
        src="/icons/common/profile.svg"
        alt="Войти"
      />
      Войти
    </Link>
  </Button>
);
