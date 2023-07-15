import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { useCallback } from 'react';
import { queryKeys } from '../../dataset/queryKey';
import { selectedOptionAtom } from '../../recoil/atom.ts';

const getShells = async (
  limit: number,
  cursor: number,
  category: string,
  pagetype: string,
  selectedOption: string
) => {
  const { data } = await axiosInstance.get('/shells', {
    params: {
      limit,
      cursor,
      type: pagetype,
      category: category,
      sort: selectedOption,
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
  const selectedOption = useRecoilValue(selectedOptionAtom);
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    [queryKeys.shellList, category, pagetype], // 변경된 값들을 쿼리 키에 포함
    ({ pageParam = 0 }) =>
      getShells(limit, pageParam, category, pagetype, selectedOption),
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

  const ShellsListData = data?.pages.flatMap((page) => page.shells);

  return {
    ShellsListData,
    hasNextPage,
    loadMore,
    isFetching: isFetching,
  };
};
