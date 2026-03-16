import { TfiFaceSad } from "react-icons/tfi";

const WelcomeMessage = () => {
  return (
    <center className="welcome-message">
      <h1>
        There are NO posts!! <TfiFaceSad />
      </h1>
    </center>
  );
};

export default WelcomeMessage;
