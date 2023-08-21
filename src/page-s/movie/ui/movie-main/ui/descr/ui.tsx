import React from 'react';

import styles from './styles.module.scss';

interface DescrProps {
  descr: string;
}

export const Descr: React.FC<DescrProps> = ({ descr }) => (
  <p className={styles.descr}>{descr}</p>
);
