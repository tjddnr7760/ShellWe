import {
  ProfileContainer,
  UserImg,
  Nickname,
  Introduction,
  AllLikeCategorys,
  Box,
  Box2,
  UserImgBox,
} from './Profile.styled';
import example from '../../asset/example.png'

const profile = () => {
  return (
    <ProfileContainer>
      <Box>
        <UserImgBox>
          <UserImg src={example} alt='product'></UserImg>
        </UserImgBox>
        <Nickname>Nickname</Nickname>
      </Box>
      <Box2>
        <Introduction>Introduction</Introduction>
        <AllLikeCategorys>All Like Categorys</AllLikeCategorys>
      </Box2>
    </ProfileContainer>
  );
};

export default profile;
