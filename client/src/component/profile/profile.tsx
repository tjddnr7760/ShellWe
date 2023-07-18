import {
  ProfileContainer,
  UserImg,
  DisplayName,
  Introduction,
  ImgandNameContainer,
  IntroductionContainer,
  UserImgBox,
} from './Profile.styled';
import { Member } from '../../hooks/profile/useGetMember';

const Profile = ({ memberInfo }: { memberInfo: Member }) => {
  return (
    <ProfileContainer>
      <ImgandNameContainer>
        <UserImgBox>
          <UserImg src={memberInfo.profileUrl} alt="product"></UserImg>
        </UserImgBox>
        <DisplayName>{memberInfo.displayName}</DisplayName>
      </ImgandNameContainer>
      <IntroductionContainer>
        <Introduction>{memberInfo.introduction}</Introduction>
      </IntroductionContainer>
    </ProfileContainer>
  );
};

export default Profile;
