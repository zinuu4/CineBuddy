/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

import { Drawer } from '@/shared/ui/drawer';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

type FilterType = 'rate' | 'genre' | 'release' | 'sort';

interface Option {
  label: string;
  value: string;
}

interface IFilters {
  label: string;
  name: FilterType;
  options: Option[];
}

interface IMoviesDrawerProps {
  filter: IFilters;
  name: string;
  onChange?: (value: string) => void;
}

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

  // TODO: refactor

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
      <div className={styles.content}>
        <Title title={filter.label} as="h5" className={styles.title} />
        <div className={styles.divider} />
        <ul className={styles.options}>
          {filter.options.map((option) => {
            const isSelected = option.value === queryValue;
            const nothingSelected = queryValue === null;

            return (
              <li
                key={option.value}
                className={classNames(styles.option, (isSelected || (nothingSelected && option.value === '')) && styles.selected)}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
                {(isSelected || (nothingSelected && option.value === '')) && (
                  <span className={styles.check}>
                    <FiCheck size={20} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Drawer>
  );
};
