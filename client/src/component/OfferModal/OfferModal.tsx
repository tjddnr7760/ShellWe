import MyShellList from '../offermodal-myshelllist/MyShellList.tsx';
import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
} from './OfferModal.styled.ts';
import plus from '../../asset/plus.svg';

const OfferModal = () => {
  return (
    <Wrapper>
      <Div>
        <CreateShellButton>
          <img src={plus} alt="create-newshell" />
        </CreateShellButton>
        {/* 클릭 시, 제품 생성 페이지로 navigate */}
      </Div>
      <ShellListContainer>
        <MyShellList />
      </ShellListContainer>
    </Wrapper>
  );
};

export default OfferModal;
