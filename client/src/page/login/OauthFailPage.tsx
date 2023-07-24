import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

const OuathFailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GoToLoginWrapper = styled.button`
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;
  width: 900px;
  height: 400px;
  cursor: pointer;
  font-size: 40px;
  line-height: 50px;
  border-radius: 16px;
  text-align: center;

  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }

  @media (max-width: 768) {
    width: 200px;
    height: 600px;
    font-size: 20px;
    line-height: 25px;
  }
`;

const OauthFailPage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  alert(
    '이미 가입된 gmail 정보이거나, 유효하지 않은 비밀번호 입니다.\n다시 시도해주세요.'
  );

  return (
    <OuathFailPageWrapper>
      <GoToLoginWrapper onClick={goToLogin}>
        로그인을 다시 시도해주세요.
        <br />
        여기를 클릭해서 로그인 페이지로 돌아가기
      </GoToLoginWrapper>
    </OuathFailPageWrapper>
  );
};

export default OauthFailPage;
