import React from 'react';
import './DropdownMenu.scss';

const DropdownMenu = ({children, active, style}) => {
  const className = () => {
    return active ? 'position-absolute dropdown-container' : 'position-absolute display-none';
  }

  return (
    <div className={className()} style={style} >
      <div className="arrow-up"></div>
      {children}
    </div>
  );
};

export default DropdownMenu;