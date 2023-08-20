import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { useGetSearchMoviesQuery } from '@/features/search-window/api';
import { filterMovies } from '@/features/search-window/lib';
import { useAppSelector } from '@/shared/lib/hooks/use-app-state';
import { ErrorMsg } from '@/shared/ui/error-msg';
import { Loader } from '@/shared/ui/loader';
import { Title } from '@/shared/ui/title';

import { SearchItem } from './search-item';

import styles from './styles.module.scss';

export const SearchList = () => {
  const { search } = useAppSelector((state) => state.search);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 650);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const {
    data: movies,
    isLoading,
    isFetching,
    isError,
  } = useGetSearchMoviesQuery({
    limit: 30,
    query: debouncedSearch,
  });

  useEffect(() => {
    ErrorMsg(isError);
  }, [isError]);

  const filteredMovies = filterMovies(movies ?? []);

  const NoResultsMessage = (
    <>
      <Title className={styles.title} size="small" title="Ничего не нашлось" />
      <p className={styles.desc}>
        Может быть, вы ищете то, чего пока нет в каталоге
      </p>
    </>
  );

  if (debouncedSearch.length === 0) return;

  if (!isLoading && !filteredMovies?.length) return NoResultsMessage;

  const SearchList = (
    <ul className={classNames('list-reset', styles.list)}>
      {filteredMovies &&
        filteredMovies.length >= 1 &&
        filteredMovies.map((item, index) => (
          <SearchItem key={item?.id ?? index} item={item ?? {}} />
        ))}
    </ul>
  );

  const LoadingMsg = (
    <div className={styles.loader}>
      <Loader />
    </div>
  );

  return isLoading || isFetching ? LoadingMsg : SearchList;
};
