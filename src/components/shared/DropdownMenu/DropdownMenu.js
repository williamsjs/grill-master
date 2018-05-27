import React from 'react';
import './DropdownMenu.scss';

const DropdownMenu = ({children, active}) => {
  const className = () => {
    return active ? 'dropdown-container' : 'display-none';
  }

  return (
    <div className={className()}>
      <div className="dropdown-body center">{children}</div>
    </div>
  );
};

export default DropdownMenu;