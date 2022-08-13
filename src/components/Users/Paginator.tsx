import React from "react";
import s from "./Users.module.css";


type PaginatorPropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number)=> void

}
const Paginator: React.FC<PaginatorPropsType> = (props) => {
  let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
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
  )
}
      export default Paginator;
