import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import { Button } from '../btn-base';

import styles from './styles.module.scss';

interface IModalProps {
  children: ReactNode;
  className?: string;
  closeClassname?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
  closeClassname,
}) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    isOpen && (
      <div id="modal">
        <div onClick={onClose} className={styles.modal}>
          <div className={classNames(styles.container, className)}>
            {children}
            <Button
              onClick={onClose}
              className={classNames(styles.btn, closeClassname)}
            >
              <Image src="/close.svg" alt="close" width={13} height={13} />
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
