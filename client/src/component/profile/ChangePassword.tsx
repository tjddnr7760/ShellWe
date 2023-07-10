import { SaveButton, CancelButton } from './EditProfile.styled';
import {
  Wrapper,
  ContentBox,
  Title,
  Input,
  ButtonBox,
} from './ChangePassword.styled';

const ChangePassword = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Title>New password</Title>
        <Input></Input>
      </ContentBox>
      <ContentBox>
        <Title>Password (again)</Title>
        <Input></Input>
      </ContentBox>
      <ContentBox>
        <ButtonBox>
          <SaveButton>Save</SaveButton>
          <CancelButton>Cancel</CancelButton>
        </ButtonBox>
      </ContentBox>
    </Wrapper>
  );
};
export default ChangePassword;
