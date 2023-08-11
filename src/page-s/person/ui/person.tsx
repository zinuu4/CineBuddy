'use client';

import classNames from 'classnames';
import React from 'react';

import { Title } from '@/shared/ui/title';

import { useGetPersonQuery } from '../api';
import { PersonMoviesList } from './movies-list';
import { Profile } from './profile';

import styles from './styles.module.scss';

interface IPersonProps {
  id: string;
}

export const Person: React.FC<IPersonProps> = ({ id }) => {
  const { data } = useGetPersonQuery({ id: +id });
  console.log(data);

  return (
    <>
      <section>
        <div
          className={classNames(
            'container container-narrow',
            styles.containerProfile,
          )}
        >
          <Profile
            photo={data?.photo ?? ''}
            name={data?.name ?? ''}
            birthday={data?.birthday ?? ''}
            profession={data?.profession ?? []}
          />
        </div>
      </section>
      <section>
        <div
          className={classNames('container container-narrow', styles.container)}
        >
          <Title title={`Фильмография (${data?.movies?.length ?? 0})`} />
          <PersonMoviesList movies={data?.movies ?? []} />
        </div>
      </section>
    </>
  );
};
