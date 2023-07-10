import { useState } from 'react';
import { TabContainer, Wrapper,TabButton } from '../profile/ProfileTab.tsx';

const ShellsTab = () => {
  const [selectedTab, setSelectedTab] = useState('current');

  const handleTabClick = (Tab: string) => {
    setSelectedTab(Tab);
  };

  return (
    <Wrapper>
      <TabContainer>
        <TabButton
          onClick={() => handleTabClick('current')}
          className={selectedTab === 'current' ? 'selected' : ''}
        >
          Current Shells
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('past')}
          className={selectedTab === 'past' ? 'selected' : ''}
        >
          Past Shells
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('like')}
          className={selectedTab === 'like' ? 'selected' : ''}
        >
          Like Shells
        </TabButton>
      </TabContainer>
    </Wrapper>
  );
};

export default ShellsTab;
