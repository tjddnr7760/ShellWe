import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {
  ProfileWrapper,
  ProfileContainer,
  UserImg,
  DisplayName,
  Introduction,
  ImgandNameContainer,
  IntroductionContainer,
  UserImgBox,
  AllCurrentTags,
  Box,
  Box2,
  TagExplainText,
  TagsContainer,
} from './profile.styled';
import { MyShellsProfileProps } from '../../dataset/TypeOfMyShells';
import TagBox from '../../common/tag/TagBox';
import noprofile from '../../asset/avatar/noprofile.svg';

const Profile = ({ memberInfo, showTags, data }: MyShellsProfileProps) => {
  const [allTags, setAlltag] = useState<string[]>([]);

  const MakeAllTags = () => {
    if (data?.shells) {
      const tagsSet = new Set<string>();
      data.shells
        .filter((shell) => shell.tags !== null)
        .forEach((shell) => {
          shell.tags.forEach((tag) => {
            if (typeof tag?.tagName === 'string' && tag.tagName !== '') {
              tagsSet.add(tag.tagName);
            }
          });
        });
      const tagsArray = Array.from(tagsSet).slice(0, 4);
      setAlltag(tagsArray);
    }
  };
  useEffect(() => MakeAllTags(), [data]);

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <Box>
          <ImgandNameContainer>
            <UserImgBox>
              {memberInfo && (
                <UserImg
                  src={
                    memberInfo.profileUrl === 'empty'
                      ? noprofile
                      : memberInfo.profileUrl
                  }
                  alt="profile-image"
                ></UserImg>
              )}
            </UserImgBox>
            <DisplayName>{memberInfo?.displayName}</DisplayName>
          </ImgandNameContainer>
        </Box>
        <Box2>
          <IntroductionContainer>
            <Introduction>{memberInfo?.introduction}</Introduction>
          </IntroductionContainer>
        </Box2>
      </ProfileContainer>
      {showTags && allTags.length !== 0 && (
        <TagsContainer>
          <TagExplainText>
            {memberInfo?.displayName}님이 원하는 Shell
          </TagExplainText>
          <AllCurrentTags>
            {allTags.map((tag) => (
              <TagBox key={uuidv4()} type="read" tag={tag} />
            ))}
          </AllCurrentTags>
        </TagsContainer>
      )}
    </ProfileWrapper>
  );
};
export default Profile;
