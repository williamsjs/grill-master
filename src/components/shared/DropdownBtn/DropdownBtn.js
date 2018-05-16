import React from 'react';

const DropdownBtn = ({children, onClick}) => {
  return (
    <a href="javascript:void(0)" onClick={onClick}>{children}</a>
  );
};

export default DropdownBtn;