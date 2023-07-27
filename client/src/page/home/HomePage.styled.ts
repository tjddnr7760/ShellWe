import styled from 'styled-components';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  position: relative;
  height: fit-content;
  font-size: 50px;
  display: flex;
  justify-content: space-between;
  padding: 150px 120px 120px 120px;
  gap: 20px;

  @media (max-width: 1640px) {
    padding: 150px 80px 100px 90px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    gap: 5px;
  }
`;

const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Title = styled.div`
  color: #00b4d8;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  font-size: 50px;
  line-height: 60px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const ContentImgBox = styled.div`
  max-width: 550px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 150px;
  }
`;

const ContentImg = styled.img`
  width: 100%;
  height: fit-content;
`;

const Outtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuttroImgBox = styled.div`
  width: 1000px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export {
  HomePageWrapper,
  ContentContainer,
  ContentBox,
  Title,
  Body,
  ContentImg,
  ContentImgBox,
  Outtro,
  OuttroImgBox,
  ContentTextBox,
};
