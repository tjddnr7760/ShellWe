import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

interface GetMyShellsArgs {
  (memberId: number): Promise<any>;
}

const getMyShellId: GetMyShellsArgs = async (memberId) => {
  const { data } = await axiosInstance({
    url: `/myshell/${memberId}/shells?status=active`,
    method: 'get',
    headers: getHeader(),
  });
  return data;
};

export const useCurrentShells = (memberId: number) => {
  if (memberId === 0) {
    alert('네트워크에 오류가 있습니다. 잠시 후 다시 시도해주세요.');
    return { data: {} };
  } else {
    const { data = {} } = useQuery(queryKeys.myshells, () =>
      getMyShellId(memberId)
    );
    return { data };
  }
};
