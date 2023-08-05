import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <Link className={classNames(styles.link, className)} href="/">
    <h1 className={styles.text}>
      Cine<span>Buddy</span>
    </h1>
  </Link>
);
