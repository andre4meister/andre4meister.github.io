import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../Redux/profile-reducer';
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let addPost = () => {
    let action = addPostActionCreator()
    props.store.dispatch(action);
  }

  let onChange = (newText) => {
    let action = updateNewPostTextActionCreator(newText);
    props.store.dispatch(action);
  }
  
  let state = props.store.getState();
  
  return ( <MyPosts updateNewPostText={onChange} addPost={addPost} posts={state.profilePage.posts} 
    newPostText={state.profilePage.newPostText} />);
};
export default MyPostsContainer;
