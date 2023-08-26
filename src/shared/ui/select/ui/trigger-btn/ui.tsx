import classNames from 'classnames';
import React from 'react';

import { Icon } from '@/shared/ui';

import { IOption } from '../../config';

import styles from './styles.module.scss';

interface ISelectTrigger {
  onClick: () => void;
  name: string | number;
  selectedOption?: IOption;
  label: string | number;
  isOpen: boolean;
}

export const SelectTrigger: React.FC<ISelectTrigger> = ({
  onClick,
  name,
  selectedOption,
  label,
  isOpen,
}) => (
  <div onClick={onClick} className={styles.label}>
    {name === 'sort' && (
      <Icon type="common" name="sort" className={styles.sort} />
    )}
    <span className={styles.value}>{selectedOption?.label ?? label}</span>
    <span className={classNames(styles.arrow, isOpen && styles.open)}>
      <Icon type="common" name="chevron" className={styles.chevron} />
    </span>
  </div>
);
