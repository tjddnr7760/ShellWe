import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useMyPokedShellsList } from '../../hooks/offer/useMyPokedShellsList.ts';
import PokedShellList from '../../component/offeredshells/PokedShellList';
import OfferedShell from '../../component/offeredshells/OfferedShell.tsx';
import {
  Wrapper,
  OfferedShellsPageWrapper,
  PokedShellListWrapper,
  NoticeClickPokedShell,
  CloseButton,
} from './OfferedShellsPage.styled';

const OfferedShellsPage = () => {
  const [offeredVisible, setOfferedVisible] = useState(false);
  const [clickedShellId, setClickedShellId] = useState<number | undefined>();
  const { data: myPokedShellsData } = useMyPokedShellsList();
  const [isPokedShellListOpen, setIsPokedShellListOpen] = useState(true);
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });

  const HandleClickPokedShell = (id: number): void => {
    if (clickedShellId === id) {
      setOfferedVisible(!offeredVisible);
    } else {
      setIsPokedShellListOpen(false);
      setOfferedVisible(true);
      setClickedShellId(id);
    }
  };

  const handleCloseClick = () => {
    setIsPokedShellListOpen(true);
    setOfferedVisible(!offeredVisible);
  };

  return (
    <Wrapper>
      {myPokedShellsData && (
        <OfferedShellsPageWrapper>
          <PokedShellListWrapper
            ispokedshellopend={isPokedShellListOpen ? 'view' : 'noView'}
          >
            <PokedShellList
              myPokedShellsData={myPokedShellsData}
              HandleClickPokedShell={HandleClickPokedShell}
              clickedShellId={clickedShellId}
            />
          </PokedShellListWrapper>
          {isMobileScreen && offeredVisible && (
            <CloseButton onClick={handleCloseClick}>x</CloseButton>
          )}
          {clickedShellId !== undefined ? (
            <OfferedShell
              clickedShellId={clickedShellId}
              isPokedShellListOpen={isPokedShellListOpen}
            />
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
