'use client';

import React from 'react';
import { CiVolumeHigh } from 'react-icons/ci';
import { Button } from '../btn-base';
import styles from './styles.module.scss';

interface IVolumeButtonProps {
  onClick: () => void;
}

export const VolumeButton: React.FC<IVolumeButtonProps> = ({ onClick }) => (
  <Button
    onClick={onClick}
    className={styles.button}
  >
    <CiVolumeHigh size={24} />
  </Button>
);
