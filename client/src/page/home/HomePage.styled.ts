import styled from 'styled-components';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
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
  padding: 150px;
  gap: 100px;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const Title = styled.div`
  color: #00b4d8;
  font-size: 40px;
  font-weight: 600;
`;

const Body = styled.div`
  font-size: 50px;
`;

const ContentImgBox = styled.div``;

const ContentImg = styled.img`
  width: 100%;
  height: fit-content;
`;

const Outtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
};
