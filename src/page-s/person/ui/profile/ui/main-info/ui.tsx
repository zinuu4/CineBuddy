import React from 'react';

import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

export const MainInfo = () => (
  <>
    <div className={styles.title}>
      <Title size="large" title="Марк Богатырев" />
    </div>
    <div className={styles.info}>
      <div className={styles.row}>
        <span className={styles.value}>Карьера:</span>
        <span className={styles.value}>Актер</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Дата рождения:</span>
        <span className={styles.value}>22 декабря 1984</span>
      </div>
    </div>
  </>
);
