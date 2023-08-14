'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React from 'react';

import { ISidebarItem } from '@/shared/types';

import { SidebarItem } from './sidebar-item';
import styles from './styles.module.scss';

interface SidebarProps {
  items: ISidebarItem[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, className }) => {
  const pathname = usePathname();

  return (
    <div className={classNames(styles.container, className)}>
      {items.map((item) => (
        <SidebarItem
          key={item.href}
          active={item.href === pathname}
          href={item.href}
          label={item.label}
        />
      ))}
    </div>
  );
};
