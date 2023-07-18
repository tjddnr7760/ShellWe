import { useState } from 'react';
import Profile from '../../component/profile/Profile.tsx';
import ProfileTab from '../../component/profile/ProfileTab';
import EditProfile from '../../component/profile/EditProfile';
import ChangePassword from '../../component/profile/ChangePassword';
import DeleteProfile from '../../component/profile/DeleteProfile';
import { MyPageContainer, MyPageWrapper } from './MyPage.styled.tsx';

const MyPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('edit');

  const handelComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };
  return (
    <MyPageWrapper>
      <MyPageContainer>
        <Profile showTags={false} />
        <ProfileTab handleComponent={handelComponent}></ProfileTab>
        {selectedComponent === 'edit' && <EditProfile></EditProfile>}
        {selectedComponent === 'change' && <ChangePassword></ChangePassword>}
        {selectedComponent === 'delete' && <DeleteProfile></DeleteProfile>}
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MyPage;
