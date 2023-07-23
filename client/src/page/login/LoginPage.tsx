import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostLogin } from '../../hooks/login/PostLogin';
import googlelogo from '../../asset/googlelogo.png';
import {
  LoginContainer,
  LoginBox,
  Logo,
  OauthContainer,
  OauthImg,
  OauthText,
  UserinfoContainer,
  DivBox,
  DivInputBox,
  DivInput,
  LoginButton,
  LoginSubFuntionBox,
  LoginSubFuntion,
  LoginDiv,
} from './LoginPage.styled';
import { GoogleLogin } from '../../utill/googleLogin';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: Login } = usePostLogin();
  const navigate = useNavigate();

  const guestLoginRequestBody = {
    email: 'lts890303@gmail.com',
    password: 'Abcd1234!!',
  };
  const loginRequestBody = {
    email,
    password,
  };

  const handleGuestLogin = () => {
    Login(guestLoginRequestBody);
  };

  const handleLogin = () => {
    Login(loginRequestBody);
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <OauthContainer onClick={GoogleLogin}>
          <OauthImg src={googlelogo}></OauthImg>
          <OauthText>Login with Google</OauthText>
        </OauthContainer>
        <UserinfoContainer>
          <DivBox>
            <div>Email</div>
            <DivInputBox>
              <DivInput
                type="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </DivInputBox>
          </DivBox>
          <DivBox>
            <div>Password</div>
            <DivInputBox>
              <DivInput
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </DivInputBox>
          </DivBox>
        </UserinfoContainer>
        <LoginSubFuntionBox>
          <LoginButton onClick={handleLogin}>Log in</LoginButton>
          <LoginDiv>
            <LoginSubFuntion onClick={goToSignup}>Sign up</LoginSubFuntion>
            <LoginSubFuntion onClick={handleGuestLogin}>
              Guest Log in
            </LoginSubFuntion>
          </LoginDiv>
        </LoginSubFuntionBox>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
