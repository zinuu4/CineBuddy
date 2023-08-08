import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface PeopleProps {
  director: string;
  actors: string[];
}

export const People: React.FC<PeopleProps> = ({ director, actors }) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <span className={styles.label}>Режиссер: </span>
      <ul className={classNames('list-reset', styles.list)}>
        <li className={styles.item}>
          <Link className={styles.link} href="/">
            {director}
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.row}>
      <span className={styles.label}>Актеры: </span>
      <ul className={classNames('list-reset', styles.list)}>
        {actors.map((actor) => (
          <li key={actor} className={styles.item}>
            <Link className={styles.link} href="/">
              {actor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
