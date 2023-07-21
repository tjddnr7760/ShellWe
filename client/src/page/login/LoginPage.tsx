import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import googlelogo from '../../asset/googlelogo.png';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../../recoil/atom';
// import { usePostLogin } from '../../hooks/login/PostLogin';

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
} from './LoginPage.styled';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setIsLoggedIn = useSetRecoilState(isLogInState);
  const navigation = useNavigate();

  const handleGuestLogin = async (e: any) => {
    e.preventDefault();

    // 유틸함수 만들기

    const response = await axios.post(
      `${import.meta.env.VITE_KEY}/auth/login`,
      {
        email: 'tjddnr7760@naver.com',
        password: 'qwerR1234!@#',
      }
    );
    if (response.status === 200) {
      setIsLoggedIn(true);
      const accessToken = response.headers.authorization;
      const id = response.data.id;
      const displayName = response.data.displayName;
      const profileUrl = response.data.profileUrl;
      const isMe = response.data.isMe;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('id', id);
      localStorage.setItem('displayName', displayName);
      localStorage.setItem('profileUrl', profileUrl);
      localStorage.setItem('isMe', isMe);
      navigation('/main');
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_KEY}/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        const accessToken = response.headers.authorization;
        const id = response.data.id;
        const displayName = response.data.displayName;
        const profileUrl = response.data.profileUrl;
        const isMe = response.data.isMe;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('id', id);
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('profileUrl', profileUrl);
        localStorage.setItem('isMe', isMe);
        navigation('/main');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setEmail('');
        setPassword('');
        console.error('회원 가입 실패.', error);
        alert('이미 가입된 계정입니다.');
      }
    }
  };

  const LoginRequestHandlerGoogle = () => {
    window.location.href = `${
      import.meta.env.VITE_KEY
    }/oauth2/authorization/google`;
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <OauthContainer onClick={LoginRequestHandlerGoogle}>
          <OauthImg src={googlelogo}></OauthImg>
          <OauthText>Login with Google</OauthText>
        </OauthContainer>
        <UserinfoContainer>
          <DivBox>
            <div>Email</div>
            <DivInputBox>
              <DivInput
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </DivInputBox>
          </DivBox>
          <DivBox>
            <div>Password</div>
            <DivInputBox>
              <DivInput
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </DivInputBox>
          </DivBox>
        </UserinfoContainer>
        <LoginButton onClick={handleLogin}>Log in</LoginButton>
        <LoginSubFuntionBox>
          <LoginSubFuntion>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              Sign up
            </Link>
          </LoginSubFuntion>
          <LoginSubFuntion onClick={handleGuestLogin}>
            Guest-Login
          </LoginSubFuntion>
        </LoginSubFuntionBox>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
