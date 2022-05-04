import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsData = props.posts
    .map((post) => (<Post message={post.name} like={post.like} key={post.id}/> ));
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div>New posts</div>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  );
};

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
        <div>
          <Field component={TextArea} name={"newPostText"}
            validate={[required, maxLength10]}/>
        </div>
        <div>
          <button>Add button</button>
        </div>
      </form>
  )
}
let AddNewPostForm = reduxForm({form: 'addNewPostForm'})(AddNewPost)
export default MyPosts;
