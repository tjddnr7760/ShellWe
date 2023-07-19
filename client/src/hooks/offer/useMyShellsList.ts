// 내 게시글 리스트 GET
import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { GetMyShellsArgs } from '../../dataset/TypesOfferedShell';

const getMyShellsListId: GetMyShellsArgs = async () => {
  const { data } = await axiosInstance({
    url: `/trades`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

// 요청함 페이지 내 쉘 조회
export const useMyShellsList = () => {
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getMyShellsListId()
  );

  return { data };
};
