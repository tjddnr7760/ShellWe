import { useQuery } from 'react-query';
import { axiosInstance, getHeader } from '../../utill/axiosInstance';
import { queryKeys } from '../../dataset/queryKey';

export interface ApiResponseMember {
  data: Member;
}
export interface Member {
  isMe: boolean;
  id: number;
  displayName: string;
  oauthUser: boolean;
  profileUrl: string;
  introduction: string;
}

export interface GetMemberArgs {
  (memberId: number, method: string, isHeader?: boolean): Promise<any>;
}

export const getMemberId: GetMemberArgs = async (
  memberId,
  method,
  isHeader = false
) => {
  const headers = isHeader ? getHeader() : undefined;

  const { data } = await axiosInstance({
    url: `/members/${memberId}`,
    method,
    headers,
  });
  return { data };
};

export const useGetMember = (memberId: number) => {
  const { data = {} } = useQuery([queryKeys.myprofile, memberId], () =>
    getMemberId(memberId, 'get', true)
  );

  return { data };
};

export const useGetOtherMember = (memberId: number) => {
  const { data = {} } = useQuery([queryKeys.otherprofile, memberId], () =>
    getMemberId(memberId, 'get', false)
  );

  return { data };
};
