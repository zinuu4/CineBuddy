import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Input } from '@/shared/ui/input';

import styles from './styles.module.scss';

export const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        ref={inputRef}
        className={styles.input}
        placeholder="Фильмы, сериалы, мультфильмы"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={handleClear}
      />
    </form>
  );
};
