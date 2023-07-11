import styled from 'styled-components';

const OfferedShellsPageWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const PokedShellListWrapper = styled.div`
  flex-grow: 1;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);
`;
const ResponseElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShellImgPreviewWrapper = styled.div`
  padding: 15px;
`;

export {
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  ResponseElementWrapper,
  PokedShellListWrapper,
};
