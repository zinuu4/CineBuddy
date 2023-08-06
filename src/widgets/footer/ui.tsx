import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={classNames(styles.container, 'container')}>
      <a target="_blank" href="https://github.com/zinuu4/CineBuddy" rel="noreferrer">
        <Image
          className={styles.icon}
          src="/github.svg"
          alt="GitHub"
          width={40}
          height={40}
        />
      </a>
      <div className={classNames(styles.divider, 'divider')} />
      <div className={styles.copyright}>&copy; 2023 CineBuddy</div>
    </div>
  </footer>
);
