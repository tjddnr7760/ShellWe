import styled from 'styled-components';

const SearchToolbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 0 30px;
  justify-content: space-around;
  align-items: center;
`;

const SearchToolbarInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchToolbarInput = styled.input`
  width: 680px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const MenuBTN = styled.img`
  width: 32px;
  height: 32px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
`;

export {
  SearchToolbarContainer,
  SearchToolbarInput,
  MenuBTN,
  SearchToolbarInputWrapper,
};
