import React from 'react';
import style from "./Paginator.module.css";

const Paginator = (props) => {

    let pages = [];
    for (let i = 1; i <= props.lastPage; i++) {
        pages.push(i)
    }

    return (
        <div className={style.paginator}>
            {pages.map(p => {
                return (
                    <span key={p} className={props.currentPage === p && style.selectedPage} onClick={() => props.onPageChanged(p)}>{p + ' '}</span>
                )
            })}
        </div>
    );
};

export default Paginator;
