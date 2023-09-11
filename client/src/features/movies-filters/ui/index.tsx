'use client';

import React from 'react';

import { Select } from '@/shared/ui';

import { FilterType, filters, sortFilter } from '../config';
import { useFilterChange } from '../lib';

import { DrawersModal } from './movies-drawers-modal';

import styles from './styles.module.scss';

export const MoviesFilters: React.FC = () => {
  const { onChange } = useFilterChange();

  return (
    <section>
      <DrawersModal />
      <div className={styles.options}>
        <div className={styles.container}>
          <div className={styles.row}>
            {filters.map(({ name, label, ...rest }) => (
              <Select<FilterType>
                key={name}
                name={name}
                onChange={onChange}
                size="xl"
                label={label}
                {...rest}
              />
            ))}
          </div>
          <Select<FilterType>
            name="sort"
            label={sortFilter.label}
            onChange={onChange}
            options={sortFilter.options}
            position="bottom-right"
            size="xl"
          />
        </div>
      </div>
    </section>
  );
};
