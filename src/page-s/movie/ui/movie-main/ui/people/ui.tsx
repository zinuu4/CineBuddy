import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { IPersonInMovie } from '@/shared/api';
import { routes } from '@/shared/lib/routing';

import styles from './styles.module.scss';

interface PeopleProps {
  persons: IPersonInMovie[];
}

export const People: React.FC<PeopleProps> = ({ persons }) => {
  const [directors, setDirectors] = useState<IPersonInMovie[]>([]);
  const [actors, setActors] = useState<IPersonInMovie[]>([]);

  useEffect(() => {
    setDirectors(
      persons.filter(({ enProfession }) => enProfession === 'director'),
    );
    setActors(persons.filter(({ enProfession }) => enProfession === 'actor'));
  }, [persons]);

  const shortActors = actors.slice(0, 3);

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <span className={styles.label}>Режиссер: </span>
        <ul className={classNames('list-reset', styles.list)}>
          <li className={styles.item}>
            <Link
              className={styles.link}
              href={`${routes.person}/${directors[0] && directors[0].id}`}
            >
              {directors[0] && directors[0].name}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Актеры: </span>
        <ul className={classNames('list-reset', styles.list)}>
          {shortActors.map(({ name, id }) => (
            <li key={name} className={styles.item}>
              <Link className={styles.link} href={`${routes.person}/${id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
