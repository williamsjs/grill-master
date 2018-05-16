import React from 'react';
import './DropdownMenu.scss';

const DropdownMenu = ({children, active, style}) => {
  const className = () => {
    return active ? 'position-absolute' : 'position-absolute display-none';
  }

  return (
    <div className={className()} style={style} >
      {children}
    </div>
  );
};

export default DropdownMenu;