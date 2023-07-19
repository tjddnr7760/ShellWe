import styled from 'styled-components';

const PokedShellListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  min-width: 420px;
  height: 130px;
  gap: 10px;
  background-color: rgba(202, 240, 248, 0.15);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const IntroText1 = styled.div`
  min-width: 150px;
  font-size: 20px;
`;
const IntroText2 = styled.div`
  min-width: 150px;
  font-size: 16px;
`;

const ShellInfoListContainer = styled.div`
  max-width: 540px;
  max-height: 835px;
  overflow-y: auto;
`;

export {
  PokedShellListContainer,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
};
