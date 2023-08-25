import classNames from 'classnames';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { Icon } from '@/shared/ui/icon';

import styles from './styles.module.scss';

interface INavBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isNext?: boolean;
}

export const NavBtn = forwardRef<HTMLButtonElement, INavBtnProps>(
  ({ isNext, ...props }, ref) => (
    <button
      className={classNames(
        styles.btn,
        isNext ? styles.nextBtn : styles.prevBtn,
        'btn-reset',
      )}
      {...props}
      ref={ref}
    >
      <Icon
        className={isNext ? styles.nextImg : ''}
        type="common"
        name="chevron"
      />
    </button>
  ),
);
