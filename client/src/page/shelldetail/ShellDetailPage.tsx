import ShellImgPreview from '../../component/ShellImgPreview/ShellImgPreview';
import ShellDetail from '../../component/ShellDetail/ShellDetail';
import DetailPageSidebar from '../../component/DetailPageSidebar/DetailPageSidebar';
import {
  DetailPageContainer,
  Div,
  Wrapper,
  ContentDiv,
  PreviewDiv,
} from './ShellDetailPage.styled';

const ShellDetailPage = () => {
  return (
    <Wrapper>
      <DetailPageContainer>
        <ContentDiv className="middle">
          <PreviewDiv>
            <ShellImgPreview />
          </PreviewDiv>
          <Div>
            <ShellDetail />
            <DetailPageSidebar />
          </Div>
        </ContentDiv>
      </DetailPageContainer>
    </Wrapper>
  );
};

export default ShellDetailPage;
