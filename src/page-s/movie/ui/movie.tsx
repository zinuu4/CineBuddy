/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useEffect } from 'react';

import { FactsList } from '@/widgets/facts-list';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';
import { useGetMovieQuery } from '../api';
import { MovieMain } from './movie-main';
import { PersonsList } from './persons-list';
import { SimilarMoviesList } from './similar-movies';
import { MovieTabs } from './tabs/ui';

interface IMovieProps {
  id: string;
}

export const Movie = ({ id }: IMovieProps) => {
  const { data, isFetching, isLoading, isError } = useGetMovieQuery({
    id: +id,
  });
  console.log(data);

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  // prettier-ignore
  return (
    <>
      {isFetching || isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.id && (
            <MovieMain
              backdrop={data?.backdrop?.url ?? ''}
              logo={data?.logo?.url ?? ''}
              rating={data?.rating?.kp ?? 0}
              year={data?.year ?? 0}
              genre={data?.genres ? data?.genres[0]?.name ?? '' : ''}
              ageRestriction={data?.ageRating ?? 0}
              country={data?.countries ? data?.countries[0]?.name ?? '' : ''}
              length={data?.movieLength ?? 0}
              shortDescription={data?.shortDescription ?? ''}
              persons={data?.persons ?? []}
              trailers={data?.videos?.trailers ?? []}
              id={data.id}
              name={data?.name ?? ''}
              isSeries={data?.isSeries}
              seasons={data?.seasonsInfo?.length}
            />
            )}
          {data?.description && <MovieTabs description={data.description} />}
          {data?.similarMovies && (
            <SimilarMoviesList movies={data.similarMovies} />
          )}
          {data?.persons && <PersonsList persons={data.persons} />}
          {data?.facts && <FactsList facts={data.facts} />}
        </>
      )}
    </>
  );
};