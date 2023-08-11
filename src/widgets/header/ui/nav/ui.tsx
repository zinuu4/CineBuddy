'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { navItems } from '@/shared/consts/nav';

import styles from './styles.module.scss';

export const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {navItems.map(({ label, href }) => {
        const linkClasses = `${styles.link} ${
          pathname === href ? styles.link__active : ''
        }`;
        return (
          <li key={label} className={styles.item}>
            <Link className={linkClasses} href={href}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
