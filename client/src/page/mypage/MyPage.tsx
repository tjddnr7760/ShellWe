import { useState } from 'react';
import { useParams } from 'react-router';
import Profile from '../../component/profile/Profile.tsx';
import ProfileTab from '../../component/profile/ProfileTab';
import EditProfile from '../../component/profile/EditProfile';
import ChangePassword from '../../component/profile/ChangePassword';
import DeleteProfile from '../../component/profile/DeleteProfile';
import { MyPageContainer, MyPageWrapper } from './MyPage.styled.tsx';
import { useCurrentShells } from '../../hooks/myshells/useCurrentShells.ts';
import { useGetMember } from '../../hooks/profile/useGetMember';
import { Member } from '../../hooks/profile/useGetMember';

const MyPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('edit');

  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data: shellsData } = useCurrentShells(memberId);

  // localstorage에서 id 가져와서 useGetMember에 넣기
  const { data: memberData } = useGetMember(1);
  const memberInfo: Member = memberData.data;

  const handelComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  return (
    <MyPageWrapper>
      <MyPageContainer>
        <Profile memberInfo={memberInfo} showTags={false} data={shellsData} />
        <ProfileTab handleComponent={handelComponent}></ProfileTab>
        {selectedComponent === 'edit' && <EditProfile />}
        {selectedComponent === 'change' && <ChangePassword />}
        {selectedComponent === 'delete' && (
          <DeleteProfile memberInfo={memberInfo} />
        )}
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MyPage;
