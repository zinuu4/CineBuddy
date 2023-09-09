'use client';

import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface IBtnBackProps {
  className?: string;
}

export const BtnBack: React.FC<IBtnBackProps> = ({ className }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      className={classNames(styles.btn, className)}
      onClick={handleGoBack}
    >
      <Icon name="back" />
    </Button>
  );
};
