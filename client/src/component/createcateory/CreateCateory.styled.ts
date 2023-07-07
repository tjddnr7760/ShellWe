import styled from 'styled-components';

export const CreateCateoryWrapper = styled.div`
  width: 50%;
  height: auto;
  border-radius: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  opacity: 0.6499999761581421;
  background: #fff;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CategoryMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 20px;
`;
export const CategoryMenuImg = styled.img`
  width: auto;
  height: auto;
`;
export const CategoryMenuText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
`;

export const CategoryDropdown = styled.div`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  overflow-y: auto;

  height: 300px;
  max-height: 600px;
`;

export const CategoryItem = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: gray;
  }
  &:active {
    color: white;
  }
`;
export const CategoryText = styled.div`
  border-bottom: 2px dotted black;
  margin: 20px 0 0 0;
  text-align: center;
  width: 100%;
`;
