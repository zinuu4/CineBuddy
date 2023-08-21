type Id = number | null | undefined;

export const routes = {
  home: '/',
  films: '/films',
  series: '/series',
  cartoons: '/cartoons',
  profile: '/profile',
  saved: '/profile/saved',
  history: '/profile/history',
  signin: '/api/auth/signin',

  movie: (id: Id): string => `/film/${id}`,

  person: (id: Id): string => `/name/${id}`,
};
