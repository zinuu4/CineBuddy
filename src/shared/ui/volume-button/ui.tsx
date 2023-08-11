'use client';

import React from 'react';
import { CiVolumeHigh, CiVolumeMute } from 'react-icons/ci';
import { Button } from '../btn-base';
import styles from './styles.module.scss';

interface IVolumeButtonProps {
  onClick: () => void;
  isMuted: boolean;
}

export const VolumeButton: React.FC<IVolumeButtonProps> = ({
  onClick,
  isMuted,
}) => {
  if (isMuted) {
    return (
      <Button
        onClick={onClick}
        className={styles.button}
      >
        <CiVolumeMute size={24} />
      </Button>
    );
  }
  return (
    <Button
      onClick={onClick}
      className={styles.button}
    >
      <CiVolumeHigh size={24} />
    </Button>
  );
};
