import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { isLogInState } from '../../recoil/atom.ts';
import Avatar from '../../common/avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faMagnifyingGlass,
  faBox,
  faPersonRunning,
  faHandPointRight,
  faMessage,
  faArrowRightToBracket,
  faPeopleCarryBox,
} from '@fortawesome/free-solid-svg-icons';

import {
  NavWrapper,
  NavContainer,
  Logo,
  NavItemContentWrapper,
  NavItems,
  NavItem,
  NavItemContent,
} from './Nav.styled';
import { getAccessToken } from '../../utill/localstorageData';
import { userStateWithExpiry } from '../../recoil/selector';

const Nav: React.FC = () => {
  const [isNavItemContent, setIsNavItemContent] = useState(false);
  const id = Number(localStorage.getItem('id') || 0);
  const profileUrl: string = localStorage.getItem('profileUrl') || 'empty';

  const member = {
    id,
    profileUrl,
  };
  const isLogIn = useRecoilValue(userStateWithExpiry);

  const handleNavItemHover = () => {
    setIsNavItemContent(true);
  };

  const handleNavItemNotHover = () => {
    setIsNavItemContent(false);
  };

  const handleClick = () => {
    if (!getAccessToken()) {
      alert('로그인 후 접근할 수 있습니다.');
    }
  };

  return (
    <NavWrapper>
      <NavContainer>
        <Link to={isLogIn ? '/main' : '/'}>
          <Logo
            src="https://cdn-icons-png.flaticon.com/512/499/499857.png"
            alt="Logo"
          ></Logo>
        </Link>
        <NavItems>
          {isLogIn ? (
            <>
              <Link to="/shellcreate" style={{ textDecoration: 'none' }}>
                <NavItem>
                  <FontAwesomeIcon icon={faPen} />
                  Create Shells
                </NavItem>
              </Link>
              <NavItem
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemNotHover}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Find Shells
              </NavItem>
              {isNavItemContent && (
                <NavItemContentWrapper
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={handleNavItemNotHover}
                >
                  <Link
                    to="/shelllist/product"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent>
                      <FontAwesomeIcon icon={faBox} />
                      Product
                    </NavItemContent>
                  </Link>
                  <Link
                    to="/shelllist/talent"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent>
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}

              <Link to="/offer/1" style={{ textDecoration: 'none' }}>
                <NavItem>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  Offered Shells
                </NavItem>
              </Link>

              <Link to="/dm/1" style={{ textDecoration: 'none' }}>
                <NavItem>
                  <FontAwesomeIcon icon={faMessage} />
                  Message
                </NavItem>
              </Link>

              <Link to="/member/1" style={{ textDecoration: 'none' }}>
                <NavItem>
                  <Avatar avatartype={'icon'} member={member} />
                  My Page
                </NavItem>
              </Link>

              <Link to="/myshells/1" style={{ textDecoration: 'none' }}>
                <NavItem>
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                  My Shells
                </NavItem>
              </Link>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <NavItem onClick={handleClick}>
                <FontAwesomeIcon icon={faPen} />
                Create Shells
              </NavItem>
              <NavItem
                onClick={handleClick}
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemNotHover}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Find Shells
              </NavItem>
              {isNavItemContent && (
                <NavItemContentWrapper
                  onMouseEnter={handleNavItemHover}
                  onMouseLeave={handleNavItemNotHover}
                >
                  <Link
                    to="/shelllist/product"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent>
                      <FontAwesomeIcon icon={faBox} />
                      Product
                    </NavItemContent>
                  </Link>
                  <Link
                    to="/shelllist/talent"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent>
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}
              <NavItem onClick={handleClick}>
                <FontAwesomeIcon icon={faHandPointRight} />
                Offered Shells
              </NavItem>

              <NavItem onClick={handleClick}>
                <FontAwesomeIcon icon={faMessage} />
                Message
              </NavItem>
              <NavItem>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                Login
              </NavItem>
            </Link>
          )}
        </NavItems>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
