import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

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

import { isLogInState } from '../../recoil/atom.ts';

import {
  NavWrapper,
  NavContainer,
  Logo,
  NavItemContentWrapper,
  NavItems,
  NavItem,
  NavItemContent,
} from './Nav.styled';

const Nav: React.FC = () => {
  const [isNavItemContent, setIsNavItemContent] = useState(false);
  const isLogIn = useRecoilValue(isLogInState);

  const handleNavItemHover = () => {
    setIsNavItemContent(true);
  };

  const handleNavItemNotHover = () => {
    setIsNavItemContent(false);
  };

  return (
    <NavWrapper>
      <NavContainer>
        <Link to="/main">
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
                  <Avatar />
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
              <NavItem>
                <FontAwesomeIcon icon={faPen} />
                Create Shells
              </NavItem>
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
                  <NavItemContent>
                    <FontAwesomeIcon icon={faBox} />
                    Product
                  </NavItemContent>

                  <NavItemContent>
                    <FontAwesomeIcon icon={faPersonRunning} />
                    Talent
                  </NavItemContent>
                </NavItemContentWrapper>
              )}

              <NavItem>
                <FontAwesomeIcon icon={faHandPointRight} />
                Offered Shells
              </NavItem>

              <NavItem>
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
