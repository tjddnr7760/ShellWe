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
  PokeButton,
  PokeBox,
  ShellStatus,
} from './ShellDetail.styled.ts';
import { ShellDetailProps, Tag } from '../../dataset/TypeOfShellDetail.ts';
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
          {myMemberId === shellDetailData.member.id ? (
            <Hamburger onClick={handleOpenSidebar}>
              <img src={Ellipsis} alt="hamburger" />
            </Hamburger>
          ) : (
            <ShellStatus>
              {shellDetailData.status === 'active' ? '거래 중' : '거래완료'}
            </ShellStatus>
          )}
        </UserInfoAndHamburgerDiv>
        <Div>{shellDetailData.title}</Div>
        {seeMoreBody === false ? (
          <DefaultBody
            category={category}
            body={shellDetailData.body}
            seeMoreBody={seeMoreBody}
            handleSeeMoreBody={handleSeeMoreBody}
          />
        ) : (
          <SeeMoreBody
            category={category}
            body={shellDetailData.body}
            seeMoreBody={seeMoreBody}
            handleSeeMoreBody={handleSeeMoreBody}
          />
        )}
        {tags && (
          <Div>
            <span>아래 쉘과 교환하고 싶어요!</span>
            <div>
              {tags.map((tag: string) => (
                <TagBox key={uuidv4()} type="read" tag={tag} />
              ))}
            </div>
          </Div>
        )}
      </ShellInfoContainer>
      {myMemberId !== shellDetailData.member.id &&
        shellDetailData.status === 'active' && (
          <PokeBox>
            <PokeButton onClick={handlePoke}>
              <img src={Poke} alt="pokeicon" />
              교환 요청
            </PokeButton>
          </PokeBox>
        )}
    </Wrapper>
  );
};

export default ShellDetail;
