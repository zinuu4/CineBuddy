'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
