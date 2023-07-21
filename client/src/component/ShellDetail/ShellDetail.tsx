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
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';

const ShellDetail = ({
  handlePoke,
  handleOpenSidebar,
  shellDetailData,
}: ShellDetailProps) => {
  const [seeMoreBody, setSeeMoreBody] = useState(false);
  const tags = shellDetailData.tags?.map((tag: Tag) => tag.tagName);
  const category: string = shellDetailData?.category.slice(2).toUpperCase();
  const myMemberId = Number(getMemberIdFromLocalStorage());
  const handleSeeMoreBody = () => {
    setSeeMoreBody(!seeMoreBody);
  };

  return (
    <Wrapper>
      <ShellInfoContainer>
        <UserInfoAndHamburgerDiv>
          <UserInfoDiv>
            <Avatar avatartype={'Icon'} member={shellDetailData.member} />
            <DisplayName>{shellDetailData.member.displayName}</DisplayName>
          </UserInfoDiv>
          {myMemberId === shellDetailData.member.id && (
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
        {tags && (
          <Div>
            <span>Wanted Shells</span>
            <div>
              {tags.map((tag: string) => (
                <TagBox key={uuidv4()} type="read" tag={tag} />
              ))}
            </div>
          </Div>
        )}
        <SeeMore onClick={handleSeeMoreBody}>
          {seeMoreBody === false ? '더 보기' : '접기'}
        </SeeMore>
      </ShellInfoContainer>
      {myMemberId !== shellDetailData.member.id && (
        <PokeBox>
          <PokeButton onClick={handlePoke}>
            <img src={Poke} alt="pokeicon" />
            찌르기
          </PokeButton>
        </PokeBox>
      )}
    </Wrapper>
  );
};

export default ShellDetail;
