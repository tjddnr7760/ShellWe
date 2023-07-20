import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';

// 회원 삭제
interface RequestData {
  password: string;
}

const getMemberIdForDelete = async (
  memberId: number,
  requestData: RequestData
) => {
  const { data } = await axiosInstance({
    url: `/members/${memberId}`,
    method: 'delete',
    data: requestData,
    headers: getHeader(),
  });
  return { data };
};

export const useDeleteMember = (memberId: number, requestData: RequestData) => {
  const navigate = useNavigate();

  const { data = {}, mutate } = useMutation(
    () => getMemberIdForDelete(memberId, requestData),
    {
      onSuccess: () => {
        alert('탈퇴가 완료되었습니다.');
        navigate(`/home`);
      },
      onError: () => {
        navigate(`/members/${memberId}`);
      },
    }
  );

  return { data, mutate };
};
