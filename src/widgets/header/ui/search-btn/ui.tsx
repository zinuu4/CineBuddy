import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

export const SearchButton: React.FC = () => (
  <Button className={styles.openSearch}>
    <Image width={20} height={20} src="/icons/common/search.svg" alt="search" />
  </Button>
);
