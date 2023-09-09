import React from 'react';

import { IProfile } from '@/shared/api';
import { Avatar, Label } from '@/shared/ui';
import { SignOutBtn } from './sign-out';

import styles from './styles.module.scss';

export const ProfileForm: React.FC<IProfile> = ({ name, email, photo }) => (
  <div className={styles.container}>
    <div className={styles.field}>
      <Avatar photo={photo} name={name} />
    </div>
    <div className={styles.field}>
      <Label htmlFor="firstname">Имя</Label>
      <input
        className={styles.input}
        placeholder="Ваше имя"
        type="text"
        id="firstname"
        value={name}
        disabled
      />
    </div>
    <div className={styles.field}>
      <Label htmlFor="email">Почта</Label>
      <input
        className={styles.input}
        placeholder="Ваша почта"
        type="email"
        id="email"
        value={email}
        disabled
      />
    </div>
    <div className={styles.field}>
      <SignOutBtn />
    </div>
  </div>
);
