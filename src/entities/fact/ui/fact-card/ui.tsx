/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { JSXElementConstructor, ReactElement } from 'react';

import styles from './styles.module.scss';

interface IFactItemProps {
  text: ReactElement<any, string | JSXElementConstructor<any>>[];
}

export const FactItem: React.FC<IFactItemProps> = ({ text }) => (
  <li className={styles.item}>{text}</li>
);
