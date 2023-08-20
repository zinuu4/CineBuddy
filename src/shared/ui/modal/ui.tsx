import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactNode, useEffect } from 'react';

import { Button } from '../btn-base';

import styles from './styles.module.scss';

interface IModalProps {
  children: ReactNode;
  containerClassName?: string;
  modalClassName?: string;
  closeClassName?: string;
  isOpen: boolean;
  onClose: () => void;
  wrapperClose?: boolean;
  darkBg?: boolean;
  closeSize?: number;
}

export const Modal: React.FC<IModalProps> = ({
  children,
  containerClassName,
  modalClassName,
  closeClassName,
  darkBg,
  isOpen,
  onClose,
  wrapperClose = true,
  closeSize = 18,
}) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const handleWrapperClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && wrapperClose) {
      onClose();
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div id="modal">
        <div
          onClick={(e) => handleWrapperClick(e)}
          className={classNames(
            styles.modal,
            darkBg && styles.darkBg,
            modalClassName,
          )}
        >
          <Button
            onClick={onClose}
            className={classNames(styles.btn, closeClassName)}
          >
            <Image
              src="/icons/common/close.svg"
              alt="close"
              width={closeSize}
              height={closeSize}
            />
          </Button>
          <div className={classNames(styles.container, containerClassName)}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
