import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList(props) {
  console.log(props.posts);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");
  
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  return (
    <>
     <Modal>
     <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthurChange={authorChangeHandler}
      />
     </Modal>
      <ul className={classes.posts}>
        <Post authorName={enteredName} text={enteredBody}></Post>
        {/*     
    {props.posts.map((post,i) => {
      <p>scscsc</p>
      // <p>{post.text}</p>
    })} */}
      </ul>
    </>
  );
}
