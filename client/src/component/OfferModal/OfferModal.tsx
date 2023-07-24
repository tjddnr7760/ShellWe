import { useNavigate } from 'react-router-dom';
import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
  NoneShellsNotice,
  NoticeTitle,
  NoticeBody,
  PlusImage,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';
import { OfferModalProps } from '../../dataset/TypeOfShellDetail.ts';

const OfferModal = ({
  shellMemberId,
  handlePoke,
  modaldata,
}: OfferModalProps) => {
  const navigate = useNavigate();
  const goToShellCreatePage = () => {
    navigate('/shellcreate');
  };

  return (
    <Wrapper>
      <Div>
        <CreateShellButton onClick={goToShellCreatePage}>
          <PlusImage src={plus} alt="create-newshell" />
        </CreateShellButton>
      </Div>
      <ShellListContainer>
        {modaldata.data.shells.length !== 0 ? (
          <MyShellList
            myShellListsData={modaldata.data.shells}
            shellMemberId={shellMemberId}
            handlePoke={handlePoke}
          />
        ) : (
          <NoneShellsNotice>
            <NoticeTitle>No Shells</NoticeTitle>
            <br />
            <NoticeBody>(+) 버튼을 눌러 새로운 쉘을 등록해보세요!</NoticeBody>
          </NoneShellsNotice>
        )}
      </ShellListContainer>
    </Wrapper>
  );
};

export default OfferModal;
