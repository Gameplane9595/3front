import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react'
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import * as API from '@/utils/api';
import {
	Container,
	TopDiv,
	MainWrap,
	MainDiv,
	SideDiv,
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
import { getUserInfo } from "@/utils/util"

//----- MockData
const postsMockList: any[] = [{
	"id": 2,
	"user": { "nickname": "hi" },
	"category": "카테고리1",
	"title": "제목1",
	"content": "내용1",
	"summary": "요약1",
	"views": "999",	
	"updatedAt": "2023-04-24T03:10:52.668Z",
	"createdAt": "2023-04-24T03:10:52.668Z"
}, {
	"id": 3,
	"user": { "nickname": "hello" },
	"category": "카테고리2",
	"title": "제목2",
	"content": "내용2",
	"summary": "요약2",
	"views": "100",
	"updatedAt": "2023-04-25T03:10:52.668Z",
	"createdAt": "2023-04-25T03:10:52.668Z"
}]

const OtherPost = () => {
	const [profile, setProfile] = useState<string>('설명글')
	const [img, setImage] = useState<string>('/')
	const [postsList, setPostsList] = useState(postsMockList)
	const [category, setCategory] = useState<string>('All')	
	const search: any = useRef('')
	const [nickName, setNickName] = useState<string>('닉네임')

// * 최초 게시글 목록 렌더
	const FirstRender = async () => {
		const getUser: any = await getUserInfo()
		setNickName(getUser.nickname)
		try {
			console.log(nickName)
			const res: any = await API.get('/user',{ 
				params: { nickname: {nickName} } 
				} )
			setPostsList(res.data.data.Posts)
			setCategory(res.data.data.Categories)
		} catch (error) {
			console.error("에러 발생", error)
		}
	}

	useEffect(() => {
		FirstRender()
	}, [])

	// * 검색
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		search.current = e.target.value
	}

	const handleSearch = async() => {
		try {
			const res: any = await API.get('/posts')
			const searchingPosts = await res.data.data.filter(post=>
            post.category.includes(search.current)
          );
          setPostsList(searchingPosts);
		} catch (error) {
			console.error("에러", error)
		}
	}

	// * 카테고리 설정

	const handleCategory = async(e: MouseEvent<HTMLButtonElement>) => {
		// setCategory(e.currentTarget.value)
		try {
			const res: any = await API.get('/user')
          setPostsList(res.data.data);			
		} catch (error) {
			
		}
	}

	const getCategoryPosts = async(id) => {
		try {
		const res: any = await API.get(`/posts/category/${id}`)
		setPostsList(res.data.data)
			console.log(res.data.data)
		} catch (error) {
			console.error("에러", error)
		}
	}

	return (
		<Container>
			<TopDiv>
				<Btn value={'뒤로가기'} onRoute={`/`} alert={null} />
				<SearchDiv>
					<SearchInput placeholder={'검색어를 입력해주세요.'} onChange={handleInput}></SearchInput>
					<SearchBtn onClick={() => handleSearch()}>검색</SearchBtn>
				</SearchDiv>
			</TopDiv>
			<MainWrap>
				<SideDiv>
					<div id="cate-line">Category</div>{
						<button value={"All"} onClick={(e) => handleCategory(e)}>All</button>
					}
					{
						category && category.map((post, idx) => {
							return (
								<button value={post.name} onClick={e => getCategoryPosts(post.id)}>
									{post.name}
								</button>
							)
						})
					}
				</SideDiv>
				<MainDiv>
				{
					postsList && postsList.map((post, idx) => {
						return (
							<ContentDiv key={post.id}>
								<HeaderWrap>
									<PostRouter link={post.id} title={post.title} />
									<div>{post.summary}</div>
								</HeaderWrap>
								<FooterWrap>
									<div>작성일 : {post.createdAt.split('T')[0]}</div>
									<div>좋아요 : {post.liker.length}</div>
									<div>조회수 : {post.views}</div>
								</FooterWrap>
							</ContentDiv>
						)
					}
					)}
					</MainDiv>
				</MainWrap>	
		</Container >
	);
};

export default OtherPost;