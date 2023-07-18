import { useInfiniteQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useCallback } from 'react';
import { queryKeys } from '../../dataset/queryKey';

const getSearchShells = async (
  limit: number,
  cursor: number,
  title: string
) => {
  const { data } = await axiosInstance.get('/shells/search', {
    params: {
      limit,
      cursor,
      title,
    },
    headers: getHeader(),
  });
  return data;
};

export const useSearchShells = (limit: number, title: string) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKeys.shellList, title],
    ({ pageParam = 0 }) => getSearchShells(limit, pageParam, title),
    {
      getNextPageParam: (lastPage) =>
        lastPage.shells?.length
          ? lastPage.shells[lastPage.shells.length - 1].id
          : null,
    }
  );

  const loadMore = useCallback(async () => {
    if (!hasNextPage || isFetching) {
      return;
    }

    await fetchNextPage();
  }, [hasNextPage, isFetching, fetchNextPage]);

  const ShellsListData = data?.pages.flatMap((page) => page.shells);

  return {
    ShellsListData,
    hasNextPage,
    loadMore,
    isFetching: isFetching,
  };
};
