import { useEffect, useState } from 'react';

import { useGetShells } from '../../hooks/shells/useShellsId.ts';
import { useParams } from 'react-router-dom';
import {
  ButtonContainer,
  CreateBody,
  CreateBodyWrapper,
  CreateImgContainer,
  CreateImgListWrapper,
  CreateInput,
  CreateMainImgWrapper,
  CreateTitleWrapper,
  Logo,
  LogoWrapper,
  ShellCreateContainer,
  ShellCreatePage,
  TitleExplanation,
  TitleImg,
  TitleImgWrapper,
} from '../shellcreate/ShellCreate.styled.ts';
import { SmallButton6 } from '../../common/button/Button.styled.ts';
import Tag from '../../common/tag/Tag.tsx';
import CreateCateory from '../../component/createcateory/CreateCateory.tsx';
import { ImageUploader } from '../../component/imageuploader/ImageUploder.tsx';
import { useUpdateShells } from '../../hooks/shells/useUpdateShells.ts';
import { useImageUpload } from '../../hooks/shells/useImageUpload.ts';
import { FileWithPath } from 'react-dropzone';
import processData from '../../utill/processData.ts';

const ShellUpdate: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetShells(parseInt(id as string));
  console.log(data);
  const formData = new FormData();
  const urls = data?.data.pictures.map((item: { url: string }) => item.url);
  console.log(urls);
  const ImagesDate = useImageUpload(urls);

  const { mutate } = useUpdateShells();
  const [selectedCateory, setSelectedCateory] = useState({
    name: '카테고리',
    categoryid: '',
    type: '',
  });
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  console.log('ImagesDate', ImagesDate);

  useEffect(() => {
    if (data) {
      const updatedData = processData(data.data);

      setSelectedCateory(
        updatedData?.category as React.SetStateAction<{
          name: string;
          categoryid: string;
          type: string;
        }>
      );
      setTitle(updatedData?.title as React.SetStateAction<string>);
      setContent(updatedData?.body as React.SetStateAction<string>);
      setTagList(updatedData?.tags as React.SetStateAction<string[]>);
    }
  }, []);

  useEffect(() => {
    if (ImagesDate) {
      // const files = ImagesDate.map((queryResult) => queryResult?.data).filter(
      //   Boolean
      // ) as FileWithPath[];
      console.log(ImagesDate);
      setUploadedImages([ImagesDate]);
    }
  }, [ImagesDate]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setTitle(e.target.value);
    } else if (e.target instanceof HTMLTextAreaElement) {
      setContent(e.target.value);
    }
  };

  const handleContentSubmit = async () => {
    const update = {
      title: title,
      body: content,
      type: selectedCateory.type,
      category: selectedCateory.categoryid,
      tags: tagList,
    };

    console.log(update);
    formData.append(
      'update',
      new Blob([JSON.stringify(update)], { type: 'application/json' })
    );
    uploadedImages.forEach((image) => {
      formData.append(`pictures `, image); // 이미지 파일 추가
    });
    mutate(formData);
  };

  return (
    <>
      {data && (
        <ShellCreatePage>
          <ShellCreateContainer>
            <LogoWrapper>
              <Logo src="/createLogo.svg" alt="createLogo" />
            </LogoWrapper>
            <CreateCateory
              selectedCateory={selectedCateory}
              setSelectedCateory={setSelectedCateory}
            />
            <CreateTitleWrapper>
              <CreateInput
                value={title}
                onChange={handleInputChange}
                type="text"
                placeholder="제목을 입력하세요"
              />
            </CreateTitleWrapper>
            <CreateImgContainer>
              <CreateMainImgWrapper>
                <TitleImgWrapper>
                  {uploadedImages[0] ? (
                    <TitleImg
                      src={URL.createObjectURL(uploadedImages[0])}
                      alt="title_img"
                    />
                  ) : null}{' '}
                </TitleImgWrapper>
                <TitleExplanation>
                  물건이 명확하게 보이거나 자신의 재능을 표현할 수 있는 사진을
                  올려주세요
                </TitleExplanation>
              </CreateMainImgWrapper>
              <CreateImgListWrapper>
                <ImageUploader
                  uploadedImages={uploadedImages}
                  setUploadedImages={setUploadedImages}
                />
              </CreateImgListWrapper>
            </CreateImgContainer>

            <CreateBodyWrapper>
              <CreateBody
                value={content}
                onChange={handleInputChange}
                minRows={10}
                placeholder="내용을 입력하세요"
              />
            </CreateBodyWrapper>
            <Tag tagList={tagList} setTagList={setTagList} />
            <ButtonContainer>
              <SmallButton6 onClick={handleContentSubmit}>수정</SmallButton6>
            </ButtonContainer>
          </ShellCreateContainer>
        </ShellCreatePage>
      )}
    </>
  );
};

export default ShellUpdate;
