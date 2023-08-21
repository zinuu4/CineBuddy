import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className, ...rest }) => (
  <label
    className={classNames(styles.label, className)}
    {...rest}
  />
);
