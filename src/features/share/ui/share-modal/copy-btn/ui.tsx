import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

import styles from './styles.module.scss';

export const CopyBtn = () => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.APP_BASE_URL}${pathname}`,
      );
      setCopied(true);
      toast('Успешно скопировано ✅', {
        theme: 'light',
        autoClose: 5000,
        position: 'top-right',
      });
      setTimeout(() => {
        setCopied(false);
      }, 6000);
    } catch (error) {
      toast('Что-то пошло не так', {
        theme: 'dark',
        autoClose: 5000,
        position: 'top-right',
      });
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={classNames('btn-reset', styles.copy)}
    >
      <span className={styles.icon}>
        <IoCopyOutline size={20} />
      </span>
      {copied ? 'Скопировано' : 'Копировать ссылку'}
    </button>
  );
};
