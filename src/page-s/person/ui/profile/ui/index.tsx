import React from 'react';

import { IProfession } from '@/shared/api';

import { MainInfo } from './main-info';
import { Photo } from './photo';

import styles from './styles.module.scss';

interface IProfileProps {
  photo: string;
  name: string;
  birthday: string;
  profession: IProfession[];
}

export const Profile: React.FC<IProfileProps> = ({
  photo,
  name,
  birthday,
  profession,
}) => (
  <div className={styles.profile}>
    <Photo photo={photo} name={name} />
    <MainInfo name={name} birthday={birthday} profession={profession} />
  </div>
);
