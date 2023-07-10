import { SaveButton, CancelButton } from './EditProfile.styled';
import {
  Wrapper,
  ContentBox,
  Title,
  Notice,
  ButtonBox,
} from './DeleteProfile.styled';

const DeleteProfile = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Title>Notice</Title>
        <Notice>
          더 이상 Shell 할 수 없습니다.
          <br />
          그래도 탈퇴하시겠습니까?
        </Notice>
      </ContentBox>
      <ButtonBox>
        <SaveButton>Save</SaveButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonBox>
    </Wrapper>
  );
};

export default DeleteProfile;
