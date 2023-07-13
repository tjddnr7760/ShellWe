import { useNavigate } from 'react-router-dom';
import { useGetMyShellToPoke } from '../../hooks/shelldetail/usePokeShells.ts';
import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';

const OfferModal = () => {
  // 추후 수정 사항: useGetMyShellToPoke에 recoil에서 memberId를 넣어야 한다.(login된 본인 계정의 memberId)
  const { data } = useGetMyShellToPoke(7);
  const myShellsData = data.data;
  console.log(myShellsData);

  const navigate = useNavigate();
  const goToShellCreatePage = () => {
    navigate('/shellcreate');
  };

  return (
    <Wrapper>
      <Div>
        <CreateShellButton onClick={goToShellCreatePage}>
          <img src={plus} alt="create-newshell" />
        </CreateShellButton>
      </Div>
      <ShellListContainer>
        <MyShellList myShellsData={myShellsData} />
      </ShellListContainer>
    </Wrapper>
  );
};

export default OfferModal;
