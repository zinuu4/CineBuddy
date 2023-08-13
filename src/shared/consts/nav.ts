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
