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
      <h1>Hello World!</h1>
      <Header onCreatePost={showModal} />
      <PostList isPosting={isVisible} onStopPosting={hideModalHandler} />
    </>
  );
}

export default App;
