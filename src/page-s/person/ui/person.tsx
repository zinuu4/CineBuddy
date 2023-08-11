'use client';

import classNames from 'classnames';
import React, { useEffect } from 'react';

import { FactsList } from '@/widgets/facts-list';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';
import { Title } from '@/shared/ui/title';

import { useGetPersonQuery } from '../api';
import { PersonMoviesList } from './movies-list';
import { Profile } from './profile';

import styles from './styles.module.scss';

interface IPersonProps {
  id: string;
}

export const Person: React.FC<IPersonProps> = ({ id }) => {
  const { data, isFetching, isLoading, isError } = useGetPersonQuery({
    id: +id,
  });

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  return !isFetching && !isLoading ? (
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
          className={classNames(
            'container container-narrow',
            styles.containerMovies,
          )}
        >
          <Title title={`Фильмография (${data?.movies?.length ?? 0})`} />
          <PersonMoviesList movies={data?.movies ?? []} />
        </div>
      </section>
      <section>
        <div
          className={classNames(
            'container container-narrow',
            styles.containerFacts,
          )}
        >
          <FactsList facts={data?.facts ?? []} />
        </div>
      </section>
    </>
  ) : (
    <Loader />
  );
};
