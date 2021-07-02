import React from 'react';
import style from './../Comments.module.css';
import Paginator from "../Paginator/Paginator";

const Comment = ({hideButton, currentPage, lastPage, onPageChanged, comments, date}) => {

    return (

        <div>
            <h1 className={!hideButton ? style.disable : style.active}>Comments</h1>

            <Paginator currentPage={currentPage}
                       lastPage={lastPage}
                       onPageChanged={onPageChanged}
            />
            <ul>
                {comments.map(item => (

                    <li key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Comment: {item.text}</p>
                        <p>Created: {date(item.created_at)}</p>
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default Comment;
