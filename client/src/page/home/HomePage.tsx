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
import DM from '../../asset/homepage/directmessage.png';
import shelldetail from '../../asset/homepage/shelldetail.png';
import pokeshell from '../../asset/homepage/pokeshell.png';
import shallweshellwe from '../../asset/homepage/shallweshellwe.png';
import shelllist from '../../asset/homepage/shelllist.png';
import offered from '../../asset/homepage/offered.png';

const HomePage = () => {
  const intro1 = '혁신적인 물물교환 서비스';
  const intro2 = '상호 혜택의 가치 제공';
  const aboutproduct1 = `물품, 재능이 있으신가요?`;
  const aboutproduct2 = `쉘을 공유해보세요`;
  const pokefeature1 = '쉘을 생성하셨나요?';
  const pokefeature2 = '원하는 쉘과 교환해보세요';
  const offeredfeature1 = '받은 요청을 확인해보세요';
  const offeredfeature2 = '원하는 요청을 수락해보세요';
  const messagefeature1 = '수락하시면 채팅이 생성돼요';
  const messagefeature2 = '자유롭게 거래해보세요';

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
            <ContentImg src={shelllist} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>물품 · 재능(Shell)</Title>
            <Body>
              {aboutproduct1}
              <br />
              {aboutproduct2}
            </Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={shelldetail} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>교환 요청</Title>
            <Body>
              {pokefeature1}
              <br />
              {pokefeature2}
            </Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={pokeshell} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>교환 요청 확인</Title>
            <Body>
              {offeredfeature1} <br />
              {offeredfeature2}
            </Body>
          </ContentTextBox>
          <ContentImgBox>
            <ContentImg src={offered} alt="picture" />
          </ContentImgBox>
        </ContentBox>
        <ContentBox>
          <ContentTextBox>
            <Title>DM</Title>
            <Body>
              {messagefeature1} <br />
              {messagefeature2}
            </Body>
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
