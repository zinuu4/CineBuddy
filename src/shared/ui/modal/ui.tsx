import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Button } from '../btn-base';
import { Portal } from '../portal';
import { useEscape } from './lib';

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
  close?: boolean;
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
  close = true,
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

  useEscape(onClose);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames={{
          enterDone: styles.open,
        }}
        unmountOnExit
      >
        <div
          onClick={(e) => handleWrapperClick(e)}
          className={classNames(
            styles.modal,
            darkBg && styles.darkBg,
            modalClassName,
          )}
        >
          {close && (
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
          )}
          <div className={classNames(styles.container, containerClassName)}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
