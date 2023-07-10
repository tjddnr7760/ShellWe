import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  postion:sticky
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  background: #e3f6fe;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
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
  padding-left: 75px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 60px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #828282;

  svg {
    margin-right: 10px;
  }

  img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  width: 270px;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  color: #828282;
  border-radius: 10px;
  padding-left: 40px;

  svg {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogoutButton = styled.div`
  padding: 30px;
  color: #828282;
  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;
