import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { navItemsBurger } from '@/shared/consts';
import { Modal } from '@/shared/ui/modal';

import styles from './styles.module.scss';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ onClose, isOpen }) => {
  const pathname = usePathname();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerClassName={styles.container}
      modalClassName={styles.modal}
      wrapperClose={false}
      darkBg
    >
      <ul className={classNames('list-reset', styles.list)}>
        {navItemsBurger.map(({ label, href }) => (
          <li
            key={href}
            className={classNames(
              styles.listItem,
              pathname === href && styles.active,
            )}
          >
            <Link href={href} className={styles.link} onClick={onClose}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};
