import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getPostHeader } from '../../utill/axiosInstance';

const getShell = async (requestData: FormData) => {
  const { data } = await axiosInstance({
    url: `/shells`,
    method: 'post',
    data: requestData,
    headers: getPostHeader(),
  });
  return { data };
};

//제품 생성
export const useCreateShells = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (requestData: FormData) => getShell(requestData),
    {
      onSuccess: (responseData) => {
        navigate(`/shelldetail/${responseData?.data?.id}`);
      },
    }
  );
  const handleMutate = (requestData: FormData) => {
    mutate(requestData);
  };
  return { mutate: handleMutate };
};
