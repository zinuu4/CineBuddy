/* eslint-disable import/order */

'use client';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import React, { useState, useRef } from 'react';

import { useClickOutside } from '@/shared/lib';

import { IOption, Size, Position } from '../config';
import { SelectOptions } from './options';
import { SelectTrigger } from './trigger-btn';

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
    <div className={classNames(styles.select, className)} ref={selectRef}>
      <SelectTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        selectedOption={selectedOption}
        label={label ?? ''}
        name={name}
        isOpen={isOpen}
      />
      <SelectOptions
        options={options}
        position={position}
        size={size}
        queryValue={queryValue ?? ''}
        onClick={handleChange}
        isOpen={isOpen}
      />
    </div>
  );
};
