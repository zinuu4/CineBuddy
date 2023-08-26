import React from 'react';
import { VscSettings } from 'react-icons/vsc';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

interface IMovieDrawersTrigger {
  onClick: () => void;
}

export const MovieDrawersTrigger: React.FC<IMovieDrawersTrigger> = ({
  onClick,
}) => (
  <Button onClick={onClick} className={styles.btn}>
    <VscSettings size={23} />
  </Button>
);
