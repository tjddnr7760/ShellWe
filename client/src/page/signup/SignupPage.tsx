import { useState, useEffect } from 'react';

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
} from '../login/LoginPage.styled';
import googlelogo from '../../asset/googlelogo.png';

const SignupPage: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isSignupDisabled, setIsSignupDisabled] = useState(true);

  const isNicknameValid =
    nickname.length <= 8 && /^[a-zA-Z가-힣]+$/.test(nickname);
  const isPasswordValid =
    password.length >= 10 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
      password
    );
  const isCheckPasswordValid = isPasswordValid && password === checkPassword;
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  useEffect(() => {
    setIsSignupDisabled(
      !isNicknameValid ||
        !isPasswordValid ||
        !isCheckPasswordValid ||
        !isEmailValid
    );
  }, [isNicknameValid, isPasswordValid, isCheckPasswordValid, isEmailValid]);

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
                value={nickname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNickname(e.target.value)
                }
              />
            </DivInputBox>
            {!isNicknameValid && nickname.length >= 8 && (
              <CheckError>닉네임은 8글자 이하이어야 합니다.</CheckError>
            )}
            {isNicknameValid && nickname && (
              <CheckPosible>사용 가능한 닉네임입니다.</CheckPosible>
            )}
          </DivBox>
          <DivBox>
            <div>Email</div>
            <DivInputBox>
              <DivInput
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </DivInputBox>
            {!isEmailValid && email.length > 0 && (
              <CheckError>유효하지 않는 이메일입니다.</CheckError>
            )}
          </DivBox>
          <DivBox>
            <div>Password</div>
            <DivInputBox>
              <DivInput
                placeholder="대소문자 (알파벳), 숫자, 특수문자 조합 10글자 이상"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCheckPassword(e.target.value)
                }
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
        <LoginButton disabled={isSignupDisabled}>Sign up</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default SignupPage;
