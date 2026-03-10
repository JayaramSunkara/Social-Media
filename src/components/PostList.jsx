import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import Post from "./Post.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      addInitialPosts(data.posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err.message);
    }
  };

  // console.log(postList);

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      <center>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </center>
    </>
  );
};

export default PostList;
