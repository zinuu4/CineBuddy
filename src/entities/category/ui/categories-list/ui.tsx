import React from "react";

import { getCurrentYear } from '@/shared/lib/helpers/date';

import { categoriesApi } from '../../api';

import { CategoriesListItem } from '../categories-list-item';
import { Genres } from '../../model/types';

const api = categoriesApi();

const categories = [
  {
    title: "Смотрим всей семьей",
    fetcher: () => api.getMovies({ genre: Genres.Family, limit: 8 }),
  },
  {
    title: "Новые фильмы",
    fetcher: () => api.getMovies({ year: getCurrentYear(), limit: 8 }),
  },
  {
    title: "Комедийные фильмы",
    fetcher: () => api.getMovies({ genre: Genres.Comedy, limit: 8 }),
  },
  {
    title: "Фильмы для взрослых",
    fetcher: () => api.getMovies({ genre: Genres.Adult, limit: 8 }),
  },
  {
    title: "Фантастика",
    fetcher: () => api.getMovies({ genre: Genres.Fantasy, limit: 8 }),
  },
]

export const CategoriesList: React.FC = () => {

  const categoriesList = categories.map((category) => (
    <CategoriesListItem
      key={category.title}
      title={category.title}
      fetcher={category.fetcher}
    />
  ))

  return categoriesList;
};
