import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/original.jpeg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pages}>
        {pages.map((p) => {
          if (p === 1 || p < 10 || p === pages.length - 1)
            return (
              <span
                className={
                  props.currentPage === p ? s.selectedPage : s.otherPage
                }
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
        })}
      </div>
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
                      props.toggleFollowingProgress(true, u.id);
                      usersAPI.follow(u.id)
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);

                        });
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some( id => id === u.id)}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      usersAPI.unfollow(u.id)
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);
                        });

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
