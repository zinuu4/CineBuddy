import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...rest }) => (
  <input
    className={classNames(styles.input, className)}
    {...rest}
  />
);
