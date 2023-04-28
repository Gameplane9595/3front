import { useState, useEffect, memo, ChangeEvent } from 'react'
import { useRecoilState } from 'recoil';
import { searchValue } from '@/store/searchValue';
import styled from 'styled-components'

import PostRouter from '../hooks/post_router'
import Search from '../hooks/search'


// 훅이 아니라 컴포넌트인데 hooks 폴더 안에 있는게 어색합니다!
export default memo(function Search() {
	const [searchVal, setSearchVal] = useRecoilState(searchValue);


	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchVal(e.target.value)
	}

	useEffect(() => {
		const debounce = setTimeout(() => {
			console.log(searchVal)
		}, 500)
		return () => clearTimeout(debounce)
	}, [searchVal])

	return (
		<>
			<SearchDiv>
				<SearchInput value={searchVal} placeholder={'검색어를 입력해주세요.'} onChange={handleInput}></SearchInput>
			</SearchDiv>
		</>
	)
})

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