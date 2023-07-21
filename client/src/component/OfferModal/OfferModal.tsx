import { useNavigate } from 'react-router-dom';
import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';
import { useGetMyShellToPoke } from '../../hooks/shelldetail/useGetPokeShellsList.ts';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData.ts';

const OfferModal = () => {
  const { data: modaldata } = useGetMyShellToPoke(
    Number(getMemberIdFromLocalStorage())
  );
  const myShellListsData = modaldata.data.shells; // 추후 타입 정의해야 함

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
        <MyShellList myShellListsData={myShellListsData} />
      </ShellListContainer>
    </Wrapper>
  );
};

export default OfferModal;
