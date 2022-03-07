import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add button</button>
      </div>
      <div>New posts</div>
      <div className={s.posts}>
        <Post message='Hi,how are you' like='1'/>
        <Post message='it`s me first post' like='20'/>
      </div>
    </div>
  );
};
export default MyPosts;
