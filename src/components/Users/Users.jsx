import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/original.jpeg";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map((u) => {
        return (
          <div className={s.user} key={u.id}>
            <span>
              <div className={s.photo}>
                <img
                  src={u.photos.small == null ? userPhoto : u.photos.small}
                  alt={u.name + "photo"}
                />
              </div>
              <div>
                {u.followed === false ? (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div className={s.name}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
              </span>
              <span className={s.location}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
