/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  stylesType?: 'opacity' | 'bg';
  size?: 'big';
}

export const Button: React.FC<ButtonBaseProps> = ({
  className,
  children,
  onClick,
  stylesType = 'opacity',
  size = 'big',
}) => (
  <button
    onClick={onClick}
    className={classNames(
      'btn-reset',
      stylesType === 'bg'
        ? `${styles.bgBtn} ${styles[size]}`
        : styles.opacityBtn,
      className,
    )}
  >
    {children}
  </button>
);
