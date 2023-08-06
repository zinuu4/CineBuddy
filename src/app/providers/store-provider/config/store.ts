import { configureStore } from '@reduxjs/toolkit';
import { trailerApi } from '../../../redux/trailers/trailer.api';

export const store = configureStore({
  reducer: { [trailerApi.reducerPath]: trailerApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trailerApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
