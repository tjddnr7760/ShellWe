// 요청 리스트 GET
import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetPokedShellIdArgs {
  (shellId: number): Promise<any>;
}

const getPokedShellId: GetPokedShellIdArgs = async (shellId) => {
  const { data } = await axiosInstance({
    url: `/trades/${shellId}`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

// 요청함 페이지 내 쉘 조회
export const useOfferedShellsList = (shellId: number) => {
  if (shellId === 0) {
    return {};
  }
  const { data = {} } = useQuery([queryKeys.tradesList, shellId], () =>
    getPokedShellId(shellId)
  );
  return { data };
};

// id 0번 사용 x 백엔드 전달
