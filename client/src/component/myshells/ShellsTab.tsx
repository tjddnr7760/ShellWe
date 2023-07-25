import { TabContainer, Wrapper, TabButton } from '../profile/ProfileTab.tsx';

// 추후 타입 폴더에서 MyPage 타입과 통합
interface ProfileTabProps {
  handleClickTab: (componentName: string) => void;
  selectedTab: string;
}

const ShellsTab = ({ handleClickTab, selectedTab }: ProfileTabProps) => {
  return (
    <Wrapper>
      <TabContainer>
        <TabButton
          onClick={() => handleClickTab('current')}
          className={selectedTab === 'current' ? 'selected' : ''}
        >
          Current Shells
        </TabButton>
        <TabButton
          onClick={() => handleClickTab('past')}
          className={selectedTab === 'past' ? 'selected' : ''}
        >
          Past Shells
        </TabButton>
        <TabButton
          onClick={() => handleClickTab('like')}
          className={selectedTab === 'like' ? 'selected' : ''}
        >
          Like Shells
        </TabButton>
      </TabContainer>
    </Wrapper>
  );
};

export default ShellsTab;
