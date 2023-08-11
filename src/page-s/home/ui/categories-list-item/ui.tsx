'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { MoviesSlider } from '@/widgets/movies-slider';
import { ICategoriesApiProps, useGetMoviesQuery } from '@/entities/movie/api';
import { createQueryString } from '@/shared/lib/helpers';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';
import { Title } from '@/shared/ui/title';

import styles from './styles.module.scss';

interface CategoriesListItemProps {
  params: ICategoriesApiProps;
  title: string;
  queryName: string;
  queryValue: string;
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = ({
  params,
  title,
  queryName,
  queryValue,
}) => {
  const { data, isError } = useGetMoviesQuery(params);

  const sliderData = data?.movies ? data.movies : [];

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChooseCategory = () => {
    if (searchParams) {
      router.push(
        `${pathname}films?${createQueryString(
          queryName,
          queryValue,
          searchParams,
        )}`,
      );
    }
  };

  return (
    <section>
      <div className={classNames(styles.container, 'container')}>
        <div onClick={onChooseCategory}>
          <Title
            href="/films"
            chevron
            as={Link}
            title={title}
          />
        </div>
        {data ? <MoviesSlider data={sliderData} /> : <Loader />}
      </div>
    </section>
  );
};
