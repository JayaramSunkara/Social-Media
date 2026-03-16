import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { PostList as PostListData } from "../store/post-list-store.jsx";
import Post from "./Post.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const handleGetPostsClick = () => {
    setFetching(true);
  };

  useEffect(() => {
    if (!fetching) return;

    const fetchPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts");

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        addInitialPosts(data.posts);
      } catch (err) {
        console.error("Failed to fetch posts:", err.message);
      } finally {
        setFetching(false);
      }
    };

    fetchPosts();
  }, [fetching]);

  // console.log(postList);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
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
