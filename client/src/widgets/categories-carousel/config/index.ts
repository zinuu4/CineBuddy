import { ICategoryCard } from '@/entities/category/types';
import { Genres } from '@/shared/api';

export const categories: ICategoryCard[] = [
  {
    title: 'Лучшие',
    name: '',
    value: '',
    iconName: 'cup',
    href: '/films',
  },
  {
    title: 'Новые',
    name: 'release',
    value: '2022-2023',
    iconName: 'fire',
    href: '/films',
  },
  {
    title: 'Мелодраммы',
    name: 'genre',
    value: Genres.Romance,
    iconName: 'hearts',
    href: '/films',
  },
  {
    title: 'Ужасы',
    name: 'genre',
    value: Genres.Horror,
    iconName: 'knife',
    href: '/films',
  },
  {
    title: 'Приключения',
    name: 'genre',
    value: Genres.Adventure,
    iconName: 'map',
    href: '/films',
  },
  {
    title: 'Фантастика',
    name: 'genre',
    value: Genres.Fantasy,
    iconName: 'rocket',
    href: '/films',
  },
  {
    title: 'Семейные',
    name: 'genre',
    value: Genres.Family,
    iconName: 'people',
    href: '/films',
  },
  {
    title: 'Комедии',
    name: 'genre',
    value: Genres.Comedy,
    iconName: 'happy',
    href: '/films',
  },
  {
    title: 'Концерты',
    name: 'genre',
    value: Genres.Concert,
    iconName: 'music',
    href: '/films',
  },
  {
    title: 'Военные',
    name: 'genre',
    value: Genres.War,
    iconName: 'tank',
    href: '/films',
  },
];
