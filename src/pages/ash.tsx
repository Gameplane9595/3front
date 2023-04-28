import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding: 10rem;
`

const LikedButton = styled.div<{liked: boolean}>`
  padding: 0.2em 0.3em;
  background-color: ${props => props.liked ? "black" : "#FD8A8A"};
  color: white;
  font-size: 24px;
`

const randomInteger = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

function sleep(msec: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, msec));
}



const Component = () => {
  const [ liked, setLiked ] = useState(false)

  const handleClick = async () => {
    console.log('handleClick')

    setLiked(!liked)


    try {
      await axios.get('/api/ping')
      await sleep(1500)
    } catch {
      // alert('실패했음!')
      setLiked(liked)
    }
    // const randomNumber = randomInteger(1, 10)

    // const isFailed = randomNumber > 5
    // console.log('isFailed : ', isFailed)
    // await sleep(3000)

    // if (isFailed) {
    //   alert('실패했음!')
    //   setLiked(liked)
    // }
  }

  return (<Container>
    <h1>좋아요 테스트</h1>
    <br />
    <LikedButton liked={liked} onClick={handleClick}>{liked ? '싫어요' : '좋아요'}</LikedButton>
    </Container>)
}

export default Component