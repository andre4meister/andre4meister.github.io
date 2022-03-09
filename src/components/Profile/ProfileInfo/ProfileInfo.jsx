import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profile}>
      <div>
        <img className={s.bigphoto} alt='bigphoto' src="https://www.burgessyachts.com/sitefiles/burgess/medialibrary/destinations/corsica-sardinia/beach_panorama_in_maddalena_islands_sardinia_italy_vb770115.jpg?width=2000&height=900&mode=crop&format=jpeg&quality=80"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};
export default ProfileInfo;
