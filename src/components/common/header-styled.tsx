import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderWrapper = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px 20px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const LinkWrapper = styled(Link)`
  margin: 0 0 0 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

export const Search = styled(Image)`
  cursor: pointer;
  position: relative;
  bottom: 5px;
  right: 5px;
`

export const Title = styled.div`
  font-family: 'Roboto Flex', sans-serif;
  font-weight: bold;
  font-size: 60px;
  position: relative;
  top: 18px;
  left: 37%;
  width: 330px;
  background-color: yellow;
`

export const SearchUI = styled.div`
  .search{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .show{
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  .hide{
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -20%);
  }
`

export const SearchInput = styled.input`
  font-family: 'Roboto Flex', sans-serif;
  font-size: 15px;
  width: 150px;
  border: 0;
  border-bottom: 1px solid;
`

export const SearchButton = styled.button`
  font-family: 'Roboto Flex', sans-serif;
  font-size: 15px;
  width: 50px;
  height: 30px;
  position: relative;
  bottom: 3px;
  left: 2px;
`

export const Home = styled(Link)`
  cursor: pointer;
`