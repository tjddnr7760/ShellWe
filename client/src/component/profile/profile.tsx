import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {
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
} from './profile.styled';
import { MyShellsProfileProps } from '../../dataset/TypeOfMyShells';
import TagBox from '../../common/tag/TagBox';
import noprofile from '../../asset/avatar/defaultprofile.webp';

const Profile = ({ memberInfo, showTags, data }: MyShellsProfileProps) => {
  const [allTags, setAlltag] = useState<string[]>([]);

  // ["tagName": "태그1", "tagName": "태그1", "tagName": "태그1", "tagName": "태그1", "tagName": "태그1"]
  const MakeAllTags = () => {
    if (data.shells) {
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
  useEffect(() => MakeAllTags(), [memberInfo?.id]);

  return (
    <div>
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
          {showTags && allTags.length !== 0 && (
            <AllCurrentTags>
              {allTags.map((tag) => (
                <TagBox key={uuidv4()} type="read" tag={tag} />
              ))}
            </AllCurrentTags>
          )}
        </Box2>
      </ProfileContainer>
    </div>
  );
};
export default Profile;
