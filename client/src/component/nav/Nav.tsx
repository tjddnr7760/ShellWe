import {
  NavWrapper,
  NavContainer,
  Logo,
  NavItems,
  NavItem,
  NavItemContent,
  LogoutButtonContainer,
  LogoutButton,
} from './Nav.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
        <NavItems>
          <NavItem>
            <FontAwesomeIcon icon={faPen} />
            Create Shells
          </NavItem>
          <NavItem>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Find Shells
          </NavItem>
          <NavItemContent>
            <FontAwesomeIcon icon={faBox} />
            Product
          </NavItemContent>
          <NavItemContent>
            <FontAwesomeIcon icon={faPersonRunning} />
            Talent
          </NavItemContent>

          <NavItem>
            <FontAwesomeIcon icon={faHandPointRight} />
            Offerd Shells
          </NavItem>
          <NavItem>
            <FontAwesomeIcon icon={faMessage} />
            Message
          </NavItem>
          <NavItem>
            <img
              src="https://www.acnmoda.com.br/img/user-default.png"
              alt="userImg"
            />
            My page
          </NavItem>
        </NavItems>
      </NavContainer>
      <LogoutButtonContainer>
        <LogoutButton>
          <FontAwesomeIcon icon={faDoorOpen} />
        </LogoutButton>
      </LogoutButtonContainer>
    </NavWrapper>
  );
};

export default Nav;
