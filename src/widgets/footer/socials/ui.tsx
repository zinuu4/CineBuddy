import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const Socials = () => (
  <Button className={styles.social}>
    <a
      target="_blank"
      href="https://github.com/zinuu4/CineBuddy"
      rel="noreferrer"
    >
      <Image
        src="/icons/social/github.svg"
        alt="GitHub"
        width={30}
        height={30}
      />
    </a>
  </Button>
);
