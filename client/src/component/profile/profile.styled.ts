import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ProfileContainer = styled.div`
  display: flex;
  width: 945px;
  height: 270px;
  gap: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
`;

const UserImg = styled(Div)`
  width: 220px;
  height: 220px;
`;
const Nickname = styled(UserImg)`
  height: 40px;
`;
const Introduction = styled(Div)`
  justify-content: flex-start;
  width: 700px;
  height: 220px;
  padding: 10px;
`;
const AllLikeCategorys = styled(Introduction)`
  height: 40px;
`;

export {
  Wrapper,
  ProfileContainer,
  UserImg,
  Nickname,
  Introduction,
  AllLikeCategorys,
  Box,
};
