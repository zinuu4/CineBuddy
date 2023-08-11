import { Genres } from '@/shared/api';

export const categories = [
  {
    title: 'Лучшие',
    name: '',
    value: '',
    img: '/icons/genres/cup.svg',
    href: '/films',
  },
  {
    title: 'Новые',
    name: 'release',
    value: '2022-2023',
    img: '/icons/genres/fire.svg',
    href: '/films',
  },
  {
    title: 'Мелодраммы',
    name: 'genre',
    value: Genres.Romance,
    img: '/icons/genres/hearts.svg',
    href: '/films',
  },
  {
    title: 'Ужасы',
    name: 'genre',
    value: Genres.Horror,
    img: '/icons/genres/knife.svg',
    href: '/films',
  },
  {
    title: 'Приключения',
    name: 'genre',
    value: Genres.Adventure,
    img: '/icons/genres/map.svg',
    href: '/films',
  },
  {
    title: 'Фантастика',
    name: 'genre',
    value: Genres.Fantasy,
    img: '/icons/genres/rocket.svg',
    href: '/films',
  },
  {
    title: 'Семейные',
    name: 'genre',
    value: Genres.Family,
    img: '/icons/genres/people.svg',
    href: '/films',
  },
  {
    title: 'Комедии',
    name: 'genre',
    value: Genres.Comedy,
    img: '/icons/genres/happy.svg',
    href: '/films',
  },
  {
    title: 'Концерты',
    name: 'genre',
    value: Genres.Concert,
    img: '/icons/genres/music.svg',
    href: '/films',
  },
  {
    title: 'Военные',
    name: 'genre',
    value: Genres.War,
    img: '/icons/genres/tank.svg',
    href: '/films',
  },
];
