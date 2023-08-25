import classNames from 'classnames';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { Button } from '@/shared/ui';

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
    <AiOutlineMenu size={24} />
  </Button>
);
