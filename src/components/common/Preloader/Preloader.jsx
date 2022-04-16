import preloader from "../../../assets/images/preloader.svg";
import c from "./Preloader.module.css";
import React from "react";

const Preloader = (props) => {
  return (
    <div className={c.img}>
      {props.isFetching ? <img src={preloader} alt="preloader" /> : null}
    </div>
  );
};

export default Preloader;
