import { useState } from 'react';
import { useMyPokedShellsList } from '../../hooks/offer/useMyPokedShellsList.ts';
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
  const [clickedShellId, setClickedShellId] = useState<number | undefined>();
  const { data: myPokedShellsData } = useMyPokedShellsList();

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
      {myPokedShellsData && (
        <OfferedShellsPageWrapper>
          <PokedShellListWrapper>
            <PokedShellList
              myPokedShellsData={myPokedShellsData}
              HandleClickPokedShell={HandleClickPokedShell}
            />
          </PokedShellListWrapper>
          {clickedShellId !== undefined ? (
            <OfferedShell clickedShellId={clickedShellId} />
          ) : (
            <NoticeClickPokedShell>
              Click your Shell!
              <div>요청받은 쉘을 확인해보세요</div>
            </NoticeClickPokedShell>
          )}
        </OfferedShellsPageWrapper>
      )}
    </Wrapper>
  );
};

export default OfferedShellsPage;
