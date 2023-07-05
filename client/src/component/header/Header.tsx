import { HeaderContainer, Logo, Button } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
        alt="Logo"
      />
      <div>
        <Button className="LoginButton">Login</Button>
        <Button className="SignupButton">Sign up</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
