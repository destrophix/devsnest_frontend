import React, { useState, useEffect } from "react";
import Post from "./Post";
const Posts = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((body) => setPosts(body));
  }, []);
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((post: any, index: any) => {
          return <Post key={index} user={post.user} content={post.post}></Post>;
        })
      ) : (
        <h1>No posts yet.</h1>
      )}
    </div>
  );
};

export default Posts;
