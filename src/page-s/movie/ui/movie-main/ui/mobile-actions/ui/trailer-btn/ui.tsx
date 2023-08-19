import Image from 'next/image';
import React from 'react';

import { Button } from '@/shared/ui/btn-base';

interface ITrailerBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setYouTubePlayer: (arg: boolean) => void;
  className?: string;
}

export const TrailerBtn: React.FC<ITrailerBtnProps> = ({
  setYouTubePlayer,
  className,
}) => (
  <Button
    onClick={() => setYouTubePlayer(true)}
    className={className}
    stylesType="bg"
  >
    <Image src="/icons/common/play.svg" alt="Трейлер" width={20} height={20} />
  </Button>
);
