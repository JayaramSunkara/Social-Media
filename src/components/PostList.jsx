import { useLoaderData } from "react-router-dom";
import Post from "./Post.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";

export async function postLoader() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  // addInitialPosts(data.posts);
  return data.posts;
}

const PostList = () => {
  const postList = useLoaderData();
  // console.log(postList);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      <center>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </center>
    </>
  );
};

export default PostList;
