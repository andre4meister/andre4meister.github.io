import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, name: "Hi,how are you", like: 1 },
    { id: 2, name: "it`s me first post", like: 22 },
    { id: 3, name: "Marik", like: 10 },
    { id: 4, name: "Vova", like: 44 },
    { id: 5, name: "Roman", like: 14 },
    { id: 6, name: "Bohdan", like: 40 },
  ];

  let postsData = posts
  .map((post) => (<Post message={post.name} like={post.like} /> ));

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add button</button>
        </div>
      </div>
      <div>New posts</div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  );
};
export default MyPosts;
