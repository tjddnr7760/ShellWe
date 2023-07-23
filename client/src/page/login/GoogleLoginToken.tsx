import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userStateWithExpiry } from '../../recoil/selector';

export const GoogleLoginToken = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(userStateWithExpiry);

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

  accessToken && localStorage.setItem('accessToken', accessToken);
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
