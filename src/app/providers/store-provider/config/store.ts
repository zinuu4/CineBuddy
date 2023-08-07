import { configureStore } from '@reduxjs/toolkit';

import { $api } from '@/shared/api';
import { trailerApi } from '../../../redux/trailers/trailer.api';

export const createReduxStore = () => {
  const store = configureStore({
    reducer: {
      [$api.reducerPath]: $api.reducer,
      [trailerApi.reducerPath]: trailerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat($api.middleware),
  });

  return store;
};

export type TypeRootState = ReturnType<typeof store.getState>;
