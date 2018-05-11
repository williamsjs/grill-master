import React from 'react';
import IoEdit from 'react-icons/lib/io/edit';

const InputEdit = ({onClick, onBlur, onChange, text}) => {
  return (
    <div className="input-edit">
      <span className="input-icon"><IoEdit /></span>
      <input type="text" className="inline-edit" value={text} onBlur={onBlur()} onChange={onChange()} />
    </div>
  );
};

export default InputEdit;