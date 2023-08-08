import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const Profile: React.FC = () => (
  <Button className={styles.btn}>
    <Image width={20} height={20} src="/profile.svg" alt="Войти" />
    Войти
  </Button>
);
