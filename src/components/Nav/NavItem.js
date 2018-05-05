import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../js/actions/index';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleMenu())
});

const ConnectNavItem = ({link, linkText, icon, handleClick}) => {
  return (
    <li className="nav-item">
      <NavLink to={link} activeClassName="link-active" onClick={handleClick}>{icon} &nbsp;{linkText}</NavLink>
    </li>
  );
};

const NavItem = connect(null, mapDispatchToProps)(ConnectNavItem);

export default NavItem;