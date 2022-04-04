import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = props.posts
    .map((post) => (<Post message={post.name} like={post.like} key={post.id}/> ));
    
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onChange = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostText(newText);
  }
  
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onChange}/>
        </div>
        <div>
          <button onClick={ onAddPost}>Add button</button>
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
