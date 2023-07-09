import styled from 'styled-components';

const PokedShellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 505px;
  max-height: 1080px;
`;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  height: 135px;
  gap: 10px;
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
  overflow-y: scroll;
`;

export {
  PokedShellListWrapper,
  IntroBox,
  IntroText1,
  IntroText2,
  ShellInfoListContainer,
};
