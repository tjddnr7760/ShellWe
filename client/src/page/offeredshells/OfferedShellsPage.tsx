import { useState } from 'react';
import ShellImgPreview from '../../component/shellimgpreview/ShellImgPreview';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import ResponseShellList from '../../component/offeredshells/ResponseShellList';
import {
  Wrapper,
  ShellImgPreviewWrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
  ResponseElementWrapper,
} from './OfferedShellsPage.styled';
import { useMyShellsList } from '../../hooks/offer/useMyShellsList.ts';

export interface RequestBodyForAccept {
  myShellId: number;
  sellerShellId: number;
  sellerMemberId: number;
}

const OfferedShellsPage = () => {
  const [offeredVisible, setOfferedVisible] = useState(false);
  const [clickedShellId, setClickedShellId] = useState<number>(0);

  const { data: myPokedShellsData } = useMyShellsList();

  const HandleClickedShell = (id: number): void => {
    if (clickedShellId === id) {
      setOfferedVisible(!offeredVisible);
    } else {
      setOfferedVisible(true);
      setClickedShellId(id);
    }
  };

  return (
    <Wrapper>
      <OfferedShellsPageWrapper>
        <PokedShellListWrapper>
          <PokedShellList
            myPokedShellsData={myPokedShellsData}
            HandleClickedShell={HandleClickedShell}
          />
        </PokedShellListWrapper>
        {offeredVisible && (
          <ResponseElementWrapper>
            <ShellImgPreviewWrapper>
              <ShellImgPreview />
            </ShellImgPreviewWrapper>
            <ResponseShellList clickedShellId={clickedShellId} />
          </ResponseElementWrapper>
        )}
      </OfferedShellsPageWrapper>
    </Wrapper>
  );
};

export default OfferedShellsPage;
