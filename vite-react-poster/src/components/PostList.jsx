import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList({ isPosting,onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthurChange={authorChangeHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {isPosting && modalContent}

      <ul className={classes.posts}>
        <Post author={enteredName} text={enteredBody}></Post>
        {/*     
    {props.posts.map((post,i) => {
      <p>scscsc</p>
      // <p>{post.text}</p>
    })} */}
      </ul>
    </>
  );
}
