import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 10px;
`;

const PreviewDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  position: relative;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export { DetailPageContainer, Wrapper, Div, ContentDiv, PreviewDiv };
