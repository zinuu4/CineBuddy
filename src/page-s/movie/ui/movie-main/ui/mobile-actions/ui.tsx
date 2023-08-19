/* eslint-disable import/order */
import React from 'react';

import { SaveBtn } from '@/features/save-movie';
import { ShareBtn } from '@/features/share-btn';

import { TrailerBtn } from './ui/trailer-btn';

import styles from './styles.module.scss';

interface IMobileActionsProps {
  setYouTubePlayer: (arg: boolean) => void;
  id: number;
  name: string;
  rating: number;
  length: number;
  year: number;
}

export const MobileActions: React.FC<IMobileActionsProps> = ({
  setYouTubePlayer,
  id,
  name,
  rating,
  length,
  year,
}) => (
  <div className={styles.root}>
    <div className={styles.item}>
      <TrailerBtn setYouTubePlayer={setYouTubePlayer} className={styles.btn} />
      <span className={styles.label}>Трейлер</span>
    </div>
    <div className={styles.item}>
      <SaveBtn
        btnClassName={styles.btn}
        movie={{ name, rating, id, movieLength: length, year }}
        label
      />
    </div>
    <div className={styles.item}>
      <ShareBtn className={styles.btn} />
      <span className={styles.label}>Поделиться</span>
    </div>
  </div>
);
