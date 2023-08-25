'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { routes } from '@/shared/lib';
import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const SavedMoviesBtn = () => {
  const pathname = usePathname();

  const fill = pathname === routes.saved;

  return (
    <button
      className={classNames('btn-reset', styles.btn, fill && styles.fill)}
    >
      <Link href={routes.saved}>
        <Icon type="common" name="bookmark" />
      </Link>
    </button>
  );
};
