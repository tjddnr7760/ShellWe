import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { ShellStatus } from '../../dataset/ShellDetailType';

const patchStatusofShells = async (
  shellId: number,
  requestData: ShellStatus
) => {
  const { data } = await axiosInstance({
    url: `/trades/${shellId}/`,
    method: 'patch',
    data: requestData,
    headers: getHeader(),
  });
  return { data };
};

//제품 업데이트
export const usePatchStateOfShell = (
  shellId: number,
  requestData: ShellStatus
) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => patchStatusofShells(shellId, requestData),
    {
      onSuccess: () => {
        navigate(`shelldetail/${shellId}`);
      },
    }
  );
  return { data, mutate };
};

//queryClient.invalidateQueries(queryKeys.shellsDetail);
//업데이트 후 "todos"라는 쿼리키를 useQuery api 함수를 실행
