import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
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
  CheckError,
  CheckPosible,
  LoginButton,
} from '../login/LoginPage.styled';
import googlelogo from '../../asset/googlelogo.png';
import EmailConfirmation from './EmailComfirmation';
import { usePostSignup } from '../../hooks/login/PostSignup';

const SignupPage = () => {
  const [displayName, setDispayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');
  const [isSignupDisabled, setIsSignupDisabled] = useState<boolean>(true);
  const [activeEmailConfirmation, setactiveEmailConfirmation] =
    useState<boolean>(false);

  const requestBody = {
    displayName,
    email,
    password,
  };
  const { mutate: signup } = usePostSignup(requestBody);

  const isNicknameValid = displayName.length <= 8;
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-_=+~<>?/\\[\]{},.;:'"|]{8,}$/.test(
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

  const signupMutation = useMutation(async () => {
    const response = await axios.post(`${import.meta.env.VITE_KEY}/members`, {
      email,
      password,
      displayName,
    });
    return response.data;
  });

  // 1. 회원가입 post mutation 생성

  const handleSignup = () => {
    signup();
    setactiveEmailConfirmation(true);
  };

  // const handleSignup = async (e: any) => {
  //   e.preventDefault();
  //   setactiveEmailConfirmation(true);

  //   try {
  //     const data = await signupMutation.mutateAsync();
  //     console.log(
  //       '이메일 인증이 완료되었습니다. \n로그인 페이지에서 로그인을 진행해주시기 바랍니다.',
  //       data
  //     );
  //   } catch (error) {
  //     console.error('회원 가입 실패.', error);
  //     setEmail('');
  //   }
  // };

  const LoginRequestHandlerGoogle = () => {
    window.location.href = `${
      import.meta.env.VITE_KEY
    }/oauth2/authorization/google`;
  };

  return (
    <LoginContainer>
      {!activeEmailConfirmation ? (
        <LoginBox>
          <Logo
            src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
            alt="Logo"
          ></Logo>
          <OauthContainer onClick={LoginRequestHandlerGoogle}>
            <OauthImg src={googlelogo}></OauthImg>
            <OauthText>Sign up with Google</OauthText>
          </OauthContainer>
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
              </DivInputBox>
              {!isEmailValid && email.length > 0 && (
                <CheckError>올바른 이메일 주소를 작성해주세요.</CheckError>
              )}
            </DivBox>
            <DivBox>
              <div>Password</div>
              <DivInputBox>
                <DivInput
                  placeholder="  알파벳, 숫자 포함 8자 이상이어야 합니다."
                  type="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </DivInputBox>
              {!isPasswordValid && password && (
                <CheckError>
                  패스워드는 숫자, 영어 포함 8글자 이상이어야 합니다.
                </CheckError>
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
      ) : (
        <EmailConfirmation email={email} />
      )}
    </LoginContainer>
  );
};

export default SignupPage;
