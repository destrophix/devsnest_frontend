import React from "react";

const Post = ({ user, content }: any) => {
  console.log(user);

  return (
    <div className="post">
      <h3>{user}</h3>
      <img src={content} alt="content"></img>
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
    </div>
  );
};

export default Post;
