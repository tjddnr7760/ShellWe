import { useState } from 'react';
import { useMyShellsList } from '../../hooks/offer/useMyShellsList.ts';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import OfferedShell from '../../component/offeredshells/OfferedShell.tsx';
import {
  Wrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
  NoticeClickPokedShell,
} from './OfferedShellsPage.styled';

const OfferedShellsPage = () => {
  const [offeredVisible, setOfferedVisible] = useState(false);
  const [clickedShellId, setClickedShellId] = useState<number>(0);

  const { data: myPokedShellsData } = useMyShellsList();

  const HandleClickPokedShell = (id: number): void => {
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
            HandleClickPokedShell={HandleClickPokedShell}
          />
        </PokedShellListWrapper>
        {offeredVisible === true ? (
          <OfferedShell clickedShellId={clickedShellId} />
        ) : (
          <NoticeClickPokedShell>
            Click your Shell!
            <div>요청받은 쉘을 확인해보세요</div>
          </NoticeClickPokedShell>
        )}
      </OfferedShellsPageWrapper>
    </Wrapper>
  );
};

export default OfferedShellsPage;
