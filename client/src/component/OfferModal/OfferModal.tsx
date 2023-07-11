import { useNavigate } from 'react-router-dom';
import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';

const OfferModal = () => {
  const navigate = useNavigate();

  const goToCreateShellPage = () => {
    navigate('/shellcreate');
  }

  return (
    <Wrapper>
      <Div>
        <CreateShellButton onClick={goToCreateShellPage}>
          <img src={plus} alt="create-newshell" />
        </CreateShellButton>
      </Div>
      <ShellListContainer>
        <MyShellList />
      </ShellListContainer>
    </Wrapper>
  );
};

export default OfferModal;
