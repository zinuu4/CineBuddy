'use client';

import classNames from 'classnames';
import React, { useRef, ReactNode } from 'react';

import { useClickOutside } from '@/shared/lib';

import { Icon } from '..';
import { Button } from '../btn-base';

import styles from './styles.module.scss';

interface DrawerProps {
  children: ReactNode;
  trigger: ReactNode;
  className?: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const { children, className, trigger, onClose, isOpen, defaultOpen, onOpen } =
    props;
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(drawerRef, () => onClose?.());

  const open = isOpen || defaultOpen;

  return (
    <>
      <div onClick={onOpen}>{trigger}</div>
      <div
        className={classNames(styles.drawer, open && styles.open, className)}
      >
        <div className={styles.wrapper} ref={drawerRef}>
          <Button onClick={() => onClose?.()} className={styles.closeBtn}>
            <Icon name="close" className={styles.close} />
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};
