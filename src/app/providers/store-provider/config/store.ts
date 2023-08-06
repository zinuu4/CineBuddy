import { configureStore } from '@reduxjs/toolkit';

import { $api } from '@/shared/api';

export const createReduxStore = () => {
  const store = configureStore({
    reducer: {
      [$api.reducerPath]: $api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat($api.middleware),
  });

  return store;
};
