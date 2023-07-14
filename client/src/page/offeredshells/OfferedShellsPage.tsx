import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import ResponseShellList from '../../component/offeredshells/ResponseShellList';
import {
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
  ResponseElementWrapper,
} from './OfferedShellsPage.styled';
import { useMyShellsList } from '../../hooks/offer/useMyShellsList.ts';

const OfferedShellsPage = () => {
  const { data: myPokedShellsData } = useMyShellsList();

  return (
    <OfferedShellsPageWrapper>
      <PokedShellListWrapper>
        <PokedShellList myPokedShellsData={myPokedShellsData} />
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
