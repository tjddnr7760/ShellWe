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
  gap: 10px;
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
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 80%;
  gap: 15px;
  flex-wrap: wrap;
  margin:10px;
  padding:10px;
`;
export {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
};
