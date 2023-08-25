import React from 'react';

import { Button } from '@/shared/ui/btn-base';
import { Icon } from '@/shared/ui/icon';

import styles from './styles.module.scss';

interface ISearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<ISearchButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} className={styles.openSearch}>
    <Icon type="common" name="search" />
  </Button>
);
