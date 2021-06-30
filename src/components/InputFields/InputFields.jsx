import React from 'react';
import style from './InputFields.module.css'

const InputFields = (props) => {

    return (

        <form className={style.inputForm}>
            <label>Name:
                <input type={'text'}
                       value={props.name}
                       onChange={props.onChangeName}
                       placeholder={'Input your name'}
                       required={true}
                />
            </label>

            <label>Comment:
                <textarea
                    value={props.newCommentText}
                    onChange={props.onChangeText}
                    placeholder={'Input your comment'}
                    required={true}
                />
            </label>


            {props.name && props.newCommentText ? <button type={'submit'} onClick={(e) => {
                e.preventDefault();
                props.postComment();
            }}>Add comment</button> : <button type={'submit'} onClick={(e) => {
                e.preventDefault();
                props.postComment();
            }} disabled={true}>Add comment</button>}


        </form>
    );
};

export default InputFields;
