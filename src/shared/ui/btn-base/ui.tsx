import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonBaseProps> = ({
  className,
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={classNames('btn-reset', styles.btn, className)}
  >
    {children}
  </button>
);
