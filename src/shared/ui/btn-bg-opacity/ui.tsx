import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface BtnBgOpacityProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: 'big';
  onClick?: () => void;
}

export const BtnBgOpacity: React.FC<BtnBgOpacityProps> = ({
  className,
  children,
  size = 'big',
  onClick,
}) => (
  <button
    onClick={onClick}
    className={classNames('btn-reset', styles.btn, styles[size], className)}
  >
    {children}
  </button>
);
