import React from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Modal, Title } from '@/shared/ui';

import { setSearchWindow } from '../model';
import { SearchInput } from './search-input';
import { SearchList } from './search-list';

import styles from './styles.module.scss';

export const SearchWindow = () => {
  const { searchWindow } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <Modal
      containerClassName={styles.container}
      onClose={() => dispatch(setSearchWindow(false))}
      isOpen={searchWindow}
      wrapperClose={false}
      modalClassName={styles.modal}
      closeClassName={styles.close}
      darkBg
    >
      <Title size="xl" title="Поиск" className={styles.title} />
      <SearchInput />
      <SearchList />
    </Modal>
  );
};
