import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsData = props.posts
    .map((post) => (<Post message={post.name} like={post.like} /> ));


  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost}>Add button</button>
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
