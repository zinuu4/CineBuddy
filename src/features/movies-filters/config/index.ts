import { Genres } from '@/shared/api';

export const genreOptions = [
  { value: '', label: 'Все' },
  { value: Genres.Adventure, label: 'Приключения' },
  { value: Genres.Thriller, label: 'Триллеры' },
  { value: Genres.ScienceFiction, label: 'Фантастика' },
  { value: Genres.Action, label: 'Боевики' },
  { value: Genres.Comedy, label: 'Комедии' },
  { value: Genres.Romance, label: 'Мелодрамы' },
  { value: Genres.Drama, label: 'Драмы' },
  { value: Genres.Family, label: 'Семейное' },
  { value: Genres.Crime, label: 'Криминальное' },
  { value: Genres.Sports, label: 'Спорт' },
  { value: Genres.War, label: 'Военное' },
  { value: Genres.Biography, label: 'Биографии' },
  { value: Genres.Fantasy, label: 'Фэнтези' },
  { value: Genres.Horror, label: 'Ужасы' },
  { value: Genres.History, label: 'Историческое' },
  { value: Genres.Music, label: 'Музыкальное' },
  { value: Genres.Documentary, label: 'Документальное' },
  { value: Genres.Kids, label: 'Детские' },
  { value: Genres.Detective, label: 'Детективы' },
  { value: Genres.Western, label: 'Вестерны' },
  { value: Genres.Adult, label: 'Для взрослых' },
  { value: Genres.FilmNoir, label: 'Фильм-нуар' },
  { value: Genres.Concert, label: 'Концерт' },
  { value: Genres.Short, label: 'Короткометражка' },
];

export const ratingOptions = [
  {
    label: 'Любой рейтинг',
    value: '',
  },
  {
    label: 'Больше 9',
    value: '9-10',
  },
  {
    label: 'Больше 8',
    value: '8-10',
  },
  {
    label: 'Больше 7',
    value: '7-10',
  },
  {
    label: 'Больше 6',
    value: '6-10',
  },
  {
    label: 'Больше 5',
    value: '5-10',
  },
];

export const releaseOptions = [
  {
    label: 'Все годы',
    value: '',
  },
  {
    label: '2022-2023',
    value: '2022-2023',
  },
  {
    label: '2020-2021',
    value: '2020-2021',
  },
  {
    label: '2014-2019',
    value: '2014-2019',
  },
  {
    label: '2010-2014',
    value: '2010-2014',
  },
  {
    label: '2000-2009',
    value: '2000-2009',
  },
  {
    label: '1990-1999',
    value: '1990-1999',
  },
  {
    label: '1980-1989',
    value: '1980-1989',
  },
];

export const sortOptions = [
  {
    label: 'Рекоммендуемые',
    value: '',
  },
  {
    label: 'По рейтингу',
    value: 'rating.kp',
  },
  {
    label: 'По дате выхода',
    value: 'year',
  },
];
