import { usePathname } from 'next/navigation';
import React from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/use-app-state';
import { Modal } from '@/shared/ui/modal';
import { Title } from '@/shared/ui/title';

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
      containerClassName={styles.container}
      modalClassName={styles.modal}
    >
      <div className={styles.content}>
        <Title className={styles.title} title="Поделиться" />
        <ShareBtns url={`${process.env.APP_BASE_URL}${pathname}`} />
        <CopyBtn />
      </div>
    </Modal>
  );
};
