/* eslint-disable import/order */

import classNames from 'classnames';
import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';

import { Button, Logo, Title } from '@/shared/ui';
import { filters, sortFilter } from '../../config';
import { useFilterChange } from '../../lib';

import { MoviesDrawer } from '../movies-drawer';
import { MovieDrawersTrigger } from './trigger-btn';

import styles from './styles.module.scss';

export const DrawersModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onChange } = useFilterChange();

  return (
    <>
      <MovieDrawersTrigger onClick={() => setIsOpen(true)} />
      <div
        className={classNames(styles.drawersContainer, isOpen && styles.open)}
      >
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
    </>
  );
};
