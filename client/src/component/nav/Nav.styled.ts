import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 16%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: rgba(202, 240, 248, 0.5);
`;

export const Logo = styled.img`
  cursor: pointer;

  margin-top: 15px;
  margin-bottom: 30px;
  width: 60px;
  height: 60px;
`;

export const NavItems = styled.div`
  margin: 20px 0px 330px 0px;
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  width: 150px;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  color: #828282;
  border-radius: 10px;

  padding-left: 40px;
  margin-left: 90px;
  svg {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #c8f5ff;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  letter-spacing: 0.5px;
  width: 260px;
  height: 60px;
  border-radius: 10px;
  padding-left: 32px;
  margin-left: 60px;
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

export const LogoutButton = styled.div`
  padding-left: 200px;
  display: flex;
  flex-direction: flex-end;
  color: #828282;

  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;
