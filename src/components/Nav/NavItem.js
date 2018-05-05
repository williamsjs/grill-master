import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({link, linkText, icon}) => {
  return (
    <li className="nav-item">
      <NavLink to={link} activeClassName="link-active">{icon} &nbsp;{linkText}</NavLink>
    </li>
  );
};

export default NavItem;