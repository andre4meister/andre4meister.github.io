import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img className='bigphoto' alt='bigphoto' src="https://www.burgessyachts.com/sitefiles/burgess/medialibrary/destinations/corsica-sardinia/beach_panorama_in_maddalena_islands_sardinia_italy_vb770115.jpg?width=2000&height=900&mode=crop&format=jpeg&quality=80"></img>
      </div>
      <div>
        ava + description
        {/* <img src='https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png'></img> */}
      </div>
      <MyPosts/>
    </div>
  );
};
export default Profile;
