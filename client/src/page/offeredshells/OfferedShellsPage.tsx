import { useState } from 'react';
import { useMyShellsList } from '../../hooks/offer/useMyShellsList.ts';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import OfferedShell from '../../component/offeredshells/OfferedShell.tsx';
import {
  Wrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
} from './OfferedShellsPage.styled';

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
        {offeredVisible && <OfferedShell clickedShellId={clickedShellId} />}
      </OfferedShellsPageWrapper>
    </Wrapper>
  );
};

export default OfferedShellsPage;
