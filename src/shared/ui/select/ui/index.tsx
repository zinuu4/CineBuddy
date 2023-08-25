'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

import { useClickOutside } from '@/shared/lib/hooks/use-click-outside';
import { Icon } from '../../icon';

import { IOption, Size, Position } from '../config';

import styles from './styles.module.scss';

interface SelectorProps<T> {
  name: T;
  options: IOption[];
  position?: Position;
  label?: string;
  onChange?: (value: string, name: T) => void;
  className?: string;
  size?: Size;
}

export const Select = <T extends string | number>(props: SelectorProps<T>) => {
  const {
    name,
    options,
    onChange,
    label,
    className,
    position = 'bottom-left',
    size = 'sm',
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  const queryValue = searchParams?.get(name?.toString());

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleChange = (value: string) => {
    onChange?.(value, name);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option?.value === queryValue);

  return (
    <div
      className={classNames(styles.select, isOpen && styles.open, className)}
      ref={selectRef}
    >
      <div onClick={() => setIsOpen((prev) => !prev)} className={styles.label}>
        {name === 'sort' && (
          <Icon type="common" name="sort" className={styles.icon} />
        )}
        <span className={styles.value}>{selectedOption?.label ?? label}</span>
        <span className={styles.arrow}>
          <FiChevronDown />
        </span>
      </div>
      <div
        className={classNames(styles.options, styles[position], styles[size])}
      >
        {options.map((option) => {
          const isSelected = option.value === queryValue;
          const nothingSelected = queryValue === null;

          return (
            <div
              onClick={() => handleChange(option.value)}
              key={option.value}
              className={classNames(
                styles.option,
                (isSelected || (nothingSelected && option.value === '')) &&
                  styles.selected,
              )}
            >
              {option.label}
              {(isSelected || (nothingSelected && option.value === '')) && (
                <span className={styles.check}>
                  <FiCheck />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
