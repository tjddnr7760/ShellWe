import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import DefaultBody from './DefaultBody.tsx';
import SeeMoreBody from './SeeMoreBody.tsx';
import Avatar from '../../common/avatar/Avatar.tsx';
import Ellipsis from '../../asset/ellipsis.svg';
import Poke from '../../asset/poke.svg';
import {
  ShellInfoContainer,
  Wrapper,
  UserInfoAndHamburgerDiv,
  UserInfoDiv,
  DisplayName,
  Div,
  Hamburger,
  SeeMore,
  PokeButton,
  PokeBox,
} from './ShellDetail.styled.ts';
import { ShellDetailProps, Tag } from '../../dataset/ShellDetailType.ts';
import TagBox from '../../common/tag/TagBox.tsx';

const ShellDetail = ({
  handlePoke,
  handleOpenSidebar,
  shellDetailData,
}: ShellDetailProps) => {
  const tags = shellDetailData.tags.map((tag: Tag) => tag.tagName);
  const category: string = shellDetailData.category.slice(2).toUpperCase();

  const [seeMoreBody, setSeeMoreBody] = useState(false);
  const handleSeeMoreBody = () => {
    setSeeMoreBody(!seeMoreBody);
  };

  // (recoil memberId 완료 시, 수정 필요)
  // 제품 상세 페이지에서, 게시글의 memberId와 현재 로그인된 유저의 memberId가 일치하는지 확인하고 햄버거 렌더링.
  // recoil의 memberId를 loginMemberId 변수에 할당해서 사용한다.
  const loginMemberId = 3;

  return (
    <Wrapper>
      <ShellInfoContainer>
        <UserInfoAndHamburgerDiv>
          <UserInfoDiv>
            <Avatar avatartype={'Icon'} />
            <DisplayName>{shellDetailData.member.displayName}</DisplayName>
          </UserInfoDiv>
          {loginMemberId === shellDetailData.member.id && (
            <Hamburger onClick={handleOpenSidebar}>
              <img src={Ellipsis} alt="hamburger" />
            </Hamburger>
          )}
        </UserInfoAndHamburgerDiv>
        <Div>{shellDetailData.title}</Div>
        {seeMoreBody === false ? (
          <DefaultBody category={category} body={shellDetailData.body} />
        ) : (
          <SeeMoreBody category={category} body={shellDetailData.body} />
        )}
        <Div>
          {tags.map((tag: string) => (
            <TagBox key={uuidv4()} type="read" tag={tag} />
          ))}
        </Div>
        <SeeMore onClick={handleSeeMoreBody}>
          {seeMoreBody === false ? '더 보기' : '접기'}
        </SeeMore>
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

export default ShellDetail;
