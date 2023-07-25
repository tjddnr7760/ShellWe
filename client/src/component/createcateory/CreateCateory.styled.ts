import styled from 'styled-components';

export const CreateCateoryWrapper = styled.div`
  border-radius: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  opacity: 0.6499999761581421;
  background: #fff;
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: fit-content;
  min-width: 230px;
  justify-content: center;

  gap: 10px;
`;
export const CategoryMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 20px;
`;
export const CategoryMenuImg = styled.img``;
export const CategoryMenuText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
`;

export const CategoryDropdown = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-y: auto;
  height: 300px;
  max-height: 600px;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
`;

export const CategoryItem = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: gray;
  }
  &:active {
    color: white;
  }
`;
export const CategoryText = styled.div`
  border-bottom: 2px dotted black;
  margin: 10px 0 0 0;
  width: 100%;
  padding: 20px;
  font-weight: 700;
  text-align: center;
`;
