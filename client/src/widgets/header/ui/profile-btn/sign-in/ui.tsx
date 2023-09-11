'use client';

import Link from 'next/link';
import React from 'react';

import { routes } from '@/shared/lib';
import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const SignInBtn: React.FC = () => (
  <Button>
    <Link href={routes.signin} className={styles.link}>
      <Icon name="profile" className={styles.icon} />
      <span>Войти</span>
    </Link>
  </Button>
);
