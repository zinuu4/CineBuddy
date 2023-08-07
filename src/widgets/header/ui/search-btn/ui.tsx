import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const SearchButton: React.FC = () => (
  <Button className={styles.openSearch}>
    <FiSearch />
  </Button>
);
