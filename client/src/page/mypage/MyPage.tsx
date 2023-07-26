import { useState } from 'react';
import { useNavigate } from 'react-router';
import Profile from '../../component/profile/profile.tsx';
import ProfileTab from '../../component/profile/ProfileTab';
import EditProfile from '../../component/profile/EditProfile';
import ChangePassword from '../../component/profile/ChangePassword';
import DeleteProfile from '../../component/profile/DeleteProfile';
import { Logout, MyPageContainer, MyPageWrapper } from './MyPage.styled.tsx';
import { useGetMember } from '../../hooks/profile/useGetMember';
import { Member } from '../../hooks/profile/useGetMember';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import { useSetRecoilState } from 'recoil';
import { userStateWithExpiry } from '../../recoil/selector.ts';

const MyPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('edit');
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(userStateWithExpiry);
  const { data: memberData } = useGetMember(
    Number(getMemberIdFromLocalStorage())
  );
  const memberInfo: Member = memberData.data;

  const handelComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  };

  return (
    <MyPageWrapper>
      <MyPageContainer>
        {memberInfo && <Profile memberInfo={memberInfo} showTags={false} />}
        <ProfileTab handleComponent={handelComponent}></ProfileTab>
        {selectedComponent === 'edit' && (
          <EditProfile memberInfo={memberInfo} />
        )}
        {selectedComponent === 'change' && (
          <ChangePassword memberInfo={memberInfo} />
        )}
        {selectedComponent === 'delete' && (
          <DeleteProfile memberInfo={memberInfo} />
        )}
        <Logout>
          {selectedComponent === 'edit' && (
            <SmallButton3 onClick={handleLogout}>로그아웃</SmallButton3>
          )}
        </Logout>
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MyPage;
