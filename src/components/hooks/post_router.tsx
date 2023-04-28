import { useState, useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type RouteProps = {
	link: string
	title: string
}

// 훅이 아니라 컴포넌트인데 hooks 폴더 안에 있는게 어색합니다!
export default memo(function PostRouter(props: RouteProps) {

	return <>
		{/* a 태그를 사용하는게 아니라 next/link에서 Link 컴포넌트 받아서 사용해야합니다!
		https://nextjs.org/docs/api-reference/next/link */}
		<a href={'/' + `${props.link}`}>{props.title}</a>
	</>
})