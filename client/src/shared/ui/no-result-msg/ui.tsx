import React from 'react';

import { Title } from '../title';

import styles from './styles.module.scss';

export const NoResultsMessage = () => (
  <>
    <Title className={styles.title} size="small" title="Ничего не нашлось" />
    <p className={styles.desc}>
      Может быть, вы ищете то, чего пока нет в каталоге
    </p>
  </>
);
