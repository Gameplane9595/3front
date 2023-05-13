import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const MainWrapper = styled.main`
  width: 100%;
  h1 {
    color: violet;
  }

  button {
    margin: 10px 0;
  }
  a {
    display: block;
  }  
`;

export const SubHeader = styled.div`
  width: 1000px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: yellow;
  font-size: 20px;
`;

export const MainNav = styled.h2`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bold;
`;

export const MainNavImage = styled(Image)`
  &.trending {
    position: relative;
    top: -1px;
    left: 23px;
  }
  
  &.recentPosts{
    position: relative;
    top: -1px;
    left: 25px;
  }
`;

export const MainNavLink = styled(Link)`
  &.trend {
    cursor: pointer;
  }

  &.recent {
    cursor: pointer;
  }  
`;


