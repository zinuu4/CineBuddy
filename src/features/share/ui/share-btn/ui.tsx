import classNames from 'classnames';
import React from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/use-app-state';
import { Button } from '@/shared/ui/btn-base';
import { Icon } from '@/shared/ui/icon';

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
      <Icon type="common" name="share" className={styles.icon} />
    </Button>
  );
};
