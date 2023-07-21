import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, getPostHeader } from '../../utill/axiosInstance';

const getUpdateShells = async (id: string, requestData: FormData) => {
  const { data } = await axiosInstance({
    url: `/shells/${id}/update`,
    method: 'patch',
    data: requestData,
    headers: getPostHeader(),
  });
  return { data };
};

//제품 업데이트
export const useUpdateShells = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate } = useMutation(
    (requestData: FormData) => getUpdateShells(id as string, requestData),
    {
      onSuccess: (responseData) => {
        navigate(`/shelldetail/${responseData?.data?.id}`);
      },
    }
  );
  const handleUpdataMutate = (requestData: FormData) => {
    mutate(requestData);
  };
  return { mutate: handleUpdataMutate };
};
