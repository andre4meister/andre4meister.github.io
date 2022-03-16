import React from "react";
import s from '../Friends.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.ava} className={s.ava}></img>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;