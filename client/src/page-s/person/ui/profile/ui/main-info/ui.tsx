import React from 'react';

import { IProfession } from '@/shared/api';
import { formatDate } from '@/shared/lib';
import { Title } from '@/shared/ui';
import { getProfessions } from '../../lib';

import styles from './styles.module.scss';

interface IMainInfoProps {
  name: string;
  birthday: string;
  profession: IProfession[];
  enName: string;
}

export const MainInfo: React.FC<IMainInfoProps> = ({
  name,
  birthday,
  profession,
  enName,
}) => {
  const formattedProfessions = getProfessions(profession);

  return (
    <>
      <div className={styles.title}>
        <Title size="large" title={name} className={styles.name} />
        {enName && <span className={styles.enName}>{enName}</span>}
      </div>
      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.value}>Карьера:</span>
          <span className={styles.value}>{formattedProfessions}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.value}>Дата рождения:</span>
          <span className={styles.value}>{formatDate(birthday)}</span>
        </div>
      </div>
    </>
  );
};
