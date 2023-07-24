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

  // 1. Poked 쉘 리스트, Res shell list 분기
  // 모바일일 때, isPokedShellListOpen을 초기 상태를 true로 하자.
  // 클릭 이벤트 발동시, PokedShellList를 false로 바꿔서 닫자.

  // 2. 닫기 버튼
  // 모바일일 때, 닫기 버튼을 활성화하자.
  // 닫기 버튼 클릭 시, PokedShellListOpen을 true로 상태를 바꿔주고, setOfferedVisible을 false로 바꾸자.

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
