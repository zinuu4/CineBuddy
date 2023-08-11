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

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  return (
    <>
      {isFetching || isLoading ? (
        <Loader />
      ) : (
        <>
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
            id={data?.id ?? 0}
            name={data?.name ?? ''}
            isSeries={data?.isSeries ?? false}
            seasons={data?.seasonsInfo?.length}
          />
          {data?.description && <MovieTabs description={data.description} />}
          {data?.similarMovies && data?.similarMovies?.length > 0 && (
            <SimilarMoviesList movies={data.similarMovies} />
          )}
          {data?.persons && data?.persons?.length > 0 && (
            <PersonsList persons={data.persons} />
          )}
          {data?.facts && data?.facts?.length > 0 && (
            <FactsList facts={data.facts} />
          )}
        </>
      )}
    </>
  );
};
