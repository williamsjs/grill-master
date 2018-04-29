import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({link, linkText, icon}) => {
  return (
    <li className="nav-item">
      <Link to={link}>{icon} &nbsp;{linkText}</Link>
    </li>
  );
};

export default NavItem;