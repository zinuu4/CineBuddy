import classNames from 'classnames';
import React from 'react';
import { IoCopyOutline } from 'react-icons/io5';

import { useCopyToClipboard } from '@/features/share/lib';

import styles from './styles.module.scss';

export const CopyBtn = () => {
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <button
      onClick={copy}
      disabled={isCopied}
      className={classNames('btn-reset', styles.copy)}
    >
      <span className={styles.icon}>
        <IoCopyOutline size={20} />
      </span>
      {isCopied ? 'Скопировано' : 'Копировать ссылку'}
    </button>
  );
};
