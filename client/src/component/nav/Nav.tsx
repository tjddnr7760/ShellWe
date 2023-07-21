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

  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (id: any) => {
    setActiveButtonId(id);
  };

  // 클릭시 버튼 색깔 바뀌기
  // 다른 div 눌렀을 때 div 원래 색깔로 초기화

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
                <NavItem
                  active={activeButtonId === 'createShells'}
                  onClick={() => handleButtonClick('createShells')}
                >
                  <FontAwesomeIcon icon={faPen} />
                  Create Shells
                </NavItem>
              </Link>
              <NavItem
                active={activeButtonId === 'findShells'}
                onClick={() => handleButtonClick('findShells')}
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
                    <NavItemContent
                      active={activeButtonId === 'product'}
                      onClick={() => handleButtonClick('product')}
                    >
                      <FontAwesomeIcon icon={faBox} />
                      Product
                    </NavItemContent>
                  </Link>
                  <Link
                    to="/shelllist/talent"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent
                      active={activeButtonId === 'talent'}
                      onClick={() => handleButtonClick('talent')}
                    >
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}

              <Link to="/offer/1" style={{ textDecoration: 'none' }}>
                <NavItem
                  active={activeButtonId === 'offerdShells'}
                  onClick={() => handleButtonClick('offerdShells')}
                >
                  <FontAwesomeIcon icon={faHandPointRight} />
                  Offered Shells
                </NavItem>
              </Link>

              <Link to="/dm/1" style={{ textDecoration: 'none' }}>
                <NavItem
                  active={activeButtonId === 'message'}
                  onClick={() => handleButtonClick('message')}
                >
                  <FontAwesomeIcon icon={faMessage} />
                  Message
                </NavItem>
              </Link>

              <Link to="/member/1" style={{ textDecoration: 'none' }}>
                <NavItem
                  active={activeButtonId === 'myPage'}
                  onClick={() => handleButtonClick('myPage')}
                >
                  <Avatar avatartype={'icon'} member={member} />
                  My Page
                </NavItem>
              </Link>

              <Link to="/myshells/1" style={{ textDecoration: 'none' }}>
                <NavItem
                  active={activeButtonId === 'myShells'}
                  onClick={() => handleButtonClick('myShells')}
                >
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                  My Shells
                </NavItem>
              </Link>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <NavItem
                active={activeButtonId === 'createShells'}
                onClick={() => {
                  handleClick(), handleButtonClick('createShells');
                }}
              >
                <FontAwesomeIcon icon={faPen} />
                Create Shells
              </NavItem>
              <NavItem
                active={activeButtonId === 'findShells'}
                onClick={() => {
                  handleClick(), handleButtonClick('findShells');
                }}
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
                    <NavItemContent
                      active={activeButtonId === 'product'}
                      onClick={() => handleButtonClick('product')}
                    >
                      <FontAwesomeIcon icon={faBox} />
                      Product
                    </NavItemContent>
                  </Link>
                  <Link
                    to="/shelllist/talent"
                    style={{ textDecoration: 'none' }}
                  >
                    <NavItemContent
                      active={activeButtonId === 'talent'}
                      onClick={() => handleButtonClick('talent')}
                    >
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}
              <NavItem
                active={activeButtonId === 'offerdShells'}
                onClick={() => {
                  handleClick(), handleButtonClick('offerdShells');
                }}
              >
                <FontAwesomeIcon icon={faHandPointRight} />
                Offered Shells
              </NavItem>

              <NavItem
                active={activeButtonId === 'message'}
                onClick={() => {
                  handleClick(), handleButtonClick('message');
                }}
              >
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
