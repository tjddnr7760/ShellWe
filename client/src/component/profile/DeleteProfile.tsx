import { SaveButton, CancelButton } from './EditProfile.styled';
import {
  Wrapper,
  ContentBox,
  Title,
  Notice,
  ButtonBox,
  PasswordInputModal,
  PasswordInput,
} from './DeleteProfile.styled';
import { useDeleteMember } from '../../hooks/profile/useDeleteMember';
import { Member } from '../../hooks/profile/useGetMember';
import { useState } from 'react';

const DeleteProfile = ({ memberInfo }: { memberInfo: Member }) => {
  const [pwModalvisible, setPwModalvisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const { mutate: deleteMember } = useDeleteMember(memberInfo.id, { password });

  const modalVisibleHandler = () => {
    setPwModalvisible(!pwModalvisible);
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleDeleteMember = (): void => {
    deleteMember();
  };

  return (
    <Wrapper>
      {pwModalvisible ? (
        <PasswordInputModal>
          <div>
            <Title>Password</Title>
            <PasswordInput onChange={handleInputPassword} type="password" />
          </div>
          <SaveButton onClick={handleDeleteMember}>확인</SaveButton>
        </PasswordInputModal>
      ) : (
        <>
          <ContentBox>
            <Title>Notice</Title>
            <Notice>
              더 이상 Shell 할 수 없습니다.
              <br />
              그래도 탈퇴하시겠습니까?
            </Notice>
          </ContentBox>
          <ButtonBox>
            <SaveButton onClick={modalVisibleHandler}>Delete</SaveButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonBox>
        </>
      )}
    </Wrapper>
  );
};

export default DeleteProfile;
