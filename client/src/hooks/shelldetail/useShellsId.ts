import { useQuery, useMutation } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';
// import { useNavigate } from 'react-router-dom';

interface GetShellsArgs {
  (id: number, method: string, isHeader?: boolean): Promise<any>;
}

const getShellId: GetShellsArgs = async (id, method, isHeader = false) => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/shells/${id}`,
    method,
    headers,
  });
  return { data };
};

// GET 요청
//제품 상세 조회
export const useGetShellDetail = (id: number) => {
  const { data = {} } = useQuery(queryKeys.shellsDetail, () =>
    getShellId(id, 'get', true)
  );

  return { data };
};

// GET 요청이 아닌 것 - useMutation
//제품 삭제
// export const useDeleteShells = (id: number) => {
//   const navigate = useNavigate();

//   const { data = {}, mutate } = useMutation(
//     () => getShellId(id, 'delete', true),
//     {
//       onSuccess: () => {
//         navigate(`main`);
//       },
//     }
//   );

//   return { data, mutate };
// };
