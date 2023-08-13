'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { routes } from '@/shared/lib/routing';

import styles from './styles.module.scss';

export const SavedMoviesBtn = () => {
  const pathname = usePathname();

  return (
    <button className={classNames('btn-reset', styles.btn)}>
      <Link href={routes.saved}>
        {pathname !== routes.saved ? (
          <Image
            src="/icons/common/bookmark.svg"
            alt="Saved movies"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/icons/common/fill-bookmark.svg"
            alt="Saved movies"
            width={20}
            height={20}
          />
        )}
      </Link>
    </button>
  );
};
