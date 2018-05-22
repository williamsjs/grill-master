import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../js/ducks/menuToggle';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleMenu())
});

const ConnectNavItem = ({link, linkText, icon, handleClick, display}) => {
  const checkWindowWidth = () => {
    if (window.innerWidth < 767) {
      handleClick();
    }
  }

  const displayItem = () => {
    return display ? "nav-item" : "display-none";
  }

  return (
    <li className={displayItem()}>
      <NavLink exact to={link} activeClassName="link-active" onClick={checkWindowWidth}>{icon} &nbsp;{linkText}</NavLink>
    </li>
  );
};

const NavItem = connect(null, mapDispatchToProps)(ConnectNavItem);

export default NavItem;