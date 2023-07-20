import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import googlelogo from '../../asset/googlelogo.png';
import { Link } from 'react-router-dom';

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
  CheckPosible,
  LoginButton,
  LoginSubFuntionBox,
  LoginSubFuntion,
} from './LoginPage.styled';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigate();

  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    password.length >= 10 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
      password
    );
  console.log('password', password);
  console.log('email', email);

  const handleGuestLogin = async (e: any) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_KEY}/auth/login`,
      {
        email: 'tjddnr7760@naver.com',
        password: 'qwerR1234!@#',
      }
    );
    if (response.status === 200) {
      const userData = response.data.id;

      localStorage.setItem('userData', JSON.stringify(userData));

      const accessToken = response.headers.authorization;

      localStorage.setItem('accessToken', accessToken);
      console.log(accessToken);
      console.log(userData);
      console.log(response.headers.authorization);

      navigation('/main');
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_KEY}/auth/login`,
      {
        email,
        password,
      }
    );
    if (response.status === 200) {
      const userData = response.data.user;

      localStorage.setItem('userData', JSON.stringify(userData));

      const accessToken = response.headers.authorization;
      localStorage.setItem('accessToken', accessToken);

      navigation('/main');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <OathContainer>
          <OathImg src={googlelogo}></OathImg>
          <OathText>Login with Google</OathText>
        </OathContainer>
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
            {!isEmailValid && email.length > 0 && (
              <CheckError>올바른 이메일 주소를 작성해주세요.</CheckError>
            )}
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
            {password.length > 10 && !isPasswordValid && (
              <CheckError>비밀번호를 확인해주세요.</CheckError>
            )}
            {isPasswordValid && password && (
              <CheckPosible>사용 가능한 비밀번호입니다.</CheckPosible>
            )}
          </DivBox>
        </UserinfoContainer>
        <LoginButton onClick={handleLogin}>Log in</LoginButton>
        <LoginSubFuntionBox>
          <LoginSubFuntion>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              Signup
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
