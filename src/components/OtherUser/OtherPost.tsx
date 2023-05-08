import { useState, useEffect, useRef, ChangeEvent } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import styled from 'styled-components'
import Btn from '../common/my_page/button'
import PostRouter from '../common/my_page/post_router'

//----- MockData
const postsMockList: any[] = [{
	"id": 2,
	"user": { "nickname": "hi" },
	"category": "카테고리1",
	"title": "제목1",
	"content": "내용1",
	"summary": "요약1",
	"updatedAt": "2023-04-24T03:10:52.668Z",
	"createdAt": "2023-04-24T03:10:52.668Z"
}, {
	"id": 3,
	"user": { "nickname": "hello" },
	"category": "카테고리2",
	"title": "제목2",
	"content": "내용2",
	"summary": "요약2",
	"updatedAt": "2023-04-25T03:10:52.668Z",
	"createdAt": "2023-04-25T03:10:52.668Z"
}]

const UserPost = () => {
	const [profile, setProfile] = useState<string>('설명글')
	const [img, setImage] = useState<string>('/')
	const [postsList, setPostsList] = useState(postsMockList)
	const search: any = useRef('')
	const inputRef: any = useRef()

	// * 최초 게시글 목록 렌더
	const FirstRender = async () => {
		// const result = await axios.get(url)
	}

	useEffect(() => {
		// return FirstRender()
		inputRef.current.focus()
	}, [postsList])

	// * 검색
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		search.current = e.target.value
	}

	const handleSearch = () => {
		try {
			// const res = await axios.get(url, search.current)
			// setPostList(res.data)
			console.log(search.current)
		} catch (error) {
			console.error("에러", error)
		}
	}

	return (
		<Container>
			<TopDiv>
				<Btn value={'뒤로가기'} onRoute={`/`} alert={null} />
				<SearchDiv>
					<SearchInput ref={inputRef} placeholder={'검색어를 입력해주세요.'} onChange={handleInput}></SearchInput>
					<SearchBtn onClick={() => handleSearch()}>검색</SearchBtn>
				</SearchDiv>
			</TopDiv>
			<ProfileDiv>
				<ImgWrap src={img} alt={`프로필 사진`}></ImgWrap>
				<DescribeWrap>{profile}</DescribeWrap>
			</ProfileDiv>

			{
				postsList.map((post, idx) => {
					return (
						<ContentDiv key={post.id}>
							<HeaderWrap>
								<PostThumbnail alt={'썸네일'}></PostThumbnail>
								<PostRouter link={post.id} title={post.title} />
								<div>{post.summary}</div>
							</HeaderWrap>
							<FooterWrap>
								<div>{post.category}</div>
								<div>{post.createdAt}</div>
							</FooterWrap>
						</ContentDiv>
					)
				}
				)}
		</Container >
	);
};

export default UserPost;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;


	height: auto;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;   
    margin: 1rem;
    border: 1px solid blue;
  }
`;

const TopDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: space-between;

	padding: 0 3rem;

	width: 75%
`

const SearchDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;   
	justify-content: space-between;
`

const SearchInput = styled.input`
	padding-left: 0.5rem;

	width: 15rem;
	height: 2rem;

	border: 1px solid black;
  border-radius : 0.5rem;
`

const SearchBtn = styled.button`
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

const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
  align-items: center;
  justify-content: space-around;

	width: 75%;
`

const ImgWrap = styled.img`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;

	flex-shrink: 0;
	width: 25rem;	
`

const DescribeWrap = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;

	width: 25rem;
	height: 10rem;
`

const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	margin: 3rem;
	border: 1px solid black;

	width: 75%
`

const HeaderWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;
	border: 1px solid black;

	width: 90%
`

const PostThumbnail = styled.img`
	display: flex;
	flex-direction: column;
	align-items: center;   
	justify-contents: center;

	// flex-basis: 1rem;
  // flex-grow: 0;

`

const FooterWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-between;   
	justify-contents: center;
	margin: 0 1rem 1rem 1rem;
	border: 1px solid black;

	width: 90%
`