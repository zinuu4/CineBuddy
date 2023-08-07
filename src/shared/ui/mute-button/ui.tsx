'use client';

import React from 'react';
import { CiVolumeMute } from 'react-icons/ci';
import { Button } from '../button';
import styles from './styles.module.scss';

interface IMuteButtonProps {
  onClick: () => void;
}

export const MuteButton: React.FC<IMuteButtonProps> = ({ onClick }) => (
  <Button
    onClick={onClick}
    className={styles.button}
  >
    <CiVolumeMute size={24} />
  </Button>
);
