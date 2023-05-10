import { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
// import { useRouter } from 'next/router';
import { Container, NameDiv} from './MyUser-styled'
// import { testState } from '@/store/test';
import Btn from '../common/my_page/button'

const MyUser = () => {
  // const [test, setTest] = useRecoilState(testState);
  const [user, setUser] = useState<string>('XYZ')

  useEffect(() => {
    // const res = axios.get
    // setUser(res.data)

  }, [])

  return (
    <Container>
      <NameDiv>
        안녕하세요. <div id='name'>{`${user}`} </div> 님!
      </NameDiv>

      <Btn value={'내 게시글 보기'} onRoute={`/my-post`} alert={null} />
      <Btn value={'회원정보 수정'} onRoute={`/modify-info`} alert={null} />
      <Btn value={'회원 탈퇴'} onRoute={`/`} alert={'정상적으로 탈퇴되었습니다.'} />
    </Container >
  );
};

export default MyUser;
