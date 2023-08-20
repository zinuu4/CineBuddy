import classNames from 'classnames';
import React from 'react';
import { IoCopyOutline } from 'react-icons/io5';

import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/use-app-state';
import { Modal } from '@/shared/ui/modal';
import { Title } from '@/shared/ui/title';

import { setShareModal } from '../../model';

import styles from './styles.module.scss';

export const ShareModal = () => {
  const dispatch = useAppDispatch();
  const { shareModal } = useAppSelector((state) => state.shareModal);

  return (
    <Modal
      isOpen={shareModal}
      onClose={() => dispatch(setShareModal(false))}
      containerClassName={styles.container}
      modalClassName={styles.modal}
    >
      <div className={styles.content}>
        <Title className={styles.title} title="Поделиться" />
        <div className={styles.btns}>
          <IoCopyOutline size={20} />
          <IoCopyOutline size={20} />
          <IoCopyOutline size={20} />
          <IoCopyOutline size={20} />
          <IoCopyOutline size={20} />
        </div>
        <button className={classNames('btn-reset', styles.copy)}>
          <span className={styles.icon}>
            <IoCopyOutline size={20} />
          </span>
          Копировать ссылку
        </button>
      </div>
    </Modal>
  );
};
