import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

interface IShareBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ShareBtn: React.FC<IShareBtnProps> = ({ className }) => (
  <Button className={className} stylesType="bg">
    <Image
      src="/icons/common/share.svg"
      alt="Поделиться"
      width={20}
      height={20}
    />
  </Button>
);
