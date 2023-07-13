import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useGetShellDetail } from '../../hooks/shelldetail/useShellsId.ts';
import DefaultBody from './DefaultBody';
import SeeMoreBody from './SeeMoreBody';
import Avatar from '../../common/avatar/Avatar';
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
  SeeMore,
  PokeButton,
  PokeBox,
} from './ShellDetail.styled';
import TagBox from '../../common/tag/TagBox';

interface ShellDetailProps {
  handlePoke: () => void; // Define the handlePoke prop
  handleOpenSidebar: () => void;
}

interface Tag {
  tagName: string;
}

export interface BodyProps {
  category: string;
  body: string;
}

const ShellDetail = ({ handlePoke, handleOpenSidebar }: ShellDetailProps) => {
  const { data } = useGetShellDetail(1);
  const resData = data.data;
  const tags = resData.tags.map((tag: Tag) => tag.tagName);

  const [seeMoreBody, setSeeMoreBody] = useState(false);
  const handleSeeMoreBody = () => {
    setSeeMoreBody(!seeMoreBody);
  };

  return (
    <Wrapper>
      <ShellInfoContainer>
        <UserInfoAndHamburgerDiv>
          <UserInfoDiv>
            <Avatar avatartype={'Icon'} />
            <Nickname>{resData.member.displayName}</Nickname>
          </UserInfoDiv>
          <Hamburger onClick={handleOpenSidebar}>
            <img src={Ellipsis} alt="hamburger" />
          </Hamburger>
        </UserInfoAndHamburgerDiv>
        <Div>{resData.title}</Div>
        {seeMoreBody === false ? (
          <DefaultBody category={resData.category} body={resData.body} />
        ) : (
          <SeeMoreBody category={resData.category} body={resData.body} />
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
