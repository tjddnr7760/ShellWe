import Profile from '../../component/profile/Profile.tsx';
import ShellsTab from '../../component/myshells/ShellsTab.tsx';
import MyShellsList from '../../component/myshells/MyShellsList.tsx';
import {
  MyShellsPageContainer,
  MyShellsPageWrapper,
} from './MyShellsPage.styled.ts';

const MyShellsPage = () => {

  return (
      <MyShellsPageWrapper>
        <MyShellsPageContainer>
          <Profile />
          <ShellsTab />
          <MyShellsList />
        </MyShellsPageContainer>
      </MyShellsPageWrapper>
  );
};

export default MyShellsPage;
