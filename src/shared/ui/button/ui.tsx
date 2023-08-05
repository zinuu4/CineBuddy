import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonBaseProps {
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonBaseProps> = ({ className, children }) => (
  <button className={classNames('btn-reset', styles.btn, className)}>
    {children}
  </button>
);
