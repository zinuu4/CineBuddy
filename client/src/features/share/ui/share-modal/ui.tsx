'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Modal, Title } from '@/shared/ui';

import { setShareModal } from '../../model';
import { CopyBtn } from './copy-btn';
import { ShareBtns } from './share-btns';

import styles from './styles.module.scss';

export const ShareModal = () => {
  const dispatch = useAppDispatch();
  const { shareModal } = useAppSelector((state) => state.shareModal);

  const pathname = usePathname();

  return (
    <Modal
      isOpen={shareModal}
      onClose={() => dispatch(setShareModal(false))}
      containerClassName={classNames(
        styles.container,
        shareModal && styles.done,
      )}
      modalClassName={styles.modal}
      close={false}
    >
      <div className={styles.content}>
        <Title className={styles.title} title="Поделиться" />
        <ShareBtns url={`https://cine-buddy.vercel.app${pathname}`} />
        <CopyBtn />
      </div>
    </Modal>
  );
};
