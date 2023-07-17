import { useState } from 'react';
import ResponseShellList from '../../component/offeredshells/ResponseShellList';
import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview';
import { ShellImgBox } from '../shellimgpreview/ShellImgPreview.styled';
import {
  ShellImgPreviewWrapper,
  ResponseElementWrapper,
  PreviewNotice,
} from '../../page/offeredshells/OfferedShellsPage.styled';

const OfferedShell = ({ clickedShellId }: { clickedShellId: number }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [clickedShellPictures, setClickedShellPictures] = useState([]);

  const HandleShellPreview = (pictures: any) => {
    if (clickedShellPictures === pictures) {
      console.log('같은 사진입니다.');
      setPreviewVisible(!previewVisible);
    } else {
      console.log('다른 사진입니다.');
      setPreviewVisible(true);
      setClickedShellPictures(pictures);
    }
  };

  return (
    <ResponseElementWrapper>
      <ShellImgPreviewWrapper>
        {previewVisible === true ? (
          <ShellImgPreview
          // clickedShellPictures={clickedShellPictures}
          />
        ) : (
          <PreviewNotice>
            <ShellImgBox>Click below Shell!</ShellImgBox>
          </PreviewNotice>
        )}
      </ShellImgPreviewWrapper>
      <ResponseShellList
        clickedShellId={clickedShellId}
        HandleShellPreview={HandleShellPreview}
      />
    </ResponseElementWrapper>
  );
};

export default OfferedShell;
