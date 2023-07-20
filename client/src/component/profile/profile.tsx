import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {
  ProfileContainer,
  UserImg,
  DisplayName,
  Introduction,

  ImgandNameContainer,
  IntroductionContainer,
  UserImgBox,
} from './Profile.styled';
import { Member } from '../../hooks/profile/useGetMember';

const Profile = ({ memberInfo }: { memberInfo: Member }) => {

  AllCurrentTags,
  Box,
  Box2,
  UserImgBox,
} from './profile.styled';
import example from '../../asset/example.png';
import { MyShellsProfileProps } from '../../dataset/TypeOfMyShells';
import TagBox from '../../common/tag/TagBox';

const Profile = ({ showTags, data }: MyShellsProfileProps) => {
  const { id } = useParams();
  const [allTags, setAlltag] = useState<string[]>([]);

  const MakeAllTags = () => {
    const tagsSet = new Set<string>();
    data.shells.forEach((shell) => {
      shell.tags.forEach((tag) => {
        if (typeof tag?.tagName === 'string' && tag.tagName !== '') {
          tagsSet.add(tag.tagName);
        }
      });
    });
    const tagsArray = Array.from(tagsSet).slice(0, 4);
    setAlltag(tagsArray);
  };

  useEffect(() => MakeAllTags(), [id]);


  return (
    <ProfileContainer>
      <ImgandNameContainer>
        <UserImgBox>

          <UserImg src={memberInfo.profileUrl} alt="product"></UserImg>
        </UserImgBox>
        <DisplayName>{memberInfo.displayName}</DisplayName>
      </ImgandNameContainer>
      <IntroductionContainer>
        <Introduction>{memberInfo.introduction}</Introduction>
      </IntroductionContainer>

          <UserImg src={example} alt="product"></UserImg>
        </UserImgBox>
        <Nickname>Nickname</Nickname>
      </Box>
      <Box2>
        <Introduction>Introduction</Introduction>
        {showTags && (
          <AllCurrentTags>
            {allTags.map((tag) => (
              <TagBox key={uuidv4()} type="read" tag={tag} />
            ))}
          </AllCurrentTags>
        )}
      </Box2>

    </ProfileContainer>
  );
};

export default Profile;
