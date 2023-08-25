import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface ISearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<ISearchButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} className={styles.openSearch}>
    <Icon type="common" name="search" />
  </Button>
);
