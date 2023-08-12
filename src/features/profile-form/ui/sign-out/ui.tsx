'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

import { routes } from '@/shared/lib/routing';
import { Button } from '@/shared/ui/btn-base';

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
