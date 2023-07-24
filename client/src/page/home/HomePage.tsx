import {
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
} from './HomePage.styled';
import DM from '../../asset/homepage/DM.png';
import poke from '../../asset/homepage/poke.png';
import poke2 from '../../asset/homepage/poke2.png';
import shallweshellwe from '../../asset/homepage/shallweshellwe.png';
import shellwefirstpage from '../../asset/homepage/shellwefisrtpage.png';

const HomePage = () => {
  const intro1 = '혁신적인 물물교환 서비스';
  const intro2 = '상호 혜택의 가치 제공';
  const aboutproduct1 = `Shell을 공유해보세요`;
  const pokefeature1 = 'Shell이 있나요?';
  const pokefeature2 = '원하는 제품을 찔러보세요';
  const messagefeature = '메시지를 통한 자유로운 소통';

  return (
    <HomePageWrapper>
      <ContentContainer>
        <ContentBox>
          <ContentTextBox>
            <Title>Shell We</Title>
            <Body>
              {intro1}
              <br />
              {intro2}
            </Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={shellwefirstpage} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>물품 · 재능(Shell)</Title>
            <Body>{aboutproduct1}</Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={poke} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>찌르기</Title>
            <Body>
              {pokefeature1}
              <br />
              {pokefeature2}
            </Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={poke2} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>DM</Title>
            <Body>{messagefeature}</Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={DM} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <Outtro>
          <OuttroImgBox>
            <ContentImg src={shallweshellwe} alt="picture" />
          </OuttroImgBox>
        </Outtro>
      </ContentContainer>
    </HomePageWrapper>
  );
};
export default HomePage;
