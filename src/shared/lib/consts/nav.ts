import { ProfileConfig } from '../types/nav';

export const profileConfig: ProfileConfig = {
  sidebarItems: [
    {
      href: '/profile',
      label: 'Профиль',
    },
    {
      href: '/history',
      label: 'История просмотров',
    },
    {
      href: '/favorites',
      label: 'Избранное',
    },
  ],
};
