'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Drawer } from '@/shared/ui';

import { IMoviesDrawerProps } from '../config';
import { DrawerOptions } from './drawer-options';

import styles from './styles.module.scss';

export const MoviesDrawer: React.FC<IMoviesDrawerProps> = ({
  filter,
  name,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: string) => {
    onChange?.(value);
    setIsOpen(false);
  };

  const searchParams = useSearchParams();

  const queryValue = searchParams?.get(name?.toString());

  const selectedOption =
    filter.options.find((option) => option?.value === queryValue) ??
    filter.options[0];

  // prettier-ignore
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      key={filter.label}
      trigger={(
        <>
          <div className={styles.trigger}>
            <div className={styles.triggerFilter}>
              <span className={styles.triggerLabel}>{filter.label}</span>
              <span className={styles.triggerSelected}>{selectedOption.label}</span>
            </div>
            <span className={styles.triggerArrow}>
              <FiArrowRight size={22} />
            </span>
          </div>
          <div className={styles.divider} />
        </>
    )}
    >
      <DrawerOptions filter={filter} onClick={handleChange} queryValue={queryValue ?? ''} />
    </Drawer>
  );
};
