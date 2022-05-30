import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo isOwner={props.isOwner} 
                  profile={props.profile} 
                  status={props.status} 
                  updateStatus={props.updateStatus} 
                  savePhoto={props.savePhoto}
                  saveProfile={props.saveProfile}/>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
