import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 665px;
  height: 400px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  position: relative;
  z-index: 0;
  margin: 100px;
`;

const ShellImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 665px;
  height: 400px;
`;

const ShellImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding: 1px;
`;

const LeftSlideButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgba(250, 250, 250, 1);
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  border: 0.1px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: 0.1px solid rgba(0, 0, 0, 0.5);
  }
`;

const RightSlideButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgba(250, 250, 250, 1);
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  border: 0.1px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: 0.1px solid rgba(0, 0, 0, 0.5);
  }
`;

export {
  ImageWrapper,
  ShellImg,
  LeftSlideButton,
  RightSlideButton,
  ShellImgBox,
};
