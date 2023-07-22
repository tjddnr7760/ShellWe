import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  margin: 30px 0px;
  align-items: center;
`;
const ShellListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  margin: 100px 0px;
`;

const SeachToolbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const ShellsWrapper = styled.div`
  display: flex;
  height: fit-content;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  max-width: 1180px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ShellsContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
  &.empty {
    min-height: auto;
  }
`;

export {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
  ShellsContainer,
};
