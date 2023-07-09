import {
  ProfileContainer,
  UserImg,
  Nickname,
  Introduction,
  AllLikeCategorys,
  Box,
} from './Profile.styled'

const profile = () => {
  return (
      <ProfileContainer>
        <Box>
          <UserImg>userImg</UserImg>
          <Nickname>Nickname</Nickname>
        </Box>
        <Box>
          <Introduction>Introduction</Introduction>
          <AllLikeCategorys>All Like Categorys</AllLikeCategorys>
        </Box>
      </ProfileContainer>
  );
};

export default profile;
