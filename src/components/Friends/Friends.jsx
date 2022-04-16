import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let bestFriends = props.friends
        .map( friend => (<Friend ava={friend.ava} name={friend.name}/>));

    return (
        <div className={s.friendsPage}>
            {bestFriends}
        </div>
    )
}

export default Friends;