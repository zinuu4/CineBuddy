import React from 'react';

import { Modal } from '@/shared/ui/modal';
import { Title } from '@/shared/ui/title';

import { SearchInput } from './search-input';

import styles from './styles.module.scss';

interface ISearchWindowProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const SearchWindow: React.FC<ISearchWindowProps> = ({
  isOpen,
  setIsOpen,
}) => (
  <Modal
    containerClassName={styles.container}
    onClose={() => setIsOpen(false)}
    isOpen={isOpen}
    wrapperClose={false}
    modalClassName={styles.modal}
    closeClassName={styles.close}
    darkBg
  >
    <Title size="xl" title="Поиск" className={styles.title} />
    <SearchInput />
  </Modal>
);
