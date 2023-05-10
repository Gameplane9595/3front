import { MainWrapper, MainHeader, MainNav, MainNavImage } from './main-styled'

const Main = () => {

  return (
    <MainWrapper>
      <MainHeader>
        <MainNavImage
        className='trending'
        src="/images/Trending.png"
        alt="트렌딩"
        width="25"
        height="25"
        />
        <MainNav>Trending</MainNav>
        <MainNavImage
        className='subscribe'
        src="/images/Subscribe.png"
        alt="구독"
        width="23"
        height="23"
        />
        <MainNav>SubScribe</MainNav>
        <MainNavImage
        className='recentPosts'
        src="/images/RecentPosts.png"
        alt="최신게시물"
        width="23"
        height="23"
        />
        <MainNav>Recent Posts</MainNav>
      </MainHeader>
    </MainWrapper>
  );
};

export default Main;
