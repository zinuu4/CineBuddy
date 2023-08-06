'use client';

import { Provider } from 'react-redux';
import Home from '@/pages/home/home';
import { store } from './providers/store-provider/config/store';

export default function HomePage() {
  return (
    <Provider store={store}>
      <main>
        <Home />
      </main>
    </Provider>
  );
}
