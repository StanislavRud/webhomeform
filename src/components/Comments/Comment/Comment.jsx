import React from 'react';

import Paginator from "../Paginator/Paginator";

const Comment = (props) => {


    let date = (value) => new Date(`${value}`).toLocaleDateString()

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
                        <p>Created: {date(item.createdComment)}</p>
                    </li>
                </div>
            ))}


        </div>
    );
};

export default Comment;
