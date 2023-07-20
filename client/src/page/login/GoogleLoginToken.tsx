import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../../recoil/atom';

export const GoogleLoginToken = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLogInState);
  const id: string | null = new URL(location.href).searchParams.get('id');
  const displayName: string | null = new URL(location.href).searchParams.get(
    'displayName'
  );
  const profileUrl: string | null = new URL(location.href).searchParams.get(
    'profileUrl'
  );
  const accessToken: string | null = new URL(location.href).searchParams.get(
    'Authorization'
  );
  accessToken && localStorage.setItem('Authorization', accessToken);
  id && localStorage.setItem('id', id);

  if (displayName) {
    const decodedDisplayName = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(displayName)
      ? decodeURIComponent(displayName)
      : displayName;
    localStorage.setItem('displayName', decodedDisplayName);
  }

  profileUrl && localStorage.setItem('profileUrl', profileUrl);
  profileUrl && localStorage.setItem('profileUrl', profileUrl);

  useEffect(() => {
    setIsLoggedIn(true);
    navigate('/main');
  }, []);

  return <div></div>;
};

export default GoogleLoginToken;
