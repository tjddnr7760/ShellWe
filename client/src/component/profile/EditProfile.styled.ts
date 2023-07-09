/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { SmallButton6 } from '../../common/button/Button.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 700px;
  height: 700px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding-left: 50px;
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
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  width: 150px;
  height: 150px;
`;

const Title = styled.div``;

const TextDiv = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #023e8a;
  font-size: 16px;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
`;

const NicknameInput = styled.input`
  width: 320px;
`;

const IntroductionInput = styled.input`
  width: 320px;
  height: 150px;
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

const Image = styled.img`
  height: 85%; // img 밑에 텍스트인 "change picture" 요소의 높이를 15% 줬기 때문입니다.
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
