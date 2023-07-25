import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  height: 100%;
`;
export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  background: red;
  min-width: 250px;
  height: 100%;
  padding-top: 40px;
  white-space: nowrap;
  background: #e3f6fe;
`;

export const Logo = styled.img`
  cursor: pointer;
  margin-bottom: 30px;
  width: 60px;
  height: 60px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 60px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #828282;
  padding-left: 30px;
  padding-right: 30px;

  img {
    width: 26px;
    height: 26px;
  }

  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }

  &.selectedTab {
    background-color: #c8f5ff;
  }
`;
export const NavItemContentWrapper = styled.div``;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  color: #828282;
  border-radius: 10px;
  padding-left: 70px;

  svg {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }
  &.selectedTab {
    background-color: #c8f5ff;
  }
`;
