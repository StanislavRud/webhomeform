import React from 'react';
import style from './InputFields.module.css'

const InputFields = ({name, onChangeName, newCommentText, onChangeText, postComment}) => {

    return (

        <form className={style.inputForm}>
            <label>Name:
                <input type={'text'}
                       value={name}
                       onChange={onChangeName}
                       placeholder={'Input your name'}
                       required={true}
                />
            </label>

            <label>Comment:
                <textarea
                    value={newCommentText}
                    onChange={onChangeText}
                    placeholder={'Input your comment'}
                    required={true}
                />
            </label>

            {name && newCommentText ? <button type={'submit'} onClick={(e) => {
                e.preventDefault();
                postComment();
            }}>Add comment</button> : <button type={'submit'} onClick={(e) => {
                e.preventDefault();
                postComment();
            }} disabled={true}>Add comment</button>}

        </form>
    );
};

export default InputFields;
