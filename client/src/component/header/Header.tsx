import { HeaderContainer, Logo, Button } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
        alt="로고"
      />
      <div>
        <Button className="LoginButton">Log in</Button>
        <Button className="SignupButton">Sign up</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
