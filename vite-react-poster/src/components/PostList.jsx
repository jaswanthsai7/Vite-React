import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useCallback } from "react";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = async (postData) => {
    await fetch(
      "https://vite-react-poster-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Conntent-Type": "application/json",
        },
      }
    ).catch((error) => {
      console.error(error);
    });
    loadData();
    // setPosts((prevData) => [postData, ...prevData]);
  };

  const loadData = useCallback(() => {
    fetch("https://vite-react-poster-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loaded = [];
        for (const key in data) {
          loaded.push({
            id: key,
            body: data[key].body,
            author: data[key].author,
          });
        }
        setPosts(loaded);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    loadData();
    console.log(1);
  }, [loadData]);

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
