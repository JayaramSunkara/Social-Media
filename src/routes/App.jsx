import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { PostListProvider } from "../store/post-list-store.jsx";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet/>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
