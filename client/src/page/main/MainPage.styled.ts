import styled from 'styled-components';

export const MainShellWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainShellImg = styled.img``;

export const ShellListContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px;
  gap: 15px;
  padding: 10px;
`;

export const ShellBox = styled.div`
  display: flex;
  gap: 15px;
`;
=======
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const DetailPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1140px;
  height: 930px;
`;

const PreviewDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1000px;
  gap: 20px;
`;

const ContentDiv = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 670px;
  gap: 5px;
`;

export { DetailPageContainer, Wrapper, Div, ContentDiv, PreviewDiv };
