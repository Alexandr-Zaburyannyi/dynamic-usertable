/** @format */

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);
