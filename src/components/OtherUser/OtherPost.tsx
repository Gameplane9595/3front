import { useState, useEffect, useRef, ChangeEvent } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import Pagination from 'react-js-pagination';
import {
	Container,
	TopDiv,
	SearchDiv,
	SearchInput,
	SearchBtn,
	ProfileDiv,
	ImgWrap,
	DescribeWrap,
	ContentDiv,
	HeaderWrap,
	PostThumbnail,
	FooterWrap
} from './OtherPost-styled'
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

const OtherPost = () => {
	const [profile, setProfile] = useState<string>('설명글')
	const [img, setImage] = useState<string>('/')
	const [postsList, setPostsList] = useState(postsMockList)
	const search: any = useRef('')
	const inputRef: any = useRef()

	const [ currPage, setCurrPage ] = useState<number>(1)
  const [ totalPage, setTotalPage ] = useState(null)
  const [ render, setRender ] = useState<boolean>(false);
  const perPage = 10;

  const params = { page:currPage, perPage: perPage}

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

	// * pagination
  const handlePageChange = async (page: number) => {
    if (currPage === page)
      return;
    setCurrPage(page);
    setRender(true);
    
  }

  const rending = async () => {
    // const res = await API.get("/posts", params);
    // setPosts(() => res.data.partialPosts);
  }

  // useEffect(() => {
  //   if (render) {
  //     rending();
  //     setRender(false);
  //   }
  // }, [render, currPage])

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
				<Pagination
          activePage={currPage}
          itemsCountPerPage={perPage}
          totalItemsCount={totalPage * perPage}
          pageRangeDisplayed={totalPage}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handlePageChange}
        />
		</Container >
	);
};

export default OtherPost;