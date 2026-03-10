import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import PostList from "./components/PostList.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { PostListProvider } from "./store/post-list-store.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
