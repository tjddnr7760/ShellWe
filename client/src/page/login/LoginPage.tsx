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
  PasswordBox,
  PasswordInput,
  PasswordError,
  LoginButton,
} from './LoginPage.styled';
const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginBox>
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
          <EmailBox>
            Email
            <EmailInputBox>
              <EmailInput type="email" />
            </EmailInputBox>
            <EmailError>유효하지 않은 사용자입니다..</EmailError>
          </EmailBox>
          <PasswordBox>
            Password
            <PasswordInput type="password" />
            <PasswordError>비밀번호를 확인해주세요 </PasswordError>
          </PasswordBox>
        </UserinfoContainer>
        <LoginButton>Log in</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
