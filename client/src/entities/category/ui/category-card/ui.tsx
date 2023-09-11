'use client';

import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

import { createQueryString } from '@/shared/lib';
import { Icon } from '@/shared/ui';

import { ICategoryCard } from '../../types';

import styles from './styles.module.scss';

interface ISwiperItemProps {
  data: ICategoryCard;
}

export const CategoryCard: React.FC<ISwiperItemProps> = ({ data }) => {
  const { title, iconName, href, name, value } = data;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChooseCategory = (name: string, value: string) => {
    if (searchParams) {
      router.push(
        `${pathname}films?${createQueryString(name, value, searchParams)}`,
      );
    }
  };

  return (
    <div onClick={() => onChooseCategory(name, value)} className={styles.item}>
      <Link className={styles.link} href={href}>
        <Icon name={iconName} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </Link>
    </div>
  );
};
