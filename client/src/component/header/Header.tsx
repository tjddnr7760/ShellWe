import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStateWithExpiry } from '../../recoil/selector';
import subwayMenu from '../../asset/subway_menu.svg';
import {
  HeaderContainer,
  Logo,
  DropdownContainer,
  DropdownBTN,
  DropdownContent,
  NavItem,
  NavItems,
} from './Header.styled';
import { getMemberIdFromLocalStorage } from '../../utill/localstorageData';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [headerMenuIsOpend, setHeaderMenuIsOpend] = useState(false);
  const isLogIn = useRecoilValue(userStateWithExpiry);
  const myId = Number(getMemberIdFromLocalStorage());

  const handleheaderClick = () => {
    setHeaderMenuIsOpend(!headerMenuIsOpend);
  };
  const handleClick = () => {
    alert('로그인 후 접근할 수 있습니다.');
    setHeaderMenuIsOpend(!headerMenuIsOpend);
    navigate(`/login`);
  };
  const handleButtonClick = (id: any) => {
    navigate(`/${id}`);
    setHeaderMenuIsOpend(!headerMenuIsOpend);
  };
  const handleShellClick = (id: any) => {
    navigate(`/shelllist/${id}`);
    setHeaderMenuIsOpend(!headerMenuIsOpend);
  };
  const handleMemberClick = (id: any) => {
    navigate(`/${id}/${myId}`);
    setHeaderMenuIsOpend(!headerMenuIsOpend);
  };
  return (
    <HeaderContainer>
      <Link to={isLogIn ? '/main' : '/'}>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
          alt="Logo"
        ></Logo>
      </Link>
      <DropdownContainer>
        <DropdownBTN
          src={subwayMenu}
          onClick={handleheaderClick}
          alt="Menu"
        ></DropdownBTN>
        {headerMenuIsOpend && (
          <DropdownContent>
            <NavItems>
              <NavItem
                onClick={
                  isLogIn ? () => handleButtonClick('shellcreate') : handleClick
                }
              >
                Create Shells
              </NavItem>

              <NavItem onClick={() => handleShellClick('product')}>
                Product
              </NavItem>
              <NavItem onClick={() => handleShellClick('talent')}>
                Talent
              </NavItem>

              <NavItem
                onClick={
                  isLogIn ? () => handleMemberClick('offer') : handleClick
                }
              >
                Offered Shells
              </NavItem>
              <NavItem
                onClick={isLogIn ? () => handleMemberClick('dm') : handleClick}
              >
                Message
              </NavItem>
              <NavItem
                onClick={
                  isLogIn ? () => handleMemberClick('member') : handleClick
                }
              >
                My Page
              </NavItem>
              <NavItem
                onClick={
                  isLogIn ? () => handleMemberClick('myshells') : handleClick
                }
              >
                My Shells
              </NavItem>
              {isLogIn ? null : (
                <NavItem
                  onClick={() => {
                    handleButtonClick('login');
                  }}
                >
                  Login
                </NavItem>
              )}
            </NavItems>
          </DropdownContent>
        )}
      </DropdownContainer>
    </HeaderContainer>
  );
};

export default Header;
