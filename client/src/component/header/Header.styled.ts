import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 15px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownBTN = styled.img`
  width: 32px;
  height: 32px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  margin-right: 10px;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownContent = styled.div`
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: fit-content;
  border: 1px ridge #0077b6;
  gap: 20px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const Logo = styled.img`
  margin-left: 15px;
  width: 40px;
  height: 40px;
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 60px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #828282;
  padding: 10px;
  width: 100%;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }

  &.selected {
    background-color: #c8f5ff;
  }
`;
export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
`;
