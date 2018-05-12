import React from 'react';
import './MainInput.scss';

const MainInput = ({onChange, value, placeholder}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <input type="text" 
        className="inline-edit"
        onChange={handleChange} 
        value={value} 
        placeholder={placeholder} 
        required
    />
  );
};

export default MainInput;