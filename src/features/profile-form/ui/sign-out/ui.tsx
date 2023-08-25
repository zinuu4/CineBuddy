'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

import { routes } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

export const SignOutBtn = () => (
  <Button
    onClick={() => signOut({ callbackUrl: routes.home })}
    className={styles.btn}
    stylesType="bg"
  >
    <span className={styles.btnText}>Выйти</span>
  </Button>
);
