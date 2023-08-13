/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

import { Drawer } from '@/shared/ui/drawer';

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

interface MoviesDrawerProps {
  filter: IFilters;
  value: string;
  onChange?: (value: string) => void;
}

export const MoviesDrawer: React.FC<MoviesDrawerProps> = ({
  filter,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: string) => {
    onChange?.(value);
    setIsOpen(false);
  };

  const selectedOption =
    filter.options.find((option) => option.value === value) ??
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
        <h5 className={styles.filterName}>{filter.label}</h5>
        <div className={styles.divider} />
        <ul className={styles.options}>
          {filter.options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                className={classNames(styles.option, isSelected && styles.selected)}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
                {isSelected && (
                  <span className={styles.check}>
                    <FiCheck />
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
