import React from 'react';

import { MainInfo } from './main-info';
import { Photo } from './photo';

import styles from './styles.module.scss';

export const Profile = () => (
  <div className={styles.profile}>
    <Photo />
    <MainInfo />
  </div>
);
