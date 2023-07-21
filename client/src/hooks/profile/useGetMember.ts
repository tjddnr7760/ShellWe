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
  (memberId: number, method: string): Promise<any>;
}

export const getMemberId: GetMemberArgs = async (memberId, method) => {
  const { data } = await axiosInstance({
    url: `/members/${memberId}`,
    method,
    headers: getHeader(),
  });
  return { data };
};

// 회원정보 조회
export const useGetMember = (memberId: number) => {
  const { data = {} } = useQuery([queryKeys.currentShell, memberId], () =>
    getMemberId(memberId, 'get')
  );

  return { data };
};
