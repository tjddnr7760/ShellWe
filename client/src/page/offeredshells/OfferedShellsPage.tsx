import ShellImgPreview from '../../component/ShellImgPreview/ShellImgPreview';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import ResponseShellList from '../../component/offeredshells/ResponseShellList';
import {
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
          <ShellImgPreview />
        <ResponseShellList />
      </ResponseElementWrapper>
    </OfferedShellsPageWrapper>
  );
};

export default OfferedShellsPage;
