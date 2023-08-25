'use client';

import Link from 'next/link';
import React from 'react';

import { routes } from '@/shared/lib/routing';
import { Button } from '@/shared/ui/btn-base';
import { Icon } from '@/shared/ui/icon';

import styles from './styles.module.scss';

export const SignInBtn: React.FC = () => (
  <Button>
    <Link href={routes.signin} className={styles.link}>
      <Icon type="common" name="profile" className={styles.icon} />
      <span>Войти</span>
    </Link>
  </Button>
);
