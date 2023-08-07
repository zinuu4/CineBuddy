import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface ILoadMoreBtnProps {
  title?: string;
  isLoading: boolean;
  isError: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({
  title = 'Показать больше',
  onClick,
  isLoading,
  isError,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(
      'btn-reset',
      styles.btn,
      isLoading || isError ? styles.disabled : '',
    )}
  >
    {title}
  </button>
);
