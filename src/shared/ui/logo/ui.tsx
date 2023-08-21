import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

export const Logo = () => (
  <Link className={styles.link} href="/">
    <h1 className={styles.text}>
      Cine<span>Buddy</span>
    </h1>
  </Link>
);
