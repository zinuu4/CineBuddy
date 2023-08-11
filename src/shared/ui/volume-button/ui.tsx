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
}) => (
  <Button
    onClick={onClick}
    className={styles.button}
  >
    {isMuted ? <CiVolumeMute size={24} /> : <CiVolumeHigh size={24} />}
  </Button>
);
