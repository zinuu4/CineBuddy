import classNames from 'classnames';
import React from 'react';

import { useAppDispatch } from '@/shared/lib';
import { Button, Icon } from '@/shared/ui';

import { setShareModal } from '../../model';

import styles from './styles.module.scss';

interface IShareBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  round?: boolean;
}

export const ShareBtn: React.FC<IShareBtnProps> = ({ className, round }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(setShareModal(true))}
      className={classNames(className, round ? styles.round : '')}
      stylesType="bg"
    >
      <Icon name="share" className={styles.icon} />
    </Button>
  );
};
