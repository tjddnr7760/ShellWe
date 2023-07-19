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
  AllCurrentTags,
  Box,
  Box2,
} from './Profile.styled';
import { MyShellsProfileProps } from '../../dataset/TypeOfMyShells';
import TagBox from '../../common/tag/TagBox';

const Profile = ({ memberInfo, showTags, data }: MyShellsProfileProps) => {
  const { id } = useParams();
  const [allTags, setAlltag] = useState<string[]>([]);

  const MakeAllTags = () => {
    if (data && data.shells) {
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
    }
  };

  useEffect(() => MakeAllTags(), [id]);

  return (
    <div>
      <ProfileContainer>
        <Box>
          <ImgandNameContainer>
            <UserImgBox>
              {memberInfo && (
                <UserImg src={memberInfo.profileUrl} alt="product"></UserImg>
              )}
            </UserImgBox>
            <DisplayName>{memberInfo?.displayName}</DisplayName>
          </ImgandNameContainer>
        </Box>
        <Box2>
          <IntroductionContainer>
            <Introduction>{memberInfo?.introduction}</Introduction>
          </IntroductionContainer>
          {showTags && (
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
