import React from 'react';
import style from "./Paginator.module.css";

const Paginator = ({lastPage, currentPage, onPageChanged}) => {

    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
        pages.push(i)
    }

    return (
        <div className={style.paginator}>
            {pages.map(p => {
                return (
                    <span key={p} className={currentPage === p ? style.selectedPage : ''} onClick={() => onPageChanged(p)}>{p}</span>
                )
            })}
        </div>
    );
};

export default Paginator;
