import classNames from 'classnames';
import React from 'react';

import { Icon } from '@/shared/ui';
import { IOption, Position, Size } from '../../config';

import styles from './styles.module.scss';

interface ISelectOptionsProps {
  options: IOption[];
  position: Position;
  size: Size;
  queryValue: string;
  onClick: (value: string) => void;
  isOpen: boolean;
}

export const SelectOptions: React.FC<ISelectOptionsProps> = ({
  options,
  position,
  size,
  queryValue,
  onClick,
  isOpen,
}) => (
  <div
    className={classNames(
      styles.options,
      styles[position],
      styles[size],
      isOpen && styles.open,
    )}
  >
    {options.map((option) => {
      const isSelected = option.value === queryValue;
      const nothingSelected = queryValue === null;

      return (
        <div
          onClick={() => onClick(option.value)}
          key={option.value}
          className={classNames(
            styles.option,
            (isSelected || (nothingSelected && option.value === '')) &&
              styles.selected,
          )}
        >
          {option.label}
          {(isSelected || (nothingSelected && option.value === '')) && (
            <Icon name="check" className={styles.check} />
          )}
        </div>
      );
    })}
  </div>
);
