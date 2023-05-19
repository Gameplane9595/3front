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
  LogIn,
} from './header-styled';
import { useState, useEffect } from 'react';
import auth from './auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as API from '@/utils/api';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsSearchVisible(show => !show);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInput(event.target.value);
  };

  const submitSearch = () => {
    console.log('검색어', searchInput);
    setIsSearchVisible(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    const checkAdmin = async () => {
      const res: any = await API.get<any>('/user');
      setIsAdmin(res.data.data.admin);
    };

    checkAdmin();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <HeaderWrapper>
      <Home href={'/'}>
        <Title>One-Line</Title>
      </Home>

      <Nav>
        {isSearchVisible ? (
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
            <SearchButton onClick={submitSearch}>Search</SearchButton>
          </div>
        ) : (
          <Search
            src="/images/Search.png"
            alt="검색"
            width="30"
            height="30"
            onClick={handleClick}
          />
        )}
        {isLoggedIn ? (
          <>
            <LogIn onClick={() => signOut(auth)}>Logout</LogIn>
            <LinkWrapper href={'/my-user'}>My Page</LinkWrapper>
            {isAdmin ? (
              <>
                <LinkWrapper href={'/admin'}>Admin Page</LinkWrapper>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <LinkWrapper href={'/login'}>Login</LinkWrapper>
            {!isLoggedIn && <LinkWrapper href={'/join'}>Join</LinkWrapper>}
          </>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
