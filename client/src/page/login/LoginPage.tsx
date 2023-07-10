import React from 'react';
import {
  LoginContainer,
  LoginBox,
  Logo,
  Oath,
  OathImg,
  UserinfoContainer,
  EmailBox,
  EmailInputBox,
  EmailInput,
  EmailError,
  LoginButton,
} from './LoginPage.styled';
import btn_google from '../../asset/btn_google.png';

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <Oath>
          <OathImg src={btn_google} alt="GoogleLogoImg"></OathImg>
        </Oath>
        <UserinfoContainer>
          <EmailBox>
            <div> Email</div>
            <EmailInputBox>
              <EmailInput type="email" />
            </EmailInputBox>
            <EmailError>유효하지 않은 사용자입니다..</EmailError>
          </EmailBox>
          <EmailBox>
            <div> Password</div>
            <EmailInputBox>
              <EmailInput type="password" />
            </EmailInputBox>
            <EmailError>비밀번호를 확인해주세요 </EmailError>
          </EmailBox>
        </UserinfoContainer>
        <LoginButton>Log in</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
