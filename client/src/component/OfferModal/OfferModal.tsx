import { useNavigate } from 'react-router-dom';
import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';
import { MyShellsDataProps } from '../../dataset/ShellDetailType.ts';

const OfferModal = ({ myShellListsData }: MyShellsDataProps) => {
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
