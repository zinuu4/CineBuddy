'use client';

import classNames from 'classnames';
import React, { useEffect } from 'react';

import { FactsList } from '@/widgets/facts-list';
import { BtnBack } from '@/features/back-btn';
import { ErrorMsg, Loader } from '@/shared/ui';

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
            styles.container,
          )}
        >
          <BtnBack className={styles.back} />
          <Profile
            photo={data?.photo ?? ''}
            name={data?.name ?? ''}
            birthday={data?.birthday ?? ''}
            profession={data?.profession ?? []}
            enName={data?.enName ?? ''}
          />
        </div>
      </section>
      <PersonMoviesList
        movies={data?.movies ?? []}
        className={styles.container}
      />
      <section>
        <div
          className={classNames('container container-narrow', styles.container)}
        >
          {data?.facts && data?.facts?.length >= 1 && (
            <FactsList facts={data.facts} />
          )}
        </div>
      </section>
    </>
  ) : (
    <Loader />
  );
};
