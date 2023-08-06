import React, { ReactNode } from 'react'

import { StoreProvider } from './store-provider'
import { ToastProvider } from './toast-provider'

interface ProvidersProps {
  children: ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ToastProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </ToastProvider>
  )
}