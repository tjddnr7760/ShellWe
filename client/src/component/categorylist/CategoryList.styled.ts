import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export { CategoryContainer };
