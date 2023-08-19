import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

interface IShareBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ShareBtn: React.FC<IShareBtnProps> = ({ className }) => {
  const pathname = usePathname();
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Title of the shared content',
          text: 'Description of the shared content',
          url: pathname,
        });
      } else {
        console.log('Web Share API not supported.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Button className={className} onClick={handleShare} stylesType="bg">
      <Image
        src="/icons/common/share.svg"
        alt="Поделиться"
        width={20}
        height={20}
      />
    </Button>
  );
};
