import styled from 'styled-components';

const PokedShellListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  height: 130px;
  gap: 10px;
  background-color: rgba(202, 240, 248, 0.15);
`;

const IntroText1 = styled.div`
  font-size: 20px;
`;
const IntroText2 = styled.div`
  font-size: 16px;
`;

const ShellInfoListContainer = styled.div`
  max-width: 505px;
  max-height: 945px;
  overflow-y: auto;
`;

export {
  PokedShellListContainer,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
};
