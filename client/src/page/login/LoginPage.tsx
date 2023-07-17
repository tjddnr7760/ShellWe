import React from 'react';
import {
  LoginContainer,
  LoginBox,
  Logo,
  OathContainer,
  OathImg,
  OathText,
  UserinfoContainer,
  DivBox,
  DivInputBox,
  DivInput,
  CheckError,
  LoginButton,
} from './LoginPage.styled';
import googlelogo from '../../asset/googlelogo.png';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <OathContainer>
          <OathImg src={googlelogo}></OathImg>
          <OathText>Sign up with Google</OathText>
        </OathContainer>
        <UserinfoContainer>
          <DivBox>
            <div> Email</div>
            <DivInputBox>
              <DivInput type="email" />
            </DivInputBox>
            <CheckError>유효하지 않은 사용자입니다..</CheckError>
          </DivBox>
          <DivBox>
            <div> Password</div>
            <DivInputBox>
              <DivInput type="password" />
            </DivInputBox>
            <CheckError>비밀번호를 확인해주세요 </CheckError>
          </DivBox>
        </UserinfoContainer>
        <LoginButton>Log in</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
