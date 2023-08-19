import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactNode } from 'react';

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
          <div className={classNames(styles.container, containerClassName)}>
            {children}
            <Button
              onClick={onClose}
              className={classNames(styles.btn, closeClassName)}
            >
              <Image
                src="/icons/common/close.svg"
                alt="close"
                width={18}
                height={18}
              />
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
