import classNames from 'classnames';
import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface BurgerProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ isOpen, onOpen }) => (
  <Button
    onClick={onOpen}
    className={classNames(styles.btn, isOpen && styles.open)}
  >
    <Icon type="common" name="burger" />
  </Button>
);
