import styled from 'styled-components';

const SearchToolbarContainer = styled.div`
  display: flex;
  height: 30px;
  margin: 0 30px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SearchToolbarInputWrapper = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  border: 1px solid #023e8a80;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 220px;
  }
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
