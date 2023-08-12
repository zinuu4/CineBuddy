import React from 'react';

import { IProfile } from '@/shared/api';
import { Avatar } from '@/shared/ui/avatar';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { SignOutBtn } from './sign-out';

import styles from './styles.module.scss';

export const ProfileForm: React.FC<IProfile> = ({ name, email, photo }) => (
  <div className={styles.container}>
    <div className={styles.field}>
      <Avatar photo={photo} name={name} />
    </div>
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
    <div className={styles.field}>
      <SignOutBtn />
    </div>
  </div>
);
