import { useState } from 'react';
import { TabContainer, Wrapper,TabButton } from './ProfileTab.tsx';

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
          isselected={selectedTab === 'current'}
        >
          Current Shells
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('past')}
          isselected={selectedTab === 'past'}
        >
          Past Shells
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('like')}
          isselected={selectedTab === 'like'}
        >
          Like Shells
        </TabButton>
      </TabContainer>
    </Wrapper>
  );
};

export default ShellsTab;

// 구현할 사항
// 1. row 탭 색상 변경
// - Profile 탭 클릭 시, profile 검정색으로 색상변경 후 상태 유지, Shells 탭 흰색으로 색상변경
// - Shells 탭 클릭 시, profile 흰색으로 색상변경 후 상태 유지, Shells 탭 검정색으로 색상변경
// 2. row 탭 클릭 시, column 탭 변경
// - Profile 탭 클릭 시, Profile 사이드바 컴포넌트 렌더링
// - Shells 탭 클릭 시, Shells 사이드바 컴포넌트 렌더링
// 3. column 탭 (Profile)
// - Edit profile 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// - Change password 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// - Delete profile 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// 4. column 탭 (Shells)
// - Current Shells 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// - Past Shells 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// - Likes Shells 탭 클릭 시, 검정색으로 색상변경 후 상태 유지, 다른 탭 흰색으로 색상 변경
// 5. column 탭 클릭 시,
