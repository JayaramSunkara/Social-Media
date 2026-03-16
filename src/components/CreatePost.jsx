import { Form, redirect } from "react-router-dom";

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  const res = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  const post = await res.json();
  console.log(post);
  
  return redirect("/");
}

const CreatePost = () => {
  return (
    <Form className="create-post" method="POST">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Share your thoughts with everyone"
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
              name="likes"
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
              name="dislikes"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </Form>
  );
};

export default CreatePost;
