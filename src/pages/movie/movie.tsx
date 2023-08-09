'use client';

import { useGetMovieQuery } from './api';
import { FactsList } from './ui/facts-list';
import { MovieMain } from './ui/movie-main';
import { PersonsList } from './ui/persons-list';
import { SimilarMoviesList } from './ui/similar-movies';
import { MovieTabs } from './ui/tabs/ui';

interface IMovieProps {
  id: string;
}

export default function Movie({ id }: IMovieProps) {
  const { data } = useGetMovieQuery({ id: +id });

  // prettier-ignore
  return (
    <>
      {data?.backdrop?.url
      && data?.logo?.url
      && data?.countries
      && data?.genres && data?.id && (
      <MovieMain
        backdrop={data.backdrop.url}
        logo={data.logo.url}
        rating={data?.rating?.kp ?? 0}
        year={data?.year ?? 0}
        genre={data?.genres[0].name ?? ''}
        ageRestriction={data?.ageRating ?? 0}
        country={data?.countries[0].name ?? ''}
        length={data?.movieLength ?? 0}
        shortDescription={data?.shortDescription ?? ''}
        persons={data?.persons ?? []}
        trailers={data?.videos?.trailers ?? []}
        id={data.id}
      />
        )}
      {data?.description && <MovieTabs description={data.description} />}
      {data?.similarMovies && <SimilarMoviesList movies={data.similarMovies} />}
      {data?.persons && <PersonsList persons={data.persons} />}
      {data?.facts && <FactsList facts={data.facts} />}
    </>
  );
}
