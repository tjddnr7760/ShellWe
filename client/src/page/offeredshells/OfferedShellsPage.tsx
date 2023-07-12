import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import ResponseShellList from '../../component/offeredshells/ResponseShellList';
import {
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
  ResponseElementWrapper,
} from './OfferedShellsPage.styled';

const OfferedShellsPage = () => {
  return (
    <OfferedShellsPageWrapper>
      <PokedShellListWrapper>
        <PokedShellList />
      </PokedShellListWrapper>
      <ResponseElementWrapper>
        <ShellImgPreviewWrapper>
          <ShellImgPreview />
        </ShellImgPreviewWrapper>
        <ResponseShellList />
      </ResponseElementWrapper>
    </OfferedShellsPageWrapper>
  );
};

export default OfferedShellsPage;
