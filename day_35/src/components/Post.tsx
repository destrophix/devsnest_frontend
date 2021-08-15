import React, { useState } from "react";
import Reaction from "./Reaction";

const Post = ({ user, content }: any) => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  return (
    <div className="post">
      <h3>{user}</h3>
      <img src={content} alt="post"></img>
      <div className="options">
        <div>
          <img className="option" alt="option" src="/img/heart.png"></img>
          <img className="option" alt="option" src="/img/chat.png"></img>
          <img className="option" alt="option" src="/img/send.png"></img>
        </div>
        <div>
          <img className="option" alt="option" src="/img/bookmark.png"></img>
        </div>
      </div>

      {comments.length
        ? comments.map((comment: string, index: number) => (
            <Reaction key={index} comment={comment}></Reaction>
          ))
        : null}

      <div className="comments">
        <img src="/img/smile.png" alt="comment"></img>
        <input
          type="text"
          value={value}
          placeholder="Add a comment..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <div
          onClick={() => {
            setComments([...comments, value]);
            setValue("");
          }}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Post
        </div>
      </div>
    </div>
  );
};

export default Post;
