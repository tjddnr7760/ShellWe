import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

export const Button = styled.button`
  background-color: #0000ff;
  width: 110px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 15px;
  background: #00b4d8;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 1px solid gray;

  &:hover {
    background-color: #1691ee;
  }

  color: white;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.SignupButton {
    margin-right: 30px;
  }

  &.LoginButton {
    margin-right: 20px;
  }
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 60px;
  height: 60px;
`;
