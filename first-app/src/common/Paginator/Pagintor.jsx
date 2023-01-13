import React from "react";
import cls from "../../components/Users/Users.module.css";


const Paginator = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [...Array(pageCount)].map((_, b) => (b += 1));

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            onClick={() => props.onPageChange(p)}
            className={props.currentPage === p && cls.selectedPage}>
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
