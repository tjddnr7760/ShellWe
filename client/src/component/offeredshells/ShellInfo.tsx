import {
  ShellInfoContainer,
  ImageBox,
  ShellImage,
  TextBox,
} from './ShellInfo.styled';
import product from '../../asset/product.jpg';

const ShellInfo = () => {
  return (
    <ShellInfoContainer>
      <ImageBox>
        <ShellImage src={product} />
      </ImageBox>
      <TextBox>Title</TextBox>
    </ShellInfoContainer>
  );
};

export default ShellInfo;
