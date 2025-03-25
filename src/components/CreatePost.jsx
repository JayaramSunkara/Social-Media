import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const reactions = { likes, dislikes };
    const tags = tagsElement.current.value.split(" ");

    console.log(userId, postTitle, postBody, reactions, tags, views);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    viewsElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags, views);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your userID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter title of your post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Share your thoughts with everyone"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Number of Views
        </label>
        <input
          type="text"
          ref={viewsElement}
          className="form-control"
          id="views"
          placeholder="Number of people viewed this post"
        />
      </div>
      <div className="mb-3">
        <div className="d-flex gap-3">
          <div className="flex-grow-1">
            <label htmlFor="likes" className="form-label">
              Likes
            </label>
            <input
              type="text"
              ref={likesElement}
              className="form-control"
              id="likes"
              placeholder="Likes"
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="dislikes" className="form-label">
              Dislikes
            </label>
            <input
              type="text"
              ref={dislikesElement}
              className="form-control"
              id="dislikes"
              placeholder="Dislikes"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};

export default CreatePost;
