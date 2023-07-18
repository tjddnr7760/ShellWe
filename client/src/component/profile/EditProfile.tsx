import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUpdateMember } from '../../hooks/profile/useUpdateMember';
import {
  ProfileImageBox,
  ProfileImage,
  Wrapper,
  Title,
  TextDiv,
  ContentBox,
  DisplayNameInput,
  IntroductionInput,
  SaveButton,
  CancelButton,
  ButtonBox,
  Image,
  ImageBox,
} from './EditProfile.styled';

const EditProfile = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const { mutate: SendprofileImage } = useUpdateMember();

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    if (name === 'displayName') {
      setDisplayName(value);
    } else if (name === 'introduction') {
      setIntroduction(value);
    } else {
      return;
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    const update = {
      displayName,
      introduction,
    };
    formData.append(
      'update',
      new Blob([JSON.stringify(update)], { type: 'application/json' })
    );
    formData.append('picture', image as File);
    SendprofileImage(formData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <Wrapper>
      <ContentBox>
        <Title>Profile image</Title>
        <ProfileImageBox>
          <ProfileImage {...getRootProps()}>
            <ImageBox>
              {image && (
                <Image src={URL.createObjectURL(image)} alt="previewimg" />
              )}
              <input {...getInputProps()} multiple={false} name="imageurl" />
            </ImageBox>
          </ProfileImage>
          {isDragActive ? (
            <TextDiv>Change picture</TextDiv>
          ) : (
            <TextDiv>Drop the image here</TextDiv>
          )}
        </ProfileImageBox>
      </ContentBox>
      <ContentBox>
        <Title>Change nickname</Title>
        <DisplayNameInput
          name="displayName"
          value={displayName}
          onChange={handleInputValue}
          placeholder="내용을 입력하세요."
        ></DisplayNameInput>
      </ContentBox>
      <ContentBox>
        <Title>Introduction</Title>
        <IntroductionInput
          name="introduction"
          value={introduction}
          onChange={handleInputValue}
          placeholder="내용을 입력하세요."
        ></IntroductionInput>
      </ContentBox>
      <ButtonBox>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonBox>
    </Wrapper>
  );
};

export default EditProfile;
