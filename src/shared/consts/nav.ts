import { routes } from '@/shared/lib/routing';

import { IProfileConfig } from '../types';

export const navItems = [
  { label: 'Главная', href: routes.home },
  { label: 'Фильмы', href: routes.films },
  { label: 'Сериалы', href: routes.series },
  { label: 'Мультфильмы', href: routes.cartoons },
];

export const navItemsBurger = [
  { label: 'Главная', href: routes.home },
  { label: 'Фильмы', href: routes.films },
  { label: 'Сериалы', href: routes.series },
  { label: 'Мультфильмы', href: routes.cartoons },
  { label: 'Избранное', href: routes.saved },
  { label: 'История просмотров', href: routes.history },
];

export const profileConfig: IProfileConfig = {
  sidebarItems: [
    {
      href: routes.profile,
      label: 'Профиль',
    },
    {
      href: routes.history,
      label: 'История просмотров',
    },
    {
      href: routes.saved,
      label: 'Избранное',
    },
  ],
};
