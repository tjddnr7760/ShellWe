import styled from 'styled-components';

const SearchToolbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 0 30px;
  justify-content: flex-end;
  align-items: center;
  gap: 250px;
`;

const SearchToolbarInputWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  border: 1px solid #023e8a80;
  border-radius: 15px;
`;

const SearchToolbarInput = styled.input`
  width: 100%;
  border: none;
  height: 30px;

  &:focus {
    outline: none;
  }
`;

export {
  SearchToolbarContainer,
  SearchToolbarInput,
  SearchToolbarInputWrapper,
};
