import { connect } from "react-redux";
import {
  updateNewPostText,
  addPost,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);
export default MyPostsContainer;

// const MyPostsContaine = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           let action = addPostActionCreator();
//           store.dispatch(action);
//         };

//         let onChange = (newText) => {
//           let action = updateNewPostTextActionCreator(newText);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };