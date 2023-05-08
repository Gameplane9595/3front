import {
  HeaderWrapper,
  LinkWrapper,
  Nav,
  Search,
  Title,
  Home,
  SearchUI,
  SearchInput,
  SearchButton,
  HomeLogo,
  LogIn,
} from './header-styled';
import { useState, useEffect } from 'react';
import auth from './auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsSearchVisible(show => !show);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <HeaderWrapper>
      <Title>ThreeLines</Title>
      <Nav>
        <Search
          src="/images/Search.png"
          alt="검색"
          width="30"
          height="30"
          onClick={handleClick}
        />
        {isSearchVisible && (
          <div
            className={`${SearchUI.search} ${
              isSearchVisible ? SearchUI.show : SearchUI.hide
            }`}
          >
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <SearchButton>Search</SearchButton>
          </div>
        )}
        {isLoggedIn ? (
          <LogIn onClick={() => signOut(auth)}>Logout</LogIn>
        ) : (
          <>
            <LinkWrapper href={'/login'}>Login</LinkWrapper>
            {!isLoggedIn && <LinkWrapper href={'/join'}>Join</LinkWrapper>}
          </>
        )}
        <Home href={'/'}>
          <HomeLogo
            src="/images/Home.png"
            alt="메인 페이지"
            width="30"
            height="30"
          />
        </Home>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
