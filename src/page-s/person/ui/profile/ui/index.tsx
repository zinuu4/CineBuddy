import React from 'react';

import { IProfession } from '@/shared/api';

import { Avatar } from '@/shared/ui/avatar';
import { MainInfo } from './main-info';

import styles from './styles.module.scss';

interface IProfileProps {
  photo: string;
  name: string;
  birthday: string;
  profession: IProfession[];
  enName: string;
}

export const Profile: React.FC<IProfileProps> = ({
  photo,
  name,
  birthday,
  profession,
  enName,
}) => (
  <div className={styles.profile}>
    <Avatar photo={photo} name={name} />
    <MainInfo
      name={name}
      enName={enName}
      birthday={birthday}
      profession={profession}
    />
  </div>
);
