'use client';

import { SessionProvider } from 'next-auth/react';
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
      height="3px"
      color="#e50914"
      options={{ showSpinner: false }}
      shallowRouting
    />
    <SessionProvider>
      <ToastProvider>
        <StoreProvider>{children}</StoreProvider>
      </ToastProvider>
    </SessionProvider>
  </>
);
