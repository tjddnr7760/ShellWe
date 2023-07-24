import styled from 'styled-components';
import { SmallButton3 } from '../../common/button/Button.styled';

const MyShellContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 540px;
  background-color: #ffffff;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  padding: 6px;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 300px;
    height: 80px;
    padding-right: 6px;
  }
`;
const ShellInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBox = styled.img`
  width: 90px;
  height: 90px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Title = styled.span`
  margin-left: 14px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 8px;
  }
`;

const PokeButton = styled(SmallButton3)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;

  @media (max-width: 768px) {
    width: 80px;
    height: 45px;
    border-radius: 10px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0;
  }
`;

const PokeImage = styled.img`
  @media (max-width: 768px) {
    width: 20px;
  }
`;

export {
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  ButtonDiv,
  PokeButton,
  PokeImage,
};
