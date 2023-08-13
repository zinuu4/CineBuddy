import { configureStore } from '@reduxjs/toolkit';

import { $api, $nextApi, $firebaseApi } from '@/shared/api';

export const createReduxStore = () => {
  const store = configureStore({
    reducer: {
      [$api.reducerPath]: $api.reducer,
      [$nextApi.reducerPath]: $nextApi.reducer,
      [$firebaseApi.reducerPath]: $firebaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat($api.middleware)
        .concat($nextApi.middleware)
        .concat($firebaseApi.middleware),
  });

  return store;
};
