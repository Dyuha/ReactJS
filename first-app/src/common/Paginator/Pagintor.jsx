import React, { useState } from "react";
import cls from "../../components/Users/Users.module.css";


const Paginator = ({totalItemsCount, pageSize, onPageChange, currentPage, portionSize=15}) => {
  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [...Array(pageCount)].map((_, b) => (b += 1));

  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cls.paginatorWrapper}>
      <div>
        {portionNumber > 1 && 
          <span>
            <button onClick={() => (setPortionNumber(portionNumber - 1))}>PREV</button> 
            <span onClick={() => {onPageChange(pages[0]);setPortionNumber(1)}} 
                  className={currentPage === pages[0] ? cls.selectedPage : ''} >{pages[0]}...
            </span>
          </span>
        }
      </div>
      {pages.filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
        return (
          <div key={p}>
            <span
              onClick={() => onPageChange(p)}
              className={currentPage === p ? cls.selectedPage : ''}>
              {p}
            </span>
              { p && p < rightPortionPageNumber && p!== pageCount && <span>,</span> }
          </div>
        )})
      }
      <div>
        {portionCount > portionNumber && 
          <span>
            <span onClick={() => {onPageChange(pages[pageCount-1]);setPortionNumber(portionCount)}} 
                  className={currentPage === pages[pageCount-1] ? cls.selectedPage : ''}>...{pages[pageCount-1]}
            </span>
            <button onClick={() => (setPortionNumber(portionNumber + 1))}>NEXT</button>
          </span> 
        }
      </div>
    </div>
  );
};

export default Paginator;
