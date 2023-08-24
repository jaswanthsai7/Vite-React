import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevData) => [postData, ...prevData]);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal>
        <NewPost onCancel={onStopPosting} addPostHandler={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {isPosting && modalContent}

      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((data, i) => (
            <Post key={i} author={data.author} body={data.body} />
          ))}
        </ul>
      ) : (
        <div>
          <h2>There are no posts yet!</h2> <h2>Start adding some</h2>
        </div>
      )}
    </>
  );
}
