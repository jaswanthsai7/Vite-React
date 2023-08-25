import React from "react";
import classes from "./Post.module.css";
const names = ["Tony", "Strange"];

export default function Post({author,body,deletePost,id}) {
  const chooseName = Math.random() > 0.5 ? names[0] : names[1];
 const deleteCurrPost=()=>{
  deletePost(id);
 }
//  console.log(...props.post)
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
      <br/>
      <button className={classes.button} onClick={deleteCurrPost}>Delete</button>
    </li>
  );
}
