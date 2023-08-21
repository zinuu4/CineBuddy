'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

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
      <Image
        src="/icons/common/back.svg"
        alt="Come back"
        width={24}
        height={24}
      />
    </Button>
  );
};
