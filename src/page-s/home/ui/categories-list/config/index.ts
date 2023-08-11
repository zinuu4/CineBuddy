import { Genres } from '@/shared/api';
import { getCurrentYear } from '@/shared/lib/helpers/date';

export const categories = [
  {
    title: 'Смотрим всей семьей',
    queryName: 'genre',
    queryValue: Genres.Family,
    params: { genre: Genres.Family, limit: 8 },
  },
  {
    title: 'Новые фильмы',
    queryName: 'release',
    queryValue: '2022-2023',
    params: { year: getCurrentYear(), limit: 8 },
  },
  {
    title: 'Комедийные фильмы',
    queryName: 'genre',
    queryValue: Genres.Comedy,
    params: { genre: Genres.Comedy, limit: 8 },
  },
  {
    title: 'Фильмы для взрослых',
    queryName: 'genre',
    queryValue: Genres.Adult,
    params: { genre: Genres.Adult, limit: 8 },
  },
  {
    title: 'Фантастика',
    queryName: 'genre',
    queryValue: Genres.Fantasy,
    params: { genre: Genres.Fantasy, limit: 8 },
  },
];
