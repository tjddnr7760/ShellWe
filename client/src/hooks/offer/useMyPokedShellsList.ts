// 내 게시글 리스트 GET
import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { GetMyShellsArgs } from '../../dataset/TypesOfferedShell';

const getMyPokedShellsListId: GetMyShellsArgs = async () => {
  const { data } = await axiosInstance({
    url: `/trades`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const useMyPokedShellsList = () => {
  const { data = {} } = useQuery(queryKeys.trade, () =>
    getMyPokedShellsListId()
  );

  return { data };
};
