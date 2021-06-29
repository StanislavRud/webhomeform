import React from 'react';

import Paginator from "../Paginator/Paginator";

const Comment = (props) => {
    return (
        <div>
            <h1>Comments</h1>

            <Paginator currentPage={props.currentPage}
                       totalPages={props.totalPages}
                       onPageChanged={props.onPageChanged}
            />

            {props.comments.map(item => (<div>

                    <li key={item.id}>
                        <h3>Name: {item.name}</h3>
                        <p>Text: {item.text}</p>
                    </li>
                </div>
            ))}


        </div>
    );
};

export default Comment;