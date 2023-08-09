'use client';

import classNames from 'classnames';
import React, { useEffect } from 'react';

import { MoviesSlider } from '@/widgets/movies-slider';
import { ICategoriesApiProps, useGetMoviesQuery } from '@/entities/movie/api';

import { ErrorMsg } from '@/shared/ui/error-msg';
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
  const { data, isError } = useGetMoviesQuery(params);

  const sliderData = data?.movies ? data.movies : [];

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  return (
    <section>
      <div className={classNames(styles.container, 'container')}>
        <TitleChevron title={title} />
        {data ? <MoviesSlider data={sliderData} /> : <Loader />}
      </div>
    </section>
  );
};
