import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
import { PokedShells } from '../../dataset/TypesOfferedShell';

interface GetShellsArgs {
  (memberId: number, method: string, isHeader?: boolean): Promise<any>;
}
interface MyShellToPokeData {
  data: {
    shells: PokedShells; // ShellData[]는 실제 Shell 데이터의 타입입니다. 이에 맞게 수정해주세요.
  };
}

const getPokedShellId: GetShellsArgs = async (
  memberId,
  method
): Promise<MyShellToPokeData> => {
  const { data } = await axiosInstance({
    url: `/myshell/${memberId}/myshells?status=active`,
    method,
    headers: getHeader(),
  });
  return { data };
};

export const useGetMyShellToPoke = (memberId: number) => {
  const { data = {} } = useQuery(queryKeys.myshellListToPoke, () =>
    getPokedShellId(memberId, 'get')
  );
  return { data };
};
