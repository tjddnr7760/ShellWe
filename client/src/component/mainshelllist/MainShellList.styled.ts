import styled from 'styled-components';

const ShellListContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px;
  gap: 15px;
  padding: 10px;
`;

const ShellBox = styled.div`
  display: flex;
  gap: 15px;
`;

export { ShellListContainer, ShellBox };
