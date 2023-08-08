'use client';

import classNames from 'classnames';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { MoviesSlider } from '@/widgets/movies-slider';
import { ICategoriesApiProps, useGetMoviesQuery } from '@/entities/movie/api';

import { Loader } from '@/shared/ui/loader';
import { TitleChevron } from '@/shared/ui/title-chevron';

import styles from './styles.module.scss';

interface CategoriesListItemProps {
  title: string;
  params: ICategoriesApiProps;
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = ({
  params,
  title,
}) => {
  const { data, error } = useGetMoviesQuery(params);

  const sliderData = data?.movies ? data.movies : [];

  const notify = () =>
    toast('Something went wrong. Network error', {
      theme: 'dark',
      autoClose: 5000,
      position: 'top-right',
    });

  useEffect(() => {
    if (error) notify();
  }, [error]);

  return (
    <section>
      <div className={classNames(styles.container, 'container')}>
        <TitleChevron title={title} />
        {data ? <MoviesSlider data={sliderData} /> : <Loader />}
      </div>
    </section>
  );
};
