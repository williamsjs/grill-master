import React from 'react';
import IoEdit from 'react-icons/lib/io/edit';

const InputEdit = ({onClick, onBlur, onChange, name}) => {
    return (
        <div className="input-edit">
            <span className="input-icon"><IoEdit /></span>
            <input type="text" className="inline-edit" onClick={onClick(true)} value={name} onBlur={onBlur(false)} onChange={onChange()} />
        </div>
    );
};

export default InputEdit;