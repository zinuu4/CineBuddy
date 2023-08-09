import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import { Button } from '../btn-base';

import styles from './styles.module.scss';

interface IModalProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    isOpen && (
      <div id="modal">
        <div className={styles.modal}>
          <div className={classNames(styles.container, className)}>
            {children}
            <Button onClick={onClose} className={styles.btn}>
              <Image src="/close.svg" alt="close" fill sizes="100%" />
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
