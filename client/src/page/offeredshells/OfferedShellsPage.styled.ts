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
  width: 1500px;
  height: 100%;
`;

const PokedShellListWrapper = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

const ResponseElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  align-items: center;
  border-right: 0.5px solid rgba(0, 0, 0, 0.5);
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
  div {
    font-size: 30px;
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
};
