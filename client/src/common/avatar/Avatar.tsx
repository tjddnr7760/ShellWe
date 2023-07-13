/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate } from 'react-router-dom';
import { Icon, UserImg } from './Avatar.styled.ts';
import userimg from '../../asset/avatar/userimg.svg';
import noprofile from '../../asset/avatar/noprofile.svg';

interface Member {
  id: number;
  displayName: string;
  profileUrl: string;
}

const Avatar = ({
  member,
  avatartype,
}: {
  member: Member;
  avatartype: string;
}) => {
  const navigate = useNavigate();
  const userImg = userimg;
  const id = member.id;

  const goToMyShellsPage = () => {
    navigate(`/myshells/${id}`);
  };

  return avatartype === 'UserImg' ? (
    <UserImg onClick={goToMyShellsPage}>
      <img src={userImg !== '' ? userimg : noprofile} alt="user-image" />
    </UserImg>
  ) : (
    <Icon onClick={goToMyShellsPage}>
      <img src={userImg ? userimg : noprofile} alt="user-icon" />
    </Icon>
  );
};

export default Avatar;
