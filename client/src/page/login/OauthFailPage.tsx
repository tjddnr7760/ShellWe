import { useNavigate } from 'react-router';

const OauthFailPage = () => {
  const navigate = useNavigate();
  alert(
    '이미 가입된 gmail 정보이거나, 비밀번호가 틀렸습니다.\n다시 시도해주세요.'
  );
  navigate('/login');

  return <div>로그인 페이지로 돌아가서 다시 로그인을 시도해주세요.</div>;
};

export default OauthFailPage;
