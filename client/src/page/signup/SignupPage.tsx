import { EmailOverlapCheck } from './SignupPage.styled';
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
} from '../login/LoginPage.styled';
import btn_google from '../../asset/btn_google.png';

const SignupPage: React.FC = () => {
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
            <div>NickName </div>
            <EmailInputBox>
              <EmailInput type="text" name="nickname" />
            </EmailInputBox>
            <EmailError>닉네임은 8글자 이하이어야 합니다.</EmailError>
          </EmailBox>
          <EmailBox>
            <div> Email</div>
            <EmailInputBox>
              <EmailInput type="email" />
              <EmailOverlapCheck>중복확인</EmailOverlapCheck>
            </EmailInputBox>
            <EmailError>중복된 이메일입니다.</EmailError>
          </EmailBox>
          <EmailBox>
            <div> Password</div>
            <EmailInputBox>
              <EmailInput type="password" />
            </EmailInputBox>
            <EmailError>비밀번호를 확인해주세요 </EmailError>
          </EmailBox>

          <EmailBox>
            <div> Password 확인</div>
            <EmailInputBox>
              <EmailInput type="password" />
            </EmailInputBox>
            <EmailError>비밀번호가 다릅니다.</EmailError>
          </EmailBox>
        </UserinfoContainer>
        <LoginButton>Sign up</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default SignupPage;
