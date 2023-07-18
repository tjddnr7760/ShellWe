import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
} from '../login/LoginPage.styled';
import googlelogo from '../../asset/googlelogo.png';

const SignupPage = () => {
  const [displayName, setDispayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isSignupDisabled, setIsSignupDisabled] = useState(true);
  const navigation = useNavigate();

  const isNicknameValid =
    displayName.length <= 8 && /^[a-zA-Z가-힣]+$/.test(displayName);
  const isPasswordValid =
    password.length >= 10 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
      password
    );
  const isCheckPasswordValid = isPasswordValid && password === checkPassword;
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsSignupDisabled(
      !isNicknameValid ||
        !isPasswordValid ||
        !isCheckPasswordValid ||
        !isEmailValid
    );
  }, [isNicknameValid, isPasswordValid, isCheckPasswordValid, isEmailValid]);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    /**
     * try
     * /signup 이라는 url로 post 요청을
     * request body에 nickname, email, password를 넣어서 보낼거야
     *
     * response -> 서버 요청에 대한 결과값 (response)
     *
     * 만약 response의 status가 200이라면 -> 서버 통신이 성공했다면
     * main 페이지로 이동시켜줘
     *
     * catch
     */

    try {
      const response = await axios.post(
        'https://e524-211-205-212-176.ngrok-free.app/members',
        {
          email,
          password,
          displayName,
        }
      );
      if (response.status === 201) {
        console.log('회원 가입 성공.');
        navigation('./main');
      }
    } catch (error: any) {
      console.error(error);
      console.log(error);
      if (error.response && error.response.data.error.status === 400) {
        setErrorMessage(error.response.data.error.errorName);
      } else {
        setErrorMessage('시스템 오류로 인한 회원 가입 실패');
      }
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
          <OathText>Sign up with Google</OathText>
        </OathContainer>
        <UserinfoContainer>
          <DivBox>
            <div>NickName</div>
            <DivInputBox>
              <DivInput
                type="text"
                name="nickname"
                value={displayName}
                onChange={(e: any) => setDispayName(e.target.value)}
              />
            </DivInputBox>
            {!isNicknameValid && displayName.length >= 8 && (
              <CheckError>닉네임은 8글자 이하이어야 합니다.</CheckError>
            )}
            {isNicknameValid && displayName && (
              <CheckPosible>사용 가능한 닉네임입니다.</CheckPosible>
            )}
          </DivBox>
          <DivBox>
            <div>Email</div>
            <DivInputBox>
              <DivInput
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <CheckError>{errorMessage && <p>{errorMessage}</p>}</CheckError>
            </DivInputBox>
            {!isEmailValid && email.length > 0 && (
              <CheckError>올바른 이메일 주소를 작성해주세요.</CheckError>
            )}
          </DivBox>
          <DivBox>
            <div>Password</div>
            <DivInputBox>
              <DivInput
                placeholder="대소문자 (알파벳), 숫자, 특수문자 조합 10글자 이상"
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
          <DivBox>
            <div>Password 확인</div>
            <DivInputBox>
              <DivInput
                type="password"
                value={checkPassword}
                onChange={(e: any) => setCheckPassword(e.target.value)}
              />
            </DivInputBox>
            {!isCheckPasswordValid &&
              isPasswordValid &&
              checkPassword.length > 0 && (
                <CheckError>비밀번호가 다릅니다.</CheckError>
              )}
            {isCheckPasswordValid && checkPassword && (
              <CheckPosible>비밀번호가 일치합니다.</CheckPosible>
            )}
          </DivBox>
        </UserinfoContainer>
        <LoginButton disabled={isSignupDisabled} onClick={handleSignup}>
          Sign up
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default SignupPage;
