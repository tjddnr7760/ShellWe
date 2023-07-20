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
  profileUrl && localStorage.setItem('profileUrl', profileUrl);
  if (displayName) {
    const decodedDisplayName = decodeURIComponent(displayName);
    localStorage.setItem('displayName', decodedDisplayName);
  }

  useEffect(() => {
    setIsLoggedIn(true);
    navigate('/main');
  }, []);

  return <></>;
};

export default GoogleLoginToken;
