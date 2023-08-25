'use client';

import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { VscSettings, VscClose } from 'react-icons/vsc';

import { createQueryString } from '@/shared/lib';
import { Button, Title, Select, Logo } from '@/shared/ui';

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

  // TODO: refactor

  return (
    <section className={classNames(styles.root, isOpen && styles.open)}>
      <Button onClick={() => setIsOpen(true)} className={styles.triggerBtn}>
        <VscSettings size={23} />
      </Button>
      <div className={styles.drawersContainer}>
        <div className={styles.header}>
          <Logo />
          <Button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
            <VscClose size={30} />
          </Button>
        </div>
        <Title title="Фильтры" className={styles.title} />
        <div className={styles.col}>
          {[...filters, sortFilter].map((filterCategory) => (
            <MoviesDrawer
              key={filterCategory.name}
              filter={filterCategory}
              name={filterCategory.name}
              onChange={(value: string) => onChange(value, filterCategory.name)}
            />
          ))}
        </div>
        <Button className={styles.resultsBtn} onClick={() => setIsOpen(false)}>
          Показать результаты
        </Button>
      </div>
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
