import { Genres } from '@/shared/api';

export const categories = [
  {
    title: 'Лучшие',
    name: '',
    value: '',
    img: '/cup.svg',
    href: '/films',
  },
  {
    title: 'Новые',
    name: 'release',
    value: '2022-2023',
    img: '/fire.svg',
    href: '/films',
  },
  {
    title: 'Мелодраммы',
    name: 'genre',
    value: Genres.Romance,
    img: '/hearts.svg',
    href: '/films',
  },
  {
    title: 'Ужасы',
    name: 'genre',
    value: Genres.Horror,
    img: '/knife.svg',
    href: '/films',
  },
  {
    title: 'Приключения',
    name: 'genre',
    value: Genres.Adventure,
    img: '/map.svg',
    href: '/films',
  },
  {
    title: 'Фантастика',
    name: 'genre',
    value: Genres.Fantasy,
    img: '/rocket.svg',
    href: '/films',
  },
  {
    title: 'Семейные',
    name: 'genre',
    value: Genres.Family,
    img: '/people.svg',
    href: '/films',
  },
  {
    title: 'Комедии',
    name: 'genre',
    value: Genres.Comedy,
    img: '/happy.svg',
    href: '/films',
  },
  {
    title: 'Концерты',
    name: 'genre',
    value: Genres.Concert,
    img: '/music.svg',
    href: '/films',
  },
  {
    title: 'Военные',
    name: 'genre',
    value: Genres.War,
    img: '/tank.svg',
    href: '/films',
  },
];
