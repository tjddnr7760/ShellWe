import { ShellImg, ShellImgBox } from './ShellImgPreview.styled';
import { PictureProps } from '../../dataset/TypesOfferedShell';

const Preview = ({ picture }: PictureProps) => {
  return (
    <ShellImgBox>
      <ShellImg src={picture.url} alt="shell-image"></ShellImg>
    </ShellImgBox>
  );
};

export default Preview;
