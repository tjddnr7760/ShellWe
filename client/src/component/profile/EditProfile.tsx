import {
  ProfileImage,
  Wrapper,
  Title,
  TextDiv,
  ContentBox,
  NicknameInput,
  IntroductionInput,
  SaveButton,
  CancelButton,
  ButtonBox,
  Image,
} from './EditProfile.styled';
import example from '../../asset/example.png';

const EditProfile = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Title>Profile image</Title>
        <ProfileImage>
          <Image src={example} alt="userimg" />
          {/* 이미지는 js 작업 시, res 객체로 받은 데이터로 수정 */}
          <TextDiv>Change picture</TextDiv>
        </ProfileImage>
      </ContentBox>
      <ContentBox>
        <Title>Change nickname</Title>
        <NicknameInput></NicknameInput>
      </ContentBox>
      <ContentBox>
        <Title>Introduction</Title>
        <IntroductionInput></IntroductionInput>
      </ContentBox>
      <ButtonBox>
        <SaveButton>Save</SaveButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonBox>
    </Wrapper>
  );
};

export default EditProfile;
