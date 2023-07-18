import { ResponseShellListWrapper } from './ResponseShell.styled';
import ResponseShell from './ResponseShell';
import { useOfferedShellsList } from '../../hooks/offer/useOfferedShellsList';
import { OfferedShells } from '../../dataset/TypesOfferedShell';
import { Pictures } from '../../dataset/TypesOfferedShell';

const ResponseShellList = ({
  clickedShellId,
  HandleShellPreview,
}: {
  clickedShellId: number;
  HandleShellPreview: (picture: Pictures[]) => void;
}) => {
  const { data: myOfferedShellsData } = useOfferedShellsList(clickedShellId);
  const offeredShellsArray: OfferedShells[] = myOfferedShellsData?.shells || [];

  return (
    <ResponseShellListWrapper>
      {offeredShellsArray &&
        offeredShellsArray.map((shell) => {
          return (
            <ResponseShell
              key={shell.id}
              shell={shell}
              clickedShellId={clickedShellId}
              HandleShellPreview={HandleShellPreview}
            />
          );
        })}
    </ResponseShellListWrapper>
  );
};

export default ResponseShellList;
