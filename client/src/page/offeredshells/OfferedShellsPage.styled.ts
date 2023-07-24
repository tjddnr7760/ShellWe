import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  height: 100vh;
`;

const OfferedShellsPageWrapper = styled.div`
  display: flex;
  width: 1250px;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PokedShellListWrapper = styled.div<{ ispokedshellopend: string }>`
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    border-left: 0.5px solid rgba(0, 0, 0, 0.5);
    border-right: 0.5px solid rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.ispokedshellopend === 'noView' ? 'none' : '')};
  }
`;

const ResponseElementWrapper = styled.div<{ ispokedshellopend: string }>`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  align-items: center;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    border-left: 0.5px solid rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.ispokedshellopend === 'noView' ? '' : 'none')};
  }
`;

const ShellImgPreviewWrapper = styled.div`
  padding: 30px;
`;

const PreviewNotice = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  font-size: 36px;
  font-weight: 300;
`;

const NoticeClickPokedShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 300;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  div {
    font-size: 30px;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 105px;
  left: 345px;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: 0px;
  background-color: #bbe7ff;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export {
  Wrapper,
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  ResponseElementWrapper,
  PokedShellListWrapper,
  PreviewNotice,
  NoticeClickPokedShell,
  CloseButton,
};
