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
    gap: 30px;
    padding: 30px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProfileImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 0px 0px;
  font-size: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: fit-content;

  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  }
`;

const Title = styled.div`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #023e8a;
  font-size: 20px;
  color: #fff;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 8px;
  }
`;

const DisplayNameInput = styled.input`
  font-size: 20px;
  min-width: 100px;
  max-width: 320px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const IntroductionInput = styled.textarea`
  font-size: 20px;
  min-width: 100px;
  max-width: 600px;
  min-height: 150px;
  max-height: fit-content;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const SaveButton = styled(SmallButton6)`
  width: 125px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 120px;
    height: 35px;
  }
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
  ProfileImageBox,
  Title,
  TextDiv,
  ContentBox,
  DisplayNameInput,
  IntroductionInput,
  SaveButton,
  CancelButton,
  ButtonBox,
  Image,
  ImageBox,
};
