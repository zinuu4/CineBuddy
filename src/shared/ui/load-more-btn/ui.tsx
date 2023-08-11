import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface ILoadMoreBtnProps {
  title: string;
  disabled?: boolean;
  hide?: boolean;
  onClick?: () => void;
}

export const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({
  title = 'Показать больше',
  onClick,
  hide,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      display: hide ? 'none' : 'block',
      visibility: hide ? 'hidden' : 'visible',
    }}
    className={classNames(
      'btn-reset',
      styles.btn,
      disabled ? styles.disabled : '',
    )}
  >
    {title}
  </button>
);
