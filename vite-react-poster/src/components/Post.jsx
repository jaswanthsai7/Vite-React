import React from "react";
import classes from "./Post.module.css";
const names = ["Tony", "Strange"];

export default function Post(props) {
  const chooseName = Math.random() > 0.5 ? names[0] : names[1];
 
 console.log(...props.post)
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.post.authorName}</p>
      <p className={classes.text}>{props.post.text}</p>
    </li>
  );
}
