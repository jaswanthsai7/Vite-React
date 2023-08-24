import "./App.css";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  const posts = [
    {
      authorName: "Tony",
      text: "ok",
    },
    {
      authorName: "Tony1",
      text: "ok",
    },
  ];

  return (
    <>
      <h1>Hello World!</h1>
      <PostList posts={posts} />
    </>
  );
}

export default App;
