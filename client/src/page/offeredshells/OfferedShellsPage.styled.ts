import styled from 'styled-components';

const OfferedShellsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const PokedShellListWrapper = styled.div`
  flex-grow: 1;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);
`;
const ResponseElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 70px;
  align-items: center;
  flex-grow: 0;
`;

export {
  OfferedShellsPageWrapper,
  ResponseElementWrapper,
  PokedShellListWrapper,
};
