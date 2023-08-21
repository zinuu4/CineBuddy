'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

import { createQueryString } from '@/shared/lib/helpers';

import styles from './styles.module.scss';

interface ISwiperItemProps {
  data: {
    title: string;
    img: string;
    href: string;
    name: string;
    value: string;
  };
}

export const CategoryCard: React.FC<ISwiperItemProps> = ({ data }) => {
  const { title, img, href, name, value } = data;

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
        <Image
          className={styles.icon}
          src={img}
          alt={title}
          width={23}
          height={23}
        />
        <span className={styles.title}>{title}</span>
      </Link>
    </div>
  );
};
