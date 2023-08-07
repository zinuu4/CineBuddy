import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonBaseProps> = ({ className, children, ...rest }) => (
  <button className={classNames('btn-reset', styles.btn, className)} {...rest}>
    {children}
  </button>
);
