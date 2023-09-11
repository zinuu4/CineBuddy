import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const Socials = () => (
  <Button className={styles.social}>
    <a
      target="_blank"
      href="https://github.com/zinuu4/CineBuddy"
      rel="noreferrer"
    >
      <Icon name="github" />
    </a>
  </Button>
);
