import classNames from 'classnames';
import Image from 'next/image';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

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
      <Image
        className={classNames(
          styles.img,
          isNext ? styles.nextImg : '',
          'btn-reset',
        )}
        src="/icons/common/chevron.svg"
        width={30}
        height={30}
        alt={isNext ? 'Вперед' : 'Назад'}
      />
    </button>
  ),
);
