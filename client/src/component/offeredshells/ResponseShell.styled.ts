import styled from 'styled-components';
import { SmallButton4 } from '../../common/button/Button.styled';

const ResponseShellListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const ResponseShellWrapper = styled.div`
  display: flex;
  height: fit-content;
  border-top: 0.5px solid rgba(0, 0, 0, 0.5);
  gap: 30px;
  padding: 30px;
  align-items: center;
`;

const ShellsImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  min-width: 145px;
  height: fit-content;
  overflow: hidden;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  flex-grow: 1;
`;

const ShellImg = styled.img`
  width: 100%;
`;

const ShellsTextInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 20px;
  line-height: 25px;
  flex-grow: 10;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 10px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const BodyBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  flex-grow: 3;
  padding: 10px;
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
  ResponseShellListWrapper,
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
