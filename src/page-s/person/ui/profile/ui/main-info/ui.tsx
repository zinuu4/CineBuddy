import React from 'react';

import { IProfession } from '@/shared/api';
import { formatDate } from '@/shared/lib/helpers';
import { Title } from '@/shared/ui/title';
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
  const fomratedProfessions = getProfessions(profession);

  return (
    <>
      <div className={styles.title}>
        <Title size="large" title={name} className={styles.name} />
        {enName && <span className={styles.enName}>{enName}</span>}
      </div>
      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.value}>Карьера:</span>
          <span className={styles.value}>{fomratedProfessions}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.value}>Дата рождения:</span>
          <span className={styles.value}>{formatDate(birthday)}</span>
        </div>
      </div>
    </>
  );
};
