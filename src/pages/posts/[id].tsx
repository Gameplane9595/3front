import styled from 'styled-components';

const Title = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 0.7em 0;
  font-size: 3rem;
  font-weight: bold;
`;

const Author = styled.div`
  width: 40%;
  margin: 0 auto;
  font-size: 1rem;
`;

const Post = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 3em 0;
`;

const MorePosts = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const MorePost = styled.div`
  padding: 1em;
  font-size: 0.7rem;
  color: gray;
  background-color: #e9ecef;
  border-radius: 10%;
`;

const MorePostTitle = styled.div`
  padding: 0.4em 0;
  font-size: 1rem;
  color: black;
`;

const CommentInputDiv = styled.div`
  width: 40%;
  margin: 1em auto;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
  background-color: #f1f3f5;
  border-radius: 0.5em;
  border: None;
`;

const CommentAuthor = styled.div`
  width: 40%;
  margin: 1em auto;
  font-size: 0.8rem;
`;

const Comment = styled.div`
  width: 40%;
  margin: 1em auto;
  font-size: 1rem;
`;

export default function Posts() {
  return (
    <>
      <Title>Title</Title>
      <Author>Jiwon · <span style={{color: "gray", fontSize: "0.7rem"}}>2023.05.01</span></Author>
      <Post>It is story about...</Post>
      <MorePosts>
        <MorePost>Prev Post <MorePostTitle>Prev title blah blah</MorePostTitle></MorePost>
        <MorePost>Next Post <MorePostTitle>Next title blah blah</MorePostTitle></MorePost>
      </MorePosts>

      <CommentInputDiv>
        <div style={{padding: "1em 0", fontSize: "0.7rem"}}>1 comments</div>
        <CommentInput/>
      </CommentInputDiv>

      <div>
        <CommentAuthor>Author <div style={{color: "gray", padding: "1em 0", fontSize: "0.5rem"}}>2023.05.01</div></CommentAuthor>
        <Comment>This is a comment...</Comment>
      </div>
    </>
  )
}
