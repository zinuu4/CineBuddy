'use client';

import classNames from 'classnames';
import React, { useEffect } from 'react';

import { FactsList } from '@/widgets/facts-list';
import { BtnBack } from '@/features/back-btn';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';

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
  console.log(data);

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
          <BtnBack />
          <Profile
            photo={data?.photo ?? ''}
            name={data?.name ?? ''}
            birthday={data?.birthday ?? ''}
            profession={data?.profession ?? []}
            enName={data?.enName ?? ''}
          />
        </div>
      </section>
      <PersonMoviesList movies={data?.movies ?? []} />
      <section>
        <div
          className={classNames(
            'container container-narrow',
            styles.containerFacts,
          )}
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
