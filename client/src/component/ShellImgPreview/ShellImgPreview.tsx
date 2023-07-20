import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  ImageWrapper,
  LeftSlideButton,
  RightSlideButton,
  ShellImgContainer,
} from './ShellImgPreview.styled';
import Preview from './Preview';
import { clickedShellPicturesProps } from '../../dataset/TypesOfferedShell';

const ShellImgPreview = ({
  clickedShellPictures,
}: clickedShellPicturesProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex: number) =>
      prevIndex === 0 ? clickedShellPictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex: number) =>
      prevIndex === clickedShellPictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ImageWrapper>
      <ShellImgContainer
        style={{ transform: `translateX(-${slideIndex * 640}px)` }}
      >
        {clickedShellPictures.map((picture) => (
          <Preview key={picture.order} picture={picture} />
        ))}
      </ShellImgContainer>
      <LeftSlideButton onClick={handlePreviousSlide}>
        <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#0077b6' }} />
      </LeftSlideButton>
      <RightSlideButton onClick={handleNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: '#0077b6' }} />
      </RightSlideButton>
    </ImageWrapper>
  );
};

export default ShellImgPreview;
