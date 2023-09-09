/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import classNames from 'classnames';
import React from 'react';

import { Icon, Title } from '@/shared/ui';

import { IFilters } from '../../config';

import styles from './styles.module.scss';

interface IDrawerModalProps {
  filter: IFilters;
  onClick: (value: string) => void;
  queryValue: string | number;
}

export const DrawerOptions: React.FC<IDrawerModalProps> = ({
  filter,
  onClick,
  queryValue,
}) => (
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
            className={classNames(
              styles.option,
              (isSelected || (nothingSelected && option.value === '')) &&
                styles.selected,
            )}
            onClick={() => onClick(option.value)}
          >
            {option.label}
            {(isSelected || (nothingSelected && option.value === '')) && (
              <Icon name="check" className={styles.check} />
            )}
          </li>
        );
      })}
    </ul>
  </div>
);
