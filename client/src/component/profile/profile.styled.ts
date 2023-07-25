import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  max-width: 700px;
  height: fit-content;
  gap: 10px;

  @media (max-width: 768px) {
    min-width: 300px;
    gap: 10px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
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
  width: 200px;
  height: 200px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100px;
    max-height: 100px;
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
  border: 0.5px solid rgba(0, 0, 0, 0.2);
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
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
`;
const TagExplainText = styled.div`
  font-size: 20px;
  padding: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const AllCurrentTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export {
  ProfileWrapper,
  ProfileContainer,
  UserImg,
  DisplayName,
  Introduction,
  ImgandNameContainer,
  IntroductionContainer,
  TagsContainer,
  TagExplainText,
  AllCurrentTags,
  Box,
  Box2,
  UserImgBox,
};
