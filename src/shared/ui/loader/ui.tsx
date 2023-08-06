import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import styles from './styles.module.scss';

interface LoaderProps {
  color?: string;
  size?: number;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { color = 'white', size = 22 } = props;

  return (
    <div className={styles.loaderWrapper}>
      <BiLoaderAlt size={size} color={color} className={styles.loader} />
    </div>
  );
};
