"use client";

import React, { useState, useRef, ReactNode } from "react";
import classNames from 'classnames';
import { FiX } from 'react-icons/fi';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './drawer.module.scss';

interface DrawerProps {
  children: ReactNode
  trigger: ReactNode
  className?: string
  isOpen?: boolean
  defaultOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

const Drawer = (props: DrawerProps) => {
  const {
    children,
    className,
    trigger,
    onClose,
    isOpen,
    defaultOpen,
    onOpen,
  } = props;
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(drawerRef, () => onClose?.())

  const open = isOpen || defaultOpen;

  return (
    <>
      <div onClick={onOpen}>
        {trigger}
      </div>
      <div className={classNames(styles.drawer, open && styles.open, className)}>
        <div className={styles.wrapper} ref={drawerRef}>
          <button type="button" onClick={() => onClose?.()} className={styles.closeBtn}>
            <span className={styles.close}>
              <FiX size={20} />
            </span>
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;