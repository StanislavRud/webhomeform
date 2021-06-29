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
                />

            </ul>

            <button onClick={props.getComments}>Get comments</button>
            <button onClick={props.moreComments}>Get more comments</button>

        </div>
    );
};

export default Comments;
