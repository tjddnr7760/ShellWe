import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 220px;
  height: 700px;
  font-size: 20px;
`;

const RowTabBox = styled.div`
  display: flex;
  gap: 10px;
`;

const RowTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: #fff;
`;

const ColumnTabBox = styled(RowTabBox)`
  flex-direction: column;
`;
const ColumnTab = styled(RowTab)`
  flex-direction: column;
  align-items: flex-start;
  width: 220px;
  padding-left: 25px;
`;

export { SidebarContainer, RowTab, ColumnTab, RowTabBox, ColumnTabBox };
