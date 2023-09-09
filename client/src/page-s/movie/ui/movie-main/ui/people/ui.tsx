import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { IPersonInMovie } from '@/shared/api';
import { routes } from '@/shared/lib';

import { getActors, getDirector } from './lib';

import styles from './styles.module.scss';

interface PeopleProps {
  persons: IPersonInMovie[];
}

export const People: React.FC<PeopleProps> = ({ persons }) => {
  const items = [
    { label: 'Режиссёр', list: getDirector(persons ?? []) },
    { label: 'Актеры', list: getActors(persons ?? []) },
  ];

  return (
    <div className={styles.root}>
      {items.map(({ label, list }) => (
        <div key={label} className={styles.row}>
          <span className={styles.label}>{label}:</span>
          <ul className={classNames('list-reset', styles.list)}>
            {list.map((item, index) => {
              const name = item?.name ?? item?.enName;

              return (
                <li key={item?.id ?? index} className={styles.item}>
                  <Link className={styles.link} href={routes.person(item?.id)}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
