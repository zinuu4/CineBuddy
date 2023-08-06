import React from 'react';

import styles from './styles.module.scss';

interface IFactItemProps {
  text: string;
}

export const FactItem: React.FC<IFactItemProps> = ({ text }) => <li className={styles.item}>{text}</li>;
