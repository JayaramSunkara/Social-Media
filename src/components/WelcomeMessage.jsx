import { TfiFaceSad } from "react-icons/tfi";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>
        There are NO posts!!{" "}
        <TfiFaceSad />
      </h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts from DummyJSON
      </button>
    </center>
  );
};

export default WelcomeMessage;
