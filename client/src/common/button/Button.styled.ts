import styled from 'styled-components';

const BaseButton = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;

  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const SmallButton1 = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.5);
  color: #023e8a;
`;

export const SmallButton2 = styled(BaseButton)`
  background-color: #b9eaff;
`;

export const SmallButton3 = styled(BaseButton)`
  background-color: #90e0ef;
  border: 0.1px solid white;
`;

export const SmallButton4 = styled(BaseButton)`
  background-color: #00b4d8;
`;

export const SmallButton5 = styled(BaseButton)`
  background-color: #0077b6;
  color: white;
`;

export const SmallButton6 = styled(BaseButton)`
  background-color: #023e8a;
  color: white;
`;

export const BigButton1 = styled(BaseButton)`
  width: 390px;
  height: 70px;
  background-color: #90e0ef;
`;

export const BigButton2 = styled(BaseButton)`
  width: 390px;
  height: 70px;
  background-color: #00b4d8;
`;

export const BigButton3 = styled(BaseButton)`
  width: 390px;
  height: 70px;
  background-color: #0077b6;
  color: white;
`;
