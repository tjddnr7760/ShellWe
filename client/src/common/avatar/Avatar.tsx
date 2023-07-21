import { useNavigate } from 'react-router-dom';
import { Icon, UserImg } from './Avatar.styled.ts';
import noprofile from '../../asset/avatar/noprofile.svg';

interface MemberProps {
  id: number;
  displayName?: string;
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

  const goToMyShellsPage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate(`/myshells/${member.id}`);
  };

  return avatartype === 'UserImg' ? (
    <UserImg onClick={goToMyShellsPage}>
      <img src={userImg === 'empty' ? noprofile : userImg} alt="userphoto" />
    </UserImg>
  ) : (
    <Icon onClick={goToMyShellsPage}>
      <img src={userImg === 'empty' ? noprofile : userImg} alt="userphoto" />
    </Icon>
  );
};
export default Avatar;
