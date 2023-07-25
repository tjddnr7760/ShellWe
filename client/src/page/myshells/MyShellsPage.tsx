import { useState } from 'react';
import { useParams } from 'react-router';
import { useCurrentShells } from '../../hooks/myshells/useCurrentShells.ts';
import Profile from '../../component/profile/profile.tsx';
import ShellsTab from '../../component/myshells/ShellsTab.tsx';
import {
  MyShellsPageContainer,
  MyShellsPageWrapper,
} from './MyShellsPage.styled.ts';
import CurrentShells from '../../component/myshells/CurrentShells.tsx';
import PastShells from '../../component/myshells/PastShells.tsx';
import LikeShells from '../../component/myshells/LikeShells.tsx';
import { useGetMember } from '../../hooks/profile/useGetMember';
import { Member } from '../../hooks/profile/useGetMember';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';
import { useGetOtherMember } from '../../hooks/profile/useGetMember';

const MyShellsPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>('current');
  const { id } = useParams<{ id: string }>();
  const urlMemberId = id !== undefined ? +id : 0;
  const loginMemberId = Number(getMemberIdFromLocalStorage());

  const { data: shellsData } = useCurrentShells(urlMemberId);
  const { data: memberData } = useGetMember(loginMemberId);
  const { data: otherMemberData } = useGetOtherMember(urlMemberId);
  const memberInfo: Member = memberData.data;

  const handleClickTab = (Tab: string) => {
    setSelectedTab(Tab);
  };

  return (
    <MyShellsPageWrapper>
      <MyShellsPageContainer>
        <Profile
          showTags={true}
          data={shellsData}
          memberInfo={
            urlMemberId === loginMemberId ? memberInfo : otherMemberData.data
          }
        />
        <ShellsTab handleClickTab={handleClickTab} selectedTab={selectedTab} />
        {selectedTab === 'current' && (
          <CurrentShells selectedTab={selectedTab} />
        )}
        {selectedTab === 'past' && <PastShells selectedTab={selectedTab} />}
        {selectedTab === 'like' && <LikeShells selectedTab={selectedTab} />}
      </MyShellsPageContainer>
    </MyShellsPageWrapper>
  );
};

export default MyShellsPage;

// refactoring 시 개선사항: 리액트 쿼리 캐싱 적용(MyShells 페이지 내 )
// 적용할 컴포넌트: Profile, CurrentShells, PastShells, LikeShells
