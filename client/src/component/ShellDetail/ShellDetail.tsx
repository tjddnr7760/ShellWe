import React, { useState } from 'react';
import OfferModal from '../offermodal/OfferModal';
import Ellipsis from '../../asset/ellipsis.svg';
import Poke from '../../asset/poke.svg';
import {
  ShellInfoContainer,
  Wrapper,
  UserInfoAndHamburgerDiv,
  UserInfoDiv,
  Nickname,
  Div,
  Hamburger,
  Category,
  SeeMore,
  PokeButton,
  PokeBox,
  DefaultBody,
  SeeMoreBody,
} from './ShellDetail.styled';

interface ShellDetailProps {
  handlePoke: () => void; // Define the handlePoke prop
  handleOpenSidebar: () => void;
}

const ShellDetail = ({ handlePoke, handleOpenSidebar }: ShellDetailProps) => {
  return (
    <Wrapper>
      <ShellInfoContainer>
        <UserInfoAndHamburgerDiv>
          <UserInfoDiv>
            <div className="avatar">userimg</div>
            <Nickname>nickname</Nickname>
          </UserInfoDiv>
          <Hamburger onClick={handleOpenSidebar}>
            <img src={Ellipsis} alt="hamburger" />
          </Hamburger>
        </UserInfoAndHamburgerDiv>
        <Div>title</Div>
        <DefaultBody>
          body
          <Category>DEVICE</Category>
        </DefaultBody>
        <SeeMoreContent />
        <Div>tags</Div>
        <SeeMore>더 보기</SeeMore>
      </ShellInfoContainer>
      <PokeBox>
        <PokeButton onClick={handlePoke}>
          <img src={Poke} alt="pokeicon" />
          찌르기
        </PokeButton>
      </PokeBox>
    </Wrapper>
  );
};

const SeeMoreContent = () => {

    const bodyText =
      '이 자판기는 영국에서 만들어졌으며, 19세기에 필수 아이템으로 인정받았습니다. 이 혁신적인 기계는 초기 버전이었지만, 당시 사회에서 큰 인기를 끌었습니다. 그것은 간편한 사용성과 다양한 상품 선택의 가능성으로 사람들에게 큰 편리함을 제공했습니다. 이 자판기는 먼 거리를 이동하지 않고도 사람들에게 필요한 물건을 제공하는 신기한 도구였습니다. 시간이 흐르면서 자판기는 발전을 거듭하며 다양한 기능과 특징을 갖추게 되었습니다. 초기에는 담배와 사탕 같은 간단한 물품을 판매하는 것에 그쳤지만, 점점 더 다양한 상품들을 판매하게 되었습니다. 음료, 스낵, 신문, 잡지, 우산, 핸드폰 충전기 등 다양한 필수 아이템을 구매할 수 있었습니다. 자판기는 쇼핑 경험을 혁신시켰습니다. 사람들은 언제든지 원하는 물건을 구입할 수 있었고, 그들은 더 이상 가게의 영업 시간에 구애받지 않았습니다. 자판기는 24시간 서비스를 제공하며, 사람들에게 편리성과 접근성을 제공했습니다. 이로써 사회의 라이프스타일은 변화하였고, 자판기는 일상 생활의 필수품이 되었습니다. 현재에 이르러서는 자판기는 전 세계적으로 널리 퍼져있으며, 공공 장소, 사무실, 학교, 병원 등 여러 곳에서 우리를 기다리고 있습니다. 또한 기술의 발전으로 인해 인터넷 연결이 가능한 스마트 자판기도 등장했습니다. 이제 우리는 스마트폰을 사용하여 자판기에 접근하고 주문을 할 수 있으며, 지금은 심지어 얼굴 인식 기술을 사용하여 결제까지 할 수 있는 자판기가 있습니다. 자판기는 오래된 역사와 혁신적인 기능을 갖춘 아이템으로서 우리 삶의 일부입니다.그것은 단순한 상품 판매 기계를 넘어서 우리의 생활을 편리하게 만들어주는 친구입니다.앞으로도 자판기는 계속해서 발전하고 다양한 형태로 우리 곁에 존재할 것입니다. 이 자판기는 영국에서 만들어졌으며, 19세기에 필수 아이템으로 인정받았습니다. 이 혁신적인 기계는 초기 버전이었지만, 당시 사회에서 큰 인기를 끌었습니다. 그것은 간편한 사용성과 다양한 상품 선택의 가능성으로 사람들에게 큰 편리함을 제공했습니다. 이 자판기는 먼 거리를 이동하지 않고도 사람들에게 필요한 물건을 제공하는 신기한 도구였습니다. 시간이 흐르면서 자판기는 발전을 거듭하며 다양한 기능과 특징을 갖추게 되었습니다. 초기에는 담배와 사탕 같은 간단한 물품을 판매하는 것에 그쳤지만, 점점 더 다양한 상품들을 판매하게 되었습니다. 음료, 스낵, 신문, 잡지, 우산, 핸드폰 충전기 등 다양한 필수 아이템을 구매할 수 있었습니다. 자판기는 쇼핑 경험을 혁신시켰습니다. 사람들은 언제든지 원하는 물건을 구입할 수 있었고, 그들은 더 이상 가게의 영업 시간에 구애받지 않았습니다. 자판기는 24시간 서비스를 제공하며, 사람들에게 편리성과 접근성을 제공했습니다. 이로써 사회의 라이프스타일은 변화하였고, 자판기는 일상 생활의 필수품이 되었습니다. 현재에 이르러서는 자판기는 전 세계적으로 널리 퍼져있으며, 공공 장소, 사무실, 학교, 병원 등 여러 곳에서 우리를 기다리고 있습니다. 또한 기술의 발전으로 인해 인터넷 연결이 가능한 스마트 자판기도 등장했습니다. 이제 우리는 스마트폰을 사용하여 자판기에 접근하고 주문을 할 수 있으며, 지금은 심지어 얼굴 인식 기술을 사용하여 결제까지 할 수 있는 자판기가 있습니다. 자판기는 오래된 역사와 혁신적인 기능을 갖춘 아이템으로서 우리 삶의 일부입니다.그것은 단순한 상품 판매 기계를 넘어서 우리의 생활을 편리하게 만들어주는 친구입니다.앞으로도 자판기는 계속해서 발전하고 다양한 형태로 우리 곁에 존재할 것입니다.';

  return (
    <SeeMoreBody>
      <Category>DEVICE</Category>
      {bodyText}
    </SeeMoreBody>
  );
}

export default ShellDetail;
