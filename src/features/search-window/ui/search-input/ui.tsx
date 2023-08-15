import React, { FormEvent, useEffect, useRef } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/use-app-state';
import { Input } from '@/shared/ui/input';

import { setSearch } from '../../model/search-slice';

import styles from './styles.module.scss';

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
  };

  const handleClear = () => {
    dispatch(setSearch(''));
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        ref={inputRef}
        className={styles.input}
        placeholder="Фильмы, сериалы, мультфильмы"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        onClear={handleClear}
      />
    </form>
  );
};
