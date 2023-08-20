import { useEffect } from 'react';

interface IUseScrollProps {
  handleLoadMore: () => void;
  limit: number;
  total: number;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
}

export function useScroll({
  handleLoadMore,
  limit,
  total,
  isLoading,
  isError,
  isFetching,
}: IUseScrollProps) {
  const shouldLoadMore = !isLoading && !isError && !isFetching && limit < total;

  const onScroll = () => {
    const offset = window.innerHeight + window.pageYOffset;
    if (offset >= document.body.offsetHeight - 1 && shouldLoadMore) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError, isFetching, limit, total]);
}
