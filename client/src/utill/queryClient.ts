import { QueryClient } from 'react-query';
import apiErrorHandler from '../utill/apiErrorHandler.ts';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onError: apiErrorHandler,
      suspense: true,
      cacheTime: 500,

    },
    mutations: {
      onError: apiErrorHandler,
    },
  },
});
