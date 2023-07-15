import styled from 'styled-components';
import ResponseShell from './ResponseShell';
import { useOfferedShellsList } from '../../hooks/offer/useOfferedShellsList';

const ResponseShellListWrapper = styled.div`
  width: 100%;
  max-height: 540px;
  overflow-y: scroll;
`;

interface MyShells {
  id: number;
  type: string;
  status: string;
  title: string;
  body?: string;
  createdAt: string;
  category: string;
  pictures?: Picture[];
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

interface Picture {
  order: number;
  url: string;
}

const ResponseShellList = ({ clickedShellId }: { clickedShellId: number }) => {
  const { data: myOfferedShellsData } = useOfferedShellsList(clickedShellId);
  const offeredShellsArray: MyShells[] = myOfferedShellsData?.shells || [];

  return (
    // {/* 만약에 빈 배열이면, 아직 게시물이 없습니다. 렌더링 */}
    <ResponseShellListWrapper>
      {offeredShellsArray &&
        offeredShellsArray.map((shell) => {
          return (
            <ResponseShell
              key={shell.id}
              shell={shell}
              clickedShellId={clickedShellId}
            />
          );
        })}
    </ResponseShellListWrapper>
  );
};

export default ResponseShellList;
