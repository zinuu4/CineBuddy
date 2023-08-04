"use client";

import React from "react";
import classNames from "classnames";
import { useSearchParams } from 'next/navigation';

import styles from "./moviesHeader.module.scss";
import MoviesFilters from '../moviesFilters/MoviesFilters';
import { genreOptions } from '../moviesFilters/MoviesFilters';

const MoviesHeader: React.FC = () => {
  const searchParams = useSearchParams();

  const genre = searchParams.get('genre');

  const selectedGenre = genreOptions.find(option => option.value === genre);

  return (
    <div className={classNames("container")}>
      <div className={styles.header}>
        <h2>Фильмы {genre && `: ${selectedGenre?.label}`}</h2>
        <MoviesFilters />
      </div>
    </div>
  );
};

export default MoviesHeader;
