import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
`;

const OfferedShellsPageWrapper = styled.div`
  display: flex;
  width: 1500px;
  height: fit-content;
`;
const PokedShellListWrapper = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  flex-grow: 1;
`;
const ResponseElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  align-items: center;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const ShellImgPreviewWrapper = styled.div`
  padding: 30px;
`;

export {
  Wrapper,
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  ResponseElementWrapper,
  PokedShellListWrapper,
};
