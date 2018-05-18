import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../js/actions/index';
import { withRouter } from 'react-router-dom';
import './Nav.scss';
import NavItem from './NavItem';
import MenuButton from '../shared/MenuButton/MenuButton';
import SearchBox from '../shared/SearchBox/SearchBox';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import IoBeer from 'react-icons/lib/io/beer';
import IoFireball from 'react-icons/lib/io/fireball';
import MdRestaurant from 'react-icons/lib/md/restaurant';

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
});

const mapStateToProps = state => {
  return {menuOpen: state.menuOpen};
}

class ConnectedNav extends Component {
  constructor() {
    super();
    this.state = { navClass: 'main-nav', dropdownActive: false };
    this.onscroll = this.onscroll.bind(this);
    this.navClass = this.navClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth > 767) {
      this.props.toggleMenu();
    }
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

  toggleDropdown(e) {
    e.stopPropagation();
    this.setState({dropdownActive: !this.state.dropdownActive});
  }

  hideDropdown() {
    this.setState({dropdownActive: false});
  }

  render() {
    const {navClass, dropdownActive} = this.state;

    return (
      <nav className={this.navClass()} onClick={this.hideDropdown} >
        <h1 className="title nav-item">Grill Master <MenuButton handleClick={this.handleClick} /></h1>
        <NavItem link="/whats-hot" icon={<IoFireball />} linkText="What's Hot"/>
        <NavItem link="/beer" icon={<IoBeer />} linkText="Beer"/>
        <NavItem link="/meat" icon={<MdRestaurant />} linkText="Meat"/>

        <li className="nav-item profile">
          <ProfileDropdown toggleDropdown={this.toggleDropdown} dropdownActive={dropdownActive} />
        </li>
      </nav>
    );
  }
}

const Nav = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedNav));

export default Nav;