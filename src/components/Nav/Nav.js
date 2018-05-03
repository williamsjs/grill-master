import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../js/actions/index';
import NavItem from './NavItem';
import MenuButton from '../shared/MenuButton/MenuButton';
import IoBeer from 'react-icons/lib/io/beer';
import IoIosContact from 'react-icons/lib/io/ios-contact';
import IoFireball from 'react-icons/lib/io/fireball';
import IoIosSearchStrong from 'react-icons/lib/io/ios-search-strong';
import MdRestaurant from 'react-icons/lib/md/restaurant';
import './Nav.scss';

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleMenu())
});

const mapStateToProps = state => {
  return {menuOpen: state.menuOpen};
}

class ConnectedNav extends Component {
  constructor() {
    super();
    this.state = { navClass: 'main-nav' };
    this.onscroll = this.onscroll.bind(this);
    this.navClass = this.navClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onscroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onscroll)
  }

  onscroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const className = top < 70 ? 'main-nav' : 'main-nav scrolled';
    this.setState({navClass: className});
  }

  navClass() {
    return this.props.menuOpen ? this.state.navClass : this.state.navClass + ' closed';
  }

  handleClick() {
    this.props.toggleMenu();
  }

  render() {
    const {navClass} = this.state;

    return (
      <nav className={this.navClass()}>
        <h1 className="title nav-item">Grill Master <MenuButton handleClick={this.handleClick} /></h1>
        <NavItem link="/whats-hot" icon={<IoFireball />} linkText="What's Hot" />
        <NavItem link="/beer" icon={<IoBeer />} linkText="Beer" />
        <NavItem link="/meat" icon={<MdRestaurant />} linkText="Meat" />
        <form className="nav-item search-item">
          <input type="search" placeholder="search"/>
          <button type="submit"><IoIosSearchStrong /></button>
        </form>
        <li className="nav-item profile">
          <a href="#"><IoIosContact />&nbsp;
            <span className="profile-text">My Profile</span>
          </a>
        </li>
      </nav>
    );
  }
}

const Nav = connect(mapStateToProps, mapDispatchToProps)(ConnectedNav);

export default Nav;