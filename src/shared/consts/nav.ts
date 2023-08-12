import { routes } from '@/shared/lib/routing';

import { IProfileConfig } from '../api';

export const navItems = [
  { label: 'Главная', href: routes.home },
  { label: 'Фильмы', href: routes.films },
  { label: 'Сериалы', href: routes.series },
  { label: 'Мультфильмы', href: routes.cartoons },
];

export const profileConfig: IProfileConfig = {
  sidebarItems: [
    {
      href: '/profile',
      label: 'Профиль',
    },
    {
      href: '/profile/history',
      label: 'История просмотров',
    },
    {
      href: '/profile/favorites',
      label: 'Избранное',
    },
  ],
};
