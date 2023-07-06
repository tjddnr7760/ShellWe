/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 210px;
  margin: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #caf0f8;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
`;

const DealState = styled(Div)`
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
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
`;

const Text = styled.div`
  font-size: 16px;
`;
export { Wrapper, Div, ToggleBody, DealState, ToggleRetangle, Text };
