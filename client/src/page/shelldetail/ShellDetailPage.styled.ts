import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1612.8px;
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
