const WelcomeMessage = ({onGetPostsClick}) => {
return (
  <center className="welcome-message">
    <h1>There are NO posts!!</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>
      Get Posts from DummyJSON
    </button>
  </center>
);
}

export default WelcomeMessage