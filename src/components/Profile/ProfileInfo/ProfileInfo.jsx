import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
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
      </div>
      <div className={s.descriptionBlock}>
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
    </div>
  );
};
export default ProfileInfo;
