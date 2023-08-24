import React, { useState } from "react";
import classes from "./NewPost.module.css";

export default function NewPost(props) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={props.onAuthurChange}
        />
      </p>
    </form>
  );
}
