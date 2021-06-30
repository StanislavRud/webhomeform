import React from 'react';
import style from './Comment.module.css'
import Comment from "./Comment/Comment";

const Comments = (props) => {

    return (
        <div>
            <ul className={style.block_comments}>

                <Comment comments={props.comments}
                         currentPage={props.currentPage}
                         totalPages={props.totalPages}
                         onPageChanged={props.onPageChanged}
                         createdComment={props.createdComment}
                />

            </ul>
            <div className={style.buttonsBlock}>
                {!props.hideButton ? <button onClick={props.getComments}>Show comments</button> : ''}

                {props.hideButton ? <button onClick={props.moreComments} disabled={props.disableButton}>Show more comments</button> : ''}
            </div>


        </div>
    );
};

export default Comments;
