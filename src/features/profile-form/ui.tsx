import React from 'react';

import { IProfile } from '@/shared/api';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import styles from './styles.module.scss';

interface ProfileFormProps {
  data: IProfile
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ data }) => {
  const { email, name, surname } = data;

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <Label htmlFor="firstname">Имя</Label>
        <Input
          className={styles.fieldInput}
          placeholder="Ваше имя"
          type="text"
          id="firstname"
          value={name}
          disabled
        />
      </div>
      <div className={styles.field}>
        <Label htmlFor="surname">Фамилия</Label>
        <Input
          className={styles.fieldInput}
          placeholder="Ваша фамилия"
          type="text"
          id="surname"
          value={surname}
          disabled
        />
      </div>
      <div className={styles.field}>
        <Label htmlFor="email">Почта</Label>
        <Input
          className={styles.fieldInput}
          placeholder="Ваша почта"
          type="email"
          id="email"
          value={email}
          disabled
        />
      </div>
    </div>
  );
};
