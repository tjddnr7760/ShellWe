import {
  CreateShellButton,
  ShellListContainer,
  Wrapper,
  Div,
  MyShellListWrapper,
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
} from './OfferModal.styled';
import dummydata from '../../mock/mock.tsx';
import plus from '../../asset/plus.svg';

type Shell = {
  shellId: number;
  numberOfTrades: number;
  type: string;
  status: string;
  title: string;
  createdAt: string;
  modifiedAt: string;
  category: string;
  tags: string[];
  shellPhotos: string[];
  member: {
    memberId: number;
    displayName: string;
    profilePhoto: string;
  };
};


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

const MyShellList = () => {
  const myShellArray = dummydata.shells.slice(0, 10);

  return (
    <MyShellListWrapper>
      {myShellArray.map((shell) => {
          return <MyShell key={shell.shellId} shell={shell} />;
      })}
    </MyShellListWrapper>
  );
};

const MyShell = ({shell}: {shell: Shell}) => {
    const picture = shell.shellPhotos[0];
    const title = shell.title;

  return (
    <MyShellContainer>
      <ShellInfo>
        <ImgBox src={picture} alt="shell-image" />
        <Title>{title}</Title>
      </ShellInfo>
      <button>찌르기</button>
    </MyShellContainer>
  );
};

export default OfferModal;