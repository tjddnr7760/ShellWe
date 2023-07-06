import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;

  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ShellListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0px;
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
  width: 100%;
  height: 80%;

  justify-content: center;
  align-items: center;
`;
export {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
};
