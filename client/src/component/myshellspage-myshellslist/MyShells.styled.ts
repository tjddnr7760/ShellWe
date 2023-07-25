import styled from 'styled-components';
import { SmallButton3 } from '../../common/button/Button.styled';

const MyShellContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #c2edff;
  }
  @media (max-width: 768px) {
    padding: 3px;
  }
`;

const ShellInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    margin-right: 10px;
    @media (max-width: 768px) {
      height: 70px;
      padding-left: 5px;
      margin-right: 0px;
    }
  }
`;

const ImgBox = styled.img`
  width: 90px;
  height: 90px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 70px;
    max-height: 70px;
  }
`;

const Title = styled.span`
  padding: 7px;
  font-size: 26px;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 16px;
  }
`;

const Category = styled.span`
  padding: 7px;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const DeleteLikeButton = styled(SmallButton3)`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 10px;
    width: 70px;
    font-size: 14px;
  }
`;

const DeleteLikeText = styled.div`
  @media (max-width: 768px) {
    /* font-size: 16px; */
  }
`;

export {
  MyShellContainer,
  ImgBox,
  Title,
  Category,
  ShellInfo,
  DeleteLikeButton,
  DeleteLikeText,
};
