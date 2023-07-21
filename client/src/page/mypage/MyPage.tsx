import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Profile from '../../component/profile/profile.tsx';
import ProfileTab from '../../component/profile/ProfileTab';
import EditProfile from '../../component/profile/EditProfile';
import ChangePassword from '../../component/profile/ChangePassword';
import DeleteProfile from '../../component/profile/DeleteProfile';
import { Logout, MyPageContainer, MyPageWrapper } from './MyPage.styled.tsx';
import { useCurrentShells } from '../../hooks/myshells/useCurrentShells.ts';
import { useGetMember } from '../../hooks/profile/useGetMember';
import { Member } from '../../hooks/profile/useGetMember';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../../recoil/atom';

const MyPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('edit');
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLogInState);

  const { id } = useParams<{ id: string }>();
  const memberId = id !== undefined ? +id : 0;
  const { data: shellsData } = useCurrentShells(memberId);
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
        {memberInfo && shellsData && (
          <Profile memberInfo={memberInfo} showTags={false} data={shellsData} />
        )}
        <ProfileTab handleComponent={handelComponent}></ProfileTab>
        {selectedComponent === 'edit' && <EditProfile />}
        {selectedComponent === 'change' && <ChangePassword />}
        {selectedComponent === 'delete' && (
          <DeleteProfile memberInfo={memberInfo} />
        )}
        <Logout>
          <SmallButton3 onClick={handleLogout}>Logout</SmallButton3>
        </Logout>
      </MyPageContainer>
    </MyPageWrapper>
  );
};

export default MyPage;
