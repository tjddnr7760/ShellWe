import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteShells } from '../../hooks/shelldetail/useDeleteShells.ts';
import { Wrapper, Div, DealState, Text } from './DetailPageSidebar.styled.ts';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import Toggle from './Toggle.tsx';
import { usePatchStateOfShell } from '../../hooks/shelldetail/usePatchStateOfShells.ts';

const DetailPageSidebar = ({ shellStatus }: { shellStatus: string }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate: deleteShell } = useDeleteShells();
  const { mutate: patchStateOfShell } = usePatchStateOfShell({
    status: shellStatus,
  });

  const toggleStatus = shellStatus === 'active' ? true : false;
  const [toggleOn, setToggleOn] = useState(toggleStatus);

  const handleClick = () => {
    patchStateOfShell(); // 거래 상태 수정
    setToggleOn((prevToggle) => !prevToggle);
  };

  const DeleteShellhandler = () => {
    deleteShell(); // 게시글 삭제
  };

  const goToShellUpdatePage = () => {
    navigate(`/shelldetail/${id}/update`);
  };

  return (
    <Wrapper>
      <DealState>
        <Text>{toggleOn ? '거래중' : '거래완료'}</Text>
        <Toggle toggleOn={toggleOn} handleClick={handleClick} />
      </DealState>
      <Div>
        <SmallButton3 onClick={goToShellUpdatePage}>
          <Text>수정</Text>
        </SmallButton3>
      </Div>
      <Div>
        <SmallButton3 onClick={DeleteShellhandler}>
          <Text>삭제</Text>
        </SmallButton3>
      </Div>
    </Wrapper>
  );
};

export default DetailPageSidebar;
