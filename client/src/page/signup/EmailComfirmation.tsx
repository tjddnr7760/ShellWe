import {
  EmailConfirmationWrapper,
  NoticeContainer,
  NoticeHeader,
  NoticeBody,
  TextTitle,
  EmailNotice,
  AccessNotice,
} from './EmailConfirmation.styled';

interface Email {
  email: string;
}
const EmailConfirmation = ({ email }: Email) => {
  //여기에 email props로 보내기
  return (
    <EmailConfirmationWrapper>
      <NoticeContainer>
        <NoticeHeader>
          <TextTitle>이메일 인증</TextTitle>
        </NoticeHeader>
        <NoticeBody>
          <EmailNotice>
            {email}에 보내드린 인증 메일을 확인해주세요.
          </EmailNotice>
          <AccessNotice>
            이메일 인증에 따른 접근 권한 안내
            <br />
            · 로그인 및 이메일 인증하지 않을 시, 메인 페이지 조회, Find Shell
            조회만 사용 가능합니다.
            <br />· 이메일 인증 시, 모든 기능 사용 가능합니다.
          </AccessNotice>
        </NoticeBody>
      </NoticeContainer>
    </EmailConfirmationWrapper>
  );
};
export default EmailConfirmation;
