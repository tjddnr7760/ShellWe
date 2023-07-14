import { useNavigate } from 'react-router-dom';
import { Icon, UserImg } from './Avatar.styled.ts';
import noprofile from '../../asset/avatar/noprofile.svg';

interface MemberProps {
  id: number;
  displayName: string;
  profileUrl: string;
}

const Avatar = ({
  avatartype,
  member,
}: {
  avatartype: string;
  member: MemberProps;
}) => {
  const navigate = useNavigate();
  const userImg = member.profileUrl;
  const id = member.id;

  const goToMyShellsPage = () => {
    navigate(`/myshells/${id}`);
  };

  return avatartype === 'UserImg' ? (
    <UserImg onClick={goToMyShellsPage}>
      <img src={userImg !== null ? userImg : noprofile} alt="userphoto" />
    </UserImg>
  ) : (
    <Icon onClick={goToMyShellsPage}>
      <img src={userImg !== null ? userImg : noprofile} alt="userphoto" />
    </Icon>
  );
};

export default Avatar;
