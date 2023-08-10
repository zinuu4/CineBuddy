'use client';

import classNames from 'classnames';
import React from 'react';

import { FactsList } from '@/widgets/facts-list';
import { MoviesList } from '@/widgets/movies-list';
import { Title } from '@/shared/ui/title';
import { Profile } from './profile';

import styles from './styles.module.scss';

export const Person = () => (
  <>
    <section>
      <div
        className={classNames(
          'container container-narrow',
          styles.containerProfile,
        )}
      >
        <Profile />
      </div>
    </section>
    <section>
      <div
        className={classNames('container container-narrow', styles.container)}
      >
        <Title title="Фильмография" />
        <MoviesList narrow />
        <FactsList />
      </div>
    </section>
  </>
);
