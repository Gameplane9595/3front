import { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type RouteProps = {
	link: string
	title: string
}

export default memo(function PostRouter(props: RouteProps) {

	return <>
		<LinkWrapper href={'/' + `${props.link}`}>{props.title}</LinkWrapper>
	</>
})

const LinkWrapper = styled(Link)`
	&:hover{
    background-color : lightgray;
    color : yellow
	}
`