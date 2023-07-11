/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { SmallButton4 } from '../../common/button/Button.styled';

const ResponseShellWrapper = styled.div`
  display: flex;
  width: 1115px;
  height: 180px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.5);
  gap: 15px;
  padding: 15px;
`;

const ShellsImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  height: fit-content;
  overflow: hidden;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const ShellImg = styled.img`
  width: 100%;
`;

const ShellsTextInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 5px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const BodyBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  flex-grow: 3;
`;

const AcceptInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

// UserImg => Avatar 수정 후 대체 예정
const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: contain;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const AcceptButton = styled(SmallButton4)`
  font-weight: 400;
`;

export {
  ResponseShellWrapper,
  ShellsImageBox,
  ShellImg,
  ShellsTextInfoBox,
  TextBox,
  BodyBox,
  AcceptInfo,
  UserImg,
  AcceptButton,
};
