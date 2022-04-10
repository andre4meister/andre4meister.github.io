import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/original.jpeg";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for( let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }


  return (
    <div>
      <div className={s.pages}>
        {pages.map( p => {
          if (p < 10 || p === pages.length - 1)
          return <span className={props.currentPage === p ? s.selectedPage : s.otherPage} onClick={ e => {props.onPageChanged(p)} }>{p}</span>
        })}
      </div>
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
}

export default Users;
