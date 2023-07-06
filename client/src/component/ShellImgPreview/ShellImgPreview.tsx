import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  ImageWrapper,
  LeftSlideButton,
  RightSlideButton,
  ShellImg,
  ShellImgBox,
} from './ShellImgPreview.styled';
import product from '../../asset/product.jpg';

const ShellImgPreview = () => {
  return (
    <ImageWrapper>
      <ShellImgBox>
        <ShellImg src={product} alt="shell-image"></ShellImg>
        {/* src={GET 요청 후, data에서 Shell 이미지 받아서 할당 } */}
      </ShellImgBox>
      <LeftSlideButton>
        <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#0077b6' }} />
      </LeftSlideButton>
      <RightSlideButton>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: '#0077b6' }} />
      </RightSlideButton>
    </ImageWrapper>
  );
};

export default ShellImgPreview;
