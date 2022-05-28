import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMailPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const  onsubmit = (formData) => {
    props.saveProfile(formData)
    .then( () => {
      setEditMode(false);
    })
  }
  return (
    <div className={s.profile}>
      <div>
        <img
          className={s.bigphoto}
          alt="bigphoto"
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : "https://www.burgessyachts.com/sitefiles/burgess/medialibrary/destinations/corsica-sardinia/beach_panorama_in_maddalena_islands_sardinia_italy_vb770115.jpg?width=2000&height=900&mode=crop&format=jpeg&quality=80"
          }
        ></img>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        {props.isOwner ? <input type={'file'} onChange={onMailPhotoSelected} /> : null}
      </div>
      {editMode ? 
        <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit= {onsubmit}/> : 
        <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=> {setEditMode(true)}}/>}
    </div>
  );
};
export default ProfileInfo;


const ProfileData = (props) => {
  return <div className={s.descriptionBlock}>
    {props.isOwner && <div><button onClick={props.goToEditMode}> edit</button></div>}
  <div className={s.smallAva}>
    <img
      src={
        props.profile.photos.small
          ? props.profile.photos.small
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnD_TgRXHqfB2NP_huv4Wqwb2E7l8XzV0HrWRByrFFJ4KZ4v-6FRAZUeLV_zX9zp0gptA&usqp=CAU"
      }
      alt={"user" + props.profile.id}
    />
  </div>
  <div className={s.describe}>
    <div className={s.description}>
      <div className={s.name}>{props.profile.fullName}</div>
      <div className={s.aboutMe}>{props.profile.aboutMe}</div>
      {props.profile.lookingForAJobDescription}
    </div>
    <div className={s.contacts}>
      <div>My contacts:</div>
      <div>{props.profile.contacts.facebook}</div>
      <div>{props.profile.contacts.github}</div>
      <div>{props.profile.contacts.vk}</div>
    </div>
  </div>
</div>
}