import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

export default function PostList(props) {
  
  console.log(props.posts)
    return (
   <>
   <NewPost/>
    <ul className={classes.post}>
    
    {props.posts.map((post,i) => {
      <p>scscsc</p>
      // <p>{post.text}</p>
    })}
  </ul>
   </>
  );
}
