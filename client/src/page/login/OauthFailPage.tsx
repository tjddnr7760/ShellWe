import { useNavigate } from 'react-router';

const OauthFailPage = () => {
  const navigate = useNavigate();
  navigate('/login');
  alert('구글 로그인에 실패하였습니다. 다시 시도해주세요.');

  return <></>;
};

export default OauthFailPage;
