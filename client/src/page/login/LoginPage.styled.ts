import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 429px;
  height: 732px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 52.5px;
  height: 52.5px;
  margin-bottom: 40px;
`;

export const Oath = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  border: 0.5px solid #00000080;
  border-radius: 15px;
  width: 362px;
  height: 60px;
  margin-left: 10px;
  cursor: pointer;
  margin-bottom: 40px;
`;

export const OathImg = styled.img`
  width: 31px;
  height: 32px;
  cursor: pointer;
  margin-right: 20px;
`;

export const UserinfoContainer = styled.div`
  width: 352px;
`;

export const EmailBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 365px;
`;

export const EmailInputBox = styled.div`
  margin-top: 5px;

  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #00000080;
`;

export const EmailInput = styled.input`
  border: none;
  border-radius: 15px;
  width: 352px;
  height: 54px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const EmailOverlapCheck = styled.button`
  background-color: #48cae4;
  width: 90px;
  height: 50px;
  border-radius: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  font-weight: 400;
  font-size: 14px;

  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;

export const EmailError = styled.span`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 10px;
  color: red;
`;

export const PasswordBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const PasswordInput = styled.input`
  margin-top: 5px;
  border: 0.5px solid #00000080;
  border-radius: 15px;
  width: 352px;
  height: 54px;
  padding-left: 10px;
`;

export const PasswordError = styled.span`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 10px;
  color: red;
`;

export const LoginButton = styled.button`
  width: 354px;
  height: 55px;
  background-color: #48cae4;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
  &:active {
    transform: translateY(2px);
  }
`;
