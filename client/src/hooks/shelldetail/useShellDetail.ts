import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

// GET 요청이 아닌 것

const getShell = async (requestData: FormData) => {
  const { data } = await axiosInstance({
    url: `/shells`,
    method: 'post',
    data: requestData,
    headers: getHeader(),
  });
  return { data };
};

//제품 생성
export const useCreateShells = (requestData: FormData) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(() => getShell(requestData), {
    onSuccess: (responseData) => {
      navigate(`shelldetail/${responseData?.data?.id}`);
    },
  });

  return { data, mutate };
};
