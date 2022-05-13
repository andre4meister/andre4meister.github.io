import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/original.jpeg";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

const Users = (props) => {
  
  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} 
        totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
      
      {props.users.map((u) => {
        return (
          <div className={s.user} key={u.id}>
            <span>
              <div className={s.photo}>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small == null ? userPhoto : u.photos.small}
                    alt={u.name + "photo"}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed === false ? (
                  <button
                    disabled={props.followingInProgress.some( id => id === u.id)}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some( id => id === u.id)}
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
