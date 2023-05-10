import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

	height: auto;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 1rem;
  }
`;

export const TopDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: space-between;

	padding: 3rem 3rem;

	width: 75%
`

export const SearchDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: space-between;
`

export const SearchInput = styled.input`
	padding-left: 0.5rem;

	width: 15rem;
	height: 2rem;

	border: 1px solid black;
  border-radius : 0.5rem;
`

export const SearchBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem 0.5rem 1rem;

  flex-basis: 1rem;
  flex-grow: 1;
  border-radius : 0.5rem;
  background-color: white;
`

export const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
  align-items: center;
  justify-content: space-around;
	margin: 3rem;

	width: 75%;

	border: 1px solid gray;
`

export const ImgWrap = styled.img`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;

	flex-shrink: 0;
	width: 25rem;	
`

export const DescribeWrap = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;

	width: 25rem;
	height: 10rem;
`

export const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	margin: 3rem;
	border: 1px solid black;

	width: 75%
`

export const HeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;
	border-bottom: 1px solid gray;

	width: 90%
`

export const PostThumbnail = styled.img`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;

	// flex-basis: 1rem;
  // flex-grow: 0;

`

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;   
	justify-contents: center;
	margin: 0 1rem 1rem 1rem;
	// border: 1px solid black;

	width: 90%
`