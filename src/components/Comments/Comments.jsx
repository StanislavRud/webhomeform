import React from 'react';
import style from './Comments.module.css'
import Comment from "./Comment/Comment";

const Comments = ({comments, currentPage, onPageChanged, lastPage, hideButton, date, getComments, moreComments,upBtn}) => {

    return (
        <div>
            <ul className={style.block_comments}>

                <Comment comments={comments}
                         currentPage={currentPage}
                         onPageChanged={onPageChanged}
                         lastPage={lastPage}
                         hideButton={hideButton}
                         date={date}

                />

            </ul>
            <div className={style.buttonsBlock}>
                {!hideButton ? <button onClick={getComments}>Show comments</button> : ''}
                {currentPage !== lastPage ?
                    <button className={!hideButton ? style.disable : style.active}
                            onClick={moreComments}>Show more comments</button> : ''}
                {comments.length >= 6 ? <button className={upBtn ? style.topBtn : ''} onClick={() => window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })}>Up</button> : ''}

            </div>


        </div>
    );
};

export default Comments;
