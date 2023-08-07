import React from 'react';

import { Genres } from '@/shared/api';
import { getCurrentYear } from '@/shared/lib/helpers/date';

import { CategoriesListItem } from '../categories-list-item';

const categories = [
  {
    title: 'Смотрим всей семьей',
    params: { genre: Genres.Family, limit: 8 },
  },
  {
    title: 'Новые фильмы',
    params: { year: getCurrentYear(), limit: 8 },
  },
  {
    title: 'Комедийные фильмы',
    params: { genre: Genres.Comedy, limit: 8 },
  },
  {
    title: 'Фильмы для взрослых',
    params: { genre: Genres.Adult, limit: 8 },
  },
  {
    title: 'Фантастика',
    params: { genre: Genres.Fantasy, limit: 8 },
  },
];

export const CategoriesList: React.FC = () => {
  const categoriesList = categories.map((category) => (
    <CategoriesListItem
      key={category.title}
      title={category.title}
      params={category.params}
    />
  ));

  return categoriesList;
};
