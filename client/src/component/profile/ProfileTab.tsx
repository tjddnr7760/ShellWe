import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 40px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TabButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  font-size: 16px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  color: #000;

  &.selected {
    background-color: #00b4d8;
    color: #fff;
  }
`;

export { TabButton, TabContainer, Wrapper }

interface ProfileTabProps {
  handleComponent: (componentName: string) => void;
}

const ProfileTab = ( {handleComponent}: ProfileTabProps) => {
  const [selectedTab, setSelectedTab] = useState('edit');

  const handleTabClick = (Tab: string) => {
    setSelectedTab(Tab);
    handleComponent(Tab);
  };
  return (
    <Wrapper>
      <TabContainer>
        <TabButton
          onClick={() => handleTabClick('edit')}
          className={selectedTab === 'edit' ? 'selected' : ''}
        >
          Edit profile
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('change')}
          className={selectedTab === 'change' ? 'selected' : ''}
        >
          Change password
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('delete')}
          className={selectedTab === 'delete' ? 'selected' : ''}
        >
          Delete profile
        </TabButton>
      </TabContainer>
    </Wrapper>
  );
};

export default ProfileTab;

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
