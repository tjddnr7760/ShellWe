import { useInfiniteQuery, useQueryClient } from 'react-query';

import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useCallback, useEffect } from 'react';
import { queryKeys } from '../../dataset/queryKey';

const getShells = async (
  limit: number,
  cursor: number,
  category: string,
  pagetype: string
) => {
  const { data } = await axiosInstance.get('/shells', {
    params: {
      limit,
      cursor,
      type: category,
      category: pagetype,
    },
    headers: getHeader(),
  });
  return data;
};

export const useInfiniteScroll = (
  limit: number,
  pagetype: string,
  category: string
) => {
  const queryClient = useQueryClient();

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKeys.shellList, category, pagetype], // 변경된 값들을 쿼리 키에 포함
    ({ pageParam = 0 }) => getShells(limit, pageParam, category, pagetype),
    {
      getNextPageParam: (lastPage) =>
        lastPage.shells?.length
          ? lastPage.shells[lastPage.shells.length - 1].id
          : null,
    }
  );

  const loadMore = useCallback(async () => {
    if (!hasNextPage || isFetching) {
      return; // 추가 요청 막기
    }

    await fetchNextPage();
  }, [hasNextPage, isFetching, fetchNextPage]);

  const ShellsListData = data?.pages.flatMap((page) => page.shells) ?? [];

  useEffect(() => {
    if (!hasNextPage && isFetching) {
      queryClient.cancelQueries(['shellList', category, pagetype]); // fetching 중인 쿼리 종료
    }
  }, [hasNextPage, isFetching, queryClient, category, pagetype]);

  return {
    ShellsListData,
    hasNextPage,
    loadMore,
    isFetching: isFetching,
  };
};
