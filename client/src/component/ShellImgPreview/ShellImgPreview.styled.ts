import styled from 'styled-components';

const ImageWrapper = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  position: relative;
  z-index: 0;
  width: 640px;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 320px;
    height: 200px;
  }
`;

const ShellImgContainer = styled.div`
  display: flex;
  width: 2600px;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  @media (max-width: 768px) {
    width: 1300px;
  }
`;

const ShellImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 400px;
  @media (max-width: 768px) {
    width: 320px;
    height: 200px;
  }
`;

const ShellImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 400px;
  padding: 1px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const LeftSlideButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgba(250, 250, 250, 0.5);
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  border: 0.1px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
  cursor: pointer;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;

const RightSlideButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgba(250, 250, 250, 0.5);
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  border: 0.1px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
  cursor: pointer;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;

export {
  ImageWrapper,
  ShellImg,
  LeftSlideButton,
  RightSlideButton,
  ShellImgBox,
  ShellImgContainer,
};
