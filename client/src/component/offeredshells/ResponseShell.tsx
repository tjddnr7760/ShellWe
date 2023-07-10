import {
  ResponseShellWrapper,
  ShellsImageBox,
  ShellImg,
  ShellsTextInfoBox,
  TextBox,
  BodyBox,
  AcceptInfo,
  UserImg,
  AcceptButton,
} from './ResponseShell.styled';
import product from '../../asset/product.jpg';
import userimg from '../../asset/avatar/userimg.svg';

const ResponseShell = () => {
  return (
    <ResponseShellWrapper>
      <ShellsImageBox>
        <ShellImg src={product} alt="userimg"></ShellImg>
      </ShellsImageBox>
      <ShellsTextInfoBox>
        <TextBox>Title</TextBox>
        <TextBox>Category</TextBox>
        <BodyBox>Body</BodyBox>
      </ShellsTextInfoBox>
      <AcceptInfo>
        <UserImg src={userimg} alt="userimg"></UserImg>
        <AcceptButton>수락</AcceptButton>
      </AcceptInfo>
    </ResponseShellWrapper>
  );
};

export default ResponseShell;
