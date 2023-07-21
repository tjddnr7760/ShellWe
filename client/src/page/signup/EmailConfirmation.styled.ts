import styled from 'styled-components';

const EmailConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 800px;
  height: 500px;
`;

const NoticeHeader = styled.div``;

const NoticeBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextTitle = styled.div`
  font-size: 30px;
  text-align: center;
`;

const EmailNotice = styled.div`
  color: gray;
  font-size: 20px;
  text-align: center;
`;
const AccessNotice = styled.div`
  color: gray;
  font-size: 14px;
  line-height: 16px;
`;

export {
  EmailConfirmationWrapper,
  NoticeContainer,
  NoticeHeader,
  NoticeBody,
  TextTitle,
  EmailNotice,
  AccessNotice,
};
