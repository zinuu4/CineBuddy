import { configureStore } from '@reduxjs/toolkit';

import { $api, $trailerApi } from '@/shared/api';

export const createReduxStore = () => {
  const store = configureStore({
    reducer: {
      [$api.reducerPath]: $api.reducer,
      [$trailerApi.reducerPath]: $trailerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat($api.middleware)
        .concat($trailerApi.middleware),
  });

  return store;
};
