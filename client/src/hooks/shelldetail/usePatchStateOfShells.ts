import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { ShellStatus } from '../../dataset/TypeOfShellDetail';

const patchStatusofShells = async (
  shellId: string,
  requestData: ShellStatus
) => {
  const { data } = await axiosInstance({
    url: `/trades/${shellId}`,
    method: 'patch',
    data: requestData,
    headers: getHeader(),
  });
  return { data };
};

export const usePatchStateOfShell = (requestData: { status: boolean }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestBodyData = {
    status: 'active',
  };
  if (requestData.status) {
    requestBodyData.status = 'inactive';
  } else {
    requestBodyData.status = 'active';
  }
  const { data = {}, mutate } = useMutation(
    () => patchStatusofShells(id as string, requestBodyData),
    {
      onSuccess: () => {
        navigate(`/shelldetail/${id}`);
      },
    }
  );
  return { data, mutate };
};
