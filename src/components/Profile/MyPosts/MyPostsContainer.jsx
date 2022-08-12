import { connect } from "react-redux";
import {
  addPost, deletePost
} from "../../../Redux/profile-reducer.ts";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts);
export default MyPostsContainer;