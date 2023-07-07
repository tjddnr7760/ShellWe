import {
  Wrapper,
  ProfileContainer,
  UserImg,
  Nickname,
  Introduction,
  AllLikeCategorys,
  Box,
} from './profile.styled';

const profile = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default profile;
