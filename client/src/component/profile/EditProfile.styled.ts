/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { SmallButton6 } from '../../common/button/Button.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 50px;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 150px;
  max-height: fit-content;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: fit-content; // img 밑에 텍스트인 "change picture" 요소의 높이를 15% 줬기 때문입니다.
`;

const Title = styled.div``;

const TextDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #023e8a;
  font-size: 16px;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  padding: 5px;
`;

const NicknameInput = styled.input`
  min-width: 100px;
  max-width: 320px;
`;

const IntroductionInput = styled.input`
  min-width: 100px;
  max-width: 320px;
  min-height: 150px;
  max-height: fit-content;
`;

const SaveButton = styled(SmallButton6)`
  width: 125px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const CancelButton = styled(SaveButton)`
  background-color: #fff;
  color: #023e8a;
`;

const ButtonBox = styled(ContentBox)`
  flex-direction: row;
`;

export {
  Wrapper,
  ProfileImage,
  Title,
  TextDiv,
  ContentBox,
  NicknameInput,
  IntroductionInput,
  SaveButton,
  CancelButton,
  ButtonBox,
  Image,
};
