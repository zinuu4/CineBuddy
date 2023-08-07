'use client';

import { Provider } from 'react-redux';
import { store } from './providers/store-provider/config/store';
import Home from '@/pages/home/ui/home';

export default function HomePage() {
  return (
    <Provider store={store}>
      <main>
        <Home />
      </main>
    </Provider>
  );
}
