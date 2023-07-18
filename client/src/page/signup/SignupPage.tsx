import { EmailOverlapCheck } from './SignupPage.styled';
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

const SignupPage: React.FC = () => {
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
            <div>NickName </div>
            <DivInputBox>
              <DivInput type="text" name="nickname" />
            </DivInputBox>
            <CheckError>닉네임은 8글자 이하이어야 합니다.</CheckError>
          </DivBox>
          <DivBox>
            <div> Email</div>
            <DivInputBox>
              <DivInput type="email" />
              <EmailOverlapCheck>중복확인</EmailOverlapCheck>
            </DivInputBox>
            <CheckError>중복된 이메일입니다.</CheckError>
          </DivBox>
          <DivBox>
            <div> Password</div>
            <DivInputBox>
              <DivInput type="password" />
            </DivInputBox>
            <CheckError>비밀번호를 확인해주세요 </CheckError>
          </DivBox>

          <DivBox>
            <div> Password 확인</div>
            <DivInputBox>
              <DivInput type="password" />
            </DivInputBox>
            <CheckError>비밀번호가 다릅니다.</CheckError>
          </DivBox>
        </UserinfoContainer>
        <LoginButton>Sign up</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default SignupPage;
