import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src='https://www.burgessyachts.com/sitefiles/burgess/medialibrary/destinations/corsica-sardinia/beach_panorama_in_maddalena_islands_sardinia_italy_vb770115.jpg?width=2000&height=900&mode=crop&format=jpeg&quality=80'></img>
        </div>
        <div>
          ava + description
          {/* <img src='https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png'></img> */}
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div className={s.posts}>
            <div className={s.item}> post 1</div>
            <div className={s.item}> post 2</div>
          </div>
        </div>

      </div>
  );
};
export default Profile;