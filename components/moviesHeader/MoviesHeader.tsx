"use client";

import React from "react";
import classNames from "classnames";
import { useParams } from 'next/navigation';

import styles from "./moviesHeader.module.scss";
import MoviesFilters from '../moviesFilters/MoviesFilters';

const MoviesHeader: React.FC = () => {
  const params = useParams();

  return (
    <div className={classNames("container")}>
      <div className={styles.header}>
        <h2>Фильмы {params.genre && `: ${params.genre}`}</h2>
        <MoviesFilters />
      </div>
    </div>
  );
};

export default MoviesHeader;
