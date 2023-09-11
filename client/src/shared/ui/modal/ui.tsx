'use client';

import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Button, Icon, Portal } from '@/shared/ui';
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
}) => {
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
              <Icon name="close" />
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
