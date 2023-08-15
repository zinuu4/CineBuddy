import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '@/features/search-window/model/search-slice';
import { $api, $nextApi, $firebaseApi } from '@/shared/api';

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
    [$nextApi.reducerPath]: $nextApi.reducer,
    [$firebaseApi.reducerPath]: $firebaseApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat($api.middleware)
      .concat($nextApi.middleware)
      .concat($firebaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
