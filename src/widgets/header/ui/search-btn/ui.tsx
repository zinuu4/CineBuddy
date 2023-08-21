import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

import styles from './styles.module.scss';

interface ISearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<ISearchButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} className={styles.openSearch}>
    <Image
      width={21.5}
      height={21.5}
      src="/icons/common/search.svg"
      alt="search"
    />
  </Button>
);
