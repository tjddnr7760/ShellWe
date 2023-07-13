import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

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

//사용 예
// const { data, mutate } = useCreateShells();

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   mutate(formData);
// };
