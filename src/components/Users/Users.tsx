// @ts-ignore
import React from "react";
// @ts-ignore
import s from "./Users.module.css";
// @ts-ignore
import userPhoto from "../../assets/images/original.jpeg";
import { NavLink } from "react-router-dom";
// @ts-ignore
import Paginator from "./Paginator.tsx";
import {UserType} from "../../types/types";

type  UsersPropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number)=> void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: UserType[]
    followingInProgress: any[]
}
const Users: React.FC<UsersPropsType> = (props) => {
  
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
