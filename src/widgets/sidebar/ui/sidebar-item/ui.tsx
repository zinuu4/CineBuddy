import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface SidebarItemProps {
  label: string
  href: string
  className?: string
  active: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ className, label, href, active }) => (
  <div className={styles.item}>
    <Link
      className={classNames(styles.link, className, active && styles.active)}
      href={href}
    >
      {label}
    </Link>
  </div>
);
