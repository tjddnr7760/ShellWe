import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './App.tsx';
import './index.css';
import { queryClient } from './utill/queryClient.ts';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
