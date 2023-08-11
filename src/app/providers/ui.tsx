'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React, { ReactNode } from 'react';

import { StoreProvider } from './store-provider';
import { ToastProvider } from './toast-provider';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <>
    <ProgressBar
      height="2px"
      color="#e50914"
      options={{ showSpinner: false }}
      shallowRouting
    />
    <ToastProvider>
      <StoreProvider>{children}</StoreProvider>
    </ToastProvider>
  </>
);
