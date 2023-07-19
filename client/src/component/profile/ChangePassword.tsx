import { useState } from 'react';
import { SaveButton, CancelButton } from './EditProfile.styled';
import {
  Wrapper,
  ContentBox,
  Title,
  Input,
  ButtonBox,
} from './ChangePassword.styled';
import { useUpdatePassword } from '../../hooks/profile/useChangePassword';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<
    string | undefined
  >();
  const [passwordAgainError, setPasswordAgainError] = useState<
    string | undefined
  >();
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const { mutate: SendNewPassword } = useUpdatePassword();

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    if (name === 'newpassword') {
      setNewPassword(value);
      if (
        !value.match(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%&])[a-zA-Z\d!@#$%&*]{10,}$/
        )
      ) {
        setNewPasswordError(
          '영문 대소문자, 특수문자를 포함한 10자리 이상이어야 합니다.'
        );
        setIsPasswordValid(false);
      } else {
        setNewPasswordError(undefined);
        setIsPasswordValid(true);
      }
    } else if (name === 'passwordagain') {
      setPasswordAgain(value);
      if (newPassword !== value) {
        setPasswordAgainError('비밀번호가 같아야 합니다.');
        setIsSaveEnabled(false);
      } else {
        setPasswordAgainError(undefined);
        setIsSaveEnabled(true);
      }
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    const update = {
      password: newPassword,
    };
    formData.append(
      'update',
      new Blob([JSON.stringify(update)], { type: 'application/json' })
    );
    SendNewPassword(formData);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <ContentBox>
        <Title>New password</Title>
        <Input
          name="newpassword"
          type="password"
          value={newPassword}
          onChange={handleInputValue}
          placeholder="비밀번호"
        ></Input>
        {newPasswordError && <span>{newPasswordError}</span>}
      </ContentBox>
      <ContentBox>
        <Title>Password (again)</Title>
        <Input
          name="passwordagain"
          type="password"
          value={passwordAgain}
          onChange={handleInputValue}
          placeholder="비밀번호 확인"
          disabled={!isPasswordValid}
        ></Input>
        {passwordAgainError && <span>{passwordAgainError}</span>}
      </ContentBox>
      <ContentBox>
        <ButtonBox>
          <SaveButton onClick={handleSave} disabled={!isSaveEnabled}>
            Save
          </SaveButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </ButtonBox>
      </ContentBox>
    </Wrapper>
  );
};
export default ChangePassword;
