import styled from 'styled-components';
import { SmallButton3 } from '../../common/button/Button.styled';

const Wrapper = styled.div`
  position: absolute;
  right: -185px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 200px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #caf0f8;

  @media (max-width: 768px) {
    width: 160px;
    height: 180px;
    right: 0;
    padding: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0px;
  background-color: #fff;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
  @media (max-width: 768px) {
    width: 160px;
  }
`;

const DealState = styled(Div)`
  width: 160px;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 130px;
  }
`;

const ToggleBody = styled(Div)`
  justify-content: flex-start;
  width: 80px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding-left: 2px;
  border-radius: 50px;
  background-color: #828282;
  cursor: pointer;
  transition: background-color 0.1s ease;
  &.toggle-checked {
    background-color: #48cae4;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 30px;
  }
`;

const ToggleRetangle = styled.div`
  width: 34px;
  height: 34px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.1s ease;
  cursor: pointer;
  &.toggle-checked {
    transform: translateX(40px);
  }
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    &.toggle-checked {
      transform: translateX(30px);
    }
  }
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const FunctionButton = styled(SmallButton3)`
  @media (max-width: 768px) {
    width: 85px;
    height: 45px;
  }
`;

export {
  Wrapper,
  Div,
  ToggleBody,
  DealState,
  ToggleRetangle,
  Text,
  CloseButton,
  FunctionButton,
};
