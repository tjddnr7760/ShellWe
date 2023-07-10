import {
  SignupContainer,
  SignupBox,
  Logo,
  Oath,
  OathImg,
  UserinfoContainer,
  NickNameBox,
  NickNameInput,
  NickNameError,
  EmailBox,
  EmailInputBox,
  EmailInput,
  EmailOverlapCheck,
  EmailError,
  PasswordBox,
  PasswordInput,
  PasswordError,
  SignupButton,
  PasswordCheckBox,
  PasswordCheckError,
} from './SignupPage.styled';
const SignupPage: React.FC = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <Oath>
          <OathImg
            src="https://banner2.cleanpng.com/20180416/xlq/kisspng-g-suite-pearl-river-middle-school-google-software-sign-up-button-5ad4e1a9d11d62.1599053415239008418566.jpg"
            alt="GoogleLogoImg"
          ></OathImg>
          Sign in with Google
        </Oath>
        <UserinfoContainer>
          <NickNameBox>
            NickName
            <NickNameInput type="text" name="nickname" />
            <NickNameError>닉네임은 8글자 이하이어야 합니다.</NickNameError>
          </NickNameBox>
          <EmailBox>
            Email
            <EmailInputBox>
              <EmailInput type="email" />
              <EmailOverlapCheck>중복확인</EmailOverlapCheck>
            </EmailInputBox>
            <EmailError>중복된 이메일입니다.</EmailError>
          </EmailBox>
          <PasswordBox>
            Password
            <PasswordInput type="password" />
            <PasswordError>
              비밀번호는 영문, 숫자, 특수문자를 포함한 8글자 이상이어야 합니다.
            </PasswordError>
          </PasswordBox>

          <PasswordCheckBox>
            Password 확인
            <PasswordInput type="password" />
            <PasswordCheckError>비밀번호가 다릅니다.</PasswordCheckError>
          </PasswordCheckBox>
        </UserinfoContainer>
        <SignupButton>Sign up</SignupButton>
      </SignupBox>
    </SignupContainer>
  );
};

export default SignupPage;
