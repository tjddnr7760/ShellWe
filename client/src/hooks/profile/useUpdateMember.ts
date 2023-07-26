import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, getPostHeader } from '../../utill/axiosInstance';

const getUpdateMember = async (id: string, requestData: FormData) => {
  const { data } = await axiosInstance({
    url: `/members/${id}`,
    method: 'patch',
    data: requestData,
    headers: getPostHeader(),
  });
  return { data };
};

export const useUpdateMember = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate } = useMutation(
    (requestData: FormData) => getUpdateMember(id as string, requestData),
    {
      onSuccess: () => {
        navigate(`/member/${id}`);
        window.location.reload();
      },
    }
  );
  const handleUpdataMutate = (requestData: FormData) => {
    mutate(requestData);
  };
  return { mutate: handleUpdataMutate };
};
