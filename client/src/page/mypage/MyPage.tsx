import { useState } from 'react';
import Profile from '../../component/profile/Profile.tsx';
import ProfileTab from '../../component/profile/ProfileTab';
import EditProfile from '../../component/profile/EditProfile';
import ChangePassword from '../../component/profile/ChangePassword';
import DeleteProfile from '../../component/profile/DeleteProfile';
import { MyPageContainer, MyPageWrapper } from './MyPage.styled.tsx';
import { useGetMember } from '../../hooks/profile/useGetMember';
import { Member } from '../../hooks/profile/useGetMember';

const MyPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('edit');

  // useGetMember(memberId) <= login recoil memberId로 수정
  const { data } = useGetMember(1);
  const memberInfo: Member = data.data;
  const handelComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  return (
    <MyPageWrapper>
      <MyPageContainer>
        <Profile memberInfo={memberInfo} />
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
