'use client';

import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { VscSettings, VscClose } from 'react-icons/vsc';

import { createQueryString } from '@/shared/lib/helpers/create-query';
import { Button } from '@/shared/ui/btn-base';
import { Select } from '@/shared/ui/select';

import { initialFilter, FilterType, filters, sortFilter } from '../config';

import { MoviesDrawer } from './movies-drawer';

import styles from './styles.module.scss';

export const MoviesFilters: React.FC = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onChange = (value: string, name: FilterType) => {
    setFilter({
      ...filter,
      [name]: value,
    });

    if (searchParams) {
      router.push(
        `${pathname}?${createQueryString(name, value, searchParams)}`,
      );
    }
  };

  return (
    <section className={classNames(styles.root, isOpen && styles.open)}>
      <button onClick={() => setIsOpen(true)} className={styles.filtersBtn}>
        <VscSettings size={22} />
      </button>
      <div className={styles.drawersContainer}>
        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
          <VscClose size={17} />
        </button>
        <h3 className={styles.filtersHero}>Фильтры</h3>
        <div className={styles.col}>
          {[...filters, sortFilter].map((filterCategory) => (
            <MoviesDrawer
              key={filterCategory.name}
              filter={filterCategory}
              value={filter[filterCategory.name]}
              onChange={(value: string) => onChange(value, filterCategory.name)}
            />
          ))}
        </div>
        <Button className={styles.resultsBtn}>Показать результаты</Button>
      </div>
      <div className={styles.options}>
        <div className={styles.container}>
          <div className={styles.row}>
            {filters.map(({ name, ...rest }) => (
              <Select<FilterType>
                key={name}
                name={name}
                onChange={onChange}
                size="xl"
                {...rest}
              />
            ))}
          </div>
          <Select<FilterType>
            name="sort"
            label="Рекомендуемые"
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
