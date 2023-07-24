import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDeleteShells } from '../../hooks/shelldetail/useDeleteShells.ts';
import {
  Wrapper,
  Div,
  DealState,
  Text,
  CloseButton,
  FunctionButton,
} from './DetailPageSidebar.styled.ts';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import Toggle from './Toggle.tsx';
import { usePatchStateOfShell } from '../../hooks/shelldetail/usePatchStateOfShells.ts';

const DetailPageSidebar = ({
  shellStatus,
  handleOpenSidebar,
}: {
  shellStatus: string;
  handleOpenSidebar: () => void;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const toggleStatus = shellStatus === 'active' ? true : false;
  const [toggleOn, setToggleOn] = useState(toggleStatus);
  const { mutate: deleteShell } = useDeleteShells();
  const { mutate: patchStateOfShell } = usePatchStateOfShell({
    status: toggleOn,
  });
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });

  const handleClick = () => {
    patchStateOfShell();
    setToggleOn((prevToggle) => !prevToggle);
  };

  const DeleteShellhandler = () => {
    deleteShell();
  };

  const goToShellUpdatePage = () => {
    navigate(`/shellupdate/${id}`);
  };

  const handleCloseClick = () => {
    handleOpenSidebar();
  };

  return (
    <Wrapper>
      {isMobileScreen && (
        <CloseButton onClick={handleCloseClick}>x</CloseButton>
      )}
      <DealState>
        <Text>{toggleOn ? '거래중' : '거래완료'}</Text>
        <Toggle toggleOn={toggleOn} handleClick={handleClick} />
        {/* 여기에서 true 이면,  */}
      </DealState>
      <Div>
        <FunctionButton onClick={goToShellUpdatePage}>
          <Text>수정</Text>
        </FunctionButton>
      </Div>
      <Div>
        <FunctionButton onClick={DeleteShellhandler}>
          <Text>삭제</Text>
        </FunctionButton>
      </Div>
    </Wrapper>
  );
};

export default DetailPageSidebar;
