import React from 'react';
import style from './InputFields.module.css'

const InputFields = (props) => {

    return (

        <form className={style.inputForm}>
            <input type={'text'}
                   value={props.name}
                   onChange={props.onChangeName}
                   placeholder={'Input your name'}
                   required={true}
            />

            <input type={'text'}
                   value={props.newCommentText}
                   onChange={props.onChangeText}
                   placeholder={'Input your comment'}
                   required={true}
            />

            <button type={'submit'} onClick={(e) => {
                e.preventDefault();
                props.postComment();
            }}>Add comment</button>

        </form>
    );
};

export default InputFields;
