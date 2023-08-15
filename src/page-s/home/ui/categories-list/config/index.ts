import { Genres } from '@/shared/api';
import { LIMIT } from '@/shared/consts';
import { getCurrentYear } from '@/shared/lib/helpers/date';

export const categories = [
  {
    title: 'Комедийные фильмы',
    queryName: 'genre',
    queryValue: Genres.Comedy,
    params: { genre: Genres.Comedy, limit: LIMIT },
  },
  {
    title: 'Комедийные cериалы',
    queryName: 'genre',
    queryValue: Genres.Comedy,
    params: { genre: Genres.Comedy, type: 'tv-series', limit: LIMIT },
  },
  {
    title: 'Новые фильмы',
    queryName: 'release',
    queryValue: '2022-2023',
    params: { year: getCurrentYear(), limit: LIMIT },
  },
  {
    title: 'Смотрим всей семьей',
    queryName: 'genre',
    queryValue: Genres.Family,
    params: { genre: Genres.Family, limit: LIMIT },
  },
  {
    title: 'Фантастика',
    queryName: 'genre',
    queryValue: Genres.Fantasy,
    params: { genre: Genres.Fantasy, limit: LIMIT },
  },
];
