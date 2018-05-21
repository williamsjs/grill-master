import React from 'react';
import { connect } from 'react-redux';
import './MenuButton.scss';

const mapStateToProps = state => ({
  menuOpen: state.menuToggle
});

const ConnectedMenuButton = ({menuOpen, handleClick}) => {
  return (
    <div className={menuOpen ? 'bar-container open' : 'bar-container'} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

const MenuButton = connect(mapStateToProps)(ConnectedMenuButton);

export default MenuButton;