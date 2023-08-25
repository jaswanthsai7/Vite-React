import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  function hideModalHandler() {
    setIsVisible(false);
  }

  function showModal() {
    setIsVisible(true);
  }

  function openForm() {}
  return (
    <>
      <Header onCreatePost={showModal} />
      <main>
        <PostList isPosting={isVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
