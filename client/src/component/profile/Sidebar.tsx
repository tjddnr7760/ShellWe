import { useState } from 'react';
import {
  SidebarContainer,
  RowTab,
  ColumnTab,
  RowTabBox,
  ColumnTabBox,
} from './Sidebar.styled';

const Sidebar = () => {
  const [selectedRowTab, setSelectedRowTab] = useState('Profile');
  const [selectedColumnTab, setSelectedColumnTab] = useState('Edit profile');

  const TabHandler = (tab: string) => {
    if (tab === 'Profile' || tab === 'Shells') {
      setSelectedRowTab(tab);
    } else {
      setSelectedColumnTab(tab);
    }
  };

  // Onclick 되엇을 때, 어떻게 색깔이 바뀌게 할 수 있을까?
  return (
    <SidebarContainer>
      <RowTabBox>
        <RowTab onClick={() => TabHandler('Profile')}>Profile</RowTab>
        <RowTab onClick={() => TabHandler('Shells')}>Shells</RowTab>
      </RowTabBox>
      <ColumnTabBox>
        <ColumnTab onClick={() => TabHandler('Edit profile')}>
          Edit profile
        </ColumnTab>
        <ColumnTab onClick={() => TabHandler('Change password')}>
          Change password
        </ColumnTab>
        <ColumnTab onClick={() => TabHandler('Delete profile')}>
          Delete profile
        </ColumnTab>
      </ColumnTabBox>
    </SidebarContainer>
  );
};

export default Sidebar;

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
