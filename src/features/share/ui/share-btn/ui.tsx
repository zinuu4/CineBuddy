import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/use-app-state';
import { Button } from '@/shared/ui/btn-base';

import { setShareModal } from '../../model';

import styles from './styles.module.scss';

interface IShareBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ShareBtn: React.FC<IShareBtnProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(setShareModal(true))}
      className={classNames(className, styles.btn)}
      stylesType="bg"
    >
      <Image
        src="/icons/common/share.svg"
        alt="Поделиться"
        width={20}
        height={20}
      />
    </Button>
  );
};
