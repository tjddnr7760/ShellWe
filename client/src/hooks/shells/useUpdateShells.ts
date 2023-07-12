import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

const getUpdateShells = async (id: number, requestData: FormData) => {
  const { data } = await axiosInstance({
    url: `/shells/${id}/update`,
    method: 'patch',
    data: requestData,
    headers: getHeader(),
  });
  return { data };
};

//제품 업데이트
export const useUpdateShells = (id: number, requestData: FormData) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => getUpdateShells(id, requestData),
    {
      onSuccess: () => {
        navigate(`shelldetail/${id}`);
      },
    }
  );
  return { data, mutate };
};
