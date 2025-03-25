import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";
import PostList from "./components/PostList.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header />
          {selectedTab === "Home" ? (
            <PostList/>
          ) : (
            <CreatePost />
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
