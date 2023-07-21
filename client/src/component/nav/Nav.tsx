import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
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
import { userStateWithExpiry } from '../../recoil/selector';
import {
  getAccessToken,
  getMemberIdFromLocalStorage,
} from '../../utill/localstorageData';

const Nav: React.FC = () => {
  const [isNavItemContent, setIsNavItemContent] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState('');

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

  const handleButtonClick = (id: any) => {
    setActiveButtonId(id);
  };

  // 클릭시 버튼 색깔 바뀌기
  // 다른 div 눌렀을 때 div 원래 색깔로 초기화
  const myId = Number(getMemberIdFromLocalStorage());

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
                  className={
                    activeButtonId === 'createShells' ? 'selectedTab' : ''
                  }
                  onClick={() => handleButtonClick('createShells')}
                >
                  <FontAwesomeIcon icon={faPen} />
                  Create Shells
                </NavItem>
              </Link>
              <NavItem
                className={activeButtonId === 'findShells' ? 'selectedTab' : ''}
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
                      className={
                        activeButtonId === 'product' ? 'selectedTab' : ''
                      }
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
                      className={
                        activeButtonId === 'talent' ? 'selectedTab' : ''
                      }
                      onClick={() => handleButtonClick('talent')}
                    >
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}

              <Link to={`/offer/${myId}`} style={{ textDecoration: 'none' }}>
                <NavItem
                  className={activeButtonId === 'offer' ? 'selectedTab' : ''}
                  onClick={() => handleButtonClick('offer')}
                >
                  <FontAwesomeIcon icon={faHandPointRight} />
                  Offered Shells
                </NavItem>
              </Link>

              <Link to={`/dm/${myId}`} style={{ textDecoration: 'none' }}>
                <NavItem
                  className={activeButtonId === 'dm' ? 'selectedTab' : ''}
                  onClick={() => handleButtonClick('dm')}
                >
                  <FontAwesomeIcon icon={faMessage} />
                  Message
                </NavItem>
              </Link>

              <Link to={`/member/${myId}`} style={{ textDecoration: 'none' }}>
                <NavItem
                  className={activeButtonId === 'member' ? 'selectedTab' : ''}
                  onClick={() => handleButtonClick('member')}
                >
                  <Avatar avatartype={'icon'} member={member} />
                  My Page
                </NavItem>
              </Link>

              <Link to={`/myshells/${myId}`} style={{ textDecoration: 'none' }}>
                <NavItem
                  className={activeButtonId === 'myshells' ? 'selectedTab' : ''}
                  onClick={() => handleButtonClick('myshells')}
                >
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                  My Shells
                </NavItem>
              </Link>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <NavItem
                className={
                  activeButtonId === 'createShells' ? 'selectedTab' : ''
                }
                onClick={() => {
                  handleClick(), handleButtonClick('createShells');
                }}
              >
                <FontAwesomeIcon icon={faPen} />
                Create Shells
              </NavItem>
              <NavItem
                className={activeButtonId === 'findShells' ? 'selectedTab' : ''}
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
                      className={
                        activeButtonId === 'product' ? 'selectedTab' : ''
                      }
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
                      className={
                        activeButtonId === 'talent' ? 'selectedTab' : ''
                      }
                      onClick={() => handleButtonClick('talent')}
                    >
                      <FontAwesomeIcon icon={faPersonRunning} />
                      Talent
                    </NavItemContent>
                  </Link>
                </NavItemContentWrapper>
              )}
              <NavItem
                className={
                  activeButtonId === 'offerdShells' ? 'selectedTab' : ''
                }
                onClick={() => {
                  handleClick(), handleButtonClick('offerdShells');
                }}
              >
                <FontAwesomeIcon icon={faHandPointRight} />
                Offered Shells
              </NavItem>

              <NavItem
                className={activeButtonId === 'message' ? 'selectedTab' : ''}
                onClick={() => {
                  handleClick(), handleButtonClick('message');
                }}
              >
                <FontAwesomeIcon icon={faMessage} />
                Message
              </NavItem>
              <NavItem
                className={activeButtonId === 'login' ? 'selectedTab' : ''}
                onClick={() => {
                  handleClick(), handleButtonClick('login');
                }}
              >
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
