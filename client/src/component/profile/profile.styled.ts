import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  max-width: 700px;
  height: fit-content;
  gap: 20px;
`;

const ImgandNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

const UserImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  max-width: 200px;
  max-height: fit-content;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const UserImg = styled.img`
  width: 100%;
`;

const DisplayName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  max-width: 200px;
  max-height: fit-content;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  flex-grow: 1;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AllLikeCategorys = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export {
  ProfileContainer,
  UserImg,
  DisplayName,
  Introduction,
  AllLikeCategorys,
  ImgandNameContainer,
  IntroductionContainer,
  UserImgBox,
};
