import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

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
    <Icon name="play" className={styles.icon} />
  </Button>
);
