import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../Redux/profile-reducer'


const MyPosts = (props) => {
  let postsData = props.posts
    .map((post) => (<Post message={post.name} like={post.like} /> ));
    
  let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostActionCreator()
    props.dispatch(action);
  }

  let onChange = () => {
    let newText = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(newText);
    props.dispatch(action);
  }
  
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onChange}/>
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
