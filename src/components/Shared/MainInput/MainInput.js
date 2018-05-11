import React from 'react';

const MainInput = ({onChange, value, placeholder}) => {
    const handleChange = e => {
        onChange(e.target.value);
    };

    return (
        <input type="text" 
           className="col-header inline-edit"
           onChange={handleChange} 
           value={value} 
           placeholder={placeholder} 
        />
    );
};

export default MainInput;